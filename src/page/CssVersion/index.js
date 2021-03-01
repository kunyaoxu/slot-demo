import AnimateBall from 'components/AnimateBall';
import { Wrapper, Button, ButtonWrapper, BallGroup } from './style';
import { useCallback, useState } from 'react';

const makeRandomValues = (min = 0, max = 0, count = 1) => {
  const arr = [];
  for (let i = 0; i < count; i++) {
    arr.push(min + Math.floor(Math.random() * max + 1 - min));
  }
  return arr;
};

const make = makeRandomValues.bind(null, 0, 9, 3);

const CssVersion = () => {
  const [values, setValues] = useState(make());
  const [timeStamp, setTimeStamp] = useState(null);

  const run = useCallback(() => {
    setTimeStamp(Date.now());
    setValues(make());
  }, []);
  return (
    <Wrapper>
      <BallGroup>
        {values.map((value, index) => {
          return (
            <AnimateBall
              key={index}
              stopOrder={index}
              value={value}
              timeStamp={timeStamp}
            />
          );
        })}
      </BallGroup>
      <ButtonWrapper>
        <Button onClick={run}>Run !</Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default CssVersion;
