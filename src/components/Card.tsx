import { css } from '@emotion/react'
import { keywordType } from '@/type/keyword'
import { cardColor } from '@/data/cardColor'

export const Card = ({ type, content }: keywordType) => {
  return (
    <div css={cardStyle} style={{ backgroundColor: `${cardColor[type]}` }}>
      <p css={textStyle}>{content}</p>
    </div>
  )
}

const cardStyle = css`
  display: grid;
  place-content: center;
  width: 150px;
  height: 150px;
  padding: 12px;
  color: #fff;

  @media screen and (max-width: 950px) {
    width: 100px;
    height: 100px;
  }

  @media screen and (max-width: 414px) {
    width: 75px;
    height: 75px;
  }
`

const textStyle = css`
  font-size: 16px;
  text-align: center;
  line-height: 1.4;

  @media screen and (max-width: 950px) {
    font-size: 10px;
  }
`
