/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { render, cleanup } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
// import thunk from 'redux-thunk';
// import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { setupListeners } from '@reduxjs/toolkit/query'

/* export function reduxStorRender(
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: { spotyfy: SpotyfyReducer },
      middleware: (gdm) =>
        gdm({ serializableCheck: false, immutableCheck: false }).concat(thunk),
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  const utils = {
    dispatch(action) {
      return store.dispatch(action);
    },
    getDispatchedActions() {
      return actions;
    },
    getState() {
      return store.getState();
    },
  };
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <AllProviders>{children}</AllProviders>
      </Provider>
    );
  }
  return { ...render(ui, { wrapper: Wrapper, ...renderOptions }), ...utils };
}
 */
function AllProviders({ children }) {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={children} />
      </Routes>
    </BrowserRouter>
  )
}
/* Обертка, предоставляющая store дочерним компонентам
 */
export function withStoreProvider(store) {
  return function Wrapper({ children }) {
    // console.log(children);
    return (
      <Provider store={store}>
        <AllProviders>{children}</AllProviders>
      </Provider>
    )
  }
}

/**
 * Функция для мока api
 * @link https://github.com/reduxjs/redux-toolkit/blob/64a30d83384d77bcbc59231fa32aa2f1acd67020/packages/toolkit/src/query/tests/helpers.tsx#L170
 */
export const setupApiStore = (api, extraReducers, withoutListeners) => {
  const getStore = () =>
    configureStore({
      reducer: { [api.reducerPath]: api.reducer, ...extraReducers },
      middleware: (gdm) =>
        gdm({ serializableCheck: false, immutableCheck: false }).concat(
          api.middleware
        ),
    })

  const initialStore = getStore()
  const refObj = {
    api,
    store: initialStore,
    wrapper: withStoreProvider(initialStore),
  }

  let cleanupListeners

  beforeEach(() => {
    const store = getStore()
    refObj.store = store
    refObj.wrapper = withStoreProvider(store)

    if (!withoutListeners) {
      cleanupListeners = setupListeners(store.dispatch)
    }
  })

  afterEach(() => {
    cleanup()

    if (!withoutListeners) {
      cleanupListeners()
    }

    refObj.store.dispatch(api.util.resetApiState())
  })

  return refObj
}
export const setupAllProvidersStore = (
  api,
  extraReducers,
  withoutListeners
) => {
  const getStore = () =>
    configureStore({
      reducer: {
        [api.reducerPath]: api.reducer,
        ...extraReducers,
      },
      middleware: (gdm) =>
        gdm({ serializableCheck: false, immutableCheck: false }).concat(
          api.middleware
        ),
    })

  const initialStore = getStore()
  const refObj = {
    api,
    store: initialStore,
    wrapper: withStoreProvider(initialStore),
  }

  let cleanupListeners

  beforeEach(() => {
    const store = getStore()
    refObj.store = store
    refObj.wrapper = withStoreProvider(store)

    if (!withoutListeners) {
      cleanupListeners = setupListeners(store.dispatch)
    }
  })

  afterEach(() => {
    cleanup()

    if (!withoutListeners) {
      cleanupListeners()
    }

    refObj.store.dispatch(api.util.resetApiState())
  })

  return refObj
}
export const customRender = (ui, options) =>
  render(ui, { wrapper: AllProviders, ...options })
