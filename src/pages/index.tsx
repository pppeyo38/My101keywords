import Head from 'next/head'
import { css } from '@emotion/react'

import { Card } from '@/components/Card'

export default function Home() {
  return (
    <div>
      <Head>
        <title>My 101 KeyWords</title>
      </Head>

      <main>
        <section css={contentBlockStyle}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </main>
    </div>
  )
}

const contentBlockStyle = css`
  display: flex;
  flex-wrap: wrap;
`
