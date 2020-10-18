import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store';
import { Provider } from 'react-redux';

it('react without crashings', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter> <Provider store={store}><App /></Provider></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
