import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.3s ease;
  width: 258px;
  height: 132px;

  background: #ffffff;
  box-shadow: inset 0px 2px 0px rgba(0, 0, 0, 0.05),
    inset 0px -2px 0px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  padding: 12px;
  :hover {
    cursor: pointer;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  div {
    h1 {
      font-weight: 600;
      font-size: 14px;
      line-height: 16px;
      color: #181a19;
      margin-bottom: 4px;
    }
    p {
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
      color: #6d7471;
    }
  }
`;

export const Body = styled.fieldset`
  display: flex;
  align-items: center;
`;

export const Footer = styled.fieldset`
  display: flex;
  align-items: center;
`;
