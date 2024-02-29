import React from 'react'
import "./counselor.css"
import { Icon } from '@iconify-icon/react'
import img1 from "../../../../Assets/img1.png"
import img2 from "../../../../Assets/img2.png"
import img3 from "../../../../Assets/img3.png"
import img4 from "../../../../Assets/img4.png"
import img5 from "../../../../Assets/img5.png"



function Counselor() {
    return (
        <div className='counsellor' >

            <h1>Choose Counselor</h1>

            <div className='search'>
                <input type='text' placeholder='Search for a professional' className='search_icon_input' />
            </div>

            <div className='listout'>

                <h5>Top rated professionals</h5>

                <div className='professionals'>

                    <img src={img1} alt='img1' />

                    <div className='para'> <p1>Andrew M.</p1> </div>



                    <div className='d-flex' >
                        <p>Topic</p>
                        <div className='dot' ><Icon icon="fluent-mdl2:location-dot" /></div>

                        <p>Skills</p>
                        <div className='dot' ><Icon icon="fluent-mdl2:location-dot" /></div>

                        <p>Exp</p>

                    </div>

                    <div className='rating'>
                        <h6>4.96</h6>
                    </div>








                </div>
                <div className='professionals'>

                    <img src={img2} alt='img2' />

                    <div className='para'> <p1>Jessie M.</p1> </div>



                    <div className='d-flex' >
                        <p>Topic</p>
                        <div className='dot' ><Icon icon="fluent-mdl2:location-dot" /></div>

                        <p>Skills</p>
                        <div className='dot' ><Icon icon="fluent-mdl2:location-dot" /></div>

                        <p>Exp</p>

                    </div>

                    <div className='rating'>
                        <h6>4.98</h6>
                    </div>








                </div>
                <div className='professionals'>

                    <img src={img3} alt='img3' />

                    <div className='para'> <p1>Megan B.</p1> </div>



                    <div className='d-flex' >
                        <p>Topic</p>
                        <div className='dot' ><Icon icon="fluent-mdl2:location-dot" /></div>

                        <p>Skills</p>
                        <div className='dot' ><Icon icon="fluent-mdl2:location-dot" /></div>

                        <p>Exp</p>

                    </div>

                    <div className='rating'>
                        <h6>4.97</h6>
                    </div>








                </div>
                <div className='professionals'>

                    <img src={img4} alt='img4' />

                    <div className='para'> <p1>Jessie M.</p1> </div>



                    <div className='d-flex' >
                        <p>Topic</p>
                        <div className='dot' ><Icon icon="fluent-mdl2:location-dot" /></div>

                        <p>Skills</p>
                        <div className='dot' ><Icon icon="fluent-mdl2:location-dot" /></div>

                        <p>Exp</p>

                    </div>

                    <div className='rating'>
                        <h6>4.98</h6>
                    </div>








                </div>
                <div className='professionals'>

                    <img src={img5} alt='img5' />

                    <div className='para'> <p1>Gwen S.</p1> </div>



                    <div className='d-flex' >
                        <p>Topic</p>
                        <div className='dot' ><Icon icon="fluent-mdl2:location-dot" /></div>

                        <p>Skills</p>
                        <div className='dot' ><Icon icon="fluent-mdl2:location-dot" /></div>

                        <p>Exp</p>

                    </div>

                    <div className='rating'>
                        <h6>4.97</h6>
                    </div>








                </div>


            </div>

        </div>
    )
}

export default Counselor