import React from "react"
import Head from "next/head"

const PageTitle = ({ title }) => {
  return (
    <Head>
      <title>{title} - MeuPalpiteBox</title>

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
      />
      <meta httpEquiv="Content-Language" content="pt-br" />
      <meta name="application-name" content="MeuPalpiteBox" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Meu PalpiteBox Virou..." />
      <meta name="description" content="Meu PalpiteBox Virou..." />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta property="og:title" content="Meu PalpiteBox Virou..." />
      <meta property="og:description" content="Meu PalpiteBox Virou..." />
    </Head>
  )
}

export default PageTitle
