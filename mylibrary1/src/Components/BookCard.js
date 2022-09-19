import React from 'react'
// import PropTypes from 'prop-types'

export default function BookCard(props) {
  var style = { width: "15rem" }
  var desclen = { height: "15rem" }
  var imglen = { height: "20rem" }
  return (
    <>
    
      <div className="card" style={style}>
        <img src={props.coverURL} className="card-img-top" alt={props.imgalt} style={imglen} />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text" style={desclen}>{props.description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Author: {props.author}</li>
          <li className="list-group-item">Year: {props.year}</li>
          <li className="list-group-item">ISBN Number: {props.isbnNumber}</li>
        </ul>
      </div>
    </>
  );
}


