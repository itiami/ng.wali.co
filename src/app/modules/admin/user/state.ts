import { EntityAdapter, EntityState, createEntityAdapter } from "@ngrx/entity";
import { IUser } from "src/app/_model/user.model";


export const userFutureName = "user";

export interface UserState extends EntityState<IUser> { };

export const userAdapter: EntityAdapter<IUser> = createEntityAdapter<IUser>();


