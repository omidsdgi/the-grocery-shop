import {supabase} from "./supabase";
export async function getProducts() {
    const { data: product, error } = await supabase
        .from('product')
        .select('*')
    if (error) {
        console.log(error.message);
        throw new Error('Product not found!');
    }
    return product;
}