import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


 

export class News extends Component {
  static defaultProps = {
    country: 'in',
    category:'general',
    size:'9',
  };
  static propTypes = {
    country:PropTypes.string,
    category:PropTypes.string,
    pageSize:PropTypes.number,
  };
  
  constructor() {
    super();
    this.state = {
      articles:[],
      loading: false,
      num : 9,
    }
  }
  handleShowMore = async ()=>{
    // console.log(this.state.num);
         this.setState({loading:true})
         this.setState({num:this.state.num+6});
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.state.num}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({loading:false})
        console.log(parsedData);
    //  console.log("Show more clicked");
     console.log(this.state.num);

        this.componentDidMount();
    

  }
  
  async componentDidMount(){
    this.setState({loading:true})

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.state.num}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({loading:false})

    console.log(parsedData);
     this.setState({ articles: parsedData.articles })
     
    //  console.log("This is cdm")
  }
  render () {

    return (<div className="container my-3">
      
      <h1 className=" my-5">Top {this.props.topic} Headlines By - Flame News</h1>
      {this.state.loading&&<Spinner/>}
      <div className="row">
        { this.state.articles.map((element) => {
          return <div className="col-md-4 my-4" key={element.url}>
            <NewsItem title={element.title.slice(0,60)} description={element.description.slice(0,116)} urlToImage={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
          </div>
        }
        )}
      </div>
      <div className="container d-flex justify-content-evenly">

      <button type="button" className="btn btn-light p-2 flex-grow-1 bd-highlight btn-outline-dark" onClick={this.handleShowMore}>Show More Articles</button>
      </div>
    </div>


    )

  }
}
export default News


