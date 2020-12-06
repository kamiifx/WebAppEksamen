import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  &.left{
    margin-left: 20%;
    gap: 10px;
    }
`;

export const LinkNavbar = styled.a`
  color: black;
  text-decoration: none;
  margin-left: 20px;
  font-family: 'Roboto',sans-serif;
  font-size: 20px;
  @media ${({ theme }) => theme.breakpoints.mobileS}{
      font-size:15px;
      margin-top: 20px;
      margin-left: 10px;
    };
  @media ${({ theme }) => theme.breakpoints.mobileM}{
      font-size:16px;
    };
    
`;

export const LeftDivNav = styled.div`
  position: sticky;
  left: 100%;
`;

export const Header = styled.header`
  display: flex;
  position: sticky;
  height: 26rem;
  background-color: ${({ theme }) => theme.colors.header};
  justify-content: center;
  margin-bottom: 5rem;
  h2{
    font-size: 40px;
    margin-top: 7%;
    font-family: 'Roboto',sans-serif;
  }
`;

//articles
export const ArticleBlock = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5rem;
  font-family: 'Roboto',sans-serif;
  text-transform: capitalize;

  a{
    background-color: ${({ theme }) => theme.colors.header};
    width: 13rem;
    height: 10rem;
    margin-right: 1rem;
  }
  h4{
    font-weight: 500;
    margin-left: 10px;
  }

`;
export const ArticleIntro = styled.div`
  flex-direction: column;
`;