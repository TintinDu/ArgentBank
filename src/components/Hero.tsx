import styled from "styled-components";

const StyledHero =
  // ({ background }: { background: string }) =>
  // background-image: url(${background});
  styled.div`
    width: 100%;
    background-size: cover;
    background-position: center;
  `;

export function Hero({ background }: { background: string }) {
  return <StyledHero style={{ background: background }}></StyledHero>;
}
