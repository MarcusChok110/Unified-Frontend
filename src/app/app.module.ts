import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  InjectableRxStompConfig,
  RxStompService,
  rxStompServiceFactory,
} from '@stomp/ng2-stompjs';
import { myRxStompConfig } from './my-rx-stomp.config';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';
import { environment } from '../environments/environment';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import { HomeModule } from './home/home.module';
import { ProfileModule } from './profile/profile.module';
import { ChatModule } from './chat/chat.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      ...environment.auth,
      httpInterceptor: {
        allowedList: [environment.serverUrl],
      },
    }),
    SharedModule,
    LayoutModule,
    HomeModule,
    ProfileModule,
    ChatModule,
  ],
  providers: [
    {
      provide: InjectableRxStompConfig,
      useValue: myRxStompConfig,
    },
    {
      provide: RxStompService,
      useFactory: rxStompServiceFactory,
      deps: [InjectableRxStompConfig],
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
