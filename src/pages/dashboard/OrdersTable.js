import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { Box, Link, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

// third-party
import { NumericFormat } from 'react-number-format';

// project import
import Dot from 'components/@extended/Dot';

function createData(trackingNo, itemPic, name, carbs, protein) {
  return { trackingNo, itemPic, name, carbs, protein };
}

const rows = [
  createData(84564564, "/images/esp.jpg", 'Espresso', 2, 5 / 2),
  createData(98756325, "/images/esp.jpg", 'Espresso', 1, 5 / 2),
  createData(98652366, "/images/cappucino.jpg", 'Cappuccino', 1, 3),
  createData(13286564, "/images/mocha.jpg", 'Mocha', 1, 4),
  createData(98764564, "/images/americano.jpg", 'Caffe Americano', 0, 2),
  createData(86739658, "/images/cappucino.jpg", 'Cappuccino', 0, 3),
  createData(13256498, "/images/chi_sal.jpg", 'Chicken salad', 2, 11 / 2),
  createData(98753263, "/images/tur_avo.jpg", 'Turkey and Avocado', 2, 8),
  createData(98753275, "/images/cappucino.jpg", 'Cappuccino', 1, 3),
  createData(98753291, "/images/nitro_coffee.jpg", 'Nitro Cold Brew', 0, 5)
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

// ==============================|| ORDER TABLE - HEADER CELL ||============================== //

const headCells = [
  {
    id: 'trackingNo',
    align: 'center',
    disablePadding: false,
    label: 'Tracking No.'
  },
  {
    id: 'itemPic',
    align: 'center',
    disablePadding: false,
    label: 'Product Image'
  },
  {
    id: 'name',
    align: 'center',
    disablePadding: true,
    label: 'Product Name'
  },
  {
    id: 'carbs',
    align: 'center',
    disablePadding: false,
    label: 'Status'
  },
  {
    id: 'protein',
    align: 'center',
    disablePadding: false,
    label: 'Total Amount'
  }
];

// ==============================|| ORDER TABLE - HEADER ||============================== //

function OrderTableHead({ order, orderBy }) {
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

OrderTableHead.propTypes = {
  order: PropTypes.string,
  orderBy: PropTypes.string
};

// ==============================|| ORDER TABLE - STATUS ||============================== //

const OrderStatus = ({ status }) => {
  let color;
  let title;

  switch (status) {
    case 0:
      color = 'warning';
      title = 'On the way';
      break;
    case 1:
      color = 'success';
      title = 'Delivered';
      break;
    case 2:
      color = 'error';
      title = 'Canceled';
      break;
    default:
      color = 'primary';
      title = 'None';
  }

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Dot color={color} />
      <Typography>{title}</Typography>
    </Stack>
  );
};

OrderStatus.propTypes = {
  status: PropTypes.number
};

// ==============================|| ORDER TABLE ||============================== //

export default function OrderTable() {
  const [order] = useState('asc');
  const [orderBy] = useState('trackingNo');
  const [selected] = useState([]);

  const isSelected = (trackingNo) => selected.indexOf(trackingNo) !== -1;

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
          <OrderTableHead order={order} orderBy={orderBy} />
          <TableBody>
            {stableSort(rows, getComparator(order, orderBy)).map((row, index) => {
              const isItemSelected = isSelected(row.trackingNo);
              const labelId = `enhanced-table-checkbox-${index}`;

              return (
                <TableRow
                  hover
                  role="checkbox"
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={row.trackingNo}
                  selected={isItemSelected}
                >
                  <TableCell component="th" id={labelId} scope="row" align="center">
                    <Link color="secondary" component={RouterLink} to="">
                      {row.trackingNo}
                    </Link>
                  </TableCell>
                  <TableCell align="center"><img src={row.itemPic} alt="product" style={{ width: '100px', height: 'auto' }}></img></TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">
                    <OrderStatus status={row.carbs} />
                  </TableCell>
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
