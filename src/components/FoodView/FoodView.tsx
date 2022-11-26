import React from 'react';
import { Food } from '../../App';
import {
  StyledFoodView,
  StyledFoodViewHeader,
  StyledFoodViewImage,
  StyledFoodViewInfo,
} from './FoodView.style';

export default function FoodView({ img, title, desc, price }: Food) {
  return (
    <StyledFoodView>
      <StyledFoodViewImage src={img} alt={title} />
      <StyledFoodViewHeader>
        <h3 className="food-title">{title}</h3>
        <h4 className="food-price">${price}</h4>
      </StyledFoodViewHeader>
      <StyledFoodViewInfo>{desc}</StyledFoodViewInfo>
    </StyledFoodView>
  );
}
