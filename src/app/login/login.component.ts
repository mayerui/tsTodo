import { Component, OnInit, Inject } from '@angular/core';

@Component({
    selector: 'app-login',
    template: `
    <div>
      <form #formRef="ngForm" (ngSubmit)="onSubmit(formRef.value)">
        <fieldset ngModelGroup="login">
            <input type="text" name="username"  required placeholder="username" value="admin"
                [(ngModel)]="username" #usernameRef="ngModel"> 
            {{usernameRef.errors | json}}
            <div *ngIf="usernameRef.errors?.required">必填项</div>

            <input type="text" name="password"  required minlength="6" placeholder="password"
                [(ngModel)]="password" #passwordRef="ngModel"> 
            {{passwordRef.errors | json}}
            <div *ngIf="passwordRef.errors?.required">必填项</div>
            <div *ngIf="passwordRef.errors?.minlength">至少6个字符</div>

            <button type="submit" >Login</button>
        </fieldset>
      </form>
    </div>
  `,//[()]双向绑定
    styles: []
})
export class LoginComponent implements OnInit {

    username = '';
    password = '';

    constructor(@Inject('auth') private service) { }    //引入auth依赖注入

    ngOnInit() {
    }

    onSubmit(formValue)
    {
        console.log(formValue);
        console.log('auth result:' + this.service.loginCredentials(this.username, this.password));    //依赖注入
    }
}

