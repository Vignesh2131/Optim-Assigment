import { Navbar } from "flowbite-react"
import { Link } from "react-router-dom"
import { ImCart } from "react-icons/im";
const NavbarComponent = () => {
  return (
    <Navbar fluid rounded className="py-2 px-8">
      <Navbar.Brand as={Link} href="/">
        <img
          src="../../public/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Optim foods logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-bold dark:text-white">
          Optim foods
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="flex items-center">
        <Link className="text-lg" to="/">
          Home
        </Link>
        <Link className="text-lg" to="/order">
          Orders
        </Link>
        <Link className="text-2xl" to="/finalOrder">
          <ImCart />
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent