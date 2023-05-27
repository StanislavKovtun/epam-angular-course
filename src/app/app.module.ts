import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/header/header.component';
import { LogoComponent } from './modules/logo/logo.component';
import { FooterComponent } from './modules/footer/footer.component';
import { CoursesComponent } from './modules/courses/courses.component';
import { BreadcrumbsComponent } from './modules/breadcrumbs/breadcrumbs.component';
import { CoursesPageComponent } from './modules/courses-page/courses-page.component';
import { LoginComponent } from './modules/login/login.component';
import { SectionComponent } from './modules/section/section.component';
import { CoursesEditItemComponent } from './modules/courses/courses-edit-item/courses-edit-item.component';
import { CoursesListItemComponent } from './modules/courses/courses-list-item/courses-list-item.component';
import { CoursesNewItemComponent } from './modules/courses/courses-new-item/courses-new-item.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
    SectionComponent,
    CoursesEditItemComponent,
    CoursesListItemComponent,
    CoursesNewItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
