import Link from "next/link";
import DNavbar from "../components/DNavbar";
export default function Tutorial() {
    return (
        <div id ="Home">
            <div className="wrapper">
                <DNavbar/>

            <div className="TUTSideNav">
                <ul className="TUTList">
                    <a href="#Home"><li>Home</li></a>
                    <a href="#GettingStarted"><li>Getting Started</li></a>
                    <a href="#AddingBot"><li id="subsection">Adding the bot normally</li></a>
                    <a href="#BuildingBot"><li id="subsection">Building the bot yourself</li></a>
                    <a href="#BuiltInSlash"><li>Built-in Slash Commands</li></a>
                    <a href="#ModCommands"><li id="subsection">Moderation Commands</li></a>
                    <a href="#Kick"><li id="sub_subsection">Kick</li></a>
                    <a href="#Ban"><li id="sub_subsection">Ban</li></a>
                    <a href="#Clear"><li id="sub_subsection">Clear</li></a>
                    <a href="#ReactBoard"><li id="sub_subsection">ReactBoard</li></a>
                    <a href="#GenCommands"><li id="subsection">General Commands</li></a>
                    <a href="#Ping"><li id="sub_subsection">Ping</li></a>
                    <a href="#Fix"><li id="sub_subsection">Fix</li></a>
                    <a href="#Play"><li id="sub_subsection">Play</li></a>
                    <a href="#Meme"><li id="sub_subsection">Meme</li></a>
                    <a href="#Level"><li id="sub_subsection">Level</li></a>
                    <a href="#Trivia"><li id="sub_subsection">Trivia</li></a>
                    <a href="#Poll"><li id="sub_subsection">Poll</li></a>
                    <a href="#NewSlash"><li>Creating new slash commands</li></a>
                    <a href="#Support"><li>Support</li></a>
                </ul>
            </div>

            <div className="TutorialBox">
                <img src="https://raw.githubusercontent.com/ThomasCross257/CSEBot-Project/prototype_1/res/D-BotLogo2.png" id="D-botTut"/>
                <h1>CSEBot - D-Bot Version 1.00 (Steg)</h1>
                <h2 id="GettingStarted">Getting Started</h2>
                <h3 id="AddingBot">Adding the bot normally</h3>
                <p>This is the most basic and straightforward of options for adding D-Bot to your server. You have two options in this case, through the URL on our website or though discord itself!</p>
                <h4>Through our Website</h4>
                <p>Going to our homepage, you will see a bright orange link like so.</p>
                <a href="https://cdn.discordapp.com/attachments/959575994371563620/959591006838358026/brave_P2pHFT2jlq.png" target="_blank"><img id="InlineIMG"src="https://cdn.discordapp.com/attachments/959575994371563620/959591006838358026/brave_P2pHFT2jlq.png"/></a>
                {"\n"}
                <a href="https://cdn.discordapp.com/attachments/959575994371563620/959591006838358026/brave_P2pHFT2jlq.png" target="_blank"><sub>(Click to expand image)</sub></a>
                <p>Clicking on the link will take you to a page like this, where you will be prompted to invite the bot to your discord server.</p>
                <a href="https://cdn.discordapp.com/attachments/959575994371563620/959591007094181888/brave_2XT1TbsfUQ.png" target="_blank"><img id="InlineIMG" src="https://cdn.discordapp.com/attachments/959575994371563620/959591007094181888/brave_2XT1TbsfUQ.png"/></a>
                {"\n"}
                <a href="https://cdn.discordapp.com/attachments/959575994371563620/959591007094181888/brave_2XT1TbsfUQ.png" target="_blank"><sub>(Click to expand image)</sub></a>
                <p>Remember, you can only add D-Bot to a server if you have administrator privileges there. If you are not the server owner, please be sure to get their consent before adding it!</p>
                <h4>Through Discord</h4>
                <p>If you are in our discord server, or another discord server with D-Bot, you can click on D-bot and you will be prompted with the option "Add to Server"</p>
                <img id="InlineIMGVert" src="https://cdn.discordapp.com/attachments/959575994371563620/959591007337467924/unknown.png"/>
                <p>Once again you will be prompted with some of the same methods of verification for adding the bot. The previous forewarning still stands.</p>
                <img id="InlineIMGVert" src="https://cdn.discordapp.com/attachments/959575994371563620/959591007673004042/unknown.png"/>
                <h3 id="BuildingBot">Building the bot yourself</h3>
                <p>While D-bot can be used as the developers intend, if you have some skill in coding, you can build the bot and run it off of your own computer through another bot framework. Be sure to install node.js before going any further!</p>
                <p>Download our <a href="https://github.com/ThomasCross257/CSEBot-Project" target="_blank">repository</a> or install git and use the following commands.</p>
                <div class="CodeBlock">
                    <code>git clone https://github.com/ThomasCross257/CSEBot-Project.git</code>{"\n"}
                    <code>cd CSEBot-Project</code>
                </div>
                
                <p>Now that you are in the directory of the folder, you will need to run the following command:</p>
        <div class="CodeBlock">
            <code>npm install</code>
        </div>
        <p>This will install all of D-Bot's dependencies it requires to run.</p>
        <p>Finally, you will need a .env file. This file will act as a holder for all of your variables. So, be sure to paste the corresponding variables to run the bot.</p>
        <div class="CodeBlock">
            <code>BOT_TOKEN</code>{"\n"}
            <code>CLIENT_ID</code>{"\n"}
            <code>GUILD_ID (For guild exclusive commands only.)</code>{"\n"}
            <code>DASHBOARD_PORT (If you want to use the dashboard.)</code>{"\n"}
            <code>MONGO_ID (For functions like level, & trivia)</code>{"\n"}
            <code>CLIENT_SECRET</code>{"\n"}
            <code>SERVER_SECRET</code>
        </div>
        <p>When you're finished, run the following command from your root directory:</p>
        <div class="CodeBlock"><code>
            npm run
        </code></div>
        <p>You should be able to run D-Bot's code through your bot!</p>
        <h2 id="BuiltInSlash">Built-in Slash Commands</h2>
        
        <h3 id="ModCommands">Moderation Commands</h3>
        <p>These commands require administrator privileges to function. Any user without them will be promptly denied access to them.</p>
        <h4 id="Kick">Kick</h4>
        <p>Simply kicks a user from the server. Will take the user parameter so you can search through their tags. Extremely useful if you need to have a large server with over a hundred users.</p>
        
        <h4 id="Ban">Ban</h4>
        <p>Similar functionality as ban. Takes user as a parameter. Banned users are banned by IP and cannot rejoin the server at all.</p>
        
        <h4 id="Clear">Clear</h4>
        <p>Clears up to 100 messages inside of a channel. Can be specified to clear the messages of a specific user if desired.</p>
        <h4 id="ReactBoard">ReactBoard</h4>
        <p>Creates a set of buttons with roles to allow users to assign roles to themselves. NOTE: Administrator roles can also be assigned this way too. Be careful when selecting the roles you want to give users!</p>
        <h3 id="GenCommands">General Commands</h3>
        <p>These commands are specifically made for general use and can be used by anyone regardless of priveledge.</p>
        <h4 id="Ping">Ping</h4>
        <p>Simply replies with "Pong" if called. Meant to be used to test if the bot is working or not.</p>
        <h4 id="Fix">Fix</h4>
        <p>If you have a problem with a twitter link embedding itself properly in Discord, you can use this command, paste the URL in and it will be more accessible to both mobile and desktop users alike.</p>
        <h4 id="Play">Play</h4>
        <p>Every good discord bot plays music in voice chats, and this one is no exception to that rule. use the command and then paste the link to the Youtube video you want to listen to.</p>
        <h4 id="Meme">Meme</h4>
        <p>Using this command will alow you to return a meme from subreddits like r/memes & dankmemes into your channel.</p>
        <h4 id="Level">Level</h4>
        <p>This will allow you to view your D-Bot level. If for whatever reason the bot did not manage to register you to the server, this command will automatically register you with the database upon first use.</p>
        <h4 id="Trivia">Trivia</h4>
        <p>Sit back, relax and play a game of trivia with this command. Upon being called, this command will generate multiple-choice trivia questions of varying difficulty. Correct answers will increase your overall EXP!</p>
        <h4 id="Poll">Poll</h4>
        <p>Will create a poll in discord with up to four options. The poll will end after a specified amount of minutes by the user with 1 being the shortest. Results are only visible after the </p>
        <h2 id="NewSlash">Creating new slash commands</h2>
        <p>If you by chance used the instructions above to build the bot manually, you will no doubt want to build your own slash commands.</p>
        <p>In the commands directory, create a file, and name it something like [insertcommandname].js. (Note: Do not use spaces in the creation of commands)</p> 
        <p>Next, paste the following template in your new file:</p>
        <div class="CodeBlock">
           
            <code>const {"{"} SlashCommandBuilder {"}"} = require('@discordjs/builders');</code>{"\n"}{"\n"}

            <code>module.exports = {"{"}</code>{"\n"}
            <code>data: new SlashCommandBuilder()</code>{"\n"}
                <code>.setName('CommandName')</code>{"\n"}
                <code>.setDescription('Description'),</code>{"\n"}
                <code>async execute(interaction) {"{"}</code>{"\n"}
                <code>await interaction.reply('Hello World!');</code>{"\n"}
                <code>{"}"},</code>{"\n"}
                <code>{"}"};</code>{"\n"}
        </div>
        <p>Add the necessary code to make your function work as intentded. When you are finished, type: </p>
        <div class="CodeBlock"><code>
            npm run deploy
        </code></div>
        <p>In your root directory's command line.</p>
        <h2 id="Support">Support</h2>
        <p>If you have any questions or concerns about the bot, or are running into some unexpected errors, feel free to open up a support ticket through our bot!</p>
        <p>Use the command /support-send to send us a ticket through the bot! In the future, we will also have a website for you to reach out to us and ask any questions or get assistance with the bot!</p>
        <p>Example:</p>
        <p>Remember to always keep your ticket ID close by, otherwise, you won't be able to find your ticket as easily!</p>
        <p>Be sure to use the command /support-check to check on your ticket to see if your request has been resolved!</p>
                
            </div>

            </div>
        </div>
    )
}