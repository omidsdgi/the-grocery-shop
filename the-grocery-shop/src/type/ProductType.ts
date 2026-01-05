export interface ProductType {
    id:number;
    created_at:Date;
    title: string;
    image: string;
    category: string;
    rate: number;
    weight: number;
    unit:string;
    price: number;
    sale_price?: number;
    label:string;
    description?: string;
    total?:number;
    sold?:number;
    quantity?: number;
    discount_Expire_date?: string | null;
    is_popular?: boolean;
    is_top_selling?: boolean;
    is_trending?: boolean;
    is_popular_fruit?: boolean;
    is_best_seller?: boolean;
}
export interface BasketItem {
    productId: number;
    title: string;
    price: number;
    img: string;
    quantity: number;
}

export interface ProductItem {
    productId: number;
    title: string;
    price: number;
    img: string;
    quantity: number;
}
export interface BasketContextType {
    basketItems: Map<number, ProductItem>;
    addItem: (product: ProductItem) => void;
    increaseItem: (productId: number) => void;
    decreaseItem: (productId: number) => void;
    deleteItem: (productId: number) => void;
    getItem: (productId: number) => ProductItem | undefined;
    getTotalPrice: () => number;
    getTotalItems: () => number;
    clearBasket: () => void;
}