import React, {useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";




const News =(props)=>{
  
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
   
  
  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.size}`;
    setPage(page+1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    

  };
   const updateNews = async ()=>{
    props.setProgress(20);
    setLoading(true);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.size}`;
    props.setProgress(40);
    let data = await fetch(url);
    props.setProgress(70);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setLoading(false);
    setTotalResults(parsedData.totalResults);
    props.setProgress(100);

  }

  useEffect(() => {
    updateNews()
  }, [])
  
    return (<>
      <div className="container my-3 ">
      <h1 className=" my-2 mx-5">Top {props.topic} Headlines</h1>
      {loading && <Spinner/>}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}>
        <div className="container d-flex justify-content-evenly">
          <div className="row">
            {articles.map((element) => {
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
News.defaultProps = {
  country: 'in',
  category: 'general',
  size: '3',
};
News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number,
  api: PropTypes.string,
};
export default News


