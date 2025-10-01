import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { pick } from "lodash";

export interface IUser {
  id: string;
  no: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}
@Injectable({
  providedIn: "root",
})
export class UsersService {
  URL = environment.API_URL;
  constructor(private http: HttpClient) {}

  findAll() {
    const url = `${this.URL}/users`;
    return this.http.get<IUser[]>(url);
  }

  findOne(id: string) {
    const url = `${this.URL}/users/${id}`;
    return this.http.get<IUser>(url);
  }

  create(user: IUser) {
    const created = pick(user, ["firstName", "lastName", "email", "phoneNumber"]);
    const url = `${this.URL}/users`;
    return this.http.post<IUser>(url, created);
  }

  update(user: IUser) {
    const url = `${this.URL}/users/${user.id}`;
    return this.http.patch<IUser>(url, user);
  }

  remove(id: string) {
    const url = `${this.URL}/users/${id}`;
    return this.http.delete<IUser>(url);
  }
}
