import {
  FeatureIcon,
  FeatureItem,
  FeatureItemTitle,
  SrOnly,
  StyledFeatures,
} from "./style";

export function Features() {
  return (
    <StyledFeatures>
      <SrOnly>Features</SrOnly>
      <FeatureItem>
        <FeatureIcon src="/icon-chat.png" alt="icon chat" />
        <FeatureItemTitle>You are our #1 priority</FeatureItemTitle>
        <p>
          Need to talk to a representative? You can get in touch through our
          24/7 chat or through a phone call in less than 5 minutes.
        </p>
      </FeatureItem>
      <FeatureItem>
        <FeatureIcon src="/icon-money.png" alt="icon money" />
        <FeatureItemTitle>More savings means higher rates</FeatureItemTitle>
        <p>The more you save with us, the higher your interest rate will be!</p>
      </FeatureItem>
      <FeatureItem>
        <FeatureIcon src="/icon-security.png" alt="icon security" />
        <FeatureItemTitle>Security you can trust</FeatureItemTitle>
        <p>
          We use top of the line encryption to make sure your data and money is
          always safe.
        </p>
      </FeatureItem>
    </StyledFeatures>
  );
}
