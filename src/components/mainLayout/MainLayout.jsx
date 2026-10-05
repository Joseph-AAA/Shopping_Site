import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const MainLayout = () => {
    return (
        <div className="app">
            <Navbar />

            <main className="app-main">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default MainLayout;