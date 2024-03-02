import React from 'react'
import "./Userresource.css"
import image from "../../../../Assets/rpersons.jpg"

function Useresource() {
  return (
    <div className='useresource'>

      <h1>Choose Resource Person</h1>


      <div class="container text-center">
  <div class="row">

  <div class="col-4">
  <div className='procontainer'>

<div className='reslist'>


  <div className='rppersonmain'>

    <div className='rpimage'>
      <img src={image} alt='resource person' />
    </div>

    <div className='rppersondes'>

      <h2>Name : Adarsh</h2>
      <h2>Contact : 9074018563</h2>
      <p>Beige & blue t-shirt for men
        Graphic printed
        Regular length
        Round neck
        Short, regular sleeves
        Knitted cotton fabric.</p>
        <h2>Rating : 4.5</h2>

        <div className='rpsubscribe'>
      <button>SUBSCRIBE</button>
    </div>

    </div>
    
  </div>
</div>
</div>
    </div>

  

    
 

  
    </div>
</div>

   
      
    </div>
  )
}

export default Useresource