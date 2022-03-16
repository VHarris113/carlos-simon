import React from 'react';
// import data from "./data.js";
import Footer from "../Footer";
import "./style.css";

const quote1 ="I also want to share memories of his reactions during the NFL season. In his heart he knew and never doubted that Tampa was going back to the superbowl. He was very aware of all the position players on the team and the reasons they were going to beat the Rams in the playoff game. He was a true fan, in every sense of the word. The Bucs and our class were lucky to have him as long as we did. He was a pleasure to have in class.";
const name1 = "John Dinsmore - Instructor";
const quote2 = "Carlos and I became quite close throughout the bootcamp. I still remember the day I asked him to join our group. We had a fun time doing an activity, and coincidentally, it was the same day the instructor asked us to start thinking about who we should partner with. Since then, we have shared many great memories. Most of our conversations were about coding-related topics. I am not into sports and he was not into the videogames I was into. However, we worked super hard on both our projects and we were VERY proud of our first project. After the first project, we often studied together and practiced the class activities. We always laughed together when working/studying and often just talked afterwards. We were extremely excited to do the third project together. I hope this bootcamp helped him ease some of the burden that he had been carrying. I hope my group and I had as much of a positive impact on him as he did on us.";
const name2 = "Satya Mehta - Classmate/Group Membe";
const quote3 = "Carlos was always a great source of help and knowledge to his classmates. He was a joy to work with and have as a student. He called me into one of the breakout rooms and would ask me great questions that would always keep my knowledge sharp. He will always be one of my best students.";
const name3 = "Veronica Harris - TA";
const quote4 = "Carlos was a good friend and 2 of our other group members are really good friends with Carlos. We Had plans to hangout after our boot camp was over.He was really smart and funny. We talked about many things like music, investing, coding and just things we’ve done like what friends do. He helped me with a lot of topics in class after class hours in our study group. Carlos had a positive impact on me during this boot camp and I can say without his help understanding concepts I don’t know where I would be in this boot camp without our study groups.";
const name4 = "Neal Anand - Classmate/Group Member";


function Thoughts() {
  return (
    <div>
        <div className="quotes">
          <h2>{quote1}</h2>
          <h3>{name1}</h3>
          <hr />
          <h2>{quote2}</h2>
          <h3>{name2}</h3>
          <hr />
          <h2>{quote3}</h2>
          <h3>{name3}</h3>
          <hr />
          <h2>{quote4}</h2>
          <h3>{name4}</h3>
          <hr />
          {/* <h2>{quote1}</h2>
          <h3>{name1}</h3> */}
          <hr />
        </div>
      <Footer />
    </div>
  );
}

export default Thoughts;
