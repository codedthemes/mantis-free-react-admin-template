// material-ui
import { Box, FormControl, OutlinedInput } from '@mui/material';
import { useState } from 'react';
import getColRef from './../../databaseHook';
import {
  addDoc,
} from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import './AddProduct.css';

let colRef = getColRef();


const AddProducts = () => {
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('Coffee');
  const [orderDate, setOrderDate] = useState('');
  const [stock, setStock] = useState('');
  let navigate = useNavigate();

  const addProduct = (e) => {

    e.preventDefault();
    addDoc(colRef, {
      name: name,
      cost: cost,
      quantity: quantity,
      category: category,
      orderDate: orderDate,
      stock: stock
    })
      .then(() => {
        console.log("product added");
        
      })
    navigate("/ourproducts")
  }



  return (
    <Box className="container" sx={{ width: '100%', ml: { xs: 0, md: 1 } }} >
      <div className="title" >
        <h1>Add new product</h1>
      </div>
      <form >
        {/* ==============================|| Add name of the product ||============================== */}
        <div className="label">
          <h3>Add name of the product </h3>
        </div>
        <div  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px',backgroundColor: 'red' }}>
          <FormControl sx={{ width: { xs: '100%', md: 250 } }}>
            <OutlinedInput
              type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}
              placeholder="Name" style={{ backgroundColor: 'white' }} required
            />
          </FormControl>
        </div>

        {/* ==============================|| Add quantity of the product ||============================== */}
        <div className="label">
          <h3>Add quantity of the product in kilograms</h3>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
          <FormControl sx={{ width: { xs: '100%', md: 250 } }}>
            <OutlinedInput
              type="text" name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)}
              placeholder="Quantity" style={{ backgroundColor: 'white' }} required
            />
          </FormControl>
        </div>

        {/* ==============================|| Add cost of the product ||============================== */}
        <div className="label">
          <h3>Add cost of the product in Euro</h3>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
          <FormControl sx={{ width: { xs: '100%', md: 250 } }}>
            <OutlinedInput
              type="text" name="cost" value={cost} onChange={(e) => setCost(e.target.value)}
              placeholder="Cost" style={{ backgroundColor: 'white' }} required
            />
          </FormControl>
        </div>

        {/* ==============================|| Add amount of the product in stock ||============================== */}
        <div className="label">
          <h3>Add amount of the product in stock</h3>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
          <FormControl sx={{ width: { xs: '100%', md: 250 } }}>
            <OutlinedInput
              type="number" name="stock" value={stock} onChange={(e) => setStock(parseInt(e.target.value,10))}
              placeholder="Amount" style={{ backgroundColor: 'white' }} required
            />
          </FormControl>
        </div>
      </form>
      <form>
        {/* ==============================|| Select category of the product ||============================== */}
        <div className="label">
          <h3>Select category of the product</h3>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <FormControl sx={{ width: { xs: '100%', md: 250 } }}>
            <select name="category" id="categoryID" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="Coffee">Coffee</option>
              <option value="Non coffee">Non coffee</option>
              <option value="Bakery">Bakery</option>
              <option value="Desert">Desert</option>
              <option value="Salad">Salad</option>
            </select>
          </FormControl>
        </div>

        {/* ==============================|| Select date of order for the product ||============================== */}
        <div className="label">
          <h3>Select date of order</h3>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <FormControl sx={{ width: { xs: '100%', md: 250 } }}>
            <input type="date" name='orderDate' id="date" value={orderDate} onChange={(e) => setOrderDate(e.target.value)} required></input>
          </FormControl>
        </div>
      </form>
      <div className="add-button">
        <button className="button"  onClick={(e) => addProduct(e)}>Add product</button>
      </div>

    </Box>


  );
}

export default AddProducts;

