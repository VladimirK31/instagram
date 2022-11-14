import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
export interface Grade {
  math: number;
  physic: number;
}
@Component({
  selector: 'inst-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Output() sendGrateEvent = new EventEmitter<Grade>();
  sendGradeHandler() {
    const math = 5;
    const physic = 4;
    this.sendGrateEvent.emit({ math, physic });
  }
}
