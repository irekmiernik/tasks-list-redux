import { StyledSection, StyledDiv, StyledH2 } from "../styled";

export const Section = ({ title, body, twoButtons }) => (
    <StyledSection>
        <StyledDiv>
            <StyledH2>{title} </StyledH2>
            {twoButtons}
        </StyledDiv>
        {body}
    </StyledSection>
);