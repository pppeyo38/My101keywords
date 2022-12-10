import Head from 'next/head'
import { css } from '@emotion/react'

export default function Home() {
  return (
    <div>
      <Head>
        <title>My 101 KeyWords</title>
      </Head>

      <main>
        <p css={testStyle}>テスト</p>
      </main>
    </div>
  )
}

const testStyle = css`
  color: red;
`
