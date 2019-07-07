import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    template: `
    <div>
      <input #usernameRef type="text">
      <input #passwordRef type="text">
      <button (click)="onClick(usernameRef.value, passwordRef.value)">Login</button>
    </div>
    <div>
        <input #usernameRef type="text">
        <button (click)="onClick(usernameRef.value)">Login</button>
    </div>
  `,
    styles: []
})
export class LoginComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    onClick(username, password)
    {
        console.log('username:'+username+'\tpassword:'+password);
    }
}

