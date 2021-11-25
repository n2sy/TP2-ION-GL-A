import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListCoursesService {
  private tabCourses = [
    {
      id: 1,
      title: 'Angular',
      author: 'Nidhal Jelassi',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1024px-Angular_full_color_logo.svg.png',
      keywords: ['Component', 'Directive', 'Pipe'],
    },
    {
      id: 2,
      title: 'Android',
      author: 'Abdelkader Hawari',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Android_logo_2019.png/479px-Android_logo_2019.png',
      keywords: ['Activité', 'Layout', 'Intents'],
    },
    {
      id: 3,
      title: 'Ionic',
      author: 'Rania Ben Yahia',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/LogoIonic.png/220px-LogoIonic.png',
      keywords: ['Hybrid', 'Page', 'Capacitor'],
    },
  ];

  constructor() {}

  getAllCourses() {
    return this.tabCourses;
  }

  getOneCourse(id) {
    return this.tabCourses.find((c) => c.id == id);
  }

  deleteCourse(c) {
    let i = this.tabCourses.indexOf(c);
    this.tabCourses.splice(i, 1);
  }
}
