import './App.css';
import React,{useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'


import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";

const App =()=> {

    const api = "ecd8525be5cb4724aff57c02b23ef6c3";

    
    const [progress, setProgress] = useState(0);
    
   
  return (
    <div class="maindiv">
      <BrowserRouter>
      <Navbar />
      <LoadingBar
      height={3}
        color='#f11946'
        progress={progress}
      />
    
      
      <Routes>
        <Route exact path="/" element={<News setProgress={setProgress}   key="general" country='in' category='general' apiKey={api} size="9" topic="News" />} />
        <Route exact path="/business" element={<News setProgress={setProgress}   key="business" country='in' category='business' apiKey={api} size="9" topic="Business " />} />
        <Route exact path="/health" element={<News setProgress={setProgress}   key="health" country='in' category='health' apiKey={api} size="9" topic=" Health" />} />
        <Route exact path="/entertainment" element={<News setProgress={setProgress}   key="entertainment" country='in' category='entertainment' apiKey={api} size="9" topic="Entertainment " />} />
        <Route exact path="/science" element={<News setProgress={setProgress}   key="science" country='in' category='science' apiKey={api} size="9" topic="Science " />} />
        <Route exact path="/sports" element={<News setProgress={setProgress}   key="sports" country='in' category='sports' apiKey={api} size="9" topic="Sports " />} />
        <Route exact path="/technology" element={<News setProgress={setProgress}   key="technology" country='in' category='technology' apiKey={api} size="9" topic="Technology "/>} />
      </Routes>
        </BrowserRouter>
    </div>
  )
   

}

export default App;

