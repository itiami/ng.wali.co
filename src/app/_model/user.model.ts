export class User {
    constructor(
        public username?: String,
        public password?: String,
        public email?: String,
    ) { }
}

export interface IUser {
    username?: String,
    password?: String,
    email?: String,
}