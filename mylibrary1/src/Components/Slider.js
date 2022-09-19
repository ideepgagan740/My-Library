// import React, { useState } from 'react'
import React from 'react'
import BookCard from "./BookCard"
import Books from "./Books"

export default function Slider() {
    const imgalt = "Image is Loading"

    return (
        <div className="container my-4" >
            <h1 className='MyColl'>My Collections</h1>
        
        <div className='container'>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="cards-wrapper">
                            {Books.map((book) => (

                                <div className='Cards d-none d-md-block' >
                                    <BookCard name={book.name} author={book.author} year={book.year} isbnNumber={book.isbnNumber} description={book.description} coverURL={book.coverURL} imgalt={imgalt} />
                                </div>
                            ))
                            }
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="/carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                </a>
                <a className="carousel-control-next" href="/carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    {/* <span className="sr-only"></span> */}
                </a>
            </div>
        </div >
        </div>
    )
}
