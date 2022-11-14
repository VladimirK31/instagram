import { Component } from '@angular/core';

interface IUser {
  name: string;
  age: number;
}

@Component({
  selector: 'inst-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
