import { Injectable } from "@angular/core";
import { BaseWebService } from "./base-web.service";
import { Observable } from "rxjs";
import { BASE_API_URL } from "../constants/env-constants";
import { GroupModel } from "../models/group.model";
import { HomeworkModel } from "../models/homework.model";
import { ResponseModel } from "../interfaces/response.model.interface";

@Injectable()
export class HomeworkService {

    constructor(private baseWebService: BaseWebService){}

    getAllHomeworks(): Observable<ResponseModel<HomeworkModel[]>> {
        return this.baseWebService.get(`${BASE_API_URL}/homeworks`)
    }
}