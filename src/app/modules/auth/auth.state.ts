export const userFeatureName = 'user';


export interface IUser {
    username?: String,
    password?: String,
    email?: String,
}


export const initialUserState: IUser = {}