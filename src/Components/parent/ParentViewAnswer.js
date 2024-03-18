import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../apis/axiosInstance";
import BASE_URL from "../../apis/baseUrl";
import Table from "react-bootstrap/Table";
import Usernav from "../../pages/commonHomePage/Components/Comp1";
function ParentViewAnswer() {
  const [Answers, seAnswers] = useState([]);
  const navigate = useNavigate();
  async function getData(id) {
    console.log(id);
    try {
      const res = await axiosInstance.get("/viewAddAnswersByParentId/" + id);
      seAnswers(res.data.data);
    } catch (e) {}
  }
  useEffect(() => {
    const id = JSON.parse(localStorage.getItem("parentData"))._id;
    getData(id);
  }, []);

  return (
    <div style={{height:"100vh"}}>
    <Usernav />
      <div className="container mt-5">
        <h2>Task Results</h2>
        <Table striped bordered hover size="sm" className="mt-5">
          <thead>
            <tr>
              <th> Task </th>
              <th>Answer1</th>
              <th>Answer2 </th>
              <th>Answer3</th>
              <th>Answer4</th>
              <th>Answer4</th>
              <th>Total Score</th>
            </tr>
          </thead>
          {Answers.map((items, index) => (
            <tbody>
              <tr>
                <td>{index + 1}</td>
                <td>{items.score1}</td>
                <td>{items.score2}</td>
                <td>{items.score3}</td>
                <td>{items.score4}</td>
                <td>{items.score5}</td>
                <td>{items.total}</td>
              </tr>
            </tbody>
          ))}
        </Table>{" "}
      </div>{" "}
    </div>
  );
}

export default ParentViewAnswer;
