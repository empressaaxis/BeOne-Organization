import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "@helpers/AnimationRevealPage";

import Hero from "@components/hero/TwoColumnWithFeaturesAndTestimonial";
import Features from "@components/features/ThreeColWithSideImage";
import Blog from "@components/blogs/GridWithFeaturedPost";
import Testimonial from "@components/testimonials/TwoColumnWithImageAndProfilePictureReview";
import Footer from "@components/footers/FiveColumnDark";
import TeamCardGrid from "@components/cards/ProfileThreeColGrid";
import PartnerSection from "@components/PartnerSection/PartnerSection";

const HighlightedText = tw.span`text-primary-500`;
const Subheading = tw.span`uppercase tracking-wider text-sm`;

export default () => {
  return (
    <AnimationRevealPage>
      <Hero />
      <PartnerSection
        subheading={"Some of the top National And International Bodies"}
        heading={"Associated and Recognized by"}
      />
      <Testimonial
        heading={
          <>
            Our Clients <HighlightedText>Love Us</HighlightedText>
          </>
        }
      />
      <Features
        heading={
          <>
            Amazing <HighlightedText>Features</HighlightedText>
          </>
        }
      />
      <TeamCardGrid subheading={<Subheading>Our Team</Subheading>} />
      <Blog
        subheading="Blog"
        heading={
          <>
            We love <HighlightedText>Writing</HighlightedText>
          </>
        }
      />
      <Footer />
    </AnimationRevealPage>
  );
};
