import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { FooterComponent } from './components/footer/footer.component';
import { CoursesComponent } from './components/courses-page/courses/courses.component';
import { BreadcrumbsComponent } from './components/courses-page/breadcrumbs/breadcrumbs.component';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';
import { LoginComponent } from './components/login/login.component';
import { SearchComponent } from './components/courses-page/search/search.component';
import { CoursesItemComponent } from './components/courses-page/courses/courses-item/courses-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    FooterComponent,
    CoursesComponent,
    BreadcrumbsComponent,
    CoursesPageComponent,
    LoginComponent,
    SearchComponent,
    CoursesItemComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
