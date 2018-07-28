import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts';
import { ImageUploadModule } from "angular2-image-upload";
 
 


// components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ChartsComponent } from './components/charts/charts.component';
import { UsersComponent } from './components/users/users.component';
import { FormsComponent } from './components/forms/forms.component';
import { MailComponent } from './components/mail/mail.component';
import {routes} from           './app-routing';
import { DatepickerModule } from 'angular2-material-datepicker'
import { TablesComponent } from './components/tables/tables.component';
import { ChatComponent } from './components/chat/chat.component';
import { BootstrapComponent } from './components/bootstrap/bootstrap.component';
import { NotificationComponent } from './components/notification/notification.component';
import { DocsComponent } from './components/docs/docs.component';



@NgModule({
  declarations: [
      AppComponent,
      HomeComponent,
      ChartsComponent,
      UsersComponent,
      FormsComponent,
      MailComponent,
      TablesComponent,
      ChatComponent,
      BootstrapComponent,
      NotificationComponent,
      DocsComponent

    

  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      ChartsModule,
      routes,
      DatepickerModule,
      ImageUploadModule.forRoot()
  
   
  

   
  
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
