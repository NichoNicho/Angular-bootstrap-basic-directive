import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  secretPassword = "tuna";
  hasBeenClicked = false;

  onClick(){
    this.hasBeenClicked = !this.hasBeenClicked;
  }

}
