import React, { useState, useEffect } from "react"

import PageTitle from "../components/PageTitle"
import Header from "../components/Header"
import Variance from "../components/Variance"
import HowToAdded from "../components/HowToAdded"
import HowWorks from "../components/HowWorks"

const Index = () => {
  const [isLoading, setLoading] = useState(true)
  const [dados, setDados] = useState({})

  useEffect(async () => {
    try {
      const response = await fetch("/api/get")
      const allData = await response.json()
      setDados(allData)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <>
      <PageTitle title="Seja bem Vindo" />
      <Header />
      {isLoading && (
        <p className="container text-center text-4xl font-bold">Aguarde...</p>
      )}
      <div className="container mx-auto flex flex-wrap py-6">
        {!isLoading && (
          <section className="w-full md:w-2/3 flex flex-col items-center px-3">
            {dados?.map((item, index) => (
              <Variance key={index} {...item} />
            ))}
          </section>
        )}
        <aside
          className={`w-full ${isLoading ? "w-full" : "md:w-1/3"
            } flex flex-col items-center px-3`}
        >
          <HowToAdded />
        </aside>
      </div>
      <HowWorks />
    </>
  )
}

export default Index
