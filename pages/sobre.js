import React from "react"

import PageTitle from "../components/PageTitle"

const Sobre = () => (
  <article className="flex flex-col shadow my-4 w-full">
    <PageTitle title="Sobre o meuPalpiteBox" />
    <div className="bg-white flex flex-col p-6">
      <span className="text-3xl font-bold hover:text-gray-700 pb-4">
        Sobre este Projeto:
      </span>
      <p className="pb-3">
        Este também é uma variação do
        <a href="http://palpite-box.renatosiqueira.dev/" target="_blank">
          {" "}
          <strong>PalpiteBox</strong>
        </a>
        ; um projeto que utiliza <strong>NextJs, TailwindCSS, MomentJS, </strong>{" "}
        integração com o <strong>Google Spreadsheet</strong> e <strong>Google Drive</strong>.
      </p>
      <p className="pb-3 font-bold">
        Projeto Base é Construido passo a passo no FullStackMaster.
      </p>
      <a href='https://devpleno.com' target='_blank' className="pb-3 text-center">
        https://www.devpleno.com
      </a>
    </div>
  </article>
)

export default Sobre
