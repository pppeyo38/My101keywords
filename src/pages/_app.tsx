import { Global, css } from '@emotion/react'
import type { AppProps } from 'next/app'
import emotionReset from 'emotion-reset'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global
        styles={css`
          ${emotionReset}
          body {
            font-family: 'Zen Kaku Gothic New', sans-serif;
            letter-spacing: 0.03em;
            background-color: #fff;
          }
        `}
      />
      <Component {...pageProps} />
    </>
  )
}
