import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
// import Counter from './components/counter';
// import PageFinance from './components/pageFinance';
// import AddTransaction from './components/popups/addTransaction';
// import ModelPopup from './components/popups/modelPopup';
// import Test from './components/test';
// import FiltersFunc from './components/filtersFunc';
// import Filters from './components/filters';
import PageFinanceLight from './page/pageFinanceLight'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Counter /> */}
    {/* <PageFinance /> */}
    <PageFinanceLight />
    {/* <AddTransaction />  */}
    {/* <ModelPopup /> */}
    {/* <Test/> */}
    {/* <Filters/> */}
    {/* <FiltersFunc/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
