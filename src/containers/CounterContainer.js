// 리덕스와 연동된 컨테이너 컴포넌트 작성
import React, { Component } from "react";
import Counter from "components/Counter";
import { connect } from "react-redux";
import * as counterActions from "store/modules/counter";
import { bindActionCreators } from "redux";

class CounterContainer extends Component {
  handleIncrement = () => {
    this.props.increment();
  };

  handleDecrement = () => {
    this.props.decrement();
  };

  render() {
    const { handleIncrement, handleDecrement } = this;
    const { number } = this.props;
    return (
      <Counter
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        number={number}
      />
    );
  }
}

// 컴포넌트를 리덕스와 연동 할 떄에는 connect 를 사용합니다.
// connect() 의 결과는, 컴포넌트에 props 를 넣어주는 함수를 반환합니다.
// 반환된 함수에 우리가 만든 컴포넌트를 넣어주면 됩니다.
export default connect(
  state => ({
    number: state.counter.number
  }),
  dispatch => bindActionCreators(counterActions, dispatch)
)(CounterContainer);
