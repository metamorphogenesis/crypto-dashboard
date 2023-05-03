import React, {useEffect, useState} from 'react';
import Dashboard from './components/Dashboard';
import './App.css';
import {CoinId} from "./util/Constants";
import {mapToCoin} from "./util/Utils";
import "./styles/styles.css";

function App() {
    const [data, setData] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch('https://api.coincap.io/v2/assets');

            if (!response.ok) {
                throw new Error('Data fetching error: ' + response.statusText);
            }

            const responseJson = await response.json();
            const items = responseJson.data
                .filter(item => item.id in CoinId)
                .map(item => mapToCoin(item));
            setData(items);
        } catch (error) {
            console.error('Data fetching error: ', error);
        }
    }

    useEffect(() => {
        fetchData();

        const intervalId = setInterval(() => {
            fetchData();
        }, 20000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

  return (
      <div className="App">
        <div className="dashboard-container">
          <Dashboard coins={data}/>
        </div>
      </div>
  );
}

export default App;