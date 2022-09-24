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
  /* apiKey1='79fa2f52d21944c29177222f67c7ea49'
  //     apiKey2='e32c55b17fc546ec97dc4d8be5b4ddb9'
  api3='ecd8525be5cb4724aff57c02b23ef6c3'
  api4='a49a60e109904990b563c4d20678a530' */
    const api = 'ecd8525be5cb4724aff57c02b23ef6c3'

    
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
        <Route exact path="/" element={<News setProgress={setProgress}   key="general" country='in' category='general' apiKey={api} size="3" topic="News" />} />
        <Route exact path="/business" element={<News setProgress={setProgress}   key="business" country='in' category='business' apiKey={api} size="3" topic="Business " />} />
        <Route exact path="/health" element={<News setProgress={setProgress}   key="health" country='in' category='health' apiKey={api} size="3" topic=" Health" />} />
        <Route exact path="/entertainment" element={<News setProgress={setProgress}   key="entertainment" country='in' category='entertainment' apiKey={api} size="3" topic="Entertainment " />} />
        <Route exact path="/science" element={<News setProgress={setProgress}   key="science" country='in' category='science' apiKey={api} size="3" topic="Science " />} />
        <Route exact path="/sports" element={<News setProgress={setProgress}   key="sports" country='in' category='sports' apiKey={api} size="3" topic="Sports " />} />
        <Route exact path="/technology" element={<News setProgress={setProgress}   key="technology" country='in' category='technology' apiKey={api} size="3" topic="Technology "/>} />
      </Routes>
        </BrowserRouter>
    </div>
  )
   

}

export default App;

