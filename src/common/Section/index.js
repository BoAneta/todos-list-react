import { MainSection, Header, StyledBody } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <MainSection>
        <Header>
            <h2>{title}</h2>
            {extraHeaderContent}
        </Header>
        <StyledBody>{body}</StyledBody>
    </MainSection>
);

export default Section;