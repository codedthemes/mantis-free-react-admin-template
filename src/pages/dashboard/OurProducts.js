import { useEffect, useState } from 'react';
import { DeleteOutlined, PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';

// material-ui
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

// third-party
import { NumericFormat } from 'react-number-format';
import instance from './instance';


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
    label: 'Cost (€) per piece'
  },
  {
    id: 'productQuantity',
    align: 'center',
    disablePadding: false,
    label: 'Quantity per piece'
  },
  {
    id: 'productInStock',
    align: 'center',
    disablePadding: false,
    label: 'Amount In Stock'
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

  const [stock, setStock] = useState('');


  useEffect(() => {
   
    const fetchData = async () => {
      try {
        const res = await instance.get('/ourproducts.json');

        const keys = Object.keys(res.data);
        const productsArray = keys.map((key) => ({ key, ...res.data[key] }));

        const sortedProducts = sortProductsByDate(productsArray);
        setProductsList(sortedProducts);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
  }, [productsList]);


  const deleteProductVol2 = async (id) => {
    try {
      console.log(`Product with key ${id} deleted successfully`);
      instance.delete(`/ourproducts/${id}.json`);
      // Refresh the page after a short delay
      setTimeout(() => {
        window.location.reload();
      }, 300); // Adjust the delay as needed
    } catch (error) {
      console.error('Error deleting product:', error);
      console.log(error.response.data);

    }
  };



  const increaseAmount = async (e, id) => {
    e.preventDefault();

    // Find the product in the productsList array based on its id
    const productToUpdate = productsList.find(product => product.key === id);

    console.log(productToUpdate);
    if (productToUpdate) {
      // Increase the stock amount of the product
      productToUpdate.stock += 1; 

      const payload = { ...productToUpdate,stock: productToUpdate.stock };

      await instance.put(`ourproducts/${id}.json`, payload)
          .then((res) => {
              console.log(res);
          })
          .catch((error) => {
              console.error(error);
          });
    }
    // Refresh the page
    setTimeout(() => {
      window.location.reload();
    }, 300); 

  };

  const decreaseAmount = async (e, id) => {
    e.preventDefault();

     // Find the product in the productsList array based on its id
     const productToUpdate = productsList.find(product => product.key === id);
     console.log(productToUpdate);
     if (productToUpdate) {
       // Increase the stock amount of the product
       productToUpdate.stock -= 1; 
       if(productToUpdate.stock === -1){
          alert(`Can't have negative stock.`)
       } else {
        
        const payload = { ...productToUpdate,stock: productToUpdate.stock };
  
        
        await instance.put(`ourproducts/${id}.json`, payload)
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.error(error);
            });
        }
     }
     // Refresh the page 
     setTimeout(() => {
      window.location.reload();
    }, 300); 
  };


  // Sort the rows by the oldest date of order
  const sortProductsByDate = (productsList) => {
    return [...productsList].sort((a, b) => {
      const dateA = new Date(a.orderDate).getTime();
      const dateB = new Date(b.orderDate).getTime();
      return dateA - dateB;
    });
  };




  return (
    <Box>
      <div style={{ borderRadius: '5px', overflow: 'hidden' }} >
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
              {productsList.map((product, index) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    tabIndex={-1}
                    key={index}
                  >
                    <TableCell align="center">{product.productName || location.state?.productName}</TableCell>
                    <TableCell align="center">{product.category}</TableCell>
                    <TableCell align="center">
                      <NumericFormat value={product.cost} displayType="text" thousandSeparator suffix="€" />
                    </TableCell>
                    <TableCell align="center">
                      <NumericFormat value={product.quantity} displayType="text" thousandSeparator suffix="Kg" />
                    </TableCell>
                    <TableCell align="center">
                      <button style={{ margin: '10px' }} value={stock} onClick={(e) => decreaseAmount(e, product.key)} onChange={(e) => setStock(e.target.value)}><MinusCircleOutlined></MinusCircleOutlined></button>
                      <NumericFormat value={product.stock} displayType="text" ></NumericFormat>
                      <button style={{ margin: '10px' }} value={stock} onClick={(e) => increaseAmount(e, product.key)} onChange={(e) => setStock(e.target.value)}><PlusCircleOutlined></PlusCircleOutlined></button>
                    </TableCell>
                    <TableCell align="center">{product.orderDate}</TableCell>
                    <TableCell align="center"><button onClick={() => deleteProductVol2(product.key)}><DeleteOutlined /></button></TableCell>

                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Box>
  );
};

export default OurProducts;