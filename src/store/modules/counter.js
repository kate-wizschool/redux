import { createAction, handleActions } from "redux-actions";

// 카운터 관련 상태 로직
const INCREMENT = "counter/INCREMENT";
const DECREMENT = "counter/DECREMENT";

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

const initialState = {
  number: 0
};

//handleActions (액션처리함수,초기파라미터)
export default handleActions(
  {
    [INCREMENT]: (state, action) => {
      return { number: state.number + 1 };
    },
    //action 파라미터를 사용하지 않으므로 생략 가능
    [DECREMENT]: state => {
      return { number: state.number - 1 };
    }
  },
  initialState
);
