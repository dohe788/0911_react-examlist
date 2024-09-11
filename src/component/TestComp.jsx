import { useReducer } from "react";
//상태의 변화를 관리 하는 함수
function reduce (state, action){
    switch(action.type){
        case 'INCREASE':
            return state +action.data;
        case 'DECREASE':
            return state-action.data;
        case "INIT":
            return 0;
        default:
            return state;
    }
}

function TestComp(){
    //useReduce(리듀서 함수, 상태의 호기값)
     const[count,dispatch]=useReducer(reduce,0)

     return(
        <div>
            <h4>테스트 컴포넌트</h4>
            <div>
                <bold>{count}</bold>
            </div>
            <div>
                <button onClick={()=>dispatch({type:"INCREASE",data:1})}>+</button>

                <button onClick={()=>dispatch({type:"DECREASE",data:1})}>-</button>

                <button onClick={()=>dispatch({type:"INIT"})}>초기화</button>
            </div>
        </div>
        )
}

export default TestComp;