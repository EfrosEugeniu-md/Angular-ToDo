import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss'],
})
export class HelloWorldComponent {

  getFullName(): string {
    console.log('+');
    return 'Nichita Ursu';
  }
}
