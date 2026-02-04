import { useState } from 'react';
import PropTypes from 'prop-types';

// material-ui
import { 
  Button, 
  Grid, 
  InputLabel, 
  OutlinedInput, 
  Stack, 
  FormHelperText, 
  Typography,
  InputAdornment,
  Box,
  Fade
} from '@mui/material';

// project imports
import MainCard from 'components/MainCard';
import { customerService } from 'services/customerService';

// ==============================|| CRM - FORMULARIO PREMIUM ||============================== //

export default function CustomerForm({ onClienteAgregado }) {
  const [nombre, setNombre] = useState('');
  const [valor, setValor] = useState('');
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState(null);
  const [exito, setExito] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validación básica local
    if (!nombre || !valor) {
      setError('Por favor, completa todos los campos.');
      return;
    }

    setEnviando(true);
    setError(null);

    try {
      const nuevoCliente = {
        nombre: nombre.trim(),
        valor: Number(valor),
        estado: 'En Proceso'
      };

      const data = await customerService.create(nuevoCliente);
      
      // Feedback de éxito
      setExito(true);
      onClienteAgregado(data);
      
      // Limpiar campos
      setNombre('');
      setValor('');

      // Quitar mensaje de éxito tras 3 segundos
      setTimeout(() => setExito(false), 3000);

    } catch (err) {
      setError('Error de conexión. Verifica que el servidor (Node.js) esté activo.');
      console.error(err);
    } finally {
      setEnviando(false);
    }
  };

  return (
    <MainCard 
      title="Registro de Oportunidad" 
      subheader="Introduce los detalles del nuevo prospecto"
      sx={{ boxShadow: (theme) => theme.customShadows.z1 }}
    >
      <form noValidate onSubmit={handleSubmit}>
        <Grid container spacing={2.5}>
          
          <Grid item xs={12}>
            <Stack spacing={0.5}>
              <InputLabel htmlFor="customer-name" sx={{ fontWeight: 600 }}>Nombre Comercial</InputLabel>
              <OutlinedInput
                id="customer-name"
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Ej. Inversiones Globales S.A."
                fullWidth
                autoComplete="off"
                sx={{ bgcolor: 'grey.50' }}
              />
            </Stack>
          </Grid>

          <Grid item xs={12}>
            <Stack spacing={0.5}>
              <InputLabel htmlFor="customer-value" sx={{ fontWeight: 600 }}>Presupuesto Estimado</InputLabel>
              <OutlinedInput
                id="customer-value"
                type="number"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
                placeholder="0.00"
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                fullWidth
                sx={{ bgcolor: 'grey.50' }}
              />
            </Stack>
          </Grid>

          {/* MENSAJES DE ESTADO */}
          <Grid item xs={12} sx={{ minHeight: 40 }}>
            {error && (
              <Fade in={!!error}>
                <FormHelperText error sx={{ fontWeight: 500 }}>
                  ⚠️ {error}
                </FormHelperText>
              </Fade>
            )}
            {exito && (
              <Fade in={exito}>
                <Typography variant="caption" sx={{ color: 'success.main', fontWeight: 600 }}>
                  ✅ ¡Cliente guardado y sincronizado con el Pipeline!
                </Typography>
              </Fade>
            )}
          </Grid>

          <Grid item xs={12}>
            <Button
              disableElevation
              disabled={enviando}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              color={exito ? 'success' : 'primary'}
              sx={{ 
                py: 1.5, 
                textTransform: 'none', 
                fontSize: '1rem',
                transition: 'all 0.3s ease'
              }}
            >
              {enviando ? 'Procesando...' : exito ? '¡Listo!' : 'Registrar Prospecto'}
            </Button>
          </Grid>

        </Grid>
      </form>
    </MainCard>
  );
}

CustomerForm.propTypes = {
  onClienteAgregado: PropTypes.func.isRequired
};