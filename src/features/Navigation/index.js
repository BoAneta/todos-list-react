import { StyledItem, StyledNavLink, StyledUl } from "./styled";
const Navigation = () => {
    return (
        <nav>
            <StyledUl>
                <StyledItem>
                    <StyledNavLink to="/zadania">Zadania</StyledNavLink>
                </StyledItem>
                <StyledItem>
                    <StyledNavLink to="/autor">O autorze</StyledNavLink>
                </StyledItem>
            </StyledUl>
        </nav>

    );
};

export default Navigation;