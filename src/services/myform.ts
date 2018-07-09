import { Injectable } from "@angular/core";

@Injectable()
export class MyFormService {
    public name: string = '';
    public email: string = '';
    public phone: number;
    public user: string = '';
    public password: string = '';

    constructor(){}
}