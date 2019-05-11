import styled from 'styled-components';

export const LoadingContainer = styled.div`
  width: 100%;
  text-align: center;
  margin: 40px auto;
`;

export const Loading = styled.div`
  display: inline-block;
  height: 35px;
  width: 35px;
  border: 2px solid #fff;
  border-right-color: transparent;
  border-radius: 50%;
  animation: rotate 1s infinite linear;

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Header = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #0f273d;
  width: 100%;
  padding: 1rem;
`;

export const Logo = styled.img`
  width: 48px;
  margin-left: -11px;
  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const TableContainer = styled.div`
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
`;

export const TableHead = styled.thead`
  background-color: #0c2033;
`;

export const TableTh = styled.th`
  padding: 10px 20px;
  color: #9cb3c9;
  text-align: left;
  font-size: 14px;
  font-weight: 400;
`;

export const TableBody = styled.tbody`
  text-align: left;
  background-color: #0f273d;
`;

export const TableRow = styled.tr`
  :hover {
    background-color: #193d5e;
  }
`;

export const TableTd = styled.td`
  padding: 24px 20px;
  border-bottom: 2px solid #0c2033;
  color: #fff;
  cursor: pointer;
`;

export const Rank = styled.span`
  color: #9cb3c9;
  margin-right: 18px;
  font-size: 12px;
`;

export const Dollar = styled.span`
  color: #9cb3c9;
  margin-right: 6px;
`;

export const PaginationContainer = styled.div`
  margin: 50px auto;
  text-align: center;
`;

export const PaginationButton = styled.button`
  text-align: center;
  border: none;
  border-radius: 16px;
  background-color: #4997e5;
  transition: background-color 0.2s;
  color: white;
  cursor: pointer;
  margin: 10px;
  width: 44px;
  height: 34px;

  :hover {
    background-color: #457cb2;
  }

  :disabled {
    background-color: #1f364d;
    cursor: not-allowed;
  }
`;

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.85);
  z-index: 10;
  position: fixed;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DetailContainer = styled.div`
  position: relative;
  z-index: 12;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 40px;
  padding: 0 60px;
  min-height: 50px;
  transition: all 0.5s;
`;

export const DetailHeading = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 3rem;
`;

export const DetailBody = styled.div`
  background-color: #081826;
  min-height: 50px;
  width: 100%;
  max-width: 400px;
  margin-top: 30px;
  padding: 40px 40px 0;
  border-radius: 4px;
  box-shadow: 0px 0px 15px 0px #193d5e;
  transition: all 0.5s;
`;

export const DetailItem = styled.div`
  margin-bottom: 50px;
`;

export const DetailValue = styled.span`
  border-radius: 20px;
  background-color: #1f364d;
  font-size: 14px;
  padding: 8px 12px;
  margin-left: 10px;
`;

export const DetailTile = styled.span`
  display: block;
  color: #9cb3c9;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const DetailDollar = styled.span`
  color: #9cb3c9;
  margin-right: 6px;
`;

export const SearchContainer = styled.div`
  position: relative;
  width: 30%;
  height: 35px;
  margin: 0 0;
  padding: 0 20px;

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const SearchInput = styled.input`
  box-sizing: border-box;
  background-color: #1f364d;
  border-radius: 4px;
  border: 0;
  padding-left: 35px;
  color: white;
  opacity: 0.8;
  transition: opacity 0.2s;
  width: 100%;
  height: 35px;

  ::placeholder {
    color: #9cb3c9;
  }

  :focus {
    opacity: 1;
  }
`;
