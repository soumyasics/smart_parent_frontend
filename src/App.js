import React from 'react'
import Navbar from './Components/user/navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Components/user/pages/home/Home'
import About from './Components/user/pages/about/About'
import Gallery from './Components/user/pages/gallery/Gallery'
import Contactus from './Components/user/pages/contactus/Contactus'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import SignIn from './Components/user/pages/Sign_in & Sign_up/SignIn'
import SignUp from './Components/user/pages/Sign_in & Sign_up/SignUp'
import Footer from './Components/user/footer/Footer'
import ResetPass from './Components/user/pages/Sign_in & Sign_up/ResetPass'
import Counsellorsignup from './Components/counsellor/signup&signin/Counsellorsignup'
import Rpsignup from './Components/resource_person/Sign_up&Sign_in/Rpsignup'
import Usernav from './Components/user/navbar/Usernav'
import Counsellornav from './Components/counsellor/navbar/Counsellornav'
import Useresource from './Components/user/User_Pages/RP/Useresource'
import Usercounselor from './Components/user/User_Pages/Counselor/Usercounselor'
import Usersubscription from './Components/user/User_Pages/Subscription/Usersubscription'
import Usertask from './Components/user/User_Pages/Task/Usertask'
import Userchat from './Components/user/User_Pages/Chat/Userchat'
import Userprofile from './Components/user/User_Pages/Profile/Userprofile'
import Counselorblogs from './Components/counsellor/counselor_pages/Blogs/Counselorblogs'
import Counselorchat from './Components/counsellor/counselor_pages/Chat/Counselorchat'
import Counselorprofile from './Components/counsellor/counselor_pages/Profile/Counselorprofile'
import Counselorsubscribers from './Components/counsellor/counselor_pages/Subscribers/Counselorsubscribers'
import Rptask from './Components/resource_person/RP_Pages/Task/Rptask'
import Rpchat from './Components/resource_person/RP_Pages/Chat/Rpchat'
import Rprofile from './Components/resource_person/RP_Pages/Profile/Rprofile'
import Rpsubscribers from './Components/resource_person/RP_Pages/Subscribers/Rpsubscribers'
import Rpnav from './Components/resource_person/navbar/Rpnav'
import Editprofile from './Components/user/User_Pages/Profile/Editprofile'
import Rptutorial from './Components/resource_person/RP_Pages/RP_tutorial/Rptutorial'




function App() {
  return (
    <div className='appjs'>

      <Router>

        <Navbar/>


        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/contactus' element={<Contactus />} />
          <Route path='/sign_up' element={<SignUp />} />
          <Route path='/sign_in' element={<SignIn />} />
          <Route path='/reset_password' element={<ResetPass />} />
          



          {/* User After loged in */}


          <Route path='/user_resourceperson' element={<Useresource />} />
          <Route path='/user_counselor' element={<Usercounselor />} />
          <Route path='/user_subscription' element={<Usersubscription />} />
          <Route path='/user_task' element={<Usertask />} />
          <Route path='/user_chat' element={<Userchat />} />
          <Route path='/user_profile' element={<Userprofile />} />
          <Route path='/user_editprofile' element={<Editprofile/>}/>


          {/* Counselor */}

          <Route path='/counselor_signup' element={<Counsellorsignup />} />
          <Route path='/counselor_blogs' element={<Counselorblogs />} />
          <Route path='/counselor_chat' element={<Counselorchat />} />
          <Route path='/counselor_profile' element={<Counselorprofile />} />
          <Route path='/counselor_subscribers' element={<Counselorsubscribers />} />

          {/* Resource Person */}

          <Route path='/resourceperson_signup' element={<Rpsignup />} />
          <Route path='/resourceperson_task' element={<Rptask />} />
          <Route path='/resourceperson_chat' element={<Rpchat />} />
          <Route path='/resourceperson_profile' element={<Rprofile />} />
          <Route path='/resourceperson_subscribers' element={<Rpsubscribers />} />
          <Route path='resourceperson_tutorials' element={<Rptutorial/>}/>

        </Routes>

        <Footer />

      </Router>


    </div>
  )
}

export default App