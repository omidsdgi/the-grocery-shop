import styled from "styled-components";
import logo from '../assets/logo.png';

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 3.2rem;
  width: auto;
`;

function Logo() {
    return (
        <StyledLogo>
            <Img src={logo} />
        </StyledLogo>
    );
}

export default Logo;
