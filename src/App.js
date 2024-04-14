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
import Footer from "../src/pages/commonHomePage/Components/commonFooter.jsx";
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
import Rpblog from "./Components/resource_person/RP_Pages/Blog/Rpblog";
import ViewResourcePersonDetails from "./pages/viewResoucePerson/resoucePersonDetails";
import SubscribePaymentPage from "./pages/subscribePaymentPage/subscribePaymentPage";
import AdminDashboard from "./Components/user/pages/Admin/AdminDashboard";
import "./App.css";
import TutorailWatch from "./pages/resouce-person/rp-view-tutorial/tuturial-watch";
import SubscribedRp from "./pages/mySubscriptions/subscribedRp";
import ParentTutorialWatch from "./pages/parent/parent-tutorial-watch/parent-tutorial-watch";
import RpAddTask from "./pages/resouce-person/rp-add-task/rp-add-task";
import RpViewSubscribers from "./pages/resouce-person/view-subscribers/view-subscribers";
import ParentList from "./Components/user/pages/Admin/ParentList";
import Rpresetpass from "./Components/resource_person/Sign_up&Sign_in/Rpresetpass";
import Counselorresetpass from "./Components/counsellor/signup&signin/Counselorresetpass";
import ConselorHome from "./Components/counsellor/counselor_pages/ConselorHome";
import ViewAllTasks from "./pages/mySubscriptions/viewTaskDetails";
import Counseloraddtutorials from "./Components/counsellor/counselor_pages/Tutorials/Counseloraddtutorials";
import RpMain from "./Components/user/pages/Admin/RpMain";
import RpViewBlog from "./pages/resouce-person/view-blog/rp-view-blog";
import BlogList from "./Components/user/pages/Admin/BlogList.js";
import ParentViewBlogDetails from "./pages/mySubscriptions/parent-view-blog-details";
import CounselorAccepted from "./Components/user/pages/Admin/counselor_Accepted.js";
import SubscriptionList from "./Components/user/pages/Admin/SubscriptionList.js";
import TutorialList from "./Components/user/pages/Admin/TutorialList.js";
import ShowBlogContent from "./pages/mySubscriptions/showBlogContent.jsx";
import ShowOneBlog from "./Components/user/pages/Admin/ShowOneBlog.js";
import CounsellorProfileEdit from "./Components/counsellor/counselor_pages/Profile/CounsellorProfileEdit.js";
import RPprofileEdit from "./Components/resource_person/RP_Pages/Profile/RPprofileEdit.js";
import Rpchatmain from "./Components/user/User_Pages/rpchat/Userchatmain.js";
import Userchatmain from "./Components/user/User_Pages/Chat/Userchatmain.js";
import UserCounsellorChat from "./Components/user/User_Pages/chat-to-counsellor/Userchatmain.js";
import Rpchat from "./Components/resource_person/RP_Pages/Chat/Rpchat";
import CounsellorViewTutorial from "./Components/counsellor/counselor_pages/View-Tutorials/counsellor-view-tutorial.jsx";
import CounsellorWatchTutorial from "./Components/counsellor/counselor_pages/View-Tutorials/counsellor-tuturial-watch.jsx";
import ViewCounsellorDeatils from "./Components/user/pages/counsellor/viewCouncellorDeatails.jsx";
import ParentWatchCounselorTutorial from "./Components/user/pages/counsellor/View-Tutorials/counsellor-tuturial-watch.jsx";
import ParentViewAnswer from "./Components/parent/ParentViewAnswer.js";
import userNav from "./pages/commonHomePage/Components/Comp1.js";
import CounsellorToParentChat from "./Components/user/User_Pages/counsellor-to-parent/Userchatmain.js";
import RpListDetails from "./Components/user/pages/Admin/rpListDetails.jsx";
import CounsellorDetails from "./Components/user/pages/Admin/conselorDetails.jsx";
import PaymentList from "./Components/user/pages/Admin/paymentList.jsx";
function App() {
  return (
    <div className="appjs">
      <Router basename="/smart_parent">
        <Routes>
          <Route path="/" element={<CommonHomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/sign_up" element={<SignUp />} />
          <Route path="/sign_in" element={<SignIn />} />
          <Route path="/reset_password" element={<ResetPass />} />
          <Route path="/counsellor" element={<Counselor />} />
          <Route
            path="/view-counsellor/:id"
            element={<ViewCounsellorDeatils />}
          />
          <Route
            path="/counselor-tutorial-video/:id"
            element={<ParentWatchCounselorTutorial />}
          />

          {/* User  */}

          <Route path="/user_resourceperson" element={<Useresource />} />
          <Route path="/user_counselor" element={<Usercounselor />} />
          <Route path="/user_subscription" element={<Usersubscription />} />
          <Route path="/user_task" element={<Usertask />} />
          <Route path="/user_chat" element={<Userchatmain />} />
          <Route path="/counsellor_chat" element={<UserCounsellorChat />} />

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
          <Route path="view-task-details/:taskId" element={<ViewAllTasks />} />
          <Route path="view-blog-details/:blogId" element={<RpViewBlog />} />
          <Route
            path="parent-view-blog-details/:blogId"
            element={<ParentViewBlogDetails />}
          />
          {/* Counselor */}

          <Route path="/counselor_signup" element={<Counsellorsignup />} />
          <Route
            path="/counselor_resetpassword"
            element={<Counselorresetpass />}
          />

          <Route
            path="/counselor_subscribers"
            element={<Counselorsubscribers />}
          />
          <Route
            path="/counselor-add-tutorial"
            element={<Counseloraddtutorials />}
          />
          <Route
            path="/counselor-view-tutorial"
            element={<CounsellorViewTutorial />}
          />
          <Route
            path="/counselor-watch-tutorial/:id"
            element={<CounsellorWatchTutorial />}
          />
          <Route
            path="/view_counsiler_details/:id"
            element={<ViewResourcePersonDetails />}
          />
          <Route
            path="/counsellor_home"
            element={[<Counsellornav />, <ConselorHome />, <Footer />]}
          />
          <Route path="/counsellor_nav" element={<Counsellornav />} />
          <Route
            path="/counselor_profile/:id"
            element={[<Counsellornav />, <Counselorprofile />, <Footer />]}
          />
          <Route
            path="/counselor_blogs"
            element={[<Counsellornav />, <Counselorblogs />, <Footer />]}
          />
          <Route
            path="/counselor_chat"
            element={[<Counsellornav />, <Counselorchat />, <Footer />]}
          />

          {/* Resource Person */}

          <Route path="/resourceperson_signup" element={<Rpsignup />} />
          <Route path="/resourceperson_chat" element={<Rpchat />} />
          <Route
            path="/counselor_to_parent_chat"
            element={<CounsellorToParentChat />}
          />
          <Route
            path="/resourceperson_resetpassword"
            element={<Rpresetpass />}
          />
          <Route path="/resourceperson_task" element={<Rptask />} />
          <Route path="/rp_chat" element={<Rpchatmain />} />
          <Route
            path="/resourceperson_profile/:id"
            element={[<Rpnav />, <Rprofile />]}
          />
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
          <Route path="/resourceperson_blog" element={<Rpblog />} />

          {/*ajeena*/}

          <Route
            path="/view-resource-person-details/:id"
            element={<ViewResourcePersonDetails />}
          />
          <Route path="/rp-add-task" element={<RpAddTask />} />
          <Route path="/rp-view-subscribers" element={<RpViewSubscribers />} />

          {/*ajeena*/}
          <Route path="/admin" element={<AdminSignin />} />
          <Route path="/admin_home" element={<AdminHome />} />
          <Route
            path="/resource_person_home"
            element={[<Rpnav />, <ResourcePersonHome />]}
          />
          <Route path="/parent_home" element={<ParentHome />} />

          <Route path="/rp_list" element={<RpMain />} />
          <Route path="/rp_pendinglist" element={<RPLIst />} />
          <Route path="/rp_pendinglist/:id" element={<RpListDetails />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/counsiler_list" element={<Counselorlist />} />
          <Route path="/counsiler_list/:id" element={<CounsellorDetails />} />
          <Route path="/counsiler_accepted" element={<CounselorAccepted />} />
          <Route path="/user_nav" element={<Usernav />} />
          <Route path="/admin_dashboard" element={<AdminDashboard />} />
          <Route path="/rpnav" element={<Rpnav />} />
          <Route path="/parent_list" element={<ParentList />} />
          <Route path="/payment_list" element={<PaymentList />} />
          <Route path="/parent_list" element={<Footer />} />
          <Route path="/blog_list" element={<BlogList />} />
          <Route path="/subscription_list" element={<SubscriptionList />} />
          <Route path="/tutorials_list" element={<TutorialList />} />
          <Route path="/show_blog_content/:blogId" element={<ShowOneBlog />} />
          <Route
            path="/counsellor_profile_edit/:id"
            element={[<Counsellornav />, <CounsellorProfileEdit />, <Footer />]}
          />
          <Route
            path="/rp_profile_edit/:id"
            element={[<Rpnav />, <RPprofileEdit />, <Footer />]}
          />
          <Route
            path="/parent_answers"
            element={[<userNav />, <ParentViewAnswer />]}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
