import React from 'react'
import "./Rpblog.css"
import Rpnav from '../../navbar/Rpnav'
import Footer from '../../../../pages/commonHomePage/Components/commonFooter'

function Rpblog() {
  return (

    <>
    <Rpnav/>

    <div className='Rpblog'>

<div className='rpblogheading'>
<h1>BLOG POST</h1>
</div>


<div className='rpblogform'>


<div className='rpblogfield'>
<div className='rpbloginputs'>
    <div className='bloglabel'>
        <label>Title</label>
    </div>
    <input type='text' />

</div>
</div>

<div className='rpblogfield'>
<div className='rpblogarea'>
    <div className='bloglabel'>
        <label>Blog Content</label>
    </div>
    <textarea/>

    </div>
</div>

<div className='rpblogfield'>

<div className='rpblogarea'>
    <div className='bloglabel'>
        <label>Conclusion</label>
    </div>
    <textarea/>
    </div>
</div>

<div className='rpblogfield'>
<div className='blogfiles'>
    <div className='bloglabel'>
        <label>Images</label>
    </div>
    
    <div className='rpimg1'>
    <input type='file'/>
    </div>

    <div className='rpimg2'>

    <input type='file'/>

    </div>
  
    </div>

</div>
  
<div className='blogbutton'>
    <button>Submit</button>
</div>


</div>
    </div>
    <Footer/>
    </>

  
  )
}

export default Rpblog