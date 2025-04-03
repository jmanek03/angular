import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <h2>Child Component</h2>
    <p>Recieved from parent: {{message}}</p>
    <button (click)="sendMessage()">Send Message to Parent</button>
  `,
  styleUrls: ['./child.component.css'],
        standalone: true
})
export class ChildComponent {
  @Input() message: string = '';
  @Output() messageEvent = new EventEmitter<string>();

    sendMessage() {
      this.messageEvent.emit("Hello from Child!");
  }
}
