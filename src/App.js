import './App.css';
import React, { Component } from 'react';
// import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
// import NewsItem from './components/NewsItem';

import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";

export class App extends Component {
  /* apiKey1='79fa2f52d21944c29177222f67c7ea49'
  //     apiKey2='e32c55b17fc546ec97dc4d8be5b4ddb9'
  api3='ecd8525be5cb4724aff57c02b23ef6c3'
  api4='a49a60e109904990b563c4d20678a530' */
    api = 'a49a60e109904990b563c4d20678a530'

    
    state={
      progress:0,
    }
    setProgress = (progress)=>{
      this.setState({progress:progress})

    }
    render() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <LoadingBar
      height={3}
        color='#f11946'
        progress={this.state.progress}
      />
    
      
      <Routes>
        <Route exact path="/" element={<News setProgress={this.setProgress}   key="general" country='in' category='general' apiKey={this.api} size="3" topic="News" />} />
        <Route exact path="/business" element={<News setProgress={this.setProgress}   key="business" country='in' category='business' apiKey={this.api} size="3" topic="Business " />} />
        <Route exact path="/health" element={<News setProgress={this.setProgress}   key="health" country='in' category='health' apiKey={this.api} size="3" topic=" Health" />} />
        <Route exact path="/entertainment" element={<News setProgress={this.setProgress}   key="entertainment" country='in' category='entertainment' apiKey={this.api} size="3" topic="Entertainment " />} />
        <Route exact path="/science" element={<News setProgress={this.setProgress}   key="science" country='in' category='science' apiKey={this.api} size="3" topic="Science " />} />
        <Route exact path="/sports" element={<News setProgress={this.setProgress}   key="sports" country='in' category='sports' apiKey={this.api} size="3" topic="Sports " />} />
        <Route exact path="/technology" element={<News setProgress={this.setProgress}   key="technology" country='in' category='technology' apiKey={this.api} size="3" topic="Technology "/>} />
      </Routes>
        </BrowserRouter>
    </div>
  )
   }

}

export default App;

