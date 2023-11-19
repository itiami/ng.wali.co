import { createAction, props } from "@ngrx/store";

export const incCounter = createAction('[Counter Component] Increment');
export const decCounter = createAction('[Counter Component] Decrement');
export const resetCounter = createAction('[Counter Component] Reset');

export const customIncCounter = createAction(
    '[Counter Component] Custom Increment',
    props<{ value: number }>() // here we can pass multiple object
);


/* 
Note: - argument inside the createAction() function
To create an NgRX Action we must pass a string as agrument inside the createAction().
and this string must me unique which act as an identifier. 
from my research I've found this is a common practive to pass an argument as above. 
which indicate the component name it's relates to and the function name.
*/
