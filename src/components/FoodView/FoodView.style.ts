import styled from 'styled-components';

export const StyledFoodView = styled.article`
  max-width: 25rem;
  display: flex;
  flex-direction: column;
  display: grid;
  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    grid-template-columns: 3fr 5fr;
    grid-template-rows: auto 1fr;
    justify-self: center;
    gap: 0 1.25rem;
    max-width: 35rem;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    grid-template-columns: 4fr 5fr;
    grid-template-rows: auto 1fr;
    justify-self: center;
    gap: 0 1.25rem;
  }
`;

export const StyledFoodViewImage = styled.img`
  width: 100%;
  height: 12rem;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 4px solid ${({ theme }) => theme.colors.gold};

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    height: 175px;
    grid-row: 1 / span 2;
  }
`;

export const StyledFoodViewHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  height: fit-content;
  border-bottom: 0.5px dotted ${({ theme }) => theme.colors.darkGrey};
  h3.food-title {
    font-size: 1rem;
  }
  h4.food-price {
    font-size: 0.75rem;

    color: ${({ theme }) => theme.colors.gold};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    margin-top: 0;
    h3.food-title,
    h4.food-price {
      font-size: 0.875rem;
      margin-bottom: 0.5rem;
    }
  }
`;

export const StyledFoodViewInfo = styled.p`
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.blueGrey};
  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 0.8rem;
  }
`;
