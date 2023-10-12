import React from 'react';
import { useRecoilState } from 'recoil';
import { counterState } from './atoms';

const CounterRecoil = () => {
    const [count, setCount] = useRecoilState(counterState);
    const increment = () => { setCount(count + 1) };
    const decrement = () => { setCount(count - 1) };
    return (
        <div>
            <h1>카운터Recoil: {count} </h1>
            <button onClick={increment}>증가</button>
            <button onClick={decrement}>감소</button>
        </div>
    );
};

export default CounterRecoil;