import React, { useState } from 'react';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import './App.css'; // เราใช้ App.css สำหรับจัดสไตล์

const productsData = [
  { id: 1, name: 'รองเท้า 1', price: 99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1CTGapyKe6uT03BdnUCnbEh6h2JVzLkknaQ&s' },
  { id: 2, name: 'รองเท้า 2', price: 119, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkZfoIiunlj-baiA_dPdIwah-8F4VvioQ1Vg&s' },
  { id: 3, name: 'รองเท้า 3', price: 99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDSl52-UUW5PiH2n8sERn8qDVi-Sgte9ikhg&s' },
  { id: 4, name: 'รองเท้า 4', price: 199, image: 'https://st.bigc-cs.com/cdn-cgi/image/format=webp,quality=90/public/media/catalog/product/49/20/2000007642249/2000007642249_1-20230911152819-.jpg' },
  { id: 5, name: 'รองเท้า 5', price: 89 ,image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVjlY5LSKzbJE3FNsvlHMa5WgQOpPPJbVzAA&s' },
  { id: 6, name: 'รองเท้า 6', price: 129, image: 'https://mpics.mgronline.com/pics/Images/564000003615401.JPEG' },
  { id: 7, name: 'รองเท้า 7', price: 259, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwDMXtXA6WRELmWQIFlCEFe8_I_7rNF-3pEw&s' },
  { id: 9, name: 'รองเท้า 9', price: 289, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnQy07O2laZf5LXZkAxao_1UcmAkklK8MxRQ&s' },
  { id: 10, name: 'รองเท้า 10', price: 99 , image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvoo_nlTLfjyBDYa2eeNOoKUpWT-HIHcoy-A&s' },
  { id: 11, name: 'รองเท้า 11', price: 79, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWWgqSSzlKtSpC2xxjyPH_9FVa5kta8T4CYg&s' },
  { id: 12, name: 'รองเท้า 12', price: 75, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqJwbNdCulZgd_hnPfVsHsEo-2zFdmZhkRSg&s' },
];

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);

    if (existingProduct) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  return (
    <div className="App bg-[url('https://img.freepik.com/free-photo/paper-bags-different-colors-blue-background-top-view_169016-43755.jpg')] bg-center bg-cover bg-gray-500 bg-blend-multiply">
      <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
      <div className="product-list">
        {productsData.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
      
    </div>
  );
}

export default App;