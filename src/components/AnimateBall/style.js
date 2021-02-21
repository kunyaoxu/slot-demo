import styled, { keyframes } from 'styled-components';

const playFrames = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(${(100 / 21 - 100) / 2}%);
  }
`;

export const Wrapper = styled.div`
  width: 50px;
  height: 50px;
  overflow: hidden;
  position: relative;
  &,
  & * {
    transition: all 1s;
  }
`;

export const BallsWrapperWithAnimation = styled.div`
  position: relative;
  &.play {
    animation-name: ${playFrames};
    animation-duration: 3s;
    animation-iteration-count: 3;
    animation-timing-function: linear;
  }
`;

export const BallsWrapper = styled.div`
  position: relative;
`;

export const Ball = styled.div`
  line-height: 50px;
  text-align: center;
  font-weight: bold;
  width: 50px;
  height: 50px;
  background-color: #ccc;
  color: white;
`;
