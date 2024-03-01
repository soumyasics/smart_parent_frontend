import React from 'react'
import parenting4 from '../Assets/parenting4.jpg'
import parenting5 from '../Assets/parenting5.jpg'
import parenting6 from'../Assets/parenting6.jpg'
import './Goals.css'
function Goals() {
  return (
    <>
      <div className='goals'>
        <p><b>OUR GOALS</b></p>
      </div>
      <div className='goal-container'>
        <div className='goal-row'>

          <div className='goal1'>
            <img src={parenting4} alt="Parenting" />
            
           <h2>Revloutionary</h2>
           <p>Parenting and Caregiving done through a new way. </p>
          </div>
          <div className='goal2'>
            <img src={parenting5} alt="Parenting" />
            <h2>Interactive</h2>
           <p>Mold your childs behaviour through interactive activities.</p>
          </div>
          <div className='goal3'>
            <img src={parenting6} alt="Parenting" />
            <h2>Expert Opinions</h2>
           <p>Our community is here to support you in every steps.</p>
          </div>
        </div>
      </div>

    </>
  )
}

export default Goals