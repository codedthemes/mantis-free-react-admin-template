import PropTypes from 'prop-types';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { NumericFormat } from 'react-number-format';

import Dot from 'components/@extended/Dot';
import Avatar from '@mui/material/Avatar';

function createData(
  coin_image,
  coin_name,
  risk,
  coin_symbol,
  optimal_allocation_percentage,
  current_allocation_percentage,
  current_balance,
  profit_and_loss,
  profit_and_loss_percentage,
  price_change_one_day,
  price_change_one_week,
  price_change_thirty_days
) {
  return {
    coin_image,
    coin_name,
    risk,
    coin_symbol,
    optimal_allocation_percentage,
    current_allocation_percentage,
    current_balance,
    profit_and_loss,
    profit_and_loss_percentage,
    price_change_one_day,
    price_change_one_week,
    price_change_thirty_days
  };
}

const rows = [
  createData(
    'https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400',
    'Bitcoin',
    1,
    'BTC',
    '15.00',
    '36.60',
    '966.24',
    '-$5.36',
    '-0.07',
    '1.21',
    '-0.73',
    '16.22'
  ),
  createData(
    'https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628',
    'Ethereum',
    1,
    'ETH',
    '15.00',
    '36.60',
    '966.24',
    '-$5.36',
    '-0.07',
    '1.21',
    '-0.73',
    '16.22'
  )
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

const headCells = [
  {
    id: 'coin_name',
    align: 'center',
    disablePadding: false,
    label: 'Ativo'
  },
  {
    id: 'risk',
    align: 'center',
    disablePadding: false,
    label: 'Risco'
  },
  {
    id: 'optimal_allocation_percentage',
    align: 'center',
    disablePadding: true,
    label: '% Alocação Ideal'
  },
  {
    id: 'current_allocation_percentage',
    align: 'center',
    disablePadding: false,
    label: '% Alocação Atual'
  },
  {
    id: 'current_balance',
    align: 'center',
    disablePadding: false,
    label: 'Valor'
  },
  {
    id: 'profit_and_loss',
    align: 'center',
    disablePadding: false,
    label: 'Lucro'
  },
  {
    id: 'profit_and_loss_percentage',
    align: 'center',
    disablePadding: false,
    label: '% Lucro'
  },
  {
    id: 'price_change_one_day',
    align: 'center',
    disablePadding: false,
    label: '% 1d'
  },
  {
    id: 'price_change_one_week',
    align: 'center',
    disablePadding: false,
    label: '% 7d'
  },
  {
    id: 'price_change_thirty_days',
    align: 'center',
    disablePadding: false,
    label: '% 30d'
  }
];

function AssetTableHead({ order, orderBy }) {
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

function AssetRisk({ risk }) {
  let color;
  let title;

  switch (risk) {
    case 0:
      color = 'warning';
      title = 'Alto';
      break;
    case 1:
      color = 'success';
      title = 'Seguro';
      break;
    case 2:
      color = 'error';
      title = 'Ultra';
      break;
    default:
      color = 'primary';
      title = 'Médio';
  }

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Dot color={color} />
      <Typography>{title}</Typography>
    </Stack>
  );
}

export default function AssetsTable() {
  const order = 'asc';
  const orderBy = 'coin_name';

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
          <AssetTableHead order={order} orderBy={orderBy} />
          <TableBody>
            {stableSort(rows, getComparator(order, orderBy)).map((row, index) => {
              const labelId = `enhanced-table-checkbox-${index}`;

              return (
                <TableRow
                  hover
                  role="checkbox"
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  tabIndex={-1}
                  key={row.coin_name}
                >
                  <TableCell component="th" id={labelId} scope="row" align="center">
                    <Stack direction="row" spacing={1.25} alignItems="center" justifyContent="center" sx={{ p: 0.5 }}>
                      <Avatar size="sm" alt="Coin Image" src={row.coin_image} />
                      <Typography variant="subtitle1" sx={{ textTransform: 'capitalize' }}>
                        {row.coin_name}
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell align="center" alignItems="center" justifyContent="center">
                    <Stack direction="row" spacing={1.25} alignItems="center" justifyContent="center" sx={{ p: 0.5 }}>
                      <AssetRisk risk={row.risk} />
                    </Stack>
                  </TableCell>
                  <TableCell align="center">
                    <NumericFormat value={row.optimal_allocation_percentage} displayType="text" thousandSeparator suffix="%" />
                  </TableCell>
                  <TableCell align="center">
                    <NumericFormat value={row.current_allocation_percentage} displayType="text" thousandSeparator suffix="%" />
                  </TableCell>
                  <TableCell align="center">
                    <NumericFormat value={row.current_balance} displayType="text" thousandSeparator prefix="$" />
                  </TableCell>
                  <TableCell align="center">
                    <NumericFormat value={row.profit_and_loss} displayType="text" thousandSeparator prefix="$" />
                  </TableCell>
                  <TableCell align="center">
                    <NumericFormat value={row.profit_and_loss_percentage} displayType="text" thousandSeparator suffix="%" />
                  </TableCell>
                  <TableCell align="center">
                    <NumericFormat value={row.price_change_one_day} displayType="text" thousandSeparator suffix="%" />
                  </TableCell>
                  <TableCell align="center">
                    <NumericFormat value={row.price_change_one_week} displayType="text" thousandSeparator suffix="%" />
                  </TableCell>
                  <TableCell align="center">
                    <NumericFormat value={row.price_change_thirty_days} displayType="text" thousandSeparator suffix="%" />
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

AssetTableHead.propTypes = { order: PropTypes.any, orderBy: PropTypes.string };

AssetRisk.propTypes = { risk: PropTypes.number };
