// material-ui
import { Box, FormControl, OutlinedInput } from '@mui/material';
import { useState } from 'react';
import Axios from 'axios';


const AddProducts = () => {

  const [name ,setName] = useState(''); 
  const [cost ,setCost] = useState(''); 
  const [quantity ,setQuantity] = useState(''); 
  const [category ,setCategory] = useState('Coffee'); 
  const [orderDate ,setOrderDate] = useState(''); 

  const handleSubmit = (e) => {
      e.preventDefault();

      // fetch('http://localhost:8000/products', {
      //   method: 'POST',
      //   headers: {"Content-Type": "application/json"},
      //   body: JSON.stringify(product)
      // }).then(() => {
      //   console.log('new product added');
      //   console.log(product);
      // })

      Axios.post('http://localhost:8000/products', {name,category,cost,quantity,orderDate})
      .then(data => {
        console.log(data);
      }
      )
      .catch(err => console.log(err))
  }
  

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ width: '100%', ml: { xs: 0, md: 1 } }} onSubmit={handleSubmit}>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh'}}>
          <h1>Add new product</h1>
        </div>

        {/* ==============================|| Add name of the product ||============================== */}
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
          <h3>Add name of the product</h3>
        </div>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
          <FormControl sx={{ width: { xs: '100%', md: 250 }}}>
            <OutlinedInput
              type="text" required value={name} onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
          </FormControl>
        </div>


        {/* ==============================|| Add quantity of the product ||============================== */}
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
          <h3>Add quantity of the product in kilograms</h3>
        </div>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
          <FormControl sx={{ width: { xs: '100%', md: 250 }}}>
            <OutlinedInput
              type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)}
              placeholder="Quantity"
            />
          </FormControl>
        </div>

        {/* ==============================|| Add cost of the product ||============================== */}
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
          <h3>Add cost of the product in Euro</h3>
        </div>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
          <FormControl sx={{ width: { xs: '100%', md: 250 }}}>
            <OutlinedInput
              type="text" value={cost} onChange={(e) => setCost(e.target.value)}
              placeholder="Cost"
            />
          </FormControl>
        </div>

        {/* ==============================|| Select category of the product ||============================== */}
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
          <h3>Select category of the product</h3>
        </div>
        <div style={{display: 'flex',justifyContent:'center', alignItems:'center' }}>
          <FormControl sx={{ width: { xs: '100%', md: 250 }}}>
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
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
          <h3>Select date of order</h3>
        </div>
        <div style={{display: 'flex',justifyContent:'center', alignItems:'center' }}>
          <FormControl sx={{ width: { xs: '100%', md: 250 }}}>
            <input type="date" id="date" value={orderDate} onChange={(e) => setOrderDate(e.target.value)}></input>
          </FormControl>
        </div>


        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh'}}>
          <button >Add product</button>
        </div>


      </Box>
    </form>

    
  );
}

export default AddProducts;