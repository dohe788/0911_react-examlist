import DateChange from './DateChange'
import './TodoEditor.css'
import {useState, useRef} from 'react'

const TodoEditor =({onCreate})=>{
    const [content, setContent]=useState("");
    const inputRef=useRef();
    
    const onChangeContent=(e)=>{
        setContent(e.target.value);
    };
    
    const onSubmit=()=>{
        if(!content){
        inputRef.current.focus();
            return;
    }
    onCreate(content);
    setContent("");
    };
    const onKeyDown =(e)=>{
        if(e.keyCode===13){
            onSubmit();
        }
        };
    
    
    return (
        <div className='TodoEditor'>
            <h4>새로운 exam작성하기</h4>
            <div className='editor_wrapper'>
                <input ref={inputRef} 
                value={content} 
                onChange={onChangeContent}
                onKeyDown={onKeyDown}
                placeholder='새로운 exam입력'></input>
                <button onClick={onSubmit}>add</button>
            </div>
        </div>
    )
}

export default TodoEditor;