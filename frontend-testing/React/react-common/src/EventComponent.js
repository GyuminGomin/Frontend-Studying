import React, {useState} from "react";

const EventComponent = () => {
    const handleClick = () => {
        console.log('버튼이 클릭되었습니다.');
    };

    const handleInputChange = (e) => {
        console.log('입력 값: ', e.target.value);
    };

    return (
        <div>
            <button onClick={handleClick}>클릭</button>
            <br/>
            <input type="text" onChange={handleInputChange}/>
        </div>
    );
}

export default EventComponent;