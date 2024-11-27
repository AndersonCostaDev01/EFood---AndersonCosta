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
            <Footer />
        </>
    )
}