import './TodoItem.css';
import React from 'react';
import { useState } from 'react';
const TodoItem = ({ id, content, isDone, createdDate, onUpdate, onDelete, examDate }) => {
    console.log(`${id} todoItem update`);
    
    const onChangeCheckBox = () => {
        onUpdate(id);
    };

    const onClickDelete = () => {
        onDelete(id);
    };

    return (
        <div className='TodoItem'>
            <div className='checkBox_col'>
                <input
                    type='checkbox' className='checks'
                    checked={isDone}
                    onChange={onChangeCheckBox}
                />
            </div>
            <div className='exam_date'>{examDate ? `시험 날짜 : ${examDate}` : "삭제하시고 다시 입력해주세요"}</div>
            <div className={`title_col ${isDone?'done':''}`}>{content}</div>
            <div className='date_col '>{new Date(createdDate).toLocaleDateString()}</div>
            <div className='btn_col'>
                <button onClick={onClickDelete}>삭제</button>
            </div>
        </div>
    );
};

export default React.memo(TodoItem);
