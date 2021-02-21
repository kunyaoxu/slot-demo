import { useMemo, useState } from 'react';
import {
  BallsWrapper,
  BallsWrapperWithAnimation,
  Wrapper,
  Ball,
} from './style';

const AnimateBall = ({ value }) => {
  const [isPlay, setIsPlay] = useState(false);
  const translateInfo = useMemo(() => {
    if (value !== null) {
      setIsPlay(true);
    }
    return `translateY(${(value * -100) / 21}%`;
  }, [value]);

  return (
    <Wrapper>
      <BallsWrapperWithAnimation
        className={isPlay ? 'play' : ''}
        onAnimationEnd={() => setIsPlay(false)}
      >
        <BallsWrapper
          style={{
            transform: translateInfo,
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
