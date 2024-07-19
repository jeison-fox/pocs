import { useRef } from "react";
import Modal from "./Modal";

const defaultModalClasses = {
  modal: "default-modal",
  container: "default-modal-container",
}

const fullScreenModalClasses = {
  modal: "full-screen-modal",
  container: "full-screen-modal-container",
};

function App() {
  const defaultModalRef = useRef(null);
  const fullScreenModalRef = useRef(null);

  const openDefaultModal = () => {
    if (defaultModalRef.current) {
      defaultModalRef.current?.open();
    }
  };

  const closeDefaultModal = () => {
    if (defaultModalRef.current) {
      defaultModalRef.current?.close();
    }
  };

  const openFullScreenModal = () => {
    if (fullScreenModalRef.current) {
      fullScreenModalRef.current?.open();
    }
  };

  const closeFullScreenModal = () => {
    if (fullScreenModalRef.current) {
      fullScreenModalRef.current?.close();
    }
  };

  return (
    <div className="app">
      <button onClick={openDefaultModal}>Open Default Modal</button>
      <button onClick={openFullScreenModal}>Open Full Screen Modal</button>

      {/* Default Modal */}
      <Modal ref={defaultModalRef} classes={defaultModalClasses}>
        <h2>Modal Title</h2>
        <p>Modal content goes here.</p>
        <button onClick={closeDefaultModal}>Close</button>
      </Modal>

      {/* Default Modal */}
      <Modal ref={fullScreenModalRef} classes={fullScreenModalClasses}>
        <h2>Modal Title</h2>
        <p>Modal content goes here.</p>
        <button onClick={closeFullScreenModal}>Close</button>
      </Modal>
    </div>
  );
}

export default App;
