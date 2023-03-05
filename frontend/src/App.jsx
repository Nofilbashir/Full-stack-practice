import Home from "./Pages/Home";
import Update from "./Pages/Update";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';  
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/update/:id" element={<Update/>}/>
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
