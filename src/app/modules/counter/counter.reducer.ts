// counter.reducer.ts
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
            counterState: state.counterState + 1
        }
    }),
    on(CounterAction.decCounter, (state: any) => {
        if (state.counterState > 0) {
            return {
                ...state,
                counterState: state.counterState - 1
            }
        } else {
            return {
                ...state,
                counterState: counterInitialState.counterState
            }
        }
    }),
    on(CounterAction.resetCounter, (state) => {
        return {
            ...state,
            counterState: counterInitialState.counterState
        }
    }),
    on(CounterAction.customIncCounter, (state, action) => {
        return {
            ...state,
            counterState: state.counterState + action.value
        }
    }),

    on(CounterAction.customCounterTxt, (state, action) => {
        return {
            ...state,
            msg: action.value
        }
    })

)