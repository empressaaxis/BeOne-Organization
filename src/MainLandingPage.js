import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";


import Hero from "components/hero/TwoColumnWithFeaturesAndTestimonial.js";
import Features from "components/features/ThreeColWithSideImage.js";
import Blog from "components/blogs/GridWithFeaturedPost.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import Footer from "components/footers/FiveColumnDark.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";


const HighlightedText = tw.span`text-primary-500`
const Subheading = tw.span`uppercase tracking-wider text-sm`;

export default () => {
  return (
    <AnimationRevealPage>
      <Hero />
      <Testimonial 
        heading={<>Our Clients <HighlightedText>Love Us</HighlightedText></>}
      />
      <Features 
        heading={<>Amazing <HighlightedText>Features</HighlightedText></>}
      />
      <TeamCardGrid 
        subheading={<Subheading>Our Team</Subheading>}
      />
      <Blog
        subheading="Blog"
        heading={<>We love <HighlightedText>Writing</HighlightedText></>}
      />
      <Footer />
    </AnimationRevealPage>
  );
}
