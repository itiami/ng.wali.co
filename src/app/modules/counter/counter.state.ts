export interface ICounterState {
    counterState: number;
    msg: string;
}

export const counterInitialState: ICounterState = {
    counterState: 50,
    msg: "Hello.. counterInitialState",
}