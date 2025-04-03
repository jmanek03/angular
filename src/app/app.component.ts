import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { LoggerService } from './logger.service';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'app-root',
  template: `
    <h1>Angular Decorators Demo</h1>
    <button apphighlight>Hover to Highlight</button>

    <app-child [message]= "parentMessage" (messageEvent)= "receiveMessage($event)"></app-child>
    <p><strong>Message from Child: </strong> {{childMessage}}</p>
  `,
  styleUrls: ['./app.component.css'],
        standalone: true,
        imports: [ChildComponent, HighlightDirective]
})
export class AppComponent {
  parentMessage = "Hello From Parent!";
  childMessage = "";

  constructor(private logger: LoggerService) {
    this.logger.log('AppComponent initialized');
  }
  receiveMessage(event: string) {
    this.childMessage = event;
  }
}
