// import react from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home"
import Search from './Pages/Search';
import './App.css';



function App() {
  return (
    <div className="App">
      {/* <h1>App page</h1> */}
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="search" element={<Search/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
