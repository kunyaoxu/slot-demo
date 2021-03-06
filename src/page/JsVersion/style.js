import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BallGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > * {
    /* margin: 0 8px; */
  }
  /* tmp */
  width: 50px;
  height: 50px;
  overflow: hidden;
`;

export const TmpBall = styled.div`
  width: 50px;
  height: 50px;
  color: white;
  font-weight: bold;
  text-align: center;
  line-height: 50px;
  background-color: #ccc;
`;

export const ButtonWrapper = styled.div`
  margin-top: 50px;
`;
