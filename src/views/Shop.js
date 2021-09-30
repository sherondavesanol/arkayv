import { useEffect } from "react";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";

export default function Shop() {
    useEffect(() => window.scrollTo(0, 0), []);

    return (
        <>
            <div className='d-flex mt-3'>
                <h2 className='col-6 col-lg-12 text-lg-center'>Shop</h2>
                <i className="fas fa-filter col-6 d-lg-none"></i>
            </div>
            <FeaturedProducts />
        </>
    )
}