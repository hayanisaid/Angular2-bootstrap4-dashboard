import {ModuleWithProviders} from "@angular/core";
import {Routes,RouterModule} from "@angular/router";


// components
import {HomeComponent}           from './components/home/home.component';
import {FormsComponent}          from './components/forms/forms.component';
import {MailComponent}           from './components/mail/mail.component';
import {UsersComponent}          from './components/users/users.component';
import {ChartsComponent}         from './components/charts/charts.component';
import {TablesComponent}         from './components/tables/tables.component';
import {ChatComponent}           from "./components/chat/chat.component";
import {BootstrapComponent}      from './components/bootstrap/bootstrap.component';
import {NotificationComponent}   from './components/notification/notification.component';
import {DocsComponent}           from './components/docs/docs.component';

   
 /*
 *
 *
 * Your routing Paths
 *
 *
 *
 */
const routing:Routes=[
   {path:"",component:HomeComponent},
   {path:"charts",component:ChartsComponent},
   {path:"home",component:HomeComponent},
   {path:"users",component:UsersComponent},
   {path:"mail",component:MailComponent},
   {path:"forms/:id",component:FormsComponent},
   {path:"tables",component:TablesComponent},
   {path:"chat",component:ChatComponent},
   {path:"bootstrap/:id",component:BootstrapComponent},
   {path:"notification",component:NotificationComponent},
   {path:"docs",component:DocsComponent}
  
];


export const routes:ModuleWithProviders=RouterModule.forRoot(routing);

                         