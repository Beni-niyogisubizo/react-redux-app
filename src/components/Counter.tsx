// Author: Beni Niyogisubizo

import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../store/store";
import {
  increment,
  decrement,
  reset,
} from "../store/actions/counterActions";
import styles from "./Counter.module.css";

function Counter() {
  const count = useSelector(
    (state: RootState) => state.counter.value,
  );
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className={styles.counterContainer}>
      <h2>Counter: {count}</h2>

      <div className={styles.buttons}>
        <button
          onClick={() => dispatch(increment())}
          aria-label="Increment counter"
        >
          +
        </button>
        <button
          onClick={() => dispatch(decrement())}
          aria-label="Decrement counter"
        >
          -
        </button>
        <button onClick={() => dispatch(reset())}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
