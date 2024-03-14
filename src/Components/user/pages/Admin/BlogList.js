import "./bloglist.css";
import Sidebar from "./Sidebar";
import axiosInstance from "../../../../apis/axiosInstance";
import react, { useState, useEffect } from "react";
import BASE_URL from "../../../../apis/baseUrl";

function BlogList() {
  const [blogList, setBlogList] = useState([]);

  const CounselorData = async () => {
    try {
      const response = await axiosInstance.get("viewAllBlogs");
      setBlogList(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };


  useEffect(() => {
    CounselorData();
  }, []);
console.log(blogList,"pp");
  return (
    <div>
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-8">
        { blogList.map((item,index)=>{
            return (
            <div className="card m-5">
              <div className="row">
                <div className="col-2">
                  <img className="blogimg" src={BASE_URL + item.img.originalname} alt="img"></img>
                </div>
                <div className="col-5 p-4">
               
                  
                  <div>Blog By : {item.rpid.name}</div>
                  <div>Blog Title : {item.title}</div>
                  <div>Blog content : {item.para1}</div>
                  <div>Blog Conclusion : {item.para2}</div>
                </div>
              </div>
          </div>
          )})}
          </div>
      </div>
    </div>
  );
}
export default BlogList;
