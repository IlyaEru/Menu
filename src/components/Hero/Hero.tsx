import React from 'react';
import { StyledHero, StyledHeroHeader } from './Hero.style';

export default function Hero() {
  return (
    <StyledHero>
      <StyledHeroHeader>Our Menu</StyledHeroHeader>
      <div className="underline"></div>
    </StyledHero>
  );
}
