import { css } from '@emotion/react'
import { Card } from '@/components/Card'

export const CardsLayout = () => {
  return (
    <section css={contentBlockStyle}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  )
}

const contentBlockStyle = css`
  display: flex;
  flex-wrap: wrap;
`
