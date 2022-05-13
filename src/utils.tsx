export function fetchStock(ticker: string, startDate: string, endDate: string) {
  return fetch(
    `https://data.nasdaq.com/api/v3/datatables/QUOTEMEDIA/PRICES?date.gte=${startDate}&date.lte=${endDate}&ticker=${ticker}&api_key=qbQbo6JkXbn9Z-dXvqHW`
  ).then(async (response) => {
    const { datatable } = await response.json();
    if (response.ok) {
      const stockData = datatable.data;
      if (stockData) {
        return stockData;
      } else {
        return Promise.reject(
          new Error(`No stock with the ticker "${ticker}"`)
        );
      }
    } else {
      // handle network failures
      const error = {
        message: datatable?.errors
          ?.map((e: { message: string }) => e.message)
          .join('\n'),
      };
      return Promise.reject(error);
    }
  });
}
