import React from "react";
import "../styles/Feed.css";

import TweetBox from "./TweetBox";
import Post from "./Post";

function Feed() {
  return (
    <section className="feed">
      {/* Header */}
      <header className="feed__header">
        <h2>Home</h2>
      </header>

      {/* TweetBox */}
      <TweetBox />

      {/* Post */}
      <Post
        displayName="ElCarroto"
        username="carrotFortnite"
        text="PUBG looks so nice !"
      />
      <Post
        displayName="Pokemon"
        username="realPokemon"
        text="I'll be streaming at 10pm !"
      />
      <Post displayName="Raph" username="devraph" text="I love front-end :)" />
      <Post
        displayName="FranceInfo"
        username="franceinfo"
        text="#freeWinamax"
      />
      {/* <Post
        displayName="Random"
        username="random_off"
        text="Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte."
      /> */}
      <Post
        displayName="Last"
        username="lasttweet"
        text="mana mana tu tu lululu"
      />
      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
    </section>
  );
}

export default Feed;
