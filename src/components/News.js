import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";




export class News extends Component {
  static defaultProps = {
    country: 'in',
    category: 'general',
    size: '3',
  };
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
    api: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    }
  }
  fetchMoreData = async () => {
    this.setState({ page: this.state.page+1 })
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.size}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log({ parsedData })
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    })

  };
  async updateNews (){
    this.props.setProgress(20);
    this.setState({ loading: true })
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.size}`;
    this.props.setProgress(40);
    let data = await fetch(url);
    this.props.setProgress(70);
    let parsedData = await data.json();
    // console.log({ parsedData })
    this.setState({
      articles: parsedData.articles,
      loading: false,
      totalResults: parsedData.totalResults,
    })
    this.props.setProgress(100);

  }
  async componentDidMount() {
    this.updateNews()
  }
  render() {

    return (<>
 <div className="container">
      <h1 className=" my-5">Top {this.props.topic} Headlines By - Flame News</h1>
      <InfiniteScroll
        dataLength={this.state.articles.length}
        next={this.fetchMoreData}
        hasMore={this.state.articles.length !== this.state.totalResults}
        loader={<Spinner />}>
        <div className="container">
          <div className="row">
            {this.state.articles.map((element) => {
              return <div className="col-md-4 my-4" key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0, 60) : ""} description={element.description ? element.description.slice(0, 116) : ""} urlToImage={element.urlToImage} url={element.url} author={element.author ? element.author : ""} date={element.publishedAt ? element.publishedAt : ""} source={element.source.name ? element.source.name.slice(0, 25) : ""} status={element.status}/>
              </div>
            }
            )}
          </div>
        </div>
      </InfiniteScroll>
      </div>
    </>


    )

  }
}
export default News


