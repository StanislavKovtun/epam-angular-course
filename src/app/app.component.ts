import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'epam-angular-course';
}

// ##
// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { CoursesPageComponent } from './modules/courses-page/courses-page.component';
// import { FooterComponent } from './modules/footer/footer.component';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss'],
//   standalone: true,
//   imports: [CommonModule, RouterOutlet, CoursesPageComponent, FooterComponent],
// })
// export class AppComponent {}