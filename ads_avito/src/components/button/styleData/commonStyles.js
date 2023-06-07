import styled from 'styled-components'

export const StyledButton = styled('button')`
  /* height: 52px; */
  width: ${(props) => (props.reg.width ? props.reg.width : `100%`)};
  height: ${(props) => (props.reg.height ? props.reg.height : `100%`)};
  //min-height: max-content;
  //min-width: max-content;
  //padding: ${(props) => props.style.size.padding};
  /* box-sizing: border-box; */
  border-radius: 6px;

  /* border: 0px solid transparent; */
  border: ${(props) => (props.style.border ? `1px solid #ffffff` : `none`)};
  background: ${(props) => props.style.color.bg.regular};

  &:hover {
    background: ${(props) => props.style.color.bg.hover};
    transform: scale(1.04);
    transform: ${(props) => `scale(${props.style.activity ? 1.04 : 1})`};
  }

  &:disabled {
    background: #D9D9D9;
  }

  transition: all 0.5s ease-out;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  //font-family: 'StratosSkyeng', sans-serif;
  font-size: ${(props) => `${String(props.style.size.font)}px`};
  line-height: 150%;
  font-weight: 400;

  color: ${(props) => props.style.color.text};

  overflow: hidden;
  cursor: ${(props) => (props.style.activity ? `pointer` : `default`)};
  @media screen and (max-width: 580px) {
    width: ${(props) => (props.mob.width ? props.mob.width : `100%`)};
    height: ${(props) => (props.mob.height ? props.mob.height : `100%`)};
  }
`
