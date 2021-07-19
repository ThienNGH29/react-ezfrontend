import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';

function CounterFeature(props) {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    const action = increase(); // action creator
    dispatch(action);
  };

  const handleDecrease = () => {
    const action = decrease(); // action creator
    dispatch(action);
  };

  return (
    <div>
      <h2>Counter Feature</h2>
      <p>Counter: {counter}</p>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}

export default CounterFeature;
