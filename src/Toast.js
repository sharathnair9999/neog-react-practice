import "./styles.css";
import { useState } from "react";
export const Toast = ({ type, setShowToast, showToast }) => {
  return (
    <div className={`toast ${type}`}>
      <span className="toast-msg">{`This is ${type} toast`}</span>
      <button
        onClick={() => {
          setShowToast(!showToast);
        }}
        className="toast-btn"
      >
        &times;
      </button>
    </div>
  );
};

const ToastComponent = () => {
  const [type, setType] = useState(null);
  const [showToast, setShowToast] = useState(false);
  return (
    <div className="App">
      <button
        onClick={() => {
          setType("error");
          setShowToast(true);
        }}
      >
        Error
      </button>
      <button
        onClick={() => {
          setType("success");
          setShowToast(true);
        }}
      >
        Success
      </button>
      <button
        onClick={() => {
          setType("warning");
          setShowToast(true);
        }}
      >
        Warning
      </button>
      <br />
      {showToast && (
        <Toast type={type} showToast={showToast} setShowToast={setShowToast} />
      )}
    </div>
  );
};

export default ToastComponent;
