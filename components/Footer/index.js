import React from "react"

const Footer = () => (
  <footer className="w-full border-t bg-white pb-12">
    <div className="w-full container mx-auto flex flex-col items-center">
      <div className="flex flex-col md:flex-row text-center md:text-left md:justify-between py-6">
      </div>
      <div className="capitalize pb-6">&copy;{' '}
        <a href="https://devpleno.com/" target="_blank">Devpleno</a>
      </div>
    </div>
  </footer>
)

export default Footer
