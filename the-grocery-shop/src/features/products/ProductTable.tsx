import styled from "styled-components";
import {useQuery} from "@tanstack/react-query";
import {getProducts} from "../../services/apiProducts.ts";
import Spinner from "../../ui/Spinner.tsx";

const StyledTable = styled.div`
    border: 1px solid var(--color-grey-200);

    font-size: 1.4rem;
    background-color: var(--color-grey-0);
    border-radius: 7px;
    overflow: hidden;
`;

const TableHeader = styled.header`
    display: grid;
    grid-template-columns:0.6fr 1.8fr 2.2fr 1fr 1fr 1fr 1fr 1fr 1fr;
    column-gap: 2.4rem;
    align-items: center;

    background-color: var(--color-grey-50);
    border-bottom: 1px solid var(--color-grey-100);
    text-transform: uppercase;
    letter-spacing: 0.4px;
    font-weight: 600;
    color: var(--color-grey-600);
    padding: 1.6rem 2.4rem;
`;

export default function ProductTable() {
    const {
        isLoading,

    }= useQuery({
        queryKey:["products"],
        queryFn: getProducts
    })
    if (isLoading) return <Spinner />;
    return (
        <StyledTable>
            <TableHeader>table of product</TableHeader>

        </StyledTable>
    );
}



