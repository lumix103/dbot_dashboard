import Link from 'next/link'
const DNavbar = (props) => {
    console.log('Dnavbar')
    console.log(props)
    return (
        <div className="navbar">
          <Link href="/dashboard">
              <a>Dashboard</a>
          </Link>
          <Link href="/tutorial">
              <a>Tutorial</a>
          </Link>
          <Link href="support">
              <a>Support</a>
          </Link>
          {
              props.props.authorization ? <a>Logout</a> : <a href="http://localhost:3001/oauth/discord">Login With Discord</a>
          }
          <Link href="/">
              <a>Home</a>
          </Link>
        </div>
    )
}

export default DNavbar;