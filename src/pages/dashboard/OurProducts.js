// import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
// import { Link as RouterLink } from 'react-router-dom';
import productsData from './products.json';
import Axios from 'axios';

// material-ui
import { Box,  Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

// third-party
import { NumericFormat } from 'react-number-format';

// project import
// import Dot from 'components/@extended/Dot';

function createData( productName, productCost,productQuantity,productCategory,productDate) {
  return { productName, productCost ,productQuantity, productCategory,productDate};
}


let rows = productsData.products.map((product) =>  createData(
    product.productName,
    product.productCost,
    product.productQuantity,
    product.productCategory,
    product.productDate
  )
);

// Sort the rows by the oldest date of order
rows.sort((a, b) => a.productDate - b.productDate);

// ==============================|| PRODUCTS TABLE - HEADER CELL ||============================== //

const headCells = [
  {
    id: 'productName',
    align: 'center',
    disablePadding: true,
    label: 'Product Name'
  },
  {
    id: 'productCategory',
    align: 'center',
    disablePadding: true,
    label: 'Product Category'
  },
  {
    id: 'productCost',
    align: 'center',
    disablePadding: false,
    label: 'Cost (€)'
  },
  {
    id: 'productQuantity',
    align: 'center',
    disablePadding: false,
    label: 'Quantity (Kg)'
  },
  {
    id: 'productDate',
    align: 'center',
    disablePadding: false,
    label: 'Last time ordered'
  },
  {
    id: 'productAction',
    align: 'center',
    disablePadding: false,
    label: 'Delete Product'
  }
];

// ==============================|| PRODUCTS TABLE - HEADER ||============================== //

function OrderTableHead() {


  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align}
            padding={headCell.disablePadding ? 'none' : 'normal'}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}




// ==============================|| PRODUCTS TABLE ||============================== //

export default function OurProducts() {

  const [products, setProducts] = useState(null);
  
  useEffect(() => {
    Axios.get("http://localhost:8000/products").then((res) => {
    setProducts(res.data);
    });
  },[]);

  

  return (
    <Box>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh'}}>
        <h1>Our Products</h1>
      </div>
      <TableContainer
        sx={{
          width: '100%',
          overflowX: 'auto',
          position: 'relative',
          display: 'block',
          maxWidth: '100%',
          '& td, & th': { whiteSpace: 'nowrap' }
        }}
      >
        <Table
          aria-labelledby="tableTitle"
          sx={{
            '& .MuiTableCell-root:first-of-type': {
              pl: 2
            },
            '& .MuiTableCell-root:last-of-type': {
              pr: 3
            }
          }}
        >
          <OrderTableHead />
          <TableBody>
            {products && products.map((product, index) => {

              return (
                <TableRow
                  hover
                  role="checkbox"
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  tabIndex={-1}
                  key={index}
                  products={products}
                >
                  <TableCell align="center">{product.name}</TableCell>
                  <TableCell align="center">{product.category}</TableCell>
                  <TableCell align="center">
                    <NumericFormat value={product.cost} displayType="text" thousandSeparator suffix="€" />
                  </TableCell>
                  <TableCell align="center">
                    <NumericFormat value={product.quantity} displayType="text" thousandSeparator suffix="Kg" />
                  </TableCell>
                  <TableCell align="center">{product.orderDate}</TableCell>
                  
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
