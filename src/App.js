import { useCallback, useState } from 'react';
import AnimateBall from './components/AnimateBall';
import { Wrapper, Button, ButtonWrapper } from './style';

function App() {
  const [value, setValue] = useState(null);
  const run = useCallback(() => {
    const num = Math.floor(Math.random() * 10);
    console.log(num);
    setValue(num);
  }, []);
  return (
    <Wrapper>
      <AnimateBall value={value} />
      <ButtonWrapper>
        <Button onClick={run}>Run !</Button>
      </ButtonWrapper>
    </Wrapper>
  );
}

export default App;
