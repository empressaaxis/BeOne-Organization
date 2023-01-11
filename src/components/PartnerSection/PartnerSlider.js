import React from "react";

import GoogleIcon from "@assets/images/google.png";
import Marquee from "react-fast-marquee";
import tw from "twin.macro";

const PartnerSliderContainer = tw.div`flex items-center justify-center gap-8 overflow-hidden px-5 py-8 font-bold`;
const PImage = tw.div`relative h-[40px] w-[40px]`;
const MajorContainer = tw.div`flex h-full flex-row items-center justify-center gap-10 overflow-x-auto px-5 sm:gap-8  lg:gap-10 xl:gap-6`;

export default function PartnerSlider() {
  return (
    <PartnerSliderContainer>
      <Marquee
        speed={60}
        gradient={false}
        className="max-w-full md:max-w-[87%] xl:max-w-[1200px]"
      >
        <MajorContainer>
          <PImage>
            <img
              objectFit="contain"
              src={GoogleIcon}
              alt="Google"
              layout="fill"
            />
          </PImage>
          <PImage>
            <img
              layout="fill"
              objectFit="contain"
              src={GoogleIcon}
              alt="Irembo"
            />
          </PImage>
          <PImage>
            <img
              layout="fill"
              objectFit="contain"
              src={GoogleIcon}
              alt="I&amp;M"
            />
          </PImage>
          <PImage>
            <img
              layout="fill"
              objectFit="contain"
              src={GoogleIcon}
              alt="Access"
            />
          </PImage>
          <PImage>
            <img
              layout="fill"
              objectFit="contain"
              src={GoogleIcon}
              alt="Vanguard"
            />
          </PImage>
          <PImage>
            <img
              layout="fill"
              objectFit="contain"
              src={GoogleIcon}
              alt="Yego"
            />
          </PImage>
          <PImage>
            <img
              layout="fill"
              objectFit="contain"
              src={GoogleIcon}
              alt="AddressYa"
            />
          </PImage>
          <PImage>
            <img
              layout="fill"
              objectFit="contain"
              src={GoogleIcon}
              alt="Wasoko"
            />
          </PImage>
          <PImage>
            <img
              layout="fill"
              objectFit="contain"
              src={GoogleIcon}
              alt="Meta"
            />
          </PImage>
        </MajorContainer>
      </Marquee>
    </PartnerSliderContainer>
  );
}
