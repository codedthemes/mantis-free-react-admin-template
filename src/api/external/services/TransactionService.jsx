import apiClient from 'api/external/ApiClient';

const transactionService = {
  fetchTransactionOverview: async () => {
    try {
      const response = await apiClient.get('/v1/transactions/overview');

      return response.data;
    } catch (error) {
      console.error('Error fetching transaction overview:', error);
      throw error;
    }
  }
};

export default transactionService;
