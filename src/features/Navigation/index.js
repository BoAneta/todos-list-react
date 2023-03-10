import { toAuthor, toTasks } from "../../routes";
import { StyledItem, StyledNavLink, StyledUl } from "./styled";

const Navigation = () => (
    <nav>
        <StyledUl>
            <StyledItem>
                <StyledNavLink to={toTasks()}>Zadania</StyledNavLink>
            </StyledItem>
            <StyledItem>
                <StyledNavLink to={toAuthor()}>O autorze</StyledNavLink>
            </StyledItem>
        </StyledUl>
    </nav>
);

export default Navigation;