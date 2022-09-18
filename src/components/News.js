import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles:[],
      loading: false
    }
  }
  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=e32c55b17fc546ec97dc4d8be5b4ddb9";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
     this.setState({ articles: parsedData.articles })
     console.log("This is cdm")
  }
  render () {

    return (<div className="container my-3">
      <h1 className=" my-5">Top Headlines By - Flame News</h1>
      <div className="row">
        {this.state.articles.map((element) => {
          return <div className="col-md-4 my-2" key={element.url}>
            <NewsItem title={element.title.slice(0,60)} description={element.description.slice(0,120)} urlToImage={element.urlToImage} url={element.url} />
          </div>
        }
        )}
      </div>
      <div className="container d-flex justify-content-between">
      <button type="button" className="btn btn-dark"> &larr; Previous</button>
      <button type="button" className="btn btn-dark">Next &rarr;</button>
      </div>
    </div>


    )

  }
}
export default News