import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../apis/axiosInstance";
import BASE_URL from "../../apis/baseUrl";
import Table from "react-bootstrap/Table";
import Usernav from "../../pages/commonHomePage/Components/Comp1";
import Footer from "../../pages/commonHomePage/Components/commonFooter";
function ParentViewAnswer() {
  const [Answers, setAnswers] = useState([]);
  const navigate = useNavigate();
  async function getData(id) {
    console.log(id);
    try {
      const res = await axiosInstance.get("/viewAddAnswersByParentId/" + id);
      console.log("res po ans", res);
      let data = res?.data?.data || null;
      if (data) {
        let revData = data.reverse();
        setAnswers(revData);
      } else {
        console.log("Data not found");
      }
    } catch (e) {
      console.log("Error get answer data", e);
    }
  }
  useEffect(() => {
    const id = JSON.parse(localStorage.getItem("parentData"))._id;
    getData(id);
  }, []);

  return (
    <>
      <div style={{ minHeight: "100vh" }}>
        <Usernav />
        <div className="container mt-5">
          <h2>Task Results</h2>
          <Table striped bordered hover size="sm" className="mt-5">
            <thead>
              <tr>
                <th> No.</th>
                <th> Task Title </th>
                <th style={{ width: "400px" }}> Task Description</th>
                <th>Score 1</th>
                <th>Score 2 </th>
                <th>Score 3</th>
                <th>Score 4</th>
                <th>Score 4</th>
                <th>Total Score</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {Answers.map((items, index) => {
                console.log("ite", items);
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{items?.taskid?.title}</td>
                    <td>{items?.taskid?.description}</td>
                    <td>{items?.score1}</td>
                    <td>{items?.score2}</td>
                    <td>{items?.score3}</td>
                    <td>{items?.score4}</td>
                    <td>{items?.score5}</td>
                    <td>{items?.total}</td>
                    <td>{items?.comments}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>{" "}
        </div>{" "}
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </>
  );
}

export default ParentViewAnswer;
