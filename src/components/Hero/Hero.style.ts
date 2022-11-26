import styled from 'styled-components';
import { StyledMainHeading } from '../../globalStyle';

export const StyledHero = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  .underline {
    width: 5rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.colors.gold};
  }
`;

export const StyledHeroHeader = styled(StyledMainHeading)`
  font-size: 2rem;
  margin-bottom: 0.75rem;
`;
