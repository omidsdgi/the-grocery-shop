import styled from "styled-components";
import type {ProductType} from "../../type/ProductType.ts";

const TableRow = styled.div`
    display: grid;
    grid-template-columns:auto 1.5fr 1.2fr auto auto auto auto auto auto auto auto auto auto auto 1fr;
    column-gap: 1.2rem;
    align-items: center;
    padding: 1.4rem 2.4rem;

    &:not(:last-child) {
        border-bottom: 1px solid var(--color-grey-100);
    }
`;



const Img = styled.img`
    display: block;
    width: 6.4rem;
    aspect-ratio: 3 / 2;
    object-fit: cover;
    object-position: center;
    transform: scale(1.5) translateX(-7px);
`;


const Title = styled.div`
    font-family: "Sono", sans-serif;
    font-weight: 500;
    color: var(--color-grey-500);
`;
const Category = styled.div`
    font-family: "Sono", sans-serif;
    font-weight: 500;
    color: var(--color-grey-500);
`;
const Rate = styled.div`
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-weight: 600;
    color: var(--color-yellow-700);
`;

const Weight = styled.div`
    font-family: "Sono", sans-serif;
    font-weight: 500;
`;

const Unit = styled.div`
    font-size: 1.2rem;
    text-transform: uppercase;
    color: var(--color-grey-500);
`;

const Price = styled.div`
    font-family: "Sono", sans-serif;
    font-weight: 600;
`;

const SalePrice = styled.div`
    font-family: "Sono", sans-serif;
    font-weight: 600;
    color: var(--color-red-700);
`;

const Label = styled.div`
    font-size: 1.1rem;
    font-weight: 600;
    text-transform: uppercase;
    padding: 0.4rem 0.8rem;
    border-radius: 4px;
    background-color: var(--color-grey-100);
    color: var(--color-grey-700);
    text-align: center;
`;

const Description = styled.div`
    font-size: 1.3rem;
    color: var(--color-grey-500);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const Total = styled.div`
    font-family: "Sono", sans-serif;
    font-weight: 600;
    color: var(--color-grey-700);
`;

const Sold = styled.div`
    font-family: "Sono", sans-serif;
    font-weight: 500;
    color: var(--color-blue-700);
`;

const Quantity = styled.div`
    font-family: "Sono", sans-serif;
    font-weight: 600;
`;

const ExpireDate = styled.div`
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--color-grey-600);
`;

export function ProductRow({product}:{product:ProductType}) {
    const { image,title, category, rate, weight, unit, price, sale_price, label, description, total, sold, quantity, discount_Expire_date }=product;
    return (
        <TableRow role={'row'}>
            <Img src={image} />
            <Title>{title}</Title>
            <Category>{category}</Category>
            <Rate>{rate}</Rate>
            <Weight>{weight}</Weight>
            <Unit>{unit}</Unit>
            <Price>{price}</Price>
            <SalePrice>{sale_price}</SalePrice>
            <Label>{label}</Label>
            <Description>{description}</Description>
            <Total>{total}</Total>
            <Sold>{sold}</Sold>
            <Quantity>{quantity}</Quantity>
            <ExpireDate>{discount_Expire_date}</ExpireDate>
        </TableRow>
    );
}


