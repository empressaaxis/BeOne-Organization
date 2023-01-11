import tw from "twin.macro";
import {
  PartnerSectionHeading,
  Subheading as SubheadingBase,
} from "../misc/Headings.js";
import PartnerSlider from "./PartnerSlider.js";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto lg:py-5 flex justify-between`;
const ContentHeader = tw.div`text-left w-[25%] flex flex-col gap-2`;
const LogoContainer = tw.div`w-[70%]`;
const Subheading = tw(SubheadingBase)`mb-4`;
const HeadingTitle = tw(PartnerSectionHeading)`lg:text-left leading-tight`;

export default function PartnerSection({ subheading, heading }) {
  return (
    <Container>
      <Content>
        <ContentHeader>
          <HeadingTitle>{heading}</HeadingTitle>
          {subheading ? <Subheading>{subheading}</Subheading> : null}
        </ContentHeader>
        <LogoContainer>
          <PartnerSlider />
        </LogoContainer>
      </Content>
    </Container>
  );
}
