import React, { useEffect, useState } from 'react';
import { StyledButton } from '../../globalStyle';
import { StyledNavBar, StyledNavButton } from './NavBar.style';

interface NabBarProps {
  food: {
    id: number;
    title: string;
    category: string;
    price: number;
    img: string;
    desc: string;
  }[];
  callbacks: {
    selectCategory: (category: string) => void;
  };
}

export default function NavBar({ food, callbacks }: NabBarProps) {
  const [foodCatagories, setFoodCatagories] = useState<[] | string[]>([]);
  useEffect(() => {
    setFoodCatagories(['all', ...new Set(food.map((item) => item.category))]);
  }, []);

  return (
    <StyledNavBar>
      {foodCatagories.map((category, index) => (
        <StyledNavButton
          value={category}
          onClick={(e) => {
            callbacks.selectCategory((e.target as HTMLButtonElement).value);
          }}
          key={index}
        >
          {category}
        </StyledNavButton>
      ))}
    </StyledNavBar>
  );
}
