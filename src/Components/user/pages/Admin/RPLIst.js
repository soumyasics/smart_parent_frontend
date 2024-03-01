import React from "react";
import "./rplist.css";
import Sidebar from "./Sidebar";

function RPLIst() {
  return (
    <div>
      <div className="row">
        <div className="col-2">
        <Sidebar/>
        </div>
        <div className="col-8 ms-5 container">
        <h3 className="mt-5">All Resource person Requests</h3>
        <table class="table">
        <thead>
          <tr>
          <th scope="col">profilePicture</th>
            <th scope="col">name</th>
            <th scope="col">qualification</th>
            <th scope="col">experienceYear</th>
            <th scope="col">age</th>
            <th scope="col">Email</th>
            <th scope="col">Accept</th>
            <th scope="col">Reject</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mar  jjjjjjjjjjk</td>
            <td>Otmjjjjjjjjjto</td>
            <td>@mmmmmmmmmmmmmmmmdo</td>
            <td>Mardmvnjfvhk</td>
            <td>Otkdvnmkjjjjjjjjjjjjjjjjjjjjjjjjjjfvfto</td>
            <td><button>Accept</button></td>
            <td><button>Reject</button></td>
          </tr>
        </tbody>
      </table>
        </div>
      </div>
    </div>
  );
}

export default RPLIst;
