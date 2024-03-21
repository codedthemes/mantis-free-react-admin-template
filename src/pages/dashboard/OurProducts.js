// import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
// import { Link as RouterLink } from 'react-router-dom';
import productsData from './products.json';
import { DeleteOutlined } from '@ant-design/icons';


// material-ui
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

// third-party
import { NumericFormat } from 'react-number-format';

// project import
// import Dot from 'components/@extended/Dot';



function createData(id, name, cost, quantity, category, orderDate) {
  return { id, name, cost, quantity, category, orderDate };
}


let rows = productsData.products.map((product, index) => createData(
  index,
  product.name,
  product.cost,
  product.quantity,
  product.category,
  product.orderDate
)
);




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

  const [products, setProducts] = useState(rows);


  // let uniqueId = 0;

  // const createData = (name, cost, quantity, category, orderDate) => ({
  //   id: uniqueId++,
  //   name,
  //   cost,
  //   quantity,
  //   category,
  //   orderDate
  // });

  useEffect(() => {
    localStorage.clear();

    // Load products from local storage on component mount
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    } else {
      const initialProducts = productsData.products.map(product => createData(
        product.id,
        product.name,
        product.cost,
        product.quantity,
        product.category,
        product.orderDate
      ));
      localStorage.setItem('products', JSON.stringify(initialProducts));
      setProducts(initialProducts);
    }
  }, []);



  // useEffect(() => {
  //   axios.get("http://localhost:8000/products")
  //   .then((res) => {
  //     // const rows = res.productsData.products.map((product) =>  createData(
  //     //   product.name,
  //     //   product.cost,
  //     //   product.quantity,
  //     //   product.category,
  //     //   product.orderDate
  //     // ))

  //     // rows.sort((a, b) => {
  //     //   const dateA = new Date(a.orderDate).getTime();
  //     //   const dateB = new Date(b.orderDate).getTime();
  //     //   return dateA - dateB;
  //     // });
  //     setProducts(res.data);
  //     // setProducts(rows);

  //   });
  // },[]);

  // useEffect(() => {
  //   const storedData = localStorage.getItem('myData');

  //   if (storedData) {
  //     setData(JSON.parse(storedData));
  //   }
  // }, []);


  // useEffect(() => {
  //   const data = JSON.parse(localStorage.getItem('product'));
  //   if (data !== null) setProducts(JSON.parse(data));    

  // },[]);

  // useEffect(() => {
  //   if(products){
  //     window.localStorage.setItem('product',JSON.stringify(products));
  //   }
  // },[products]);

  const handleDelete = (id) => {

    const newProducts = products.filter(product => product.id !== id);
    setProducts(newProducts);
  };

  // Sort the rows by the oldest date of order
  const sortedProducts = [...products].sort((a, b) => {
    const dateA = new Date(a.orderDate).getTime();
    const dateB = new Date(b.orderDate).getTime();
    return dateA - dateB;
  });

  // // UseEffect to sort the products when the 'products' state changes
  // useEffect(() => {
  //   if (products) {
  //     const sortedProducts = [...products].sort((a, b) => {
  //       const dateA = new Date(a.orderDate).getTime();
  //       const dateB = new Date(b.orderDate).getTime();
  //       return dateA - dateB;
  //     });
  //     // Update the products state with the sorted array
  //     setProducts(sortedProducts);
  //     console.log(sortedProducts);

  //   }
  // }, [products]);





  return (
    <Box>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
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
                  {/* <TableCell align="center">{product.orderDate.toLocaleDateString()}</TableCell> */}
                  <TableCell align="center">{product.orderDate}</TableCell>
                  <TableCell align="center"><button onClick={() => handleDelete(product.id)}><DeleteOutlined /></button></TableCell>

                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
