import { BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from "./Components/Header/NavBar";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      </BrowserRouter>
    </div>
  );
}

export default App;
