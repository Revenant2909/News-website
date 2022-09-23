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
      {/* <News key="general" country='in' category='general' apiKey='ecd8525be5cb4724aff57c02b23ef6c3' /> */}
      <Routes>
        <Route exact path="/" element={<News key="general" country='in' category='general' apiKey='ecd8525be5cb4724aff57c02b23ef6c3 ' size="2" topic="News" />} />
        <Route exact path="/business" element={<News key="business" country='in' category='business' apiKey='ecd8525be5cb4724aff57c02b23ef6c3' size="3" topic="Business " />} />
        <Route exact path="/health" element={<News key="health" country='in' category='health' apiKey='ecd8525be5cb4724aff57c02b23ef6c3' size="3" topic=" Health" />} />
        <Route exact path="/entertainment" element={<News key="entertainment" country='in' category='entertainment' apiKey='ecd8525be5cb4724aff57c02b23ef6c3' size="3" topic="Entertainment " />} />
        <Route exact path="/science" element={<News key="science" country='in' category='science' apiKey='ecd8525be5cb4724aff57c02b23ef6c3' size="3" topic="Science " />} />
        <Route exact path="/sports" element={<News key="sports" country='in' category='sports' apiKey='ecd8525be5cb4724aff57c02b23ef6c3' size="3" topic="Sports " />} />
        <Route exact path="/technology" element={<News key="technology" country='in' category='technology' apiKey='ecd8525be5cb4724aff57c02b23ef6c3' size="3" topic="Technology "/>} />
      </Routes>
        </BrowserRouter>




    </div>
  );
}

export default App;
