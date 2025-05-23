import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
      font-family: 'Lato', sans-serif;
      line-height: 1.5;
      font-size: 15px;
      padding: 20px;
      max-width: 100%;
      background: ${({ theme }) => theme.color.white};
      overflow-wrap: anywhere;
      word-wrap: normal;
    }
`;