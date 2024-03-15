// import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import productsData from './products.json';

// material-ui
import { Box, Link, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

// third-party
import { NumericFormat } from 'react-number-format';

// project import
// import Dot from 'components/@extended/Dot';

function createData(productID, productPic, productName, protein) {
  return { productID, productPic, productName, protein };
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
  product.productID,
  product.productPic,
  product.productName,
  product.productCost
));

// Sort the rows based on trackingNo
rows.sort((a, b) => a.productID - b.productID);



// function descendingComparator(a, b, orderBy) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// }

// function getComparator(order, orderBy) {
//   return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
// }

// function stableSort(array, comparator) {
//   const stabilizedThis = array.map((el, index) => [el, index]);
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0]);
//     if (order !== 0) {
//       return order;
//     }
//     return a[1] - b[1];
//   });
//   return stabilizedThis.map((el) => el[0]);
// }

// ==============================|| ORDER TABLE - HEADER CELL ||============================== //

const headCells = [
  {
    id: 'productID',
    align: 'center',
    disablePadding: false,
    label: 'Product ID'
  },
  {
    id: 'productPic',
    align: 'center',
    disablePadding: false,
    label: 'Product Image'
  },
  {
    id: 'productName',
    align: 'center',
    disablePadding: true,
    label: 'Product Name'
  },

  {
    id: 'productCost',
    align: 'center',
    disablePadding: false,
    label: 'Cost'
  }
];

// ==============================|| ORDER TABLE - HEADER ||============================== //

function OrderTableHead() {

  useEffect(() => {
    fetch('http://localhost:8000/products')
  }, []);

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align}
            padding={headCell.disablePadding ? 'none' : 'normal'}
          // sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

// OrderTableHead.propTypes = {
//   order: PropTypes.string,
//   orderBy: PropTypes.string
// };

// ==============================|| ORDER TABLE - STATUS ||============================== //

// const OrderStatus = ({ status }) => {
//   let color;
//   let title;

//   switch (status) {
//     case 0:
//       color = 'warning';
//       title = 'On the way';
//       break;
//     case 1:
//       color = 'success';
//       title = 'Delivered';
//       break;
//     case 2:
//       color = 'error';
//       title = 'Canceled';
//       break;
//     default:
//       color = 'primary';
//       title = 'None';
//   }

//   return (
//     <Stack direction="row" spacing={1} alignItems="center">
//       <Dot color={color} />
//       <Typography>{title}</Typography>
//     </Stack>
//   );
// };

// OrderStatus.propTypes = {
//   status: PropTypes.number
// };

// ==============================|| ORDER TABLE ||============================== //

export default function OurProducts() {
  // const [order] = useState('asc');
  // const [orderBy] = useState('productID');
  // const [selected] = useState([]);

  // const isSelected = (productID) => selected.indexOf(productID) !== -1;

  return (
    <Box>
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
            {rows.map((row, index) => {
              const labelId = `enhanced-table-checkbox-${index}`;

              return (
                <TableRow
                  hover
                  role="checkbox"
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  // aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={row.productID}
                // selected={isItemSelected}
                >
                  <TableCell component="th" id={labelId} scope="row" align="center">
                    <Link color="secondary" component={RouterLink} to="">
                      {row.productID}
                    </Link>
                  </TableCell>
                  <TableCell align="center"><img src={row.productPic} alt="product" style={{ width: '100px', height: 'auto' }}></img></TableCell>
                  <TableCell align="center">{row.productName}</TableCell>
                  {/* <TableCell align="center">
                    <OrderStatus status={row.carbs} />
                  </TableCell> */}
                  <TableCell align="center">
                    <NumericFormat value={row.protein} displayType="text" thousandSeparator suffix="€" />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
