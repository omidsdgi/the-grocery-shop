import Row from "../Row.tsx";
import Heading from "../Heading.tsx";
import {useEffect} from "react";
import {getProducts} from "../services/apiProducts.ts";
import ProductTable from "../features/products/ProductTable.tsx";


export default function Products() {

    useEffect(() => {
        getProducts().then((product)=>console.log(product));
    }, []);
    return (
        <>
        <Row $type='horizontal'>
            <Heading as='h1'>All products</Heading>
            <p>Filter / Sort</p>
        </Row>
        <Row>
            <ProductTable />
        </Row>
        </>
    );
}

