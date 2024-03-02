import React from 'react'
import "./Rptutorial.css"
import Img from "../../../../Assets/tutorials.jpg"
import { Icon } from '@iconify-icon/react'

function Rptutorial() {
    return (
        <div className='rptutorials'>

           

            <div className='tutorialicon'>
            <h1>Tutorials</h1>
                <button> <Icon icon="zondicons:add-solid" className='tutorialicon' /></button>
            </div>

            <div class="container text-center">
                <div class="row">

                    <div class="col-4">
                        <div className='tutorialprocontainer'>

                            <div className='tutorialreslist'>


                                <div className='tutorialrppersonmain'>

                                    <div className='tutorialrpimage'>
                                        <img src={Img} alt='tutorials' />
                                    </div>

                                    <div className='tutorialrppersondes'>

                                        <p>Introduction of things parents must teach children | parents teaching a child at home | letstute.</p>


                                        <div className='tutorialbtn'>
                                            <button>VIEW</button>
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

export default Rptutorial