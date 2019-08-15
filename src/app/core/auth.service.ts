import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    constructor()
    {
        this.auth_map = new Map();
        this.auth_map.set('admin', '123456');
    }

    loginCredentials(username: string, password: string): boolean
    {
        if (this.auth_map.get(username) === password)
            return true;
        return false;
    }

    auth_map: Map<string, string>;
}
