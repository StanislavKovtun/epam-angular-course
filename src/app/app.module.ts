import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { FooterComponent } from './components/footer/footer.component';
import { CoursesComponent } from './components/courses-page/courses/courses.component';
import { BreadcrumbsComponent } from './components/courses-page/breadcrumbs/breadcrumbs.component';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';
import { LoginComponent } from './components/login/login.component';
import { SectionComponent } from './components/courses-page/section/section.component';

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
    SectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
