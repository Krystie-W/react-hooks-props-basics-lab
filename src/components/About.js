import React from "react";
import Links from "./Links";

function About(props) {
  const bio = props.bio;
  //I don't like how I've done this, but when I tried to do it as JS inline (in between curly brackets), the test wasn't passing for some reason.
  if (!bio) return (
    <div id="about">
      <h2>About Me</h2>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.linksgh} linkedin={props.linksli} />
    </div>
  )
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{props.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.linksgh} linkedin={props.linksli} />
    </div>
  );
}

export default About;
