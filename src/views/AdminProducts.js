// React
import { useState, useEffect } from "react";

// Styled Component
import styled from 'styled-components';

// Components
import AddProduct from "../components/AddProduct/AddProduct";
import ProductsTable from "../components/Tables/ProductsTable";

// API
import { GET_ALL_PRODUCTS_URL, ARCHIVE_PRODUCT_URL, RESTORE_PRODUCT_URL, DELETE_PRODUCT_URL } from '../API';

const StyledButton = styled.button`

    font-size: 0.85rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    background-color: var(--secondary);
    color: var(--white);
    padding: 0.5rem 1rem;
    margin-bottom: 1.5rem;
    width: auto;
    border: none;

    &:hover {
        background-color: rgba(200, 0, 0, 1);
        cursor: pointer;
    }

    &:disabled {
        background-color: rgba(0, 0, 0, 0.3);
    }
`

export default function AdminProducts() {
    
    useEffect(() => window.scrollTo(0, 0), []);
    
    const token = localStorage.getItem('token');

    const [modal, setModal] = useState(false);
    const showModal = () => setModal(true);
    const hideModal = () => setModal(false);

    const [toggler, setToggler] = useState(false);
    const [productsArray, setProductsArray] = useState([]);

    const fetchAllProducts = () => {
        fetch(GET_ALL_PRODUCTS_URL, {headers: {'Authorization': `Bearer ${token}`}})
        .then(data => data.json())
        .then(data => setProductsArray(data));
    };

    const archiveToggle = (productId, isActive) => {

        setToggler(!toggler);

        isActive
            ? 
                fetch(ARCHIVE_PRODUCT_URL, {
                    method: "PUT",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({id: productId})
                })
                .then(data => data.json())
                .then(data => data)
            : 
                fetch(RESTORE_PRODUCT_URL, {
                    method: "PUT",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({id: productId})
                })
                .then(data => data.json())
                .then(data => data);
    };

    const deleteProduct = (productId) => {

        setToggler(!toggler);

        fetch(DELETE_PRODUCT_URL, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({id: productId})
        })
    };

    useEffect(() => {
        fetchAllProducts();
    }, [token, toggler]);
    
    return (
        <>  
            <h3>You are currently at products view as an admin.</h3>
            <p>Click the table header cell to sort respective data.</p>
            <StyledButton type='button' onClick={showModal}>CREATE PRODUCT</StyledButton>
            <AddProduct 
                isModalOpen={modal}
                hideModal={hideModal}
                toggler={toggler}
                setToggler={setToggler}
            />
            <ProductsTable 
                isModalOpen={modal}
                hideModal={hideModal}
                productsData={productsArray}
                archiveToggle={archiveToggle}
                deleteProduct={deleteProduct}
                toggler={toggler}
                setToggler={setToggler}
            />
        </>
    )
}