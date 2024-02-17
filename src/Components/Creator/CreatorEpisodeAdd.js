import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";

function CreatorEpisodeAdd() {
  const navigate=useNavigate()

  useEffect(() => {
    if (localStorage.getItem("creatorid") !== null) {
      navigate("/creatorepisodadd");
    } else {
      navigate("/");
    }
  }, []);
  return (
    <div className="podcast_upload">
      <div className="container">
        <h5 className="text-center mb-5">Add Episodes</h5>
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
              disabled
            ></input>
            <label className="Creator_Name_label" for="">
              Podcast Name
            </label>
            <input
              type="text"
              class="form-control"
              id="podcast_Name"
              placeholder="Title"
              disabled
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
            
          </div>
          <div className="col">
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
        <button className="btn btn-light ms-3 px-5 mt-5">Upload</button>
        <button type="reset" className="btn btn-secondary ms-3 px-5 mt-5 text-center">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default CreatorEpisodeAdd;
