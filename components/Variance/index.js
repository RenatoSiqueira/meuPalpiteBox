import React from "react"
import Image from "next/image"

const Variance = ({ nome, url, virou, screen }) => (
  <article className="flex flex-col shadow my-4 w-full">
    <div className='flex'>
      <iframe src={`https://drive.google.com/file/d/${screen}/preview`} />
      <div className="bg-white flex flex-col justify-start p-6">
        <span className="text-blue-700 text-sm font-bold uppercase pb-4">
          {nome}
        </span>
        <span className="text-3xl font-bold hover:text-gray-700 pb-4">
          {virou}
        </span>
        {url && (
          <a
            href={url}
            target="blank"
            className="w-full bg-blue-700 text-white font-bold text-sm uppercase rounded hover:bg-blue-600 flex items-center justify-center px-2 py-3 mt-4"
          >
            <span className="ml-4">Visitar</span>
          </a>
        )}
      </div>
    </div>
  </article>
)

export default Variance
