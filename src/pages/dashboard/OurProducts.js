

import { useEffect, useState } from 'react';
import {
  DeleteOutlined, CaretUpOutlined, CaretDownOutlined, ZoomInOutlined
} from '@ant-design/icons';

// material-ui
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

// third-party
import { NumericFormat } from 'react-number-format';
import instance from './instance';
import Popup from './Popup';


// ==============================|| PRODUCTS TABLE - HEADER CELL ||============================== //

const headCells = [
  {
    id: 'productPopup',
    align: 'center',
    disablePadding: true,
    label: 'Product Overview'
  },
  {
    id: 'productName',
    align: 'center',
    disablePadding: true,
    label: 'Product Name'
  },
  {
    id: 'category',
    align: 'center',
    disablePadding: true,
    label: 'Product Category'
  },
  {
    id: 'expDate',
    align: 'center',
    disablePadding: true,
    label: 'Expiration Date'
  },
  {
    id: 'cost',
    align: 'center',
    disablePadding: false,
    label: 'Cost (€) per piece'
  },
  {
    id: 'quantity',
    align: 'center',
    disablePadding: false,
    label: 'Quantity per piece'
  },
  {
    id: 'stock',
    align: 'center',
    disablePadding: false,
    label: 'Amount In Stock'
  },
  {
    id: 'totalCost',
    align: 'center',
    disablePadding: true,
    label: 'Total cost'
  },
  {
    id: 'orderDate',
    align: 'center',
    disablePadding: false,
    label: 'Last order'
  },
  {
    id: 'productAction',
    align: 'center',
    disablePadding: false,
    label: 'Delete Product'
  }
];



// ==============================|| PRODUCTS TABLE ||============================== //

const OurProducts = () => {

  const [productsList, setProductsList] = useState([]);
  const [sort, setSort] = useState({ keyToSort: "productQuantity", direction: "desc" });


  useEffect(() => {

    const fetchData = async () => {
      try {
        const res = await instance.get('/ourproducts.json');

        const keys = Object.keys(res.data);
        const productsArray = keys.map((key) => ({ key, ...res.data[key], totalCost: res.data[key].cost * res.data[key].stock }));

        setProductsList(productsArray);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(productsList);
  }, [productsList]);


  const handleHeaderClick = (headCell) => {
    const clickedKey = headCell.id;
    const direction = headCell.id === sort.keyToSort ? (sort.direction === 'desc' ? 'asc' : 'desc') : 'asc';

    if (headCell.id != "productAction" && headCell.id != "productPopup") {
      setSort({ keyToSort: clickedKey, direction: direction });
    }


  };

  const getSortedArray = (productsList) => {
    console.log(productsList);

    return productsList.sort((a, b) => {
      if (sort.direction === 'asc') {
        return a[sort.keyToSort] < b[sort.keyToSort] ? -1 : 1;
      } else {
        return a[sort.keyToSort] > b[sort.keyToSort] ? -1 : 1;
      }

    });
  };




  const deleteProductVol2 = async (id) => {
    try {
      console.log(`Product with key ${id} deleted successfully`);
      instance.delete(`/ourproducts/${id}.json`);

    } catch (error) {
      console.error('Error deleting product:', error);
      console.log(error.response.data);

    }
  };




  const [popupStates, setPopupStates] = useState(Array(getSortedArray(productsList).length).fill(false));

  const togglePopup = (index) => {
    const newPopupStates = [...popupStates];
    newPopupStates[index] = !newPopupStates[index];
    setPopupStates(newPopupStates);
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
            <TableHead>
              <TableRow>
                {headCells.map((headCell) => (
                  <TableCell
                    key={headCell.id}
                    align={headCell.align}
                    padding={headCell.disablePadding ? 'none' : 'normal'}
                    onClick={() => {
                      console.log(headCell.id);
                      handleHeaderClick(headCell)
                    }}
                  >
                    {headCell.id === sort.keyToSort && headCell.id !== 'productAction' && headCell.id !== 'productPopup' && (
                      <span>
                        {sort.direction === 'asc' ? <CaretUpOutlined /> : <CaretDownOutlined />}
                      </span>
                    )}
                    {headCell.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {getSortedArray(productsList).map((product, index) => (
                <>

                  <TableRow
                    hover
                    role="checkbox"
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    tabIndex={-1}
                    key={index}
                    product={product}
                  >
                    {/* <TableCell align="center" onClick={() => setButtonPopup(true)}>hey</TableCell> */}

                    <TableCell align="center"><button onClick={() => togglePopup(index)}><ZoomInOutlined /></button>
                      <Popup
                        trigger={popupStates[index]}
                        setTrigger={(value) => setPopupStates(prevState => {
                          const newState = [...prevState];
                          newState[index] = value;
                          return newState;
                        })}
                        name={product.productName}
                        stock={product.stock}
                        product={product}
                        productId={product.key}>
                      </Popup>
                    </TableCell>
                    <TableCell align="center" >{product.productName || location.state?.productName}</TableCell>
                    <TableCell align="center" >{product.category}</TableCell>
                    <TableCell align="center" >{product.expDate}</TableCell>
                    <TableCell align="center" >
                      <NumericFormat value={product.cost} displayType="text" thousandSeparator />
                    </TableCell>
                    <TableCell align="center" >
                      <NumericFormat value={product.quantity} displayType="text" thousandSeparator suffix="Kg" />
                    </TableCell>
                    <TableCell align="center" >
                      <NumericFormat value={product.stock} displayType="text" ></NumericFormat>
                    </TableCell>
                    <TableCell align="center">{product.cost * product.stock}</TableCell>
                    <TableCell align="center">{product.orderDate}</TableCell>
                    <TableCell align="center"><button onClick={() => deleteProductVol2(product.key)}><DeleteOutlined /></button></TableCell>
                  </TableRow>
                </>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Box>
  );
};

export default OurProducts;







