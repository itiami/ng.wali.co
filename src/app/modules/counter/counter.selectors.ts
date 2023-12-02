// counter.selector.ts
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ICounterState } from "./counter.state";

const selectCounterState = createFeatureSelector<ICounterState>("counter");
// here this "counter" must be same as the StoreModule.forRoot() block in app.modules.ts or relavent module.

export const selectCounterNum = createSelector(selectCounterState, (state) => {
    return state.counterState;
})

export const selectCounterMsg = createSelector(selectCounterState, (state) => {
    return state.msg;
})

