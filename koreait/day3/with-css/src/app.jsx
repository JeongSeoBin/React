import React from 'react';
import './app.scss';
import Button from './components/button';

function App() {
  return (
    <div className="App">
      <div className="height">
        <Button size="large" onClick={() => console.log('클릭')}>버튼1</Button>
        <Button>버튼2</Button>
        <Button size="small">버튼3</Button>
      </div>
      <div className="height">
        <Button size="large" color="gray">버튼4</Button>
        <Button color="gray">버튼5</Button>
        <Button size="small" color="gray">버튼6</Button>
      </div>
      <div className="height">
        <Button size="large" color="pink">버튼7</Button>
        <Button color="pink">버튼8</Button>
        <Button size="small" color="pink">버튼9</Button>
      </div>
      <div className="height">
        <Button size="large" color="blue" outline>버튼10</Button>
        <Button color="gray" outline>버튼11</Button>
        <Button size="small" color="pink" outline>버튼12</Button>
      </div>
      <div className="height">
        <Button size="large" color="blue" fullWidth>버튼13</Button>
        <Button color="gray" fullWidth>버튼14</Button>
        <Button size="small" color="pink" fullWidth>버튼15</Button>
      </div>
    </div>
  );
}

export default App;
