import { useEffect, useState } from 'react';
import {
  BallsWrapper,
  BallsWrapperWithAnimation,
  Wrapper,
  Ball,
} from './style';

const STOP = 0;
const RUN = 1;
const RUN_SLOW = 2;

const AnimateBall = ({ value }) => {
  const [playState, setPlayState] = useState(STOP);
  const [preValue, setPreValue] = useState(0);

  useEffect(() => {
    if (value !== null) {
      setPlayState(RUN);
    }
  }, [value]);

  return (
    <Wrapper>
      <BallsWrapperWithAnimation
        className={playState === RUN ? 'play' : ''}
        onAnimationEnd={() => {
          setPlayState(RUN_SLOW);
          setPreValue(value + 10);
        }}
        onAnimationIteration={() => {
          setPreValue(value);
        }}
      >
        <BallsWrapper
          className={playState === RUN_SLOW ? 'play' : ''}
          onTransitionEnd={() => {
            setPlayState(STOP);
            setPreValue(value);
          }}
          style={{
            transform: `translateY(${(preValue * -100) / 21}%`,
          }}
        >
          <Ball>0</Ball>
          <Ball>1</Ball>
          <Ball>2</Ball>
          <Ball>3</Ball>
          <Ball>4</Ball>
          <Ball>5</Ball>
          <Ball>6</Ball>
          <Ball>7</Ball>
          <Ball>8</Ball>
          <Ball>9</Ball>
          <Ball>0</Ball>
          <Ball>1</Ball>
          <Ball>2</Ball>
          <Ball>3</Ball>
          <Ball>4</Ball>
          <Ball>5</Ball>
          <Ball>6</Ball>
          <Ball>7</Ball>
          <Ball>8</Ball>
          <Ball>9</Ball>
          <Ball>0</Ball>
        </BallsWrapper>
      </BallsWrapperWithAnimation>
    </Wrapper>
  );
};

export default AnimateBall;
