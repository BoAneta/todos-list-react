import { MainSection, Header } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <MainSection>
        <Header>
            <h2>{title}</h2>
            {extraHeaderContent}
        </Header>
        {body}
    </MainSection>
);

export default Section;