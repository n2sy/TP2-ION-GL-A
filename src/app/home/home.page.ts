import { Component, OnInit } from '@angular/core';
import { ListCoursesService } from '../services/list-courses.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  listCourses;
  constructor(private courseServ: ListCoursesService) {}

  ngOnInit() {
    this.listCourses = this.courseServ.getAllCourses();
  }
}
