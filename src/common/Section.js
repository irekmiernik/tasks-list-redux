import { StyledSection, StyledDiv, StyledH2 } from "../styled";

export const Section = ({ title, body, oneButton, twoButtons }) => (
    <StyledSection>
        <StyledDiv>
            <StyledH2>{title} </StyledH2>
            {oneButton}
            {twoButtons}
        </StyledDiv>
        {body}
    </StyledSection>
);