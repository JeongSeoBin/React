import { useState } from "react"
import Modal from "./components/Modal";

function App3() {
  const [visible, setVisible] = useState(false);

  const open = () => {
    setVisible(true);
  }

  const close = () => {
    setVisible(false);
  }

  return (
    <div>
      <button onClick={open}>open</button>
      {visible && 
        <Modal>
          <div 
            onClick={close} 
            style={{
              width: "100vw",
              height: "100vh",
              background: "rgba(0,0,0.5)"
            }}>
              hello
          </div>
        </Modal>}
    </div>
  )
}

export default App3;