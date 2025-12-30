import styled from "styled-components";

const StyledHeader = styled.div`
    background-color: var(--color-grey-0);
    border-bottom: 1px solid var(--color-green-100);
`

export default function Header() {
    return (
        <StyledHeader>
            Header
        </StyledHeader>
    );
}

