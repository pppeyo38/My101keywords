import { css } from '@emotion/react'
import { Card } from '@/components/Card'
import { keywordsDataType } from '@/type/keyword'

type Props = {
  keywords: keywordsDataType
}

export const CardsLayout = ({ keywords }: Props) => {
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
  justify-content: center;
  gap: 16px;
  margin: 24px 0;

  @media screen and (max-width: 950px) {
    justify-content: center;
    gap: 8px;
  }
`
