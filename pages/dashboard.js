import DNavbar from '../components/DNavbar'
import { parseCookies } from "nookies";
export default function Dashboard(props) {
    if(!props.authorization) {
        return (
        <div>
            <DNavbar props={props}/>
            <div className="wrapper">
            <div id="StandardPage">
        <div class="dashboardtitle"><h1>It's time to dino-soar with D-Dash!</h1></div>
        <a href ="http://localhost:3001/oauth/discord"><div class="dashboardEnter"><h2>Login</h2></div></a>
        <div class="DashExplain">
            <h1>What is D-Dash?</h1>
            <p>D-Dash is our answer to popular dashboards offered by bots like Carl-Bot, and Dyno Bot. Meant to deliver fast, secure and efficient custom slash commands to the user for any purpose necessary.</p>
            <p>Currently, functionality is limited at the moment, but as Discord expands upon slash commands, we will implement more functionality and deliver and experience that rivals and even surpasses our aforementioned competitors.</p> 
        </div>
    </div>
            </div>
        </div>
        )
    }
    return(
        <div class="wrapper">
            <DNavbar props= {props}/>
            <div id="ServerBar">
                <h2 id="ServerTitle">No Server Selected</h2>
            </div>
            <div id="ServerList">
                <h2>Select a Server</h2>
            </div>
        </div>
    )
}


async function getUser(authorization) {
    const res = await fetch('http://localhost:3001/user')
    if(res.status === 200) return {authorization, user: res.data}
    else return {authorization}
  }
  
  Dashboard.getInitialProps = async (ctx) => {
    const  {authorization} = parseCookies(ctx);
    const { token } = ctx.query;
    const  props = await getUser(authorization || token);
    console.log(`Fetched: ${props}`)
    return props;
  }