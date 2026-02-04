import PropTypes from 'prop-types';

// material-ui
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Chip, 
  Button, 
  Stack, 
  Typography,
  Box,
  Divider
} from '@mui/material';

// ==============================|| CRM - TABLA DE CLIENTES PREMIUM ||============================== //

export default function CustomerTable({ clientes, setClientes, onDelete }) {
  
  // Mapeo de estilos por estado para mayor limpieza
  const getStatusStyle = (estado) => {
    const styles = {
      'En Proceso': { color: 'primary', label: 'En Seguimiento' },
      'Descartado': { color: 'error', label: 'Cerrado / Perdido' },
      'Default': { color: 'secondary', label: estado }
    };
    return styles[estado] || styles['Default'];
  };

  return (
    <Box>
      <TableContainer>
        <Table sx={{ minWidth: 700 }} aria-label="tabla de prospectos">
          <TableHead sx={{ bgcolor: 'grey.50' }}>
            <TableRow>
              <TableCell sx={{ py: 2 }}>
                <Typography variant="overline" sx={{ fontWeight: 700, color: 'text.secondary' }}>
                  Empresa / Cliente
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="overline" sx={{ fontWeight: 700, color: 'text.secondary' }}>
                  Estado Actual
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="overline" sx={{ fontWeight: 700, color: 'text.secondary' }}>
                  Valor del Trato
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="overline" sx={{ fontWeight: 700, color: 'text.secondary' }}>
                  Flujo de Trabajo
                </Typography>
              </TableCell>
              <TableCell align="right" />
            </TableRow>
          </TableHead>
          <TableBody>
            {clientes.map((row) => {
              const status = getStatusStyle(row.estado);
              return (
                <TableRow key={row._id} hover sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell>
                    <Stack spacing={0.5}>
                      <Typography variant="subtitle1" sx={{ color: 'primary.main', fontWeight: 600 }}>
                        {row.nombre}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        ID: {row._id.slice(-6).toUpperCase()}
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Chip 
                      label={status.label} 
                      size="small" 
                      color={status.color} 
                      variant="light" // Estilo Mantis: fondo suave, texto fuerte
                      sx={{ borderRadius: '4px', fontWeight: 600, fontSize: '0.7rem' }}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="subtitle1" sx={{ fontFamily: 'monospace', fontWeight: 700 }}>
                      ${row.valor?.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Stack direction="row" spacing={0.5} justifyContent="center">
                      <Button 
                        size="small" 
                        variant={row.estado === 'En Proceso' ? 'contained' : 'text'}
                        color="primary"
                        disableElevation
                        onClick={() => setClientes(row._id, 'En Proceso')}
                        sx={{ fontSize: '0.75rem', px: 1 }}
                      >
                        Activar
                      </Button>
                      <Divider orientation="vertical" flexItem sx={{ mx: 0.5, height: 15, alignSelf: 'center' }} />
                      <Button 
                        size="small" 
                        variant={row.estado === 'Descartado' ? 'contained' : 'text'}
                        color="inherit"
                        onClick={() => setClientes(row._id, 'Descartado')}
                        sx={{ fontSize: '0.75rem', px: 1, color: 'text.secondary' }}
                      >
                        Archivar
                      </Button>
                    </Stack>
                  </TableCell>
                  <TableCell align="right">
                    <Button 
                      size="small" 
                      variant="text"
                      color="error" 
                      onClick={() => onDelete(row._id)}
                      sx={{ 
                        minWidth: 'auto', 
                        fontSize: '0.7rem',
                        '&:hover': { bgcolor: 'error.lighter', fontWeight: 'bold' } 
                      }}
                    >
                      ELIMINAR
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
            
            {clientes.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} align="center" sx={{ py: 10 }}>
                  <Stack alignItems="center" spacing={1}>
                    <Typography variant="h5" color="text.secondary">📪</Typography>
                    <Typography variant="body2" color="text.secondary">
                      No se encontraron registros activos en el sistema.
                    </Typography>
                  </Stack>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

CustomerTable.propTypes = {
  clientes: PropTypes.array.isRequired,
  setClientes: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};