import { User } from "../../_model/user.model";

export interface IUserState {
    user: User[]
    profile: userProfile;
}

interface userProfile {
    fname: string;
    lname: string;
    email: string;
    dob: Date;
}