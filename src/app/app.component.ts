import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  hasBeenClicked = false;
  numberOfLogs = [];

  onClick() {
    this.hasBeenClicked = !this.hasBeenClicked;
    this.numberOfLogs.push(new Date());
  }

}
