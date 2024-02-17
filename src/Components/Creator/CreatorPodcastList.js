import React, { useState, useEffect } from "react";
import axiosInstance from "../../Baseurl";
import { FaPlus } from "react-icons/fa6";
import './creatorpodcastlist.css';

function CreatorPodcastList({ url }) {
  const [creatorpodcast, setCreatorpodcast] = useState([]);
  useEffect(() => {
    axiosInstance
      .post("/getAllPodcastByCreator", {
        id: localStorage.getItem("creatorid"),
      })
      .then((response) => {
        console.log(response.data.data, "ajeena");
        setCreatorpodcast(response.data.data, "ajeena");
      })
      .catch((error) => {
        console.error("Error submitting data: ", error);
      });
    console.log(creatorpodcast, "ll");
  }, []);

  return (
    <div className="podcast_list_main">
      <div class="container ">
        <div class="row">
          {creatorpodcast.length ? (
            creatorpodcast.map((a) => {
              return (
                <div className="card col-3" id="podcastlist_card">
                  <div class="podcastlist_card_img">
                    <img
                    src={url + a.coverimage.filename}
                    class="card-img-top"
                      id="adminclub"
                      alt="..."
                    />
                  </div>
                  <div class="podcastlist_card_content">
                    <h4 class="card-title mt-3 mb-2">{a.podcastname}</h4>
                    <h6 class="card-text col">{a.creatorname}</h6>
                    <h6 class="card-text">{a.description}</h6>
                    <button>Subscribe</button>
                    <button>
                      <FaPlus />
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="no_data">
              <h1>No podcast found</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CreatorPodcastList;
