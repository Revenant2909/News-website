import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
// import NewsItem from './components/NewsItem';
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      {/* <News key="general" country='in' category='general' apiKey='e32c55b17fc546ec97dc4d8be5b4ddb9' /> */}
      <Routes>
        <Route exact path="/" element={<News key="general" country='in' category='sports' apiKey='e32c55b17fc546ec97dc4d8be5b4ddb9' size="12" />} />
        <Route exact path="/business" element={<News key="business" country='in' category='business' apiKey='e32c55b17fc546ec97dc4d8be5b4ddb9' />} />
        <Route exact path="/health" element={<News key="health" country='in' category='health' apiKey='e32c55b17fc546ec97dc4d8be5b4ddb9' />} />
        <Route exact path="/entertainment" element={<News key="entertainment" country='in' category='entertainment' apiKey='e32c55b17fc546ec97dc4d8be5b4ddb9' />} />
        <Route exact path="/science" element={<News key="science" country='in' category='science' apiKey='e32c55b17fc546ec97dc4d8be5b4ddb9' />} />
        <Route exact path="/sports" element={<News key="sports" country='in' category='sports' apiKey='e32c55b17fc546ec97dc4d8be5b4ddb9' />} />
        <Route exact path="/technology" element={<News key="technology" country='in' category='technology' apiKey='e32c55b17fc546ec97dc4d8be5b4ddb9' />} />
      </Routes>
        </BrowserRouter>




    </div>
  );
}

export default App;
