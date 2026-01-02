import Row from "../Row.tsx";
import Heading from "../Heading.tsx";
import {useEffect} from "react";
import {getProducts} from "../services/apiProducts.ts";


export default function Product() {

    useEffect(() => {
        getProducts().then((product)=>console.log(product));
    }, []);
    return (
        <Row $type='horizontal'>
            <Heading as='h1'>Product</Heading>
        </Row>
    );
}

