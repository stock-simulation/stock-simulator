import userReducer from '../client/redux/reducers/userReducer';

describe('userReducer', () => {
  let state;

  beforeEach(() => {
    state = {
      _id: null,
      username: null,
      cash: 100000,
      stocks: [],
    };
  })

  describe('default state', () => {
    it('should return a default state when given an undefined input', () => {
      expect(userReducer(undefined, {type: undefined})).toEqual(state);
    })
  })

  describe('unrecognized action types', () => {
    it('should return the original without any duplication', () => {
      const action = { type: 'unrecognized' };
      expect(userReducer(state, action)).toBe(state);
    });
  });

  describe('SET_USER_AUTH', () => {
    const action = {
      type: 'SET_USER_AUTH',
      payload: {
        _id: 'useridtest',
        username: 'user',
        cash: 50,
        stocks: [{stock: "IBM", shares: "2", currValue: 117}],
      }
    }

    it('returns a state object not strictly equal to the original', () => {
      const newState = userReducer(state,action);
      expect(newState).not.toBe(state);
    })

    it('updates the username', () => {
      const { username } = userReducer(state,action);
      expect(username).not.toEqual(null);
    })

    it('updates the stocks', () => {
      const { stocks } = userReducer(state,action);
      expect(stocks).toEqual([{stock: "IBM", shares: "2", currValue: 117}]);
    })

    it('updates the cash value', () => {
      const { cash } = userReducer(state,action);
      expect(cash).toEqual(50);
    })
  });

})