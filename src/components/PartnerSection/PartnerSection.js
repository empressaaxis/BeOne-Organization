import tw from "twin.macro";
import {
  PartnerSectionHeading,
  Subheading as SubheadingBase,
} from "../misc/Headings.js";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto lg:py-5 flex justify-between`;
const ContentHeader = tw.div`text-left w-[25%] flex flex-col gap-2`;
const LogoContainer = tw.div`text-center w-[70%] grid grid-cols-3 gap-3 place-items-center`;
const Subheading = tw(SubheadingBase)`mb-4`;
const HeadingTitle = tw(PartnerSectionHeading)`lg:text-left leading-tight`;
const Logo = tw.div`w-20 h-20 border border-black flex items-center`;

export default function PartnerSection({ subheading, heading }) {
  return (
    <Container>
      <Content>
        <ContentHeader>
          <HeadingTitle>{heading}</HeadingTitle>
          {subheading ? <Subheading>{subheading}</Subheading> : null}
        </ContentHeader>
        <LogoContainer>
          <p>Partners Company</p>
          <p>Partners Company</p>
          <p>Partners Company</p>
          <p>Partners Company</p>
          <p>Partners Company</p>
          <p>Partners Company</p>
        </LogoContainer>
      </Content>
    </Container>
  );
}
