import React, { useState } from "react";
import "./creatoruploadpodcast.css";
import axiosInstance from "../../Baseurl";

function CreatorUploadPage() {
  const [CreatorPodcast, setCreatorPodcast] = useState({
    creatorname: "",
    podcastname: "",
    description: "",
    image: "",
    audio: "",
  });
  const creatorPodcastChange = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    setCreatorPodcast({
      ...CreatorPodcast,
      [e.target.name]:
        e.target.name === "image" || e.target.name === "audio"
          ? e.target.files
            ? e.target.files[0]
            : null
          : e.target.value,
    });
    // console.log(CreatorPodcast);
  };

  const UploadImage = async (e) => {
    e.preventDefault();
    let data = new FormData();
    for (let key in CreatorPodcast) {
      if( key != "image" && key != "audio"){
        data.append(key, CreatorPodcast[key]);
      }
    }
    console.log(data.get('image'),"data");
    data.append('files',CreatorPodcast.image);
    data.append('files',CreatorPodcast.audio);
    axiosInstance
      .post("/creator_upload_podcast", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response, "y");
        // alert(response.data.msg);
        // window.location.reload();
      })
      .catch((error) => {
        console.error("Error submitting data: ", error);
      });
  };
  return (
    <div className="podcast_upload">
      <div className="container">
        <h4 className="text-center">Upload Podcast</h4>
        <div className="row">
          <div className="col">
            <label className="Creator_Name_label" for="">
              Creator Name
            </label>
            <input
              name="creatorname"
              type="text"
              class="form-control"
              id="Creator_Name"
              placeholder="User name"
              onChange={creatorPodcastChange}
            ></input>
            <label className="Creator_Name_label" for="">
              Podcast Name
            </label>
            <input
              type="text"
              class="form-control"
              id="podcast_Name"
              placeholder="Title"
              onChange={creatorPodcastChange}
              name="podcastname"
            ></input>
            <label className="Creator_Name_label" for="">
              Description
            </label>
            <textarea
              name="description"
              class="form-control"
              id="description"
              rows={4}
              cols={40}
              onChange={creatorPodcastChange}
            />
          </div>
          <div className="col">
            <label className="Creator_Name_label" for="">
              Cover Image
            </label>
            <input
              type="file"
              class="form-control"
              id="coverimg"
              placeholder=""
              name="image"
              onChange={creatorPodcastChange}
            ></input>
            <label className="Creator_Name_label" for="">
              Audio MP3
            </label>
            <input
              type="file"
              class="form-control"
              id="audiofile"
              placeholder=""
              name="audio"
              onChange={creatorPodcastChange}
            ></input>
          </div>
        </div>
        <button className="btn btn-light ms-5 px-5" onClick={UploadImage}>
          Upload
        </button>
        <button type="reset" className="btn btn-secondary ms-4 px-5">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default CreatorUploadPage;
