import React, { type FC, useLayoutEffect, useState } from "react";
import styled from "styled-components";

import {
  Footer,
  type FooterProps,
  Header,
  type HeaderProps,
  HeroCarousel,
  type HeroCarouselProps,
  PartnerCarousel,
  type PartnerCarouselProps,
  StripThreeCols,
  type StripThreeColsProps,
} from "~components";

export interface HomepageProps {
  headerProps: HeaderProps;
  heroCarouselProps: HeroCarouselProps;
  stripThreeColsProps: StripThreeColsProps;
  partnerCarouselProps: PartnerCarouselProps;
  footerProps: FooterProps;
}

const StyledHeader = styled(Header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const Section = styled.div`
  margin: 80px 0;
`;

const Homepage: FC<HomepageProps> = ({
  headerProps,
  heroCarouselProps,
  stripThreeColsProps,
  partnerCarouselProps,
  footerProps,
}) => {
  const [scrolled, setScrolled] = useState(false);

  useLayoutEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <StyledHeader {...headerProps} variant={scrolled ? "colored" : "transparent"} />
      <HeroCarousel {...heroCarouselProps} />
      <Section>
        <StripThreeCols {...stripThreeColsProps} />
      </Section>
      <Section>
        <StripThreeCols {...stripThreeColsProps} mobileBehavior="scroll" />
      </Section>
      <PartnerCarousel {...partnerCarouselProps} />
      <Footer {...footerProps} />
    </div>
  );
};

export default Homepage;
