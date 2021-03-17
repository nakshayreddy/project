import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
}
export const environment = {
  production: true,
  apiUrl: 'https://www.google.com/url?q=https://gitlab.com/careerlabs/front-end-task/tree/master&sa=D&source=editors&ust=1615977572462000&usg=AFQjCNHG7Wa6q0Ut9EbGM5uD0_VEUifKHg'
};

