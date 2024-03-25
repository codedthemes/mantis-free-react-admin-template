import { useEffect, useState } from 'react';
import { DeleteOutlined } from '@ant-design/icons';
import { getDocs, deleteDoc, doc } from 'firebase/firestore';
import getColRef from './../../databaseHook';


// material-ui
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

// third-party
import { NumericFormat } from 'react-number-format';


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

const OurProducts = () => {

  const [productsList, setProductsList] = useState([]);
  let colRef = getColRef();

  useEffect(() => {
    const getProduct = async () => {
      const data = await getDocs(colRef);
      setProductsList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getProduct();
  });

  const deleteProduct = async (id) => {
    const productDoc = doc(colRef, id);
    await deleteDoc(productDoc);
  };


  // Sort the rows by the oldest date of order
  const sortedProducts = [...productsList].sort((a, b) => {
    const dateA = new Date(a.orderDate).getTime();
    const dateB = new Date(b.orderDate).getTime();
    return dateA - dateB;
  });




  return (
    <Box>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh', backgroundColor: "#D6C7AE" }}>
        <h1>Our Products </h1>
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
            {sortedProducts.map((product, index) => {

              return (
                <TableRow
                  hover
                  role="checkbox"
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  tabIndex={-1}
                  key={index}
                  products={product}
                >
                  <TableCell align="center">{product.name || location.state?.name}</TableCell>
                  <TableCell align="center">{product.category}</TableCell>
                  <TableCell align="center">
                    <NumericFormat value={product.cost} displayType="text" thousandSeparator suffix="€" />
                  </TableCell>
                  <TableCell align="center">
                    <NumericFormat value={product.quantity} displayType="text" thousandSeparator suffix="Kg" />
                  </TableCell>
                  <TableCell align="center">{product.orderDate}</TableCell>
                  <TableCell align="center"><button onClick={() => deleteProduct(product.id)}><DeleteOutlined /></button></TableCell>

                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default OurProducts;


