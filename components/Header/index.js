import React from "react"
import Link from "next/link"
import TextLoop from "react-text-loop"

const typeOfService = ["Site de Serviços", "Saas Agendamento", "Controle de Estoque", "Site Restaurante"]

const Header = () => (
  <header className="w-full container mx-auto">
    <div className="flex flex-col items-center py-12">
      <Link href="/">
        <a className="font-bold text-gray-800 uppercase text-center hover:text-gray-700 text-5xl">
          Meu PalpiteBox virou:
        </a>
      </Link>
      <div className="text-lg text-gray-600">
        <span className="font-bold bg-blue-800 text-white px-4">
          <TextLoop
            children={typeOfService}
            springConfig={{ stiffness: 180, damping: 8 }}
          />
        </span>
      </div>
    </div>
  </header>
)

export default Header
