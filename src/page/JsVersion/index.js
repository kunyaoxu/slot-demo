import { useEffect, useRef, useState } from 'react';
import { Ball, Button } from 'components/css';
import { Wrapper, ButtonWrapper, BallGroup } from './style';

const EVERY_STEP = 100 / 11;
const MAX_POS = 100 - EVERY_STEP;
/** 調節速度 */
const SPEED = MAX_POS / 1000 / 10;

const JsVersion = () => {
  const ref = useRef();
  const [val, setVal] = useState();

  useEffect(() => {
    let pos = 0;
    const runWork = (prevTime = performance.now()) => {
      window.requestAnimationFrame((now) => {
        const diffMs = now - prevTime;
        // if (!!ref && diffMs > 1000) {
        //   pos = (pos + SPEED * diffMs) % MAX_POS;
        //   ref.current.style.transform = `translateY(${-1 * pos}%)`;
        //   return runWork(now);
        // }
        // runWork(prevTime);

        if (!!ref) {
          pos = (pos + SPEED * diffMs) % MAX_POS;
          ref.current.style.transform = `translateY(${-1 * pos}%)`;
          setVal(pos / EVERY_STEP);
        }
        runWork(now);
      });
    };

    // run it
    runWork();
  }, []);

  return (
    <Wrapper>
      <div style={{ color: 'white' }}>{val?.toFixed(2)}</div>
      <BallGroup>
        <div ref={ref}>
          <Ball>01</Ball>
          <Ball>02</Ball>
          <Ball>03</Ball>
          <Ball>04</Ball>
          <Ball>05</Ball>
          <Ball>06</Ball>
          <Ball>07</Ball>
          <Ball>08</Ball>
          <Ball>09</Ball>
          <Ball>10</Ball>
          <Ball>01</Ball>
        </div>
      </BallGroup>
      <ButtonWrapper>
        <Button>Run !</Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default JsVersion;
