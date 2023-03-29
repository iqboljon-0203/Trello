import styled from "styled-components";
export const Wrapper = styled.div`
  width: 1240px;
  height: 980px;
  background: #f0f0f0;
  padding: 20px 33px;
  div {
    display: flex;
    align-items: center;
    h1 {
      font-weight: 600;
      font-size: 24px;
      line-height: 28px;

      /* BW/100 */

      color: #181a19;

      /* Inside auto layout */

      flex: none;
      order: 0;
      flex-grow: 0;
    }
    .dot {
      width: 3px;
      height: 3px;
      background: #386e56;
      flex: none;
      order: 1;
      flex-grow: 0;
      margin:8px;
    }
    .counter {
      font-weight: 500;
      font-size: 24px;
      line-height: 28px;

      /* BW/60 */

      color: #6d7471;

      /* Inside auto layout */

      flex: none;
      order: 2;
      flex-grow: 0;
    }
  }
`;
