import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
import './MainPage.css';

export class News extends Component {
    // Default props for the News component
    static defaultProps = {
        country: "in",
        pageSize: 1,
        category: 'general'
    }

    // PropTypes to define the expected props types
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    constructor() {
        super(); // Calling the constructor of the superclass
        console.log("This is a constructor");
        this.state = {
            articles: [],
            loading: true,
            page: 1, // Setting the default page number to one
            totalResults: 0
        }
        // State is used to store data related to news articles
        // and loading status
    }

    // componentDidMount is a lifecycle method called after rendering
    async componentDidMount() {
        // Constructing the API URL for fetching news
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=7d9d6a34e9f94675842c88392cc9ba69&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        // Using the fetch API to fetch news data
        // and update the component state
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false });
    }

    // Function to fetch more news data for infinite scrolling
    fetchMoreData = async () => {
        this.setState(
            {
                page: this.state.page + 1
            }
        )
        this.updateNews();
    };

    // Function to update news data
    async updateNews() {
        // Constructing the API URL for fetching more news
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=7d9d6a34e9f94675842c88392cc9ba69&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        // Using the fetch API to fetch more news data
        let data = await fetch(url);
        let parsedData = await data.json();
        // Concatenating the new articles with the existing ones
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            loading: false,
            totalResults: parsedData.totalResults
        })
    }

    render() {
        return (
            <>
                <div className="main-news-container">
                    <h2 className='navbar-logo'>Top headlines</h2>
                    {/* Display a loading spinner while data is loading */}
                    {this.state.loading && <Spinner />}
                    {/* Check if articles are defined before rendering */}
                    {this.state.articles && (
                        <InfiniteScroll
                            dataLength={this.state.articles.length}
                            next={this.fetchMoreData}
                            hasMore={this.state.articles.length !== this.state.totalResults}
                            loader={<Spinner />}
                        >
                            <div className="grid-container">
                                {/* Mapping and rendering news items */}
                                {this.state.articles.map((element) => {
                                    return (
                                        <div className="grid-item" key={element.url}>
                                            <NewsItem
                                                author={element.author}
                                                date={element.publishedAt}
                                                title={element.title ? element.title.slice(0, 45) : ""}
                                                description={element.description ? element.description.slice(0, 88) : ""}
                                                imageUrl={element.urlToImage ? element.urlToImage : ""}
                                                newsUrl={element.url ? element.url : ""}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </InfiniteScroll>
                    )}
                </div>
            </>
        );
    }
}

export default News;
