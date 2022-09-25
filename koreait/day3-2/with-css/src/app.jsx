import React from 'react';
import './app.css';
import Button from './components/button';
import Box from './components/box';

function App() {
  return (
    <div className="App">
      <div className="buttons">
        <Button size="large">클릭하세요</Button>
        <Button>클릭하세요</Button>
        <Button size="small">클릭하세요</Button>
      </div>
      <div className="buttons">
        <Button size="large" color="gray">클릭하세요</Button>
        <Button color="gray">클릭하세요</Button>
        <Button size="small" color="gray">클릭하세요</Button>
      </div>
      <div className="buttons">
        <Button size="large" color="violet">클릭하세요</Button>
        <Button color="violet">클릭하세요</Button>
        <Button size="small" color="violet">클릭하세요</Button>
      </div>
      <div className="buttons">
        <Button size="large" color="gray" outline>클릭하세요</Button>
        <Button outline>클릭하세요</Button>
        <Button size="small" color="violet" outline>클릭하세요</Button>
      </div>
      <div className="buttons">
        <Button size="large" color="gray" fullWidth>클릭하세요</Button>
        <Button fullWidth>클릭하세요</Button>
        <Button size="small" color="violet" fullWidth>클릭하세요</Button>
      </div>
      <Box/>
    </div>
  );
}

export default App;
