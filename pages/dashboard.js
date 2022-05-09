import DNavbar from '../components/DNavbar'
import { parseCookies } from "nookies";
import Image from 'next/image'
import profilePic from '../public/assets/images/brave.png'

function dummyCommandCreate(){
    let Name = document.getElementById("NameCreate").value;
    let Description = document.getElementById("Desccreate").value;
    let Response = document.getElementById("CmdResponse").value;
    let Id = document.getElementById("ServerTitle").classList[document.getElementById("ServerTitle").classList.length-1];
    if(Name === "" || Description === "" || Response === ""){
      window.alert("None of the boxes may be empty!");
      return;
    }
    else{
      const newCommand = document.createElement("div");
      const Title = document.createTextNode(Name);
      newCommand.appendChild(Title);
      newCommand.setAttribute('id', "CUSTOM_CMD");
      newCommand.href = "javascript:void(0)";
      document.getElementById("CommandList").appendChild(newCommand);
      document.getElementById("ChildDivs").style.display = "block";
      document.getElementById("CMDCreate").style.display = "none";
      document.getElementById("CMDSelect").style.display = "none";
      document.getElementById("CMDSelect").style.display = "block";
      document.getElementById("noCMD").style.display = "none";
      document.getElementById("firstCreate").style.display  = "none";
      document.getElementById("firstCreate").style.display  = "block";

        const data = {
            'id': Id,
            'name': Name,
            'description': Description,
            'response': Response
        };
        fetch('http://localhost:3001/command', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
        })

    }  
  }

function manageServer(guildid, guildname) {
    var ServerList = document.getElementById("ServerList");
    var Dashboard = document.getElementById("ServerDashboardMain");
    var Name = document.getElementById("ServerListOption");
    if(Dashboard.style.display == "none"){
        Dashboard.style.display = "block";
        ServerList.style.display = "none";
        document.getElementById("ServerTitle").textContent = guildname;
        document.getElementById("ServerTitle").classList.add(guildid);
    } else {
      ServerList.style.display = "none";
      Dashboard.style.display = "none";
      Dashboard.style.display = "block"
      document.getElementById("ServerTitle").textContent = guildname;
      document.getElementById("ServerTitle").classList.add(guildid);
      console.log("Done");
      return;
    }
}

function createCommand() {
    let ChidDivs = document.getElementById("ChildDivs");
    let CreateCommand = document.getElementById("CMDCreate");
    if(ChidDivs.style.display === "block"){
    ChidDivs.style.display = "none";
    CreateCommand.style.display = "block";
    }

    else{
    ChidDivs.style.display = "none";
    CreateCommand.style.display = "none";
    ChidDivs.style.display = "block"
    return;
    }
}

function BackCreate(){
    let ChidDivs = document.getElementById("ChildDivs");
    let CreateCommand = document.getElementById("CMDCreate");
    if(ChidDivs.style.display === "none"){
        CreateCommand.style.display = "none";
        ChidDivs.style.display = "block";
    }
    
    else{
        ChidDivs.style.display = "none";
        CreateCommand.style.display = "none";
        ChidDivs.style.display = "block"
      return;
    }
  }

function Dashboard(props) {
    console.log('==================Dasboard=================')
    console.log(props.props.guilds)
    console.log('===========================================')
    if(!props.props.props.authorization) {
        return (
        <div>
            <DNavbar props={props.props.props}/>
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
            <DNavbar props= {props.props.props}/>
            <div id="ServerBar">
                <h2 id="ServerTitle">No Server Selected</h2>
            </div>
            <div id="ServerList">
                <h2>Select a Server</h2>
                {props.props.guilds.commonGuilds.map( (guild) => (
                    <a href="javascript:void(0)">
                        <div id="ServerListOption" className={guild.id} onClick={() => manageServer(guild.id, guild.name)}>
                        <Image src={profilePic}/>
                            <h3>{guild.name}</h3>
                        </div>
                    </a>
                ))}
            </div>
            <div id="ServerDashboardMain" >
                <div className="DashboardCmdManip">
                    <div id = "ChildDivs">
                        <h2 id="noCMD">No commands? Create one here!</h2>
                        <h2 id="CMDSelect">No command selected</h2>
                        <a href="javascript:void(0)" onClick={createCommand}><div id="firstCreate">Create Command</div></a>
                    </div>
                    <div id="CMDCreate">
                        <h2>Create Command</h2>
                        <label for="Namecreate"><h3>Name:</h3></label><input type="text" id="NameCreate"/>
                        <label for="Desccreate"><h3>Description:</h3></label><input type="text" id="Desccreate"/>
                        <label for="CmdResponse"><h3>Response:</h3></label><input type="text" id="CmdResponse"></input>
                        {"\n"}
                        {"\n"}
                        <a href="javascript:void(0)" onClick={dummyCommandCreate}><div id="CMDCreateBTN">Create Command</div></a>
                        {"\n"}
                        <a href="javascript:void(0)" onClick={BackCreate}><div id="CreateBack">Back</div></a>
                    </div>
                </div>
                <div className="DashboardCmdList">
                <h2>Custom Commands</h2>
            <h3><div id="CommandList">

            </div></h3>
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
    if(res.status === 200) return {authorization, user: user}
    else return {authorization}
}
  
Dashboard.getInitialProps = async (ctx) =>{
    const  {authorization} = parseCookies(ctx);
    const { token } = ctx.query;
    const  props = await getUser(authorization || token);
    console.log('Access Token')
    console.log(props);
    if (props.authorization == undefined) {
        props.authorization = null;
      }
    const req = await fetch('https://discord.com/api/users/@me/guilds', {
        method: 'GET',
        headers: {
            authorization: "Bearer " + props.user.accessToken
        }
    })

    const botreq = await fetch('https://discord.com/api/users/@me/guilds', {
        method: 'GET',
        headers: {
            authorization: "Bot " + process.env.BOT_TOKEN
        }
    })
    const guilds = await req.json();
    const botGuilds = await botreq.json();
    const commonGuilds = guilds.filter((array_el) => {
        return botGuilds.filter((another_el) => {
            return another_el.id == array_el.id
        })
    })
    console.log('==================Guilds=================')
    console.log('------------User Guilds------------')
    console.log(guilds)
    console.log('------------Bot Guilds------------')
    console.log(botGuilds)
    console.log('------------Common Guilds------------')
    console.log(commonGuilds)
    console.log('=========================================')

    return {
        props: {
            props: props,
            guilds: {commonGuilds},
        }
    };
}

export default Dashboard;
