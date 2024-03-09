import Navbar from "../../pages/commonHomePage/Components/Comp1";
import Footer from "../../pages/commonHomePage/Components/commonFooter";
import axiosInstance from "../../apis/axiosInstance";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BASE_URL from "../../apis/baseUrl";
import ShowBlogContent from "./showBlogContent";
const ParentViewBlogDetails = () => {
  return (
    <div>
      <Navbar />
      <ShowBlogContent />
      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
};

export default ParentViewBlogDetails;
