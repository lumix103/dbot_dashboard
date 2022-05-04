import Link from 'next/link'
const DNavbar = () => {
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
          <a href="javascript:void(0)">Login With Discord</a>
          <Link href="/">
              <a>Home</a>
          </Link>
        </div>
    )
}

export default DNavbar;