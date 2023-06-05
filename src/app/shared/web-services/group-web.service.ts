import { Injectable } from "@angular/core";
import { BaseWebService } from "./base-web.service";
import { Observable } from "rxjs";
import { BASE_API_URL } from "../constants/env-constants";
import { GroupModel } from "../models/group.model";
import { ResponseModel } from "../interfaces/response.model.interface";

@Injectable({providedIn: 'root'})
export class GroupWebService {

    constructor(private baseWebService: BaseWebService){}

    getAllGroups(): Observable<ResponseModel<GroupModel[]>> {
        return this.baseWebService.get(`${BASE_API_URL}/groups`)
    }
}