import './Header.css';
import React from 'react';

const DateChange = ({ selectedDate, onDateChange }) => {
    console.log('Date change');

    const handleDateChange = (event) => {
        const date = event.target.value;
        onDateChange(date); // 부모 컴포넌트에 선택된 날짜 전달
    };

    return (
        <div className="Date">
            <h2>date is</h2>
            <input 
                type="radio" 
                id="checkbox1" 
                name="date" 
                value="2024-10-16" 
                checked={selectedDate === '2024-10-16'}
                onChange={handleDateChange}
            /> 10월 16일
            <input 
                type="radio" 
                id="checkbox2" 
                name="date" 
                value="2024-10-17" 
                checked={selectedDate === '2024-10-17'}
                onChange={handleDateChange}
            /> 10월 17일
        </div>
    );
};

export default React.memo(DateChange);
