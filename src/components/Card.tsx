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
  position: relative;
  width: 18%;
  margin: 1%;
  color: #fff;

  &:before {
    content: '';
    padding-top: 100%;
    display: block;
  }
`

const textStyle = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
`
