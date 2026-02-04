import { useState, useEffect } from 'react';

// material-ui
import { Typography, TextField, Stack, Button, Box } from '@mui/material';

// project imports
import MainCard from 'components/MainCard';

// ==============================|| NOTAS PERSISTENTES ||============================== //

export default function SamplePage() {
  const [nota, setNota] = useState('');
  const [guardado, setGuardado] = useState(false);

  // 1. Cargar la nota al iniciar la página
  useEffect(() => {
    const notaGuardada = localStorage.getItem('crm_notas');
    if (notaGuardada) {
      setNota(notaGuardada);
    }
  }, []);

  // 2. Guardar automáticamente mientras escribes (opcional) o por botón
  const manejarGuardado = () => {
    localStorage.setItem('crm_notas', nota);
    setGuardado(true);
    setTimeout(() => setGuardado(false), 2000); // Feedback visual
  };

  return (
    <MainCard title="Bloc de Notas del Asesor">
      <Stack spacing={3}>
        <Typography variant="body2" color="textSecondary">
          Usa este espacio para anotar recordatorios rápidos sobre tus clientes o prospectos. 
          Los datos se guardan localmente en tu navegador.
        </Typography>

        <TextField
          id="notas-crm"
          label="Escribe tus notas aquí..."
          multiline
          rows={10}
          value={nota}
          onChange={(e) => setNota(e.target.value)}
          variant="outlined"
          fullWidth
          sx={{ bgcolor: 'grey.50' }}
        />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="caption" color={guardado ? 'success.main' : 'textSecondary'}>
            {guardado ? '✅ Cambios guardados en LocalStorage' : 'Los cambios no se perderán al recargar.'}
          </Typography>
          
          <Button 
            variant="contained" 
            color="primary" 
            onClick={manejarGuardado}
            sx={{ width: 150 }}
          >
            Guardar Nota
          </Button>
        </Box>
      </Stack>
    </MainCard>
  );
}