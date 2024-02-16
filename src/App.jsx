import Router from "./routes";
import { Slide, ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <>
      <Router />
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        // theme="light"
        transition={Slide}
      />
    </>
  );
}

export default App;
