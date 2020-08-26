import React from "react";
import "../styles/Widgets.css";
import SearchIcon from "@material-ui/icons/Search";
import { TwitterTweetEmbed, TwitterTimelineEmbed } from "react-twitter-embed";

function Widgets() {
  return (
    <section className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1292927001825808385"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="reactjs"
          options={{ height: 400 }}
        />
      </div>
    </section>
  );
}

export default Widgets;
