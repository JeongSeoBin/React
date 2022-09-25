import { useState } from "react";
import axios from "axios";

function App() {
  const [datas, setDatas] = useState([]);

  const handleClick = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
      console.log(response);
      setDatas(response.data);
    });
  };

  return (
    <>
      <button onClick={handleClick}>click</button>
      <div>
        {datas.map((data) => {
          return <div>{data}</div>;
        })}
      </div>
    </>
  );
}

export default App;
