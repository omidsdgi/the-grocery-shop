import styled from "styled-components";
import {useQuery} from "@tanstack/react-query";
import {getProducts} from "../../services/apiProducts.ts";
import Spinner from "../../ui/Spinner.tsx";
import {ProductRow} from "./ProductRow.tsx";
import type {ProductType} from "../../type/ProductType.ts";

const Table = styled.div`
    border: 1px solid var(--color-grey-200);

    font-size: 1.4rem;
    background-color: var(--color-grey-0);
    border-radius: 7px;
    overflow: hidden;
`;

const TableHeader = styled.header`
    display: grid;
    grid-template-columns:auto 1.5fr 1.2fr auto auto auto auto auto auto auto auto auto auto 1fr;
    column-gap: 1.2rem;
    align-items: center;
    background-color: var(--color-grey-50);
    border-bottom: 1px solid var(--color-grey-100);
    text-transform: uppercase;
    font-weight: 600;
    color: var(--color-grey-600);
    padding: 1.6rem 2.4rem;
`;

export default function ProductTable() {
    const {
        isLoading,
        data: products
    }= useQuery({
        queryKey:["products"],
        queryFn: getProducts
    })
    if (isLoading) return <Spinner />;
    console.log(products)
    return (
        <Table role='table'>
            <TableHeader role='row'>
              <div>id</div>
              <div>product</div>
              <div>category</div>
              <div>rate</div>
              <div>weight</div>
              <div>unit</div>
              <div>price</div>
              <div>sale price</div>
              <div>label</div>
              <div>description</div>
              <div>total</div>
              <div>sold</div>
              <div>quantity</div>
              <div>expire date</div>
            </TableHeader>
            {products?.map((product:ProductType) => <ProductRow key={product.id} product={product} />)}



        </Table>
    );
}



