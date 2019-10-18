import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../img/logo.svg"

const Navbar = () => {
  const links = [
    // {
    //   name: "About",
    //   href: "/about",
    // },
  ]

  const [isNavToggle, toggleNavbar] = useState(false)

  const navActiveClasses = isNavToggle ? "flex md:flex" : "hidden md:flex"

  return (
    <>
      <nav className="container flex flex-wrap justify-center md:justify-between items-center">
        <Link to="/" className="w-48 nav-header flex-shrink-0">
          <img className="object-fit" src={logo} alt="Silent Cow" />
        </Link>
      </nav>
    </>
  )
}

export default Navbar
