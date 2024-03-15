// import PropTypes from 'prop-types';
import { useEffect } from 'react';
// import { Link as RouterLink } from 'react-router-dom';
import productsData from './products.json';

// material-ui
import { Box,  Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

// third-party
import { NumericFormat } from 'react-number-format';

// project import
// import Dot from 'components/@extended/Dot';

function createData( productName, productCost,productQuantity,productCategory,productDate) {
  return { productName, productCost ,productQuantity, productCategory,productDate};
}

// const rows = [
//   createData(1, "/images/esp.jpg", 'Espresso', 5 / 2),
//   createData(2, "/images/cappucino.jpg", 'Cappuccino', 3),
//   createData(3, "/images/mocha.jpg", 'Mocha', 4),
//   createData(4, "/images/americano.jpg", 'Caffe Americano', 2),
//   createData(5, "/images/chi_sal.jpg", 'Chicken salad', 11 / 2),
//   createData(6, "/images/tur_avo.jpg", 'Turkey and Avocado', 8),
//   createData(7, "/images/nitro_coffee.jpg", 'Nitro Cold Brew', 5)
// ];

let rows = productsData.products.map((product) => createData(
  product.productName,
  product.productCost,
  product.productQuantity,
  product.productCategory,
  product.productDate
));

// Sort the rows based on trackingNo
rows.sort((a, b) => a.productID - b.productID);


// ==============================|| ORDER TABLE - HEADER CELL ||============================== //

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
  }
];

// ==============================|| ORDER TABLE - HEADER ||============================== //

function OrderTableHead() {

  useEffect(() => {
    console.log('use effect ran');
    console.log(headCells);
  },[]);

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



// ==============================|| ORDER TABLE ||============================== //

export default function OurProducts() {

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
            {rows.map((row) => {

              return (
                <TableRow
                  hover
                  role="checkbox"
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  tabIndex={-1}
                  key={row.productID}
                >
                  <TableCell align="center">{row.productName}</TableCell>
                  <TableCell align="center">{row.productCategory}</TableCell>
                  <TableCell align="center">
                    <NumericFormat value={row.productCost} displayType="text" thousandSeparator suffix="€" />
                  </TableCell>
                  <TableCell align="center">
                    <NumericFormat value={row.productQuantity} displayType="text" thousandSeparator suffix="Kg" />
                  </TableCell>
                  <TableCell align="center">{row.productDate}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
