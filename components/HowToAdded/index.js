import React from "react"
import Link from "next/link"

const HowToAdded = () => (
  <div className="w-full bg-white shadow flex flex-col my-4 p-6">
    <p className="text-xl font-semibold pb-5">Como ser Adicionado?</p>
    <p className="pb-2">
      Construiu uma variação legal do PalpiteBox?<br />
      <span className="font-bold">Cadastre aqui </span> a sua versão!
    </p>
    <p className="text-xs">
      Todos os cadastros passam por aprovação prévia antes de serem mostrados.
    </p>
    <Link href="/novo">
      <a className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4">
        Cadastrar
      </a>
    </Link>
  </div>
)

export default HowToAdded
