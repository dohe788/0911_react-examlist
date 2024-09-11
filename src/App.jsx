//import { useState, useRef } from 'react';
import { useReducer, useRef, useState} from 'react';
import './App.css';
import Header from "./component/Header";
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';
import TestComp from './component/TestComp';
import DateChange from './component/DateChange';
//상태변수 todo의 초기값
const mockTodo = [
  
];

// setodo 대신해서 상태의 변화를 관리하는 함수
function Reducer(state, action) {
  switch (action.type) {
    case "CREATE": {
      return [action.newItem, ...state];
    }
    case "UPDATE": {
      return state.map((it) =>
        it.id === action.targetId
          ? {
              ...it,
              isDone: !it.isDone,
            }
          : it
      );
    }
    case "DELETE": {
      return state.filter((it) => it.id !== action.targetId);
    }
    default:
      return state;
  }
}

function App() {
  // const [todo, settodo] = useState(mockTodo);
  const [todo, dispatch] = useReducer(Reducer, mockTodo);
  const idRef = useRef(3);
  const [selectedDate, setSelectedDate] = useState(null);
  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      newItem: {
        id: idRef.current,
        content,
        isDone: false,
        createdDate: new Date().getTime(),
        examDate: selectedDate }
    });
    idRef.current += 1
    // const newItem = {
    //   id: idRef.current,
    //   content,
    //   isDone: false,
    //   createdDate: new Date().getTime(),
    // };
    // settodo([newItem, ...todo]);
    // idRef.current += 1;
  };

  const onUpdate = (targetId) => {
    dispatch({
      type: "UPDATE",
      targetId
    })
    // settodo(
    //   todo.map((it) =>
    //     it.id === targetId ? { ...it, isDone: !it.isDone } : it
    //   )
    // )
  };

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId
    })
    // settodo(todo.filter((it) => it.id !== targetId));
  };

  
  return (
    <div className="App">
      <DateChange selectedDate={selectedDate} onDateChange={setSelectedDate} />
      <TestComp />
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;

