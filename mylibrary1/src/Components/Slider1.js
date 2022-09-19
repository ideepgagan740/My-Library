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
            
                        <div className="cards-wrapper mx-3">
                            {Books.map((book) => (

                                <div className='Cards d-none d-md-block' >
                                    <BookCard name={book.name} author={book.author} year={book.year} isbnNumber={book.isbnNumber} description={book.description} coverURL={book.coverURL} imgalt={imgalt} />
                                </div>
                            ))
                            }
            </div>
        </div >
        </div>
    )
}
