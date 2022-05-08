import Link from "next/link";
import DNavbar from "../components/DNavbar";
import { parseCookies } from "nookies";
/*
export async function getServerSideProps() {
    const res = await fetch(`http://localhost:3001/tickets`);
    const data = await res.json();

    data.map((ticket)=> {
        console.log(ticket);
    })
    return {props: {data},}
}
*/
export default function Support(props) {
    console.log(props)
    return (
        <div className="wrapper">
            <DNavbar props={props}/>

            <div classname="OpenTickets">
                <div id="UserMode">
                    <div id="TicketCol">
                        <h2>Ticket ID</h2>
                        {props.data.map((ticket)=> (
                            <h3>{ticket.ticketID}</h3>
                        ))}
                    </div>
                    <div id="ProblemCol">
                        <h2>Issue</h2>
                        {props.data.map((ticket)=> (
                            <h3>{ticket.problem}</h3>
                        ))}
                    </div>
                    <div id="ResolvedCol">
                        <h2>Resolved</h2>
                        {props.data.map((ticket)=> (
                            <h3>{ticket.resolved ? "Yes" : "No"}</h3>
                        ))}
                    </div>
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

Support.getInitialProps = async (ctx) => {
    const res = await fetch(`http://localhost:3001/tickets`);
    const data = await res.json();

    data.map((ticket)=> {
        console.log(ticket);
    })
  const  {authorization} = parseCookies(ctx);
  const { token } = ctx.query;
  const  props = await getUser(authorization || token);
  return { data: data, authorization: props.authorization };
}