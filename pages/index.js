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

function Home(props) {
  return (
    <div>
      <div className="wrapper">

        <DNavbar props={props.props.props}/>
        
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
            <form action="https://getform.io/f/d762663a-ba40-49ed-b216-1e4535d31898" method="POST">
                Have a command idea you'd like to suggest, do so here!{"\n"}
            {"\n"}
                <textarea rows="20" cols="75" name="Suggestion"></textarea>
                <br/>
                <input type="submit" value="Send"/>
                <button type="reset">Reset Form</button>
            </form>
          </div>
          <div id ="Welcome">Welcome D-Bot. D-bot is a discord bot that is meant to be modular, easy to use and intuitive. Don't worry about prefix conflicts with this bot!
          {"\n"}
          Watch this video if you want to know how to add D-bot to your server!
            <iframe width="560" height="315" src="https://www.youtube.com/embed/8mcQPXz5q4c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div id ="News">
            4/30/22 Dev Diary 2: Release of Prototype 2.{"\n"}
            <p style={{textAlign: "left"}}>
            Hey everyone! Thomas, head of backend development, here to deliver the final version of of D-bot. This post marks a milestone in development, as all major goals for features have been or are in the process of being met. We're very excited to showcase some of our newest features.
            {"\n"}
            {"\n"}
            First and foremost, thank you to all the QA testers that reveiewed our project and gave us useful feedback that helped out with fixing the bugs and making sure they were in line with our functionality!
            {"\n"}
            {"\n"}
            Here's some of the new features that we have added to the bot~
            {"\n"}
            {"\n"}
            Two new commands!: Caption and Guess The Name!
            {"\n"}
            {"\n"}
            Website Improvements: Send us a suggestion sometime! And if you need help, we have the support page!
            {"\n"}
            {"\n"}
            Webhook: Get fresh CSUSB news with the implemented webhook!
            {"\n"}
            {"\n"}
            Dashboard: Create custom commands to enhance your experience with D-Bot!
            {"\n"}
            {"\n"}
            And many more features! Check our release log on github for more!
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
  const res = await fetch('http://localhost:3001/profile',
  {
      method: 'GET',
      headers: {
          'authorization' : authorization
      }
  });
  const user = await res.json()
  console.log("USER HOME_____________________________")
  console.log(user)
  if(res.status === 200) return {authorization, user: user}
  else return {authorization}
}

Home.getInitialProps = async (ctx) => {
  const  {authorization} = parseCookies(ctx);
  console.log(ctx)
  const { token } = ctx.query;
  const  props = await getUser(authorization || token);
  console.log("HOME___________________")
  console.log(props)
  if (props.authorization === undefined) {
    props.authorization = null;
  }
  console.log("HOME___________________")
  console.log(props)
  return {
    props: {props}
  };
}

export default Home;
