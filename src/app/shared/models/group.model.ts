import { UserModel } from "./user.model";

export class GroupModel {
    created_at: string = "";
    homeworks: any;
    id: number = 0;
    level: string = "";
    name: string = "";
    users: UserModel[] = [];
}