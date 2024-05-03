import styled from "styled-components";

const StyledFeatures = styled.section`
  display: flex;
  flex-direction: column;
  @media (min-width: 720px) {
    flex-direction: row;
  }
`;

const SrOnly = styled.h2`
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important;
  -webkit-clip-path: inset(50%) !important;
  clip-path: inset(50%) !important;
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  white-space: nowrap !important;
`;

const FeatureItem = styled.div`
  flex: 1;
  padding: 2.5rem;
`;

const FeatureIcon = styled.img`
  width: 100px;
  border: 10px solid #00bc77;
  border-radius: 50%;
  padding: 1rem;
`;

const FeatureItemTitle = styled.h3`
  color: #222;
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

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
