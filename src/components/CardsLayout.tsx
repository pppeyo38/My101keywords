import { css } from '@emotion/react'
import { Card } from '@/components/Card'

import { keywordsData } from '@/type/keyword'
import data from '@/data/keywords.json'

export const CardsLayout = () => {
  const keywords: keywordsData = data

  return (
    <section css={contentBlockStyle}>
      {keywords.map((item, index) => (
        <Card key={index} type={item.type} content={item.content} />
      ))}
    </section>
  )
}

const contentBlockStyle = css`
  display: flex;
  flex-wrap: wrap;
`
