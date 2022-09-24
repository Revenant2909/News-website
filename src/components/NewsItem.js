import React from 'react'
// import newsalt from './newsalt.jpg'
const NewsItem = (props) => {

  let { title, description, urlToImage, url, author, date, source, status } = props;
  return (
    <>
      {
        <div className="card" style={{ width: "24rem" }}  >
          <div className="card-header ">
            <div className="d-flex justify-content-start ">
              Featured By
              <h6><span className="badge bg-info mx-2">{source ? source : "Unknown"}</span></h6>
            </div>
          </div>
          <img src={urlToImage} className="card-img-top" alt="https://picsum.photos/seed/picsum/200/150" width="150" height="200" />
          <div className="card-body ">
            <h5 className="card-title">{title ? title : "Unknown"}...</h5>

            <hr className="rule" />
            <p className="card-text">{description ? description : "Unknown"}...</p>
            <hr className="rule" />
            <p className="card-text"><small className="text-muted badgeclass ">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a href={url} className="btn btn-sm btn-dark">Read More{status}</a>
          </div>
        </div>
      }
    </>
  )

}

export default NewsItem