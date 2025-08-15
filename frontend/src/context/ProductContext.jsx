import { useState, useEffect, createContext, useContext } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Failed to fetch products ', error);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, [])

        return (
        <ProductContext.Provider value={{ products, loading }}>
            {children}
        </ProductContext.Provider>
        )
};

export const useProduct = ()=>{
    return useContext(ProductContext)
}