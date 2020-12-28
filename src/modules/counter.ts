import { createAction, ActionType, createReducer } from 'typesafe-actions';

// Create Action Type
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_BY = 'counter/INCREASE_BY';
// Create Action funciton
export const increase = createAction(INCREASE)();
export const decrease = createAction(DECREASE)();
export const increaseBy = createAction(INCREASE_BY)<number>();

// Declare Action Object Type
const actions = {
  increase,
  decrease,
  increaseBy,
};

type TCounterAction = ActionType<typeof actions>;

type TCounterState = {
  count: number;
};

// Declare initialState
const initialState: TCounterState = {
  count: 0,
};

// Create Reducer
const reducer = createReducer<TCounterState, TCounterAction>(initialState, {
  [INCREASE]: (state) => {
    return { count: state.count + 1 };
  },
  [DECREASE]: (state) => {
    return { count: state.count > 0 ? state.count - 1 : 0 };
  },
  [INCREASE_BY]: (state, action) => {
    return { count: state.count + action.payload };
  },
});

export default reducer;
