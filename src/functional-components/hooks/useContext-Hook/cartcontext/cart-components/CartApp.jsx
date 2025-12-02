import React from 'react'
import { CartProvider } from "../CartContext";
import CartList from "./CartList";
import Header from "./Header";
import ProductList from "./ProductList";

const CartApp = () => {
    return (
        <CartProvider>
            <div className="app">
                <Header />
                <main>
                    <ProductList />
                    <CartList />
                </main>
            </div>
        </CartProvider>
    )
}

export default CartApp



