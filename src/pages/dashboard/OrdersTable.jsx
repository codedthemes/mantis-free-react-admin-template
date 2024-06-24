import PropTypes from 'prop-types';
// material-ui
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// third-party
import { NumericFormat } from 'react-number-format';

// project import
import Dot from 'components/@extended/Dot';
import { useState, useEffect } from 'react';
import supabase from 'service/supabase';



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

const headCells = [
  {
    id: 'fromAirport',
    align: 'left',
    disablePadding: false,
    label: 'From Airport'
  },
  {
    id: 'toAirport',
    align: 'left',
    disablePadding: true,
    label: 'To Airport'
  },
  {
    id: 'booking_date',
    align: 'left',
    disablePadding: true,
    label: 'Booking Date'
  },
  {
    id: 'ticketAmount',
    align: 'right',
    disablePadding: false,
    label: 'Ticket Amount'
  },
  {
    id: 'charge_amount',
    align: 'right',
    disablePadding: false,
    label: 'Assurance Amount'
  },
  {
    id: 'status',
    align: 'left',
    disablePadding: false,
    label: 'Status'
  },
  {
    id: 'policy_no',
    align: 'left',
    disablePadding: false,
    label: 'Policy No'
  },
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

function OrderStatus({ status }) {
  let color;
  let title;

  switch (status) {
    case "POLICY":
      color = 'warning';
      title = 'POLICY';
      break;
    case "SETTLED":
      color = 'success';
      title = 'SETTLED';
      break;
    case "Underprocess":
      color = 'error';
      title = 'Underprocess';
      break;
    default:
      color = 'primary';
      title = 'OFFER';
  }

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Dot color={color} />
      <Typography>{title}</Typography>
    </Stack>
  );
}

// ==============================|| ORDER TABLE ||============================== //

export default function OrderTable() {
  const [allRequest, setAllRequest] = useState([]);
  const order = 'asc';
  const orderBy = 'tracking_no';

  const getAllRequest = async () => {
    try {
      const { data, error } = await supabase.from('refundpolicy').select('*').limit(10).order("created_at",{ascending:false});
      if (error) {
        throw error;
      }

      setAllRequest(data);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    getAllRequest();
  }, []);

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
        <Table aria-labelledby="tableTitle">
          <OrderTableHead order={order} orderBy={orderBy} />
          <TableBody>
            {allRequest.map((row, index) => {
              const labelId = `enhanced-table-checkbox-${index}`;

              return (
                <TableRow
                  hover
                  role="checkbox"
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  tabIndex={-1}
                  key={row.id}
                >
                  <TableCell component="th" id={labelId} scope="row">
                     {row.fromAirport}
                  </TableCell>
                  <TableCell>{row.toAirport}</TableCell>
                  <TableCell>{row.booking_date}</TableCell>
             
                  <TableCell align="right">
                    <NumericFormat value={row.ticketAmount} displayType="text" thousandSeparator prefix="$" />
                  </TableCell>
                  <TableCell align="right">
                    <NumericFormat value={row.charge_amount} displayType="text" thousandSeparator prefix="$" />
                  </TableCell>
                 
                  <TableCell align="left">
                    <OrderStatus status={row.status} />
                  </TableCell>
                  <TableCell>{row.policy_no ?? "Not Taken"}</TableCell>

                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

OrderTableHead.propTypes = { order: PropTypes.any, orderBy: PropTypes.string };

OrderStatus.propTypes = { status: PropTypes.string };
