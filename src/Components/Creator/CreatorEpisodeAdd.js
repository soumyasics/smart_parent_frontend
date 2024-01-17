import React from "react";

function CreatorEpisodeAdd() {
  return (
    <div className="podcast_upload">
      <div className="container">
        <h5 className="text-center">Add Episodes</h5>
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
              Episode Title
            </label>
            <input
              type="text"
              class="form-control"
              id="podcast_Name"
              placeholder="Title"
            ></input>
            <label className="Creator_Name_label" for="">
              Episode Description
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
              Episode Cover Image
            </label>
            <input
              type="file"
              class="form-control"
              id="coverimg"
              placeholder=""
            ></input>
            <label className="Creator_Name_label" for="">
              Episode Audio MP3
            </label>
            <input
              type="file"
              class="form-control"
              id="audiofile"
              placeholder=""
            ></input>
          </div>
        </div>
        <button className="btn btn-light ms-3 px-5">Upload</button>
        <button className="btn btn-secondary ms-3 px-5 text-center">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default CreatorEpisodeAdd;
