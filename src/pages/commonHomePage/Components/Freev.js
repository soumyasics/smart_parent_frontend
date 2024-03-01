import React from 'react'
import './Freev.css'
function Freev() {
  return (
    <div className='mb-5' >
      <div className='fvt mb-5'>
         <p><b>Free Videos And Tutorials</b></p>
      </div>
      <div className='free-container container'>
          <div className='free-row' style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <div className="card" style={{ width: '18rem', transition: 'transform .9s', marginLeft:'15px' }}>
            <img src="..." className="card-img-top" alt="video thumb" />
            <div className="card-body">
              <h5 className="card-title">Video tittle</h5>
              <p className="card-text">short description of video content</p>
              <a href="#" className="btn btn-primary">video link</a>
            </div>
          </div>
          <div className="card" style={{ width: '18rem', transition: 'transform .9s' }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Video tittle</h5>
              <p className="card-text">short description of video content</p>
              <a href="#" className="btn btn-primary">Video link</a>
            </div>
          </div>
          <div className="card" style={{ width: '18rem', transition: 'transform .9s' }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Video title</h5>
              <p className="card-text">short description of video content</p>
              <a href="#" className="btn btn-primary">Video link</a>
            </div>
            
          </div>
          <div className="card" style={{ width: '18rem', transition: 'transform .9s', marginRight: '15px' }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Video title</h5>
              <p className="card-text">short description of video content</p>
              <a href="#" className="btn btn-primary">Video link</a>
            </div>
            
          </div>
          </div>
      </div>
    </div>
  )
}

export default Freev