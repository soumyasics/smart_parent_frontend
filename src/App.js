import React from "react";
import Navbar from "./Components/user/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/user/pages/home/Home";
import About from "./Components/user/pages/about/About";
import Gallery from "./Components/user/pages/gallery/Gallery";
import Contactus from "./Components/user/pages/contactus/Contactus";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import SignIn from "./Components/user/pages/Sign_in & Sign_up/SignIn";
import SignUp from "./Components/user/pages/Sign_in & Sign_up/SignUp";
import Footer from "../src/pages/commonHomePage/Components/Footer";
import ResetPass from "./Components/user/pages/Sign_in & Sign_up/ResetPass";
import Counselor from "./Components/user/pages/counsellor/Counselor";
import RpAddTutorial from "./pages/resouce-person/rp-add-tutorial/rp-add-tutorial";

import AdminSignin from "./Components/user/pages/Sign_in & Sign_up/AdminSignin";
import AdminHome from "./Components/user/pages/Admin/AdminHome";
import ResourcePersonHome from "./Components/user/pages/Resource_person/ResourcePersonHome";
import ParentHome from "./Components/parent/ParentHome";

import Counsellorsignup from "./Components/counsellor/signup&signin/Counsellorsignup";
import Rpsignup from "./Components/resource_person/Sign_up&Sign_in/Rpsignup";
import Usernav from "./Components/user/navbar/Usernav";
import Counsellornav from "./Components/counsellor/navbar/Counsellornav";
import Useresource from "./Components/user/User_Pages/RP/Useresource";
import Usercounselor from "./Components/user/User_Pages/Counselor/Usercounselor";
import Usersubscription from "./Components/user/User_Pages/Subscription/Usersubscription";
import Usertask from "./Components/user/User_Pages/Task/Usertask";
import Userchat from "./Components/user/User_Pages/Chat/Userchat";
import Userprofile from "./Components/user/User_Pages/Profile/Userprofile";
import Counselorblogs from "./Components/counsellor/counselor_pages/Blogs/Counselorblogs";
import Counselorchat from "./Components/counsellor/counselor_pages/Chat/Counselorchat";
import Counselorprofile from "./Components/counsellor/counselor_pages/Profile/Counselorprofile";
import Counselorsubscribers from "./Components/counsellor/counselor_pages/Subscribers/Counselorsubscribers";
import Rptask from "./Components/resource_person/RP_Pages/Task/Rptask";
import Rpchat from "./Components/resource_person/RP_Pages/Chat/Rpchat";
import Rprofile from "./Components/resource_person/RP_Pages/Profile/Rprofile";
import Rpsubscribers from "./Components/resource_person/RP_Pages/Subscribers/Rpsubscribers";
import Rpnav from "./Components/resource_person/navbar/Rpnav";
import Editprofile from "./Components/user/User_Pages/Profile/Editprofile";
import RpViewTutorial from "./pages/resouce-person/rp-view-tutorial/rp-view-tutorial";
import RPLIst from "./Components/user/pages/Admin/RPLIst";
import Sidebar from "./Components/user/pages/Admin/Sidebar";
import Counselorlist from "./Components/user/pages/Admin/Councilrs_list";
import SubscriptionTable from "./pages/mySubscriptions/mySubscriptions";
import CommonHomePage from "./pages/commonHomePage/commonHomePage";
import ViewResoucePerson from "./pages/viewResoucePerson/viewResoucePerson";
import ViewResourcePersonDetails from "./pages/viewResoucePerson/resoucePersonDetails";
import SubscribePaymentPage from "./pages/subscribePaymentPage/subscribePaymentPage";
import AdminDashboard from "./Components/user/pages/Admin/AdminDashboard";
import "./App.css";
import TutorailWatch from "./pages/resouce-person/rp-view-tutorial/tuturial-watch";
import SubscribedRp from "./pages/mySubscriptions/subscribedRp";
import ParentTutorialWatch from "./pages/parent/parent-tutorial-watch/parent-tutorial-watch";
import RpAddTask from "./pages/resouce-person/rp-add-task/rp-add-task";
import RpViewSubscribers from "./pages/resouce-person/view-subscribers/view-subscribers";

function App() {
  return (
    <div className="appjs">
      <Router>
        <Routes>
          <Route path="/" element={<CommonHomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/sign_up" element={<SignUp />} />
          <Route path="/sign_in" element={<SignIn />} />
          <Route path="/reset_password" element={<ResetPass />} />
          <Route path="/counsellor" element={<Counselor />} />

          {/* User  */}

          <Route path="/user_resourceperson" element={<Useresource />} />
          <Route path="/user_counselor" element={<Usercounselor />} />
          <Route path="/user_subscription" element={<Usersubscription />} />
          <Route path="/user_task" element={<Usertask />} />
          <Route path="/user_chat" element={<Userchat />} />
          <Route path="/user_profile" element={<Userprofile />} />
          <Route path="/user_editprofile" element={<Editprofile />} />
          <Route
            path="/user-payment/:rpId"
            element={<SubscribePaymentPage />}
          />
          <Route path="/user-my-subscription" element={<SubscriptionTable />} />
          <Route path="/subscribed-rp/:id" element={<SubscribedRp />} />
          <Route
            path="/parent-tutorial-watch/:id"
            element={<ParentTutorialWatch />}
          />
          {/* Counselor */}

          <Route path="/counselor_signup" element={<Counsellorsignup />} />
          <Route path="/counselor_blogs" element={<Counselorblogs />} />
          <Route path="/counselor_chat" element={<Counselorchat />} />
          <Route path="/counselor_profile" element={<Counselorprofile />} />
          <Route
            path="/counselor_subscribers"
            element={<Counselorsubscribers />}
          />

          {/* Resource Person */}

          <Route path="/resourceperson_signup" element={<Rpsignup />} />
          <Route path="/resourceperson_task" element={<Rptask />} />
          <Route path="/resourceperson_chat" element={<Rpchat />} />
          <Route path="/resourceperson_profile" element={<Rprofile />} />
          <Route
            path="/resourceperson_subscribers"
            element={<Rpsubscribers />}
          />
          <Route path="/rp-add-tutorial" element={<RpAddTutorial />} />
          <Route path="/rp-view-tutorials" element={<RpViewTutorial />} />
          <Route path="/watch-tutorial/:id" element={<TutorailWatch />} />
          <Route path="/view-resouce-person" element={<ViewResoucePerson />} />
          <Route
            path="/view-resource-person-details/:id"
            element={<ViewResourcePersonDetails />}
          />
          <Route path="/rp-add-task" element={<RpAddTask />} />
          <Route path="/rp-view-subscribers" element={<RpViewSubscribers />} />
          {/* <Route path="" element={< />}/> */}
          {/*ajeena*/}
          <Route path="/admin" element={<AdminSignin />} />
          <Route path="/admin_home" element={<AdminHome />} />
          <Route
            path="/resource_person_home"
            element={[<Rpnav />, <ResourcePersonHome />]}
          />
          <Route path="/parent_home" element={<ParentHome />} />

          <Route path="/rp_list" element={<RPLIst />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/counsiler_list" element={<Counselorlist />} />
          <Route path="/user_nav" element={<Usernav />} />
          <Route path="/admin_dashboard" element={<AdminDashboard />} />
          <Route path="/rpnav" element={<Rpnav />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
