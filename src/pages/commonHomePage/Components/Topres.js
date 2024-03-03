import React from 'react'
import parenting1 from '../Assets/parenting1.jpeg'
import './Topres.css'
function Topres() {
  return (
    <>
      <div className='tres'><p><b>Top Resource Persons</b></p></div>
      <div className='free-container container'>
        <div className='free-row' style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}></div>
        <div style={{ display: 'flex', alignItems: 'left', flexWrap: 'wrap' }}>
          <div className='st' style={{ width: '300px', height: '100px', borderRadius: '10px', backgroundColor: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '10px' }}>
            <div style={{ marginRight: '10px' }}>
              <img src={parenting1} alt="Person" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
            </div>
            <div>
              <p style={{ margin: '0', fontSize: '16px', fontWeight: 'bold' }}>Jane Doe</p>
            </div>
          </div>
          <div className='st' style={{ width: '300px', height: '100px', borderRadius: '10px', backgroundColor: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '10px', }}>
            <div style={{ marginRight: '10px' }}>
              <img src={parenting1} alt="Person" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
            </div>
            <div className='st'>
              <p style={{ margin: '0', fontSize: '16px', fontWeight: 'bold', }}>Jhon Doe</p>
            </div>
          </div>
          <div className='st' style={{ width: '300px', height: '100px', borderRadius: '10px', backgroundColor: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '10px', }}>
            <div style={{ marginRight: '10px' }}>
              <img src={parenting1} alt="Person" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
            </div>
            <div className='st'>
              <p style={{ margin: '0', fontSize: '16px', fontWeight: 'bold', }}>Jhon Smith</p>
            </div>
          </div>
          <div className='st' style={{ width: '300px', height: '100px', borderRadius: '10px', backgroundColor: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '10px', }}>
            <div style={{ marginRight: '10px' }}>
              <img src={parenting1} alt="Person" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
            </div>
            <div className='st'>
              <p style={{ margin: '0', fontSize: '16px', fontWeight: 'bold', }}>Jane Smith</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Topres