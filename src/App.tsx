import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { fetchStock } from './utils';

function App() {
  const [stockTicker, setStockTicker] = useState('WMT');
  const [startDate, setStartDate] = useState('2017-09-28');
  const [endDate, setEndDate] = useState('2017-10-15');
  const [stockData, setStockData] = useState(null);

  function changeStock(event) {
    setStockTicker(event.target.value);
  }
  function changeStartDate(event) {
    setStartDate(event.target.value);
  }
  function changeEndDate(event) {
    setEndDate(event.target.value);
  }

  useEffect(() => {
    if (!stockTicker || !startDate || !endDate) {
      return;
    }
    setStockData(null);
    fetchStock(stockTicker, startDate, endDate).then((data) => {
      setStockData(data);
      // console.log(data);
    });
  }, [stockTicker, startDate, endDate]);

  return (
    <div>
      <header>
        <h1>Stock finder</h1>
      </header>
      <main>
        <article>
          <section>
            <form onSubmit={() => console.log('hi')}>
              <label>
                Ticker:
                <input type="text" value={stockTicker} onChange={changeStock} />
              </label>
              <label>
                Start date:
                <input
                  type="date"
                  value={startDate}
                  onChange={changeStartDate}
                />
              </label>
              <label>
                End date:
                <input type="date" value={endDate} onChange={changeEndDate} />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </section>
          {stockData && (
            <section>
              <p>Graph here for {stockTicker}</p>
              {stockData}
              <p>Max drawdown</p>
              <p>Simple return</p>
              <p>{startDate}</p>
              <p>{endDate}</p>
            </section>
          )}
        </article>
      </main>
    </div>
  );
}

export default App;
