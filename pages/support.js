import Link from "next/link";
import DNavbar from "../components/DNavbar";
export async function getServerSideProps() {
    const res = await fetch(`http://localhost:3001/tickets`);
    const data = await res.json();

    data.map((ticket)=> {
        console.log(ticket);
    })
    return {props: {data},}
}

export default function Support({data}) {
    return (
        <div className="wrapper">
            <DNavbar/>

            <div classname="OpenTickets">
                <div id="UserMode">
                    <div id="TicketCol">
                        <h2>Ticket ID</h2>
                        {data.map((ticket)=> (
                            <h3>{ticket.ticketID}</h3>
                        ))}
                    </div>
                    <div id="ProblemCol">
                        <h2>Issue</h2>
                        {data.map((ticket)=> (
                            <h3>{ticket.problem}</h3>
                        ))}
                    </div>
                    <div id="ResolvedCol">
                        <h2>Resolved</h2>
                        {data.map((ticket)=> (
                            <h3>{ticket.resolved ? "Yes" : "No"}</h3>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}