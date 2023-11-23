import reducer, { fetchRedditData } from '../features/userSlice';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('userSlice', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      data: null,
      status: 'idle',
      error: null
    });
  });

  test('handles fetchRedditData thunk', async () => {
    const store = mockStore({});
    await store.dispatch(fetchRedditData('username'));
    const actions = store.getActions();

    expect(actions[0].type).toBe('user/fetchRedditData/pending');
    // Add more assertions based on expected behavior
  });

  // more tests ?..
});
