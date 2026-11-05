
import {
    createContext,
    useContext,
    useEffect,
    useState
} from "react";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {

    const clearCart = () => {
        setCartItems([]);
    };

    const [cartItems, setCartItems] = useState(() => {
        try {
            const savedItems = localStorage.getItem("cart");
            return savedItems ? JSON.parse(savedItems) : [];
        } catch {
            return [];
        }
    });

    // Save cart data whenever cartItems changes
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    // Add product to cart
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
            }

            return [
                ...prev,
                {
                    ...product,
                    quantity: 1
                }
            ];
        });
    };

    // Increase quantity
    const increaseQuantity = (id) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    // Decrease quantity (minimum 1)
    const decreaseQuantity = (id) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        quantity: Math.max(1, item.quantity - 1)
                    }
                    : item
            )
        );
    };

    // Remove product completely
    const removeFromCart = (id) => {
        setCartItems((prev) =>
            prev.filter((item) => item.id !== id)
        );
    };

    // Total number of items (including quantities)
    const cartCount = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    return (
       <CartContext.Provider
            value={{
                cartItems,
                cartCount,
                addToCart,
                increaseQuantity,
                decreaseQuantity,
                removeFromCart,
                clearCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error(
            "useCart must be used inside CartProvider"
        );
    }

    return context;
};






// import {
//     createContext,
//     useContext,
//     useEffect,
//     useState
// } from "react";

// const CartContext = createContext(null);

// export const CartProvider = ({ children }) => {

//     const [cartItem, setCartItems] = useState(() => {
//         const savedItems = localStorage.getItem("cart");

//         if (savedItems) {
//             return JSON.parse(savedItems);
//         }

//         return [];
//     });

//     useEffect(() => {
//         localStorage.setItem("cart", JSON.stringify(cartItem));
//     }, [cartItem]);

//     const addToCart = (product) => {
//         setCartItems((prev) => {

//             const isExisting = prev.find(
//                 (item) => item.id === product.id
//             );

//             if (isExisting) {
//                 return prev.map((item) =>
//                     item.id === product.id
//                         ? {
//                             ...item,
//                             quantity: item.quantity + 1
//                         }
//                         : item
//                 );
//             } else {
//                 return [
//                     ...prev,
//                     {
//                         ...product,
//                         quantity: 1
//                     }
//                 ];
//             }
//         });
//     };

//     return (
//         <CartContext.Provider value={{ addToCart }}>
//             {children}
//         </CartContext.Provider>
//     );
// };

// export const useCart = () => {
//     return useContext(CartContext);
// };