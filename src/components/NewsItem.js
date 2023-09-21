import React, { Component } from 'react'

export class NewsItem extends Component {
    

  render() {
    let {title,description,imageUrl,newsUrl,author,date} = this.props
    //the above concept is called destructuring
    //from the object this.props the above two values are pulled
    //now we can use these two values to change the title and description
    //dynamically
    return (
      <>
      <div className='my-3'>
      <div className="card">
      <img
            src={!imageUrl ? "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.srmist.edu.in%2Fplaceholder-png-29%2F&psig=AOvVaw008ZAP0zKJas7yWmE3w6su&ust=1695363673522000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCPjDtPmHu4EDFQAAAAAdAAAAABAE" : imageUrl}
            className="card-img-top"
            alt="..."
          />
       <div className="card-body">
       <h5 className="card-title">{title}...</h5>
       <p className="card-text">{description}...</p>
       <p class="card-text"><small class="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toDateString()}</small></p>
       <a href={newsUrl} className="btn btn-sm btn-primary">Read more</a>
       </div>
       </div>
       </div>
      </>
    )
  }
}

export default NewsItem