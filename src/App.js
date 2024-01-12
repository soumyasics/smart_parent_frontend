import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingNav from "./Components/Listener/LandingNav";
import ListenerLogin from "./Components/Listener/ListenerLogin";
import LandingPage from "./Pages/Listener/LandingPage";
import Footer from "./Pages/Listener/Footer";
import ListenerRegister from "./Components/Listener/ListenerRegister";
import ForgotPassword from "./Components/Listener/ForgotPassword";
import ListenerEdit from "./Components/Listener/ListenerProfileEdit";
import CreatorProfileEdit from './Components/Creator/CreatorProfileEdit';
import CreatorLogin from './Components/Creator/CreatorLogin';
import CreatorRegister from './Components/Creator/CreatorRegistration';
import AdminLandingPage from "./Components/Admin/AdminLandingPage";
import ListenerWhishlist from "./Components/Listener/ListenerWhishlist";
import ListenerProfile from "./Components/Listener/ListenerProfile";
import ListenerSubscription from "./Components/Listener/ListenerSubscription";
import CreatorHome from "./Components/Creator/CreatorHome";
import ListenerNav from "./Components/Listener/ListenerNav";
import CreatorNavbar from "./Components/Creator/CreatorNavbar";
import AdminLogin from "./Components/Admin/AdminLogin";
import AdminSidebar from "./Components/Admin/AdminSidebar";
import AdminDashboard from "./Components/Admin/AdminDashboard";
import ListenerHome from "./Components/Listener/ListenerHome";
import CreatorForgot from "./Components/Creator/CreatorForgot";
import CreatorProfile from "./Components/Creator/CreatorProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/landingnav" element={<LandingNav/>} />
        <Route path="/listenernav" element={<ListenerNav/>} />
        <Route path="/creatornav" element={<CreatorNavbar/>} />

        
        <Route path="/" element={[<LandingNav props={{value:"listenerlanding"}}/>,<LandingPage />,<Footer />]} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/sidebar" element={<AdminSidebar/>}/>
      
        <Route path="/listenerlogin" element={[<LandingNav props={{value:"listenerlanding"}} />,<ListenerLogin />,<Footer />]} />
        <Route path='/listenerregister' element={[<LandingNav props={{value:"listenerlanding"}}/>,<ListenerRegister/>,<Footer />]}/>
        <Route path='/listeneredit' element={[<ListenerNav/>,<ListenerEdit/>,<Footer />]}/>

        <Route path="/listenerhome" element={[<ListenerNav/>,<ListenerHome/>,<Footer />]}/>
        <Route path="/forgotpassword" element={[<ListenerNav/>,<ForgotPassword />,<Footer />]} />
        <Route path='/listenerWhishlist' element={[<ListenerNav/>,<ListenerWhishlist/>,<Footer />]}/>
        <Route path='/listenerProfile' element={[<ListenerNav />,<ListenerProfile/>,<Footer />]}/>
        <Route path='/listenersubscription' element={[<ListenerNav/>,<ListenerSubscription/>,<Footer />]}/>

        <Route path="/creatorlogin" element={[<LandingNav props={{value:"creatorlanding"}} />,<CreatorLogin/>,<Footer />]} />
        <Route path='/creatorregister' element={[<LandingNav  props={{value:"creatorlanding"}}/>,<CreatorRegister/>,<Footer />]}/>
        <Route path='/creatorhome' element={[<LandingNav  props={{value:"creatorenterd"}}/>,<CreatorHome/>,<Footer />]}/>
        <Route path='/creatorsubscription' element={[<CreatorNavbar />,<CreatorRegister/>,<Footer />]}/>
        <Route path='/creatorprofile' element={[<CreatorNavbar  />,<CreatorProfile/>,<Footer />]}/>
        <Route path="/creator_forgotpassword" element={[<CreatorNavbar/>,<CreatorForgot />,<Footer />]} />

        <Route path='/creatorredit' element={[<CreatorNavbar />,<CreatorProfileEdit/>,<Footer />]}/>

        <Route path="/adminhome" element={<AdminLandingPage />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/admin_dashboard" element={<AdminDashboard />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
