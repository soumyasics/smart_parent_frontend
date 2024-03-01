import React from 'react'
import './Freeb.js'
function Freeb() {
  return (
    <>
    <div className='fb mb-5'>
         <p><b>Free Blogs</b></p>
      </div>
      <div className='free-container container'>
      <div className='free-row' style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
      <div class="card" style={{ width: '18rem', transition: 'transform .9s', marginLeft:'15px' }}>
  <div class="card-body">
    <h5 class="card-title">Blog title</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Blog subtitle</h6>
    <p class="card-text">Blog content along with author name</p>
  </div>
</div>
<div class="card" style={{ width: '18rem', transition: 'transform .9s'}}>
  <div class="card-body">
    <h5 class="card-title">Blog title</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Blog subtitle</h6>
    <p class="card-text">Blog content along with author name</p>
  </div>
</div>
<div class="card" style={{ width: '18rem', transition: 'transform .9s'}}>
  <div class="card-body">
    <h5 class="card-title">Blog title</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Blog subtitle</h6>
    <p class="card-text">Blog content along with author name</p>
  </div>
</div>
<div class="card" style={{ width: '18rem', transition: 'transform .9s',marginRight:'15px'}}>
  <div class="card-body">
    <h5 class="card-title">Blog title</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Blog subtitle</h6>
    <p class="card-text">Blog content along with author name</p>
  </div>
</div>
        </div>
        </div>
    </>
  )
}

export default Freeb