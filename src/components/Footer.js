import React from "react"

import logo from "../img/logo.svg"

const Footer = () => {
  return (
    <footer className="bg-white py-20">
      <div className="container flex justify-center">
        <img src={logo} alt="Silent Cow" className="w-8/12 sm:w-1/2 lg:w-1/3 self-center h-full object-contain" />
      </div>
    </footer>
  )
}

export default Footer
