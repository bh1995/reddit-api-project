import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from '../App';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

// Mock child components
jest.mock('../commentsChart', () => () => <div>CommentsChart</div>);
// ... mock other child components similarly ...

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('App Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      user: {
        data: null,
        status: 'idle',
        error: null,
      },
    });
  });

  test('renders without crashing', () => {
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(getByText(/Redditor Analyzer/i)).toBeInTheDocument();
  });

  test('handles form submission', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    fireEvent.submit(getByRole('button'));
    // expect some action to be dispatched
  });

  // more tests ?..
});
