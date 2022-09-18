import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
    let {title ,description,urlToImage,url} = this.props;
    return (
        <>
      <div className="card" style={{width :"22rem"}}>
      <img src={urlToImage} className="card-img-top" alt="newsalt" width="150" height="200"/>
      <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{description}...</p>
        <a href={url} className="btn btn-sm btn-dark">Read More</a>
      </div>
    </div>
    </>
    )
  }
}

export default NewsItem