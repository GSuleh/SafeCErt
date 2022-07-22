import { css } from 'styled-components';

type LineOnHoverType = {
  color: string;
  width: string;
  height: string;
  top: string;
  time: string;
} 
export const LineOnHover = ({color,width,height,top,time}:LineOnHoverType) => css`
  &::after {
    content: "";
    position: absolute;
    width: ${width};
    top: ${top};
    left: 0;
    right: 0;
    height: ${height};
    background-color: ${color};
    transition: transform ${time};
    transform: scale(0);
    transform-origin: right;
  }
  &:hover::after {
    transform: scale(1);
    transform-origin: left;
  }
`