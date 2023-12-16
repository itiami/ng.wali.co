export class User {
    constructor(
        public username?: string,
        public password?: string,
        public email?: string,
    ) { }
}

export interface IfaceUser {
    username: string,
    password: string,
    email?: string,
}