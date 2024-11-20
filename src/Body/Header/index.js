import styled from "styled-components";

const H1 = styled.h1`
  max-width: 1000px;
`;

export const Header = ({ title }) => (
    <H1>{title}</H1>
);