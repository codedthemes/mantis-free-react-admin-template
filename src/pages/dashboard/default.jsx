import { useEffect, useState } from 'react';


import { Grid, Typography, Stack, Box, CircularProgress } from '@mui/material';


import MainCard from 'components/MainCard';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';
import MonthlyBarChart from 'sections/dashboard/default/MonthlyBarChart';


import CustomerTable from 'components/CustomerTable';
import CustomerForm from './CustomerForm';
import { customerService } from 'services/customerService';

export default function DashboardDefault() {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      try {
        const data = await customerService.getAll();
        setClientes(data);
      } catch (e) { console.error(e); }
      finally { setLoading(false); }
    };
    init();
  }, []);

  const stats = {
    total: clientes.length,
    enProceso: clientes.filter(c => c.estado === 'En Proceso').length,
    pipeline: clientes.reduce((acc, c) => acc + (c.valor || 0), 0)
  };

  const handleUpdate = async (id, status) => {
    const updated = await customerService.updateStatus(id, status);
    setClientes(clientes.map(c => c._id === id ? updated : c));
  };

  const handleDelete = async (id) => {
    if (await customerService.delete(id)) {
      setClientes(clientes.filter(c => c._id !== id));
    }
  };

  if (loading) return <Box sx={{ p: 5, textAlign: 'center' }}><CircularProgress /></Box>;

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      <Grid item xs={12}><Typography variant="h5">CRM Sincronizado</Typography></Grid>

      <Grid item xs={12} sm={6} md={4}>
        <AnalyticEcommerce title="Prospectos" count={stats.enProceso.toString()} color="primary" />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <AnalyticEcommerce title="Pipeline Total" count={`$${stats.pipeline.toLocaleString()}`} color="success" />
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <AnalyticEcommerce title="Total Registros" count={stats.total.toString()} color="warning" />
      </Grid>

      <Grid item xs={12} md={4}>
        <CustomerForm onClienteAgregado={(n) => setClientes([n, ...clientes])} />
      </Grid>

      <Grid item xs={12} md={8}>
        <MainCard title="Gráfica de Rendimiento" content={false}>
          <Box sx={{ p: 3 }}><Typography variant="h3">${stats.pipeline}</Typography></Box>
          <MonthlyBarChart />
        </MainCard>
      </Grid>

      <Grid item xs={12}>
        <MainCard content={false}>
          <CustomerTable clientes={clientes} setClientes={handleUpdate} onDelete={handleDelete} />
        </MainCard>
      </Grid>
    </Grid>
  );
}