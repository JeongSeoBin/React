import React from 'react';
import styled, {css, ThemeProvider} from 'styled-components';
import Button from './components/button';
import Dialog from './components/dialog';

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  // props로 전달 받은 값으로 스타일 처리하기
  background: ${props => props.color || 'deepskyblue'};
  border-radius: 50%;
  // css코드를 조건부로 보여주기
  ${props => props.big && css`
    width: 10rem;
    height: 10rem;
  `}
`;

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem
  }
`;

function App() {
  return (
    <>
    {/* 색상 팔레트 정의. <ThemeProvider>로 감싼 컴포넌트 전역에서 저의된 색상 팔레트 사용가능 */}
      <ThemeProvider
        theme={{
          palette: {
            blue: '#4169e1',
            gray: '#495057',
            pink: '#f08080'
          }
        }}>
        <Circle/>
        <Circle color="deeppink"/>
        <Circle color="gold" big/>
        <AppBlock>
          <ButtonGroup>
            <Button size="large">클릭하세요</Button>
            <Button color="gray">클릭하세요</Button>
            <Button color="pink" size="small">클릭하세요</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button size="large">클릭하세요</Button>
            <Button color="gray">클릭하세요</Button>
            <Button color="pink" size="small">클릭하세요</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button size="large">클릭하세요</Button>
            <Button color="gray">클릭하세요</Button>
            <Button color="pink" size="small">클릭하세요</Button>
          </ButtonGroup>
        </AppBlock>
        <Dialog
          title="정말로 삭제하시겠습니까?"
          confirmText="삭제"
          cancelText="취소">
          데이터를 정말로 삭제 하시겠습니까?
        </Dialog>
      </ThemeProvider>
    </>
  );
}

export default App;