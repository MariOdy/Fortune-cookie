import styled from "styled-components";


export const Home = styled.div`
  width: 80%;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  p {
    font-size: 50px;
    text-align: center;
    margin-top: 50px;
    line-height: 70px;
  }
  span {
    display: block;
    align-self: flex-end;
    font-size: 26px;
    font-weight: 600;
  }
`;

export const RefreshButton = styled.button`
  position: absolute;
  top: 40px;
  right: 0;
  background-color: rgba(255, 255, 255, 0.51);
  color: #000000;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 20px;
  cursor: pointer;

  &:hover{
    background-color: rgba(255, 255, 255, 0.7);

  }
 
`;
