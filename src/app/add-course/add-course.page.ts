import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListCoursesService } from '../services/list-courses.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.page.html',
  styleUrls: ['./add-course.page.scss'],
})
export class AddCoursePage implements OnInit {
  constructor(private listCourse: ListCoursesService, private router: Router) {}

  ngOnInit() {}

  onSubmit(f) {
    console.log(f.value);

    f.value.keywords = f.value.keywords.split(',');

    //console.log(f.value.keywords);
    this.listCourse.addCourse(f.value);
    this.router.navigateByUrl('/home');
  }
}
