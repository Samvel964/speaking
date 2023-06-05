import { Injectable } from "@angular/core";
import { BaseWebService } from "./base-web.service";
import { Observable } from "rxjs";
import { BASE_API_URL } from "../constants/env-constants";
import { UserModel } from "../models/user.model";
import { HttpClient } from "@angular/common/http";
import { ResponseModel } from "../interfaces/response.model.interface";

@Injectable()
export class UserWebService {

    constructor(
        private baseWebService: BaseWebService,
        // todo remove if its be unused
        private http: HttpClient
        ){}

    getAllUsers(): Observable<ResponseModel<UserModel[]>> {
        return this.baseWebService.get(`${BASE_API_URL}/users`);
    }

    createUser(user: UserModel): Observable<{user: UserModel}> {
        return this.baseWebService.post(`${BASE_API_URL}/users`, user);
    }

    getUserById(id: number): Observable<ResponseModel<UserModel[]>> {
        return this.baseWebService.get(`${BASE_API_URL}/users/${id}`);
    }
    // todo write the correct type
    updateUser(id: number, body: UserModel): Observable<any> {
        // return this.baseWebService.put(`${BASE_API_URL}/users/${id}`, body);
        // this one is working
        // return this.http.patch(`${BASE_API_URL}/users/${id}`, body);
        // must check, 
        return this.baseWebService.patch(`${BASE_API_URL}/users/${id}`, body);
    }

    deleteUser(id: number): Observable<void> {
        return this.baseWebService.delete(`${BASE_API_URL}/users/${id}`)
    }
}