import styled from 'styled-components';
import { StyledContainer } from '../../globalStyle';

export const StyledAppViewWrapper = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;
export const StyledMain = styled(StyledContainer).attrs({
  as: 'main',
})`
  padding-top: 5rem;
  padding-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  .content-wrapper {
    display: grid;
    gap: 2rem;
    max-width: 1200px;
    @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
      grid-template-columns: 1fr 1fr;
    }
  }
`;
