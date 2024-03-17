import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ARG } from "./arg/arg";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/arg" element={<ARG></ARG>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
