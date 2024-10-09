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

const headCells = [
  {
    id: 'coin_name',
    align: 'left',
    disablePadding: false,
    label: 'Moeda'
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

function ColorBox() {
  return null;
}

ColorBox.propTypes = {
  bgcolor: PropTypes.string,
  data: PropTypes.shape({ color: PropTypes.string, label: PropTypes.string }),
  dark: PropTypes.bool,
  title: PropTypes.string
};
export default function AssetsTable({ rows }) {
  const order = 'asc';
  const orderBy = 'coingecko_index';

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
            {rows.map((row, index) => {
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
                    <Stack direction="row" spacing={1.25} alignItems="center" justifyContent="flex-start" sx={{ p: 0.5 }}>
                      <Avatar size="sm" alt="Coin Image" src={row.coin_image} />
                      <Typography variant="subtitle1" sx={{ textTransform: 'capitalize' }}>
                        {row.coin_name}
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell align="center">
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
                    <Typography
                      color={row.current_balance < 0 ? 'error' : '#000000'}
                    >
                      <NumericFormat value={row.current_balance} displayType="text" thousandSeparator prefix="$" />
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography
                      color={row.profit_and_loss < 0 ? 'error' : row.profit_and_loss === 0 ? '#000000' : '#52c41a'}
                    >
                      <NumericFormat value={row.profit_and_loss} displayType="text" thousandSeparator prefix="$" />
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography
                      color={row.profit_and_loss_percentage < 0 ? 'error' : row.profit_and_loss_percentage === 0 ? '#000000' : '#52c41a'}
                    >
                      <NumericFormat value={row.profit_and_loss_percentage} displayType="text" thousandSeparator suffix="%" />
                    </Typography>
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

AssetsTable.propTypes = { rows: PropTypes.array.isRequired };

AssetTableHead.propTypes = { order: PropTypes.any, orderBy: PropTypes.string };

AssetRisk.propTypes = { risk: PropTypes.number };
