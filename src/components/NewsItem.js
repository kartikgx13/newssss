import React, { Component } from 'react'
import './NewsItem.css'

export class NewsItem extends Component {
    

  render() {
    let {title,description,imageUrl,newsUrl,author,date} = this.props
    //the above concept is called destructuring
    //from the object this.props the above two values are pulled
    //now we can use these two values to change the title and description
    //dynamically
    return (
      <>
      <div className="news-card">
      <img
            src={!imageUrl ? "https://cdn-icons-png.flaticon.com/512/1375/1375106.png" : imageUrl}
            className="card-img-top"
            alt="..."
          />
       <div className="card-body">
       <h5 className="card-title">{title}...</h5>
       <p className="card-text">{description}...</p>
       <p class="card-text"><small class="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toDateString()}</small></p>
       <a href={newsUrl} className="read-btn"><button>Read more</button></a>
       </div>
       </div>
      </>
    )
  }
}

export default NewsItem