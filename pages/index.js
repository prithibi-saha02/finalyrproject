/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Content2 from './Content2'
import Content from './Content'
export default function Home() {
  return (
    <div>
      <Head>
        <title>E-service.in Get services near by you</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Content2/>
      <Content/>
</div>
  )
}
