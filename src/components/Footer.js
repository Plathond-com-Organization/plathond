import React from "react"
import { Link } from "gatsby"

import logo from "../img/logo.svg"

const Footer = () => {
  return (
    <footer className="bg-custom-darkgray py-20">
      <div className="container flex justify-center">
        <img src={logo} alt="Silent Cow" className="w-1/3 self-center h-full object-contain" />
      </div>
    </footer>
  )
}

export default Footer
