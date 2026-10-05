import {
    createContext,
    useContext,
    useEffect,
    useState
} from "react";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {

    const [cartItem, setCartItems] = useState(() => {
        const savedItems = localStorage.getItem("cart");

        if (savedItems) {
            return JSON.parse(savedItems);
        }

        return [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItem));
    }, [cartItem]);

    const addToCart = (product) => {
        setCartItems((prev) => {

            const isExisting = prev.find(
                (item) => item.id === product.id
            );

            if (isExisting) {
                return prev.map((item) =>
                    item.id === product.id
                        ? {
                            ...item,
                            quantity: item.quantity + 1
                        }
                        : item
                );
            } else {
                return [
                    ...prev,
                    {
                        ...product,
                        quantity: 1
                    }
                ];
            }
        });
    };

    return (
        <CartContext.Provider value={{ addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};