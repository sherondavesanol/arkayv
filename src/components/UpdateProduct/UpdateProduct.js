// React
import { useState, useEffect } from 'react';

// Bootstrap
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

// Style
import { StyledButton, StyledSecondaryButton, StyledInput } from '../LoginForm/LoginForm.style';

// API
import { VIEW_PRODUCT_URL, UPDATE_PRODUCT_URL, defaultOptions } from '../../API';

export default function UpdateProduct(props) {

    const token = localStorage.getItem('token');

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [artist, setArtist] = useState('');
    const [description, setDescription] = useState('');
    const [inventory, setInventory] = useState('');
    const [image, setImage] = useState('');
    const [imageURL, setImageURL] = useState('');

    const fetchViewProduct = (productId) => (productId).length !== 0 
                                ? 
                                    fetch(VIEW_PRODUCT_URL, {
                                        ...defaultOptions,
                                        body: JSON.stringify({id: productId}),
                                        headers: {
                                            'Authorization': `Bearer ${token}`,
                                            'Content-Type': 'application/json'
                                        }
                                    })
                                    .then(data => data.json())
                                    .then(data => {
                                        
                                        setName(data.name);
                                        setPrice(data.price.toFixed(2));
                                        setArtist(data.artist);
                                        setDescription(data.description);
                                        setInventory(data.inventory);
                                        setImage(data.image);
                                        setImageURL('https://arkayv-api.herokuapp.com/' + data.image);
                                    })
                                :
                                    null;

    useEffect(() => {
        fetchViewProduct(props.productId);
    }, [props.productId]);

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

    const fetchUpdateProduct = (e) => {
        
        e.preventDefault();

        const formData = new FormData(this);

        formData.append('id', props.productId);
        formData.append('name', name);
        formData.append('price', price);
        formData.append('artist', artist);
        formData.append('description', description);
        formData.append('inventory', inventory);
        formData.append('createdOn', Date());
        formData.append('image', image);

        fetch(UPDATE_PRODUCT_URL, {
            method: 'PUT',
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
            <Form className='py-4' onSubmit={fetchUpdateProduct}>
            <h3 className='text-center mb-4'>UPDATE PRODUCT</h3>
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
                height={200}
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