
import {
    createContext,
    useState,
    useEffect,
    useContext
} from "react";

const AuthContext = createContext(null);

const DEFAULT_AUTH_STATE = {
    isAuthenticated: false,
    name: "",
    email: ""
};

export const AuthProvider = ({ children }) => {

    // Get registered users from localStorage
    const [users, setUsers] = useState(() => {
        try {
            const savedUsers = localStorage.getItem("users");
            return savedUsers ? JSON.parse(savedUsers) : [];
        } catch (error) {
            console.error("Error loading users:", error);
            return [];
        }
    });

    // Get authentication state from localStorage
    const [auth, setAuth] = useState(() => {
        try {
            const savedAuth = localStorage.getItem("auth");
            return savedAuth
                ? JSON.parse(savedAuth)
                : DEFAULT_AUTH_STATE;
        } catch (error) {
            console.error("Error loading auth:", error);
            return DEFAULT_AUTH_STATE;
        }
    });

    // Authentication error state
    const [authError, setAuthError] = useState("");

    // Clear authentication error
    const clearAuthError = () => {
        setAuthError("");
    };

    // Save users to localStorage
    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users));
    }, [users]);

    // Save authentication state to localStorage
    useEffect(() => {
        localStorage.setItem("auth", JSON.stringify(auth));
    }, [auth]);


    // SIGN UP
    const signUp = (name, email, password) => {

        // Normalize email
        const normalizedEmail = email.trim().toLowerCase();

        // Check whether email already exists
        const existingUser = users.find(
            (user) => user.email === normalizedEmail
        );

        if (existingUser) {
            setAuthError("User with this email already exists.");
            return false;
        }

        setAuthError("");

        // Save new user
        setUsers((prev) => [
            ...prev,
            {
                name: name.trim(),
                email: normalizedEmail,
                password
            }
        ]);

        return true;
    };


    // SIGN IN
    const signIn = (email, password) => {

        // Normalize email
        const normalizedEmail = email.trim().toLowerCase();

        // Find existing user
        const existingUser = users.find(
            (user) =>
                user.email === normalizedEmail &&
                user.password === password
        );

        if (!existingUser) {
            setAuthError("Invalid email or password.");
            return false;
        }

        setAuthError("");

        // Update authentication state
        setAuth({
            isAuthenticated: true,
            name: existingUser.name,
            email: existingUser.email
        });

        return true;
    };


    // LOGOUT
    const logout = () => {
        setAuth(DEFAULT_AUTH_STATE);
        setAuthError("");
    };


    return (
        <AuthContext.Provider
            value={{
                signUp,
                signIn,
                logout,
                clearAuthError,
                auth,
                authError
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};


// Custom hook
export const useAuth = () => {
    return useContext(AuthContext);
};
