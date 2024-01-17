import React from "react";
import { IoAdd } from "react-icons/io5";
function CreatorUploadPoadcastEdit() {
  return (
    <div className="podcast_upload">
      <div className="container">
        <h4 className="text-center">Edit Podcast</h4>
        <div className="row">
          <div className="col">
            <label className="Creator_Name_label" for="">
              Creator Name
            </label>
            <input
              type="text"
              class="form-control"
              id="Creator_Name"
              placeholder="User name"
            ></input>
            <label className="Creator_Name_label" for="">
              Podcast Name
            </label>
            <input
              type="text"
              class="form-control"
              id="podcast_Name"
              placeholder="Title"
            ></input>
            <label className="Creator_Name_label" for="">
              Description
            </label>
            <textarea
              name="postContent"
              class="form-control"
              id="description"
              rows={4}
              cols={40}
            />
          </div>
          <div className="col">
            <label className="Creator_Name_label" for="">
              Cover Image
            </label>
            <h1>image</h1>
            <label className="Creator_Name_label" for="">
              Audio MP3
            </label>
            <h1>Audio</h1>
            <p>Total duration : </p>
            <button className="btn btn-light">Change Audio</button>
          </div>
        </div>
        <button className="btn btn-light ms-3 px-5">Save</button>
        <button className="btn ms-3 " id="newepisodeid">
          {" "}
          <IoAdd /> New Episode
        </button>
        <button className="btn btn-secondary ms-3 px-5 text-center">
          Delete
        </button>
      </div>
    </div>
  );
}

export default CreatorUploadPoadcastEdit;
