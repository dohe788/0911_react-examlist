import { useMemo,useState } from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem";

const TodoList = ({ todo, onUpdate, onDelete }) => {
const [search, setSearch] = useState("");
const onChangeSearch = (e) => {
    setSearch(e.target.value);
};

const getSearchResult = () => {
    return search === ""
    ? todo
    : todo.filter((it) =>
        it.content.toLowerCase().includes(search.toLowerCase())
        );
};
//yseMemo(콜백함수,의존성배열)
const analyzeTodo =useMemo(()=>{
    console.log('analyzeTodo call')
    const totalCount=todo.length;
    const doneCount=todo.filter((it)=>it.isDone).length;
    const notDoneCount=totalCount-doneCount;
    return(
        totalCount, doneCount,notDoneCount)
},
[todo]
)

const {totalCount,doneCount,notDoneCount}=analyzeTodo;

return (
    <div className="TodoList">
    <h4>Todo List</h4>
    <div>
        <div>총개수 : {totalCount}</div>
        <div>완료된 일 : {doneCount}</div>
        <div>미완료된 일 : {notDoneCount}</div>
    </div>
    <input
        value={search}
        onChange={onChangeSearch}
        type="text"
        className="searchbar"
        placeholder="검색어를 입력하세요."
    />
    <div className="list_refer">
        {getSearchResult().map((it) => (
        <TodoItem
            key={it.id}
            {...it}
            onUpdate={onUpdate}
            onDelete={onDelete}
        />
        ))}
    </div>
    </div>
);
};

export default TodoList;
