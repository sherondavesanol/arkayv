// React
import { useState } from 'react';

// Bootstrap
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

// Style
import { StyledButton, StyledSecondaryButton, StyledInput } from '../LoginForm/LoginForm.style';

// API
import { CREATE_PRODUCT_URL } from '../../API';

export default function AddProduct(props) {

    const token = localStorage.getItem('token');

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [artist, setArtist] = useState('');
    const [description, setDescription] = useState('');
    const [inventory, setInventory] = useState('');
    const [image, setImage] = useState('');
    const [imageURL, setImageURL] = useState('');

    function handleImageChange(e) {
        setImage(e.target.files[0]);
        setImageURL(URL.createObjectURL(e.target.files[0]));
    };
        
    const handleModalClose = () => {

        props.hideModal();
        setName('');
        setPrice('');
        setArtist('');
        setDescription('');
        setInventory('');
        setImage('');
        setImageURL('');
    };

    const fetchCreateProduct = (e) => {
        
        e.preventDefault();

        const formData = new FormData(this);

        formData.append('name', name);
        formData.append('price', price);
        formData.append('artist', artist);
        formData.append('description', description);
        formData.append('inventory', inventory);
        formData.append('createdOn', Date());
        formData.append('image', image);

        fetch(CREATE_PRODUCT_URL, {
            method: 'POST',
            body: formData,
            headers: {
            'Authorization': `Bearer ${token}`
            }
        })
        .then(data => data.json())
        .then(data => {
            
            props.fetchAllProducts();
            handleModalClose();
        });
    };
  
    return (

        <Modal show={props.isModalOpen} centered>
        <Modal.Body>
            <Form className='py-4' onSubmit={fetchCreateProduct}>
            <h3 className='text-center mb-4'>CREATE A PRODUCT</h3>
            <Form.Group>
                <StyledInput
                type="text" 
                placeholder="Product Name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <StyledInput
                type="text" 
                placeholder="Artist Name" 
                value={artist}
                onChange={(e) => setArtist(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <StyledInput
                type="text" 
                placeholder="Product Description" 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <StyledInput
                type="number" 
                placeholder="Inventory" 
                value={inventory}
                onChange={(e) => setInventory(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <StyledInput
                type="number" 
                placeholder="Product Price (in USD)" 
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <img width={200} src={imageURL} className='my-3' alt="" />
                <StyledInput
                id="image"
                type="file" 
                onChange={handleImageChange}
                />
            </Form.Group>

            <div className='d-flex justify-content-between'>
                <StyledButton className='py-2' type='submit'>
                    Submit
                </StyledButton>
                <StyledSecondaryButton className='py-2' type='button' onClick={handleModalClose}>
                    Close
                </StyledSecondaryButton>
            </div>
            </Form>
        </Modal.Body>
        </Modal>
    );
  }