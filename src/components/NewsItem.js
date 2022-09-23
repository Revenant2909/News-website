import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
    let {title ,description,urlToImage,url,author,publishedAt} = this.props;
    return (
        <>
        
      <div className="card" style={{width :"22rem"}}  >
      <div className="card-header">
    Featured
  </div>
      <img src={urlToImage} className="card-img-top" alt="newsalt" width="150" height="200"/>
      <div className="card-body ">
        <h5 className="card-title">{title}...</h5>
        <h6 className="card-title">{author?author:null}...</h6>
        <h6 className="card-title">{publishedAt?publishedAt:null}...</h6>
        <hr />
        <p className="card-text">{description}...</p>
        <a href={url} className="btn btn-sm btn-dark">Read More</a>
      </div>
    </div>
    </>
    )
  }
}

export default NewsItem