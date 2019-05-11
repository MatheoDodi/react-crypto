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
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #0f273d;
  width: 100%;
  height: 80px;
`;

export const Logo = styled.img`
  width: 75px;
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

export const PaginationContainer = styled.div``;
