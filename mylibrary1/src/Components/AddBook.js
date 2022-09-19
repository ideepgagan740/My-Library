import React, { useState } from 'react'
// import React from 'react'
import Books from "./Books"
import Alert from "./Alert"
// import {useNavigate} from 'react-router-dom'

function AddBook() {
  let newname, newauthor, newyear, newisbnNumber, newcoverURL, newdescription
  const [Books, addBook] = useState("")
  const AddNewBook=()=>{
    let newBooks = {
          "name": {newname},
          "author": {newauthor},
          "year": {newyear},
          "isbnNumber": {newisbnNumber},
          "coverURL": {newcoverURL},
          "description": {newdescription}
        }
    addBook(Books.map.push(newBooks))
    {<Alert alert="Book Added Successfully"/>}
    
  }
  // const AddNewBook = () => {
  //   <Alert alert="Book Added Successfully"/>
  //   const navigate = useNavigate();
  //   let newbook = {
  //     "name": {newname},
  //     "author": {newauthor},
  //     "year": {newyear},
  //     "isbnNumber": {newisbnNumber},
  //     "coverURL": {newcoverURL},
  //     "description": {newdescription}
  //   }
  //   Books.push(newbook)
  //   return(navigate('/'))
  // }

  return (
    <div>
      <div className="container my-4" >
        <h1 className='MyColl'>Add Book </h1>
      </div>

      <form>
        <div className="row align-items-start">
          <div className="col">
          </div>
          <div className="col">
            <div className="row justify-content-md-center">
              <div className="form-row">
                <div className="form-group my-3">
                  <input type="text" className="form-control" id="inputEmail4" value={newname} placeholder="Name of Book" />
                </div>
                <div className="form-group my-3">
                  <input type="text" className="form-control" id="inputPassword4" value={newauthor} placeholder="Author of Book" />
                </div>
              </div>
              <div className="form-group my-3">
                <input type="text" className="form-control" id="inputAddress" value={newyear} placeholder="Published Year" />
              </div>
              <div className="form-group my-3">
                <input type="text" className="form-control" id="inputAddress2" value={newisbnNumber} placeholder="ISBN Number" />
              </div>
              <div className="form-group my-3">
                <input type="text" className="form-control" id="inputAddress2" value={newcoverURL} placeholder="URL of Cover Image" />
              </div>
              <div className="form-group my-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={newdescription} placeholder='Description'></textarea>
              </div>
              <div className="d-flex justify-content-center">
                <button className="btn btn-primary my-3 " onClick={AddNewBook} type="submit">Add Book</button>
                
              </div>
            </div>
          </div>
          <div className="col">
          </div>
        </div>

      </form>

    </div>
  )
}

export default AddBook
