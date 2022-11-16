import { Component, OnInit } from '@angular/core';
export interface WeekGrade {
  id: number;
  gradeItem: number;
}
export interface Lesson {
  id: number;
  title: string;
  weekGrades: WeekGrade[];
}
@Component({
  selector: 'inst-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  value = '';
}
