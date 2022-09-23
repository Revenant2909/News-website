import React, { Component } from 'react'
import newsalt from './newsalt.jpg'
export class NewsItem extends Component {
  
  render() {
    let {title ,description,urlToImage,url,author,date,source} = this.props;
    return (
        <>
        
      <div className="card" style={{width :"24rem"}}  >
      <div className="card-header ">
      <div className="d-flex justify-content-start ">
    Featured By 
    <h6><span className="badge bg-info mx-2">{source}</span></h6>
    </div>
  </div>
      <img src={urlToImage} className="card-img-top" alt={newsalt} width="150" height="200"/>
      <div className="card-body ">
        <h5 className="card-title">{title}...</h5>
        
        <hr className="rule"/>
        <p className="card-text">{description}...</p>
        <hr className="rule"/>
        <p className="card-text"><small className="text-muted badgeclass ">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
        <a href={url} className="btn btn-sm btn-dark">Read More</a>
      </div>
    </div>
    </>
    )
  }
}

export default NewsItem