// React
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import UserContext from './UserContext';

// API
import { GET_USER_DETAILS, VIEW_CART_URL, VIEW_WISHLIST_URL, defaultOptions  } from './API';

// Global Style
import { GlobalStyle } from './GlobalStyle';

// Views
import AdminHome from './views/AdminHome';
import AdminProducts from './views/AdminProducts';
import Home from './views/Home';
import Shop from './views/Shop';
import Cart from './views/Cart';
import Profile from './views/Profile';

export default function App() {

	const [user, setUser] = useState({id: null, isAdmin: null});
	const [cartCount, setCartCount] = useState(0);
	const [wishlistCount, setWishlistCount] = useState(0);
	
	const token = localStorage.getItem('token');

	const unsetUser = () => {
		localStorage.clear();
		setUser({id: null, isAdmin: null});
	};

	const HomeComponent = user.isAdmin ? AdminHome : Home;
	const ProductsComponent = user.isAdmin ? AdminProducts : Home;

	useEffect(() => {
		fetch(GET_USER_DETAILS, {headers: {'Authorization': `Bearer ${token}`}})
			.then(data => data.json())
			.then(data => {

				if(data.auth === 'failed') {
					setUser({id: null, isAdmin: null});
				} else {
					setUser({id: data._id, isAdmin: data.isAdmin});
				};
			});

		fetch(VIEW_CART_URL, defaultOptions)
			.then(data => data.json())
			.then(data => setCartCount(data.length));

		fetch(VIEW_WISHLIST_URL, defaultOptions)
			.then(data => data.json())
			.then(data => setWishlistCount(data.length));

	}, [token, wishlistCount, cartCount]);

	return (
		<UserContext.Provider value={{user, setUser, unsetUser}}>
			<Router>
				<Navbar 
					cartCount={cartCount}
					wishlistCount={wishlistCount}
				/>
				<Switch>
					<Route exact path='/' component={HomeComponent} />
					<Route exact path='/shop' component={Shop}/>
					<Route exact path='/cart' component={Cart} />
					<Route exact path='/wishlist' component={Home}/>
					<Route exact path='/profile' component={Profile}/>
					<Route exact path='/products' component={ProductsComponent}/>
				</Switch>
				<Footer />
				<GlobalStyle />
			</Router>
		</UserContext.Provider>
	);
}