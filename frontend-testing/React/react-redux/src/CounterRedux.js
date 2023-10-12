import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement} from './Actions';

const CounterRedux = () => {
    const count = useSelector((state) => state);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>카운터: {count} </h1>
            <button onClick={() => dispatch(increment())}>증가</button>
            <button onClick={() => dispatch(decrement())}>감소</button>
        </div>
    );
};

export default CounterRedux;