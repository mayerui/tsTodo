import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/todo.component';

import { AuthService } from './core/auth.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(
            [
                {//默认路由（主页）
                    path: '',
                    redirectTo: 'login',
                    pathMatch:'full'
                },
                {//登陆页面
                    path: 'login',
                    component:LoginComponent
                },
                {//todo页面
                    path: 'todo',
                    component:TodoComponent
                }
            ]
        )
    ],

    declarations: [
        AppComponent,
        LoginComponent,
        TodoComponent
    ],
  
    providers: [
      {provide : 'auth', useClass : AuthService}//依赖注入
    ],

  bootstrap: [AppComponent]
})
export class AppModule { }
