import styled from 'styled-components';

const TableContainer = styled.div`
  overflow: auto;
  max-height: 50vh;
  max-width: 98%;

  &::-webkit-scrollbar {
    height: 8px; 
    width: 8px; 
    background-color: #F5F5F5; 
  }

  &::-webkit-scrollbar-thumb {
    background-color: #f7901b; 
  }

  &::-webkit-scrollbar-track {
    background-color: #F5F5F5; 
  }

  scrollbar-width: thin;
  scrollbar-color: #000000 #F5F5F5;
`;

const StyledTable = styled.table`
  width: 100%;
  
  border-collapse: collapse;
  margin: 20px 0;
  border-radius: 4px;
  font-size: 1.6rem;
  overflow: auto;
  box-shadow: 1px 2px 4px rgb(0, 0, 0);

  th, td {
    padding: 10px 15px;
    text-align: left;
    white-space: nowrap;
    box-shadow: inset -2px 2px 4px rgba(0, 0, 0, 0.282);
    border: 2px solid transparent;
  }

  th {
    background-image: linear-gradient(to right, #8400ff, #5500a4);
    color: white;
  }

  tr {
    background-color: #ececec;
  }

  tr:nth-child(even) {
    background-color: #ffffff;
  }

  tr:hover {
    background-color: #11ff00;
    cursor: pointer;
  }

  button{
    width: 100%;
    height: 100%;
    text-align: start;
    background-color: transparent;
  }

  @media (max-width: 500px) {
    font-size: 1.4rem;
  }
`;

export {
  StyledTable,
  TableContainer
}
