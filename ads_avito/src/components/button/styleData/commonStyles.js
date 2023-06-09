import styled from 'styled-components'

export const StyledButton = styled('button')`

  width: ${(props) => (props.reg.width ? props.reg.width : `100%`)};
  height: ${(props) => (props.reg.height ? props.reg.height : `100%`)};
  border-radius: 6px;

  border: ${(props) => props.style.border};
  background: ${(props) => props.style.color.bg.regular};

  &:hover {
    background: ${(props) => props.style.color.bg.hover};
    transform: scale(1.04);
    transform: ${(props) => `scale(${props.style.activity ? 1.04 : 1})`};
  }

  &:disabled {
    background: #d9d9d9;
  }

  transition: all 0.5s ease-out;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-size: ${(props) => `${String(props.style.size.font)}px`};
  line-height: 150%;
  font-weight: 400;

  color: ${(props) => props.style.color.text};

  overflow: hidden;
  cursor: ${(props) => (props.style.activity ? `pointer` : `default`)};
  @media screen and (max-width: 580px) {
    width: ${(props) => (props.mob.width ? props.mob.width : `100%`)};
    height: ${(props) => (props.mob.height ? props.mob.height : `100%`)};
    font-size: ${(props) => `${String(props.style.size.font - 2)}px`};
  }
  @media screen and (max-width: 768px) {
    width: ${(props) => (props.mob.width ? props.mob.width : `100%`)};
    height: ${(props) => (props.mob.height ? props.mob.height : `100%`)};
    font-size: ${(props) =>
      `${
        props.style.size.font === 18
          ? String(props.style.size.font - 2)
          : String(props.style.size.font)
      }px`};
  }
`
