import CartSection from "../../components/Cart";
import Footer from "../../components/Footer";
import HeaderCart from "../../components/HeaderCart";
import ItensCart from "../../components/ItensCart";

export default function Cart () {
    return (
        <>
            <HeaderCart />
            <div className="container">
                <ItensCart />
            </div>
            <CartSection />
            <Footer />
        </>
    )
}