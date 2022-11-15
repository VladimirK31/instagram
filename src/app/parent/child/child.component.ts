import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'inst-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Output() sendGrateEvent = new EventEmitter<string>();
  inputGrade = '';
  sendGradeHandler() {
    this.sendGrateEvent.emit(this.inputGrade);
  }
}
