import DNavbar from '../components/DNavbar'
export default function Dashboard() {
    
    return(
        <DNavbar/>
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