import React from 'react'

function AboutUs() {

  var style = {
    position: "relative",
    width: '150px',
    height: '200px',
    // border: '2px solid bla/sck'

  };
  var style1 = {
    // position: "relative",
    width: '400px',
    height: '200px',
    border: '4px solid black'

  };
  return (
    <div className='container my-4' >
      <h1 className='MyColl'> About Us</h1>


      <div className="row align-items-start">
        <div className="col mx-3" style={style}>
          <img src='https://source.unsplash.com/1600x900/?Library building' style={style1}/>
        </div>
        <div className="col mx-3" style={style} >
          <img src='https://source.unsplash.com/1600x900/?books' style={style1}/>
        </div>
        <div className="col mx-3" style={style}>
          <img src='https://source.unsplash.com/1600x900/?book room' style={style1}/>
        </div>
      </div>

      {/* <p classNameName='MyColl'>A library website provides a library with a website to offer its services and to tell its story to its community.</p>
      <p classNameName='MyColl' >My library is the place where you can see all the Books that was I have readed.</p> */}
      <p className='MyColl my-3'>A library is a collection of materials, books or media that are accessible for use and not just for display purposes. A library provides physical (hard copies) or digital access (soft copies) materials, and may be a physical location or a virtual space, or both. A library's collection can include printed materials and other physical resources in many formats such as DVD, CD and cassette as well as access to information, music or other content held on bibliographic databases.

        A library, which may vary widely in size, may be organized for use and maintained by a public body such as a government; an institution such as a school or museum; a corporation; or a private individual. In addition to providing materials, libraries also provide the services of librarians who are trained and experts at finding, selecting, circulating and organizing information and at interpreting information needs, navigating and analyzing very large amounts of information with a variety of resources.

        Library buildings often provide quiet areas for studying, as well as common areas for group study and collaboration, and may provide public facilities for access to their electronic resources; for instance: computers and access to the Internet. The library's clientele and services offered vary depending on its type: users of a public library have different needs from those of a special library or academic library, for example. Libraries may also be community hubs, where programs are delivered and people engage in lifelong learning. Modern libraries extend their services beyond the physical walls of a building by providing material accessible by electronic means, including from home via the Internet.

        The services the library offers are variously described as library services, information services, or the combination "library and information services", although different institutions and sources define such terminology differently.


      </p>
    </div>
  )
}

export default AboutUs
