import { css } from '@emotion/react'

export const Header = () => {
  return (
    <header css={headerStyle}>
      <h1 css={titleStyle}>
        🍃 My 101 keywords{' '}
        <span css={subTitleStyle}>represent Tamaki Isono</span>
      </h1>
    </header>
  )
}

const headerStyle = css`
  display: grid;
  place-content: center;
  width: 100vw;
  height: 60px;
  border-bottom: solid 1px #e2e8f0;
`

const titleStyle = css`
  color: #383838;
  font-size: 32px;
  font-weight: 700;

  @media screen and (max-width: 950px) {
    font-size: 20px;
  }
`

const subTitleStyle = css`
  color: #7a7a7a;
  font-size: 16px;
  font-weight: 400;

  @media screen and (max-width: 950px) {
    font-size: 8px;
  }
`
