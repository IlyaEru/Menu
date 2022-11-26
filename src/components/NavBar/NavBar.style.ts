import styled from 'styled-components';
import { StyledButton } from '../../globalStyle';

export const StyledNavBar = styled.nav`
  display: grid;
  grid-auto-flow: column;
  gap: 0.5rem;
  grid-auto-columns: 1fr;
  width: 80%;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto 4rem;
`;

export const StyledNavButton = styled(StyledButton)`
  background: transparent;
  color: ${({ theme }) => theme.colors.gold};
  text-transform: capitalize;
  &:hover {
    background: ${({ theme }) => theme.colors.gold};
    color: ${({ theme }) => theme.colors.white};
  }
`;
