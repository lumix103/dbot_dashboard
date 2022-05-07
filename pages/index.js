import Link from "next/link";
import { parseCookies } from "nookies";
import DNavbar from "../components/DNavbar";
function unhideSuggestions(){
  var a = document.getElementById("Suggestions")
  var b = document.getElementById("Welcome")
  var c = document.getElementById("News")
  var d = document.getElementById("Links")
  if (a.style.display === "none") {
      a.style.display = "block";
      d.style.display = "none";
      b.style.display = "none";
      c.style.display = "none";
    } else {
      a.style.display = "none";
  }
}
function unhideWelcome(){
  var a = document.getElementById("Suggestions")
  var b = document.getElementById("Welcome")
  var c = document.getElementById("News")
  var d = document.getElementById("Links")
  if (b.style.display === "none") {
      b.style.display = "block";
      a.style.display = "none";
      c.style.display = "none";
      d.style.display = "none";
    } else {
      b.style.display = "none";
  }
}
function unhideNews(){
  var a = document.getElementById("Suggestions")
  var b = document.getElementById("Welcome")
  var c = document.getElementById("News")
  var d = document.getElementById("Links")
  if (c.style.display === "none") {
      c.style.display = "block";
      a.style.display = "none";
      b.style.display = "none";
      d.style.display = "none";
    } else {
      c.style.display = "none";
  }
}
function unhideLinks(){
  var a = document.getElementById("Suggestions")
  var b = document.getElementById("Welcome")
  var c = document.getElementById("News")
  var d = document.getElementById("Links")
  if (d.style.display === "none") {
      d.style.display = "block";
      a.style.display = "none";
      b.style.display = "none";
      c.style.display = "none";
    } else {
      d.style.display = "none";
  }
}
function showDetails(){
var a = document.getElementById("UserTag")
var b = document.getElementById("UserID")
var c = document.getElementById("TicketNum")
var d = document.getElementById("AnswerDropDown")
var e = document.getElementById("BackButton");
var f = document.getElementById("TicketInfo");
if (f.style.display === "none" && e.style.display === "none") {
    f.style.display = "inline-block";
    e.style.display = "inline-block";
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
  } else {
    f.style.display = "none";
    e.style.display = "none";
    a.style.display = "inline-block";
    b.style.display = "inline-block";
    c.style.display = "inline-block";
    d.style.display = "inline-block";
}
}

export default function Home(props) {
  console.log('HOME')
  console.log(props);
  return (
    <div>
      <div className="wrapper">

        <DNavbar props={props}/>
        
        <div className="utilities">
          <ul>
              <a href="javascript:void(0)" onClick={unhideWelcome}><li><h2>Welcome</h2></li></a>
              <a href="javascript:void(0)" onClick={unhideSuggestions}><li><h2>Suggestions</h2></li></a>
              <a href="javascript:void(0)" onClick={unhideLinks}><li><h2>Links</h2></li></a>
              <a href="javascript:void(0)" onClick={unhideNews}><li><h2>News</h2></li></a>
          </ul>
        </div>

        <a href="https://discord.com/api/oauth2/authorize?client_id=938563118055952405&permissions=8&redirect_uri=https%3A%2F%2Fd-bot.me%2F&response_type=code&scope=identify%20guilds.members.read%20bot%20applications.commands%20applications.builds.read%20applications.store.update%20guilds.join%20guilds" target="_blank">
          <div className="AddButton">
            Add Bot to Server
          </div>
        </a>

        <a href="https://discord.gg/g53YckNsca" target="_blank">
          <div className="JoinButton">
            Join Our Discord!
          </div>
        </a>

        <div className="WelcomeContent">
          <div id ="Suggestions">
              Have a command idea you'd like to suggest, do so here!{"\n"}
              {"\n"}
              This feature is still in development and slated for Prototype 2. Stay tuned for more info!
          </div>
          <div id ="Welcome">Welcome D-Bot. D-bot is a discord bot that is meant to be modular, easy to use and intuitive. Don't worry about prefix conflicts with this bot!</div>
          <div id ="News">
            4/01/21 Dev Diary 1: Release of Prototype 1.{"\n"}
            <p style={{textAlign: "left"}}>
            Greetings everyone! Thomas, head of backend development here. I'm pleased to report that this post marks the merger of the branch prototype 1 with main, and thus, the first iteration of our discord bot D-Bot!{"\n"}
            Version 1.0's features are vast and too large to simply be summarized within a newspost, but I'll try to do my best!
            {"\n"}
            {"\n"}
            Commands!
            {"\n"}
            {"\n"}
            D-Bot includes a variety of commands that can be separated into two commands.
            {"\n"}
            {"\n"}
            Moderation Commands!: Swiftly and efficently ban, kick or clear the meassages of rowdy users with extinction-level powers!
            {"\n"}
            {"\n"}
            User Commands: Answer trivia questions to gain points, or create polls for interesting topics, all without leaving the comfort of discord!
            {"\n"}
            {"\n"}
            Built-In Discord Functions: We use button interactions and slash commands to make your experience with D-Bot Seamless!
            {"\n"}
            {"\n"}
            And Many more! 
          </p>
          </div>
          <div id ="Links">
            <a href="https://github.com/ThomasCross257/CSEBot-Project">Source Code</a>{"\n"}
          </div>
        </div>

        <div id="Widget">
          <iframe src="https://discord.com/widget?id=952818000694763522&theme=dark" width="100%" height="100%" allowtransparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"/>
        </div>

      </div>
    </div>
  )
}

async function getUser(authorization) {
  const res = await fetch('http://localhost:3001/user')
  if(res.status === 200) return {authorization, user: res.data}
  else return {authorization}
}

Home.getInitialProps = async (ctx) => {
  const  {authorization} = parseCookies(ctx);
  const { token } = ctx.query;
  const  props = await getUser(authorization || token);
  console.log(`Fetched: ${props}`)
  return props;
}