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
  lessons: Lesson[] = [
    {
      id: 0,
      title: 'Math',
      weekGrades: [
        {
          id: 0,
          gradeItem: 2,
        },
        {
          id: 1,
          gradeItem: 4,
        },
        {
          id: 2,
          gradeItem: 3,
        },
      ],
    },
    {
      id: 0,
      title: 'Physic',
      weekGrades: [
        {
          id: 0,
          gradeItem: 4,
        },
        {
          id: 1,
          gradeItem: 2,
        },
        {
          id: 2,
          gradeItem: 5,
        },
      ],
    },
  ];
  isLoading = true;

  constructor() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }
  getGrate(grade: string) {
    // this.grades.push(grade);
  }
}
