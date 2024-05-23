import { HeroContent, SrOnly, StyledHero, Subtitle, Text } from "./style";

export function Hero() {
  return (
    <StyledHero>
      <HeroContent>
        <SrOnly>Promoted Content</SrOnly>
        <Subtitle>No fees.</Subtitle>
        <Subtitle>No minimum deposit.</Subtitle>
        <Subtitle>High interest rates.</Subtitle>
        <Text>Open a savings account with Argent Bank today! </Text>
      </HeroContent>
    </StyledHero>
  );
}
