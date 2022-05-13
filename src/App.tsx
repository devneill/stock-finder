import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [stock, setStock] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  function changeStock(event) {
    setStock(event.target.value);
  }
  function changeStartDate(event) {
    setStartDate(event.target.value);
  }
  function changeEndDate(event) {
    setEndDate(event.target.value);
  }

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
                <input type="text" value={stock} onChange={changeStock} />
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
          <section>
            <p>Graph here for {stock}</p>
            <p>{startDate}</p>
            <p>{endDate}</p>
          </section>
        </article>
      </main>
    </div>
  );
}

export default App;
