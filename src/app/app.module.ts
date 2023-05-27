import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { FooterComponent } from './components/footer/footer.component';
import { CoursesComponent } from './components/courses/courses.component';
import { BreadcrumbsComponent } from './components/courses-page/breadcrumbs/breadcrumbs.component';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';
import { LoginComponent } from './components/login/login.component';
import { SectionComponent } from './components/courses-page/section/section.component';
import { CoursesEditItemComponent } from './components/courses/courses-edit-item/courses-edit-item.component';
import { CoursesListItemComponent } from './components/courses/courses-list-item/courses-list-item.component';
import { CoursesNewItemComponent } from './components/courses/courses-new-item/courses-new-item.component';
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
