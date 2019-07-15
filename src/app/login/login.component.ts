import { Component, OnInit, Inject } from '@angular/core';

@Component({
    selector: 'app-login',
    template: `
    <div>
      <input type="text" [(ngModel)]="username" #usernameRef="ngModel" required> 
      {{usernameRef.errors | json}}
      <div *ngIf="usernameRef.errors?.required">必填项</div>

      <input type="text" [(ngModel)]="password" #passwordRef="ngModel" required minlength="6"> 
      {{passwordRef.errors | json}}
      <div *ngIf="passwordRef.errors?.required">必填项</div>
      <div *ngIf="passwordRef.errors?.minlength">至少6个字符</div>

      <button (click)="onClick()">Login</button>
    </div>
  `,//双向绑定
    styles: []
})
export class LoginComponent implements OnInit {

    username = '';
    password = '';

    constructor(@Inject('auth') private service) { }    //引入auth依赖注入

    ngOnInit() {
    }

    onClick()
    {
        console.log('username:'+ this.username+'\tpassword:'+ this.password);
        console.log('auth result:' + this.service.loginCredentials(this.username, this.password));    //依赖注入
    }
}

