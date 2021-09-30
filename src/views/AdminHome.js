//React
import { useEffect } from "react";

export default function Home() {
    
    useEffect(() => window.scrollTo(0, 0), []);
    
    return (
        <>
            <h2>Welcome to admin view!</h2>

            <h3 className='mt-4'>Status:</h3>
            <p className='m-0'>Products tab - Everything is working.</p>
            <p className='m-0'>Users tab - work in progress.</p>
            <p className='m-0'>Orders tab - work in progress.</p>
            <p className='m-0'>[USER] Cart tab - work in progress.</p>
            <p className='m-0'>[USER] Wishlist tab - work in progress.</p>
            <p className='m-0'>[USER] Profile tab - work in progress.</p>
            <p className='m-0'>Checkout function - work in progress.</p>
            
            <h3 className='mt-4'>Logs:</h3>
            <p className='m-0'>09/28/2021 - Created admin view.</p>
            <p className='m-0'>09/28/2021 - Created "Retrieve Active Products" API.</p>
            <p className='m-0'>09/28/2021 - Created "Retreieve All Products" API.</p>
            <p className='m-0'>09/28/2021 - Created "Create Product" API.</p>
            <p className='m-0'>09/28/2021 - Created "Archive Product" API.</p>
            <p className='m-0'>09/28/2021 - Created "Restore Product" API.</p>
            <p className='m-0'>09/28/2021 - Created "Update Product" API.</p>
            <p className='m-0'>09/28/2021 - Created "Delete Product" API.</p>
            <p className='m-0'>09/28/2021 - Explored Material UI and Styled Components.</p>
            <br></br>
            <p className='m-0'>09/29/2021 - Mapped products data in tabular form with Material UI.</p>
            <p className='m-0'>09/29/2021 - Created "Create Product" prototype UI and function.</p>
            <p className='m-0'>09/29/2021 - Utilized multer with "Create Product" API for image uploads.</p>
            <p className='m-0'>09/29/2021 - Updated "Create Product" function.</p>
            <p className='m-0'>09/29/2021 - Created "Archive Product" prototype UI and function.</p>
            <p className='m-0'>09/29/2021 - Created "Restore Product" prototype UI and function.</p>
            <p className='m-0'>09/29/2021 - Created "Update Product" prototype UI and function.</p>
            <p className='m-0'>09/29/2021 - Created "Delete Product" prototype UI and function.</p>
            <br></br>
            <p className='m-0'>09/30/2021 - Updated products table UI action buttons with Styled Components.</p>
            <p className='m-0'>09/30/2021 - Updated "Create Product" UI with Styled Components.</p>
            <p className='m-0'>09/30/2021 - Updated "Archive Product" UI with Styled Components.</p>
            <p className='m-0'>09/30/2021 - Updated "Restore Product" UI with Styled Components.</p>
            <p className='m-0'>09/30/2021 - Updated "Update Product" UI with Styled Components.</p>
            <p className='m-0'>09/30/2021 - Updated "Delete Product" UI with Styled Components.</p>
            <p className='m-0'>09/30/2021 - Deployed back-end in Heroku.</p>
            <p className='m-0'>09/30/2021 - Deployed front-end in Vercel.</p>
            <p className='m-0'>09/30/2021 - Fixed bug failing to re-render DOM.</p>
            <p className='m-0'>09/30/2021 - Added content loader components.</p>
        </>
    )
}