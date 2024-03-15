// material-ui
import { Box, FormControl, OutlinedInput } from '@mui/material';
import { useState } from 'react';

const AddProducts = () => {

  const [name ,setName] = useState(''); 
  const [cost ,setCost] = useState(''); 

  return (
    <Box sx={{ width: '100%', ml: { xs: 0, md: 1 } }}>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh'}}>
        <h1>Add new product</h1>
      </div>
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
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <h3>Add cost of the product</h3>
      </div>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <FormControl sx={{ width: { xs: '100%', md: 250 }}}>
          <OutlinedInput
            type="text" value={cost} onChange={(e) => setCost(e.target.value)}
            placeholder="Cost"
          />
        </FormControl>
      </div>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh'}}>
        <button>Add product</button>
      </div>
      <p>{name}</p>
      <p>{cost}</p>
    </Box>
  );
}

export default AddProducts;