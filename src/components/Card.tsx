import { css } from '@emotion/react'

export const Card = () => {
  return (
    <div css={cardStyle}>
      <p css={textStyle}>テキスト</p>
    </div>
  )
}

const cardStyle = css`
  position: relative;
  width: 18%;
  margin: 1%;
  color: #fff;
  background-color: #6563d9;

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
