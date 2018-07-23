import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// FRAMEWORK MATERIALIZEDCSS
import { MaterializeModule } from 'angular2-materialize';

// PAGES_ROUTES
import { APP_ROUTES } from './app.routing';

// COMPONENTS
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

// MODULE COMPONENTS FILHOS
import { PagesModule } from './pages/pages.module';

// catch(ErrorHandler.handleError);
import { ErrorHandler } from './shared/app.erro-handler';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    MaterializeModule,
    APP_ROUTES,
    PagesModule,

  ],
  providers: [ErrorHandler],
  bootstrap: [AppComponent]
})
export class AppModule { }
