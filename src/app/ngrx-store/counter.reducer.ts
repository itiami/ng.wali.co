import { createReducer, on } from "@ngrx/store";
import * as CounterAction from "./counter.action";
import { counterInitialState } from "./counter.state";


export function counterReducer(state: any, action: any) {
    return _counterReducer(state, action);
}

const _counterReducer = createReducer(
    counterInitialState,
    on(CounterAction.incCounter, (state) => {
        return {
            ...state,
            counter: state.counter + 1
        }
    }),
    on(CounterAction.decCounter, (state: any) => {
        if (state.counter > 0) {
            return {
                ...state,
                counter: state.counter - 1
            }
        } else {
            return {
                ...state,
                counter: 0
            }
        }
    }),
    on(CounterAction.resetCounter, (state) => {
        return {
            ...state,
            counter: 0
        }
    }),
    on(CounterAction.customIncCounter, (state, action) => {
        return {
            ...state,
            counter: state.counter + action.value
        }
    })

)