import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ListCoursesService } from '../services/list-courses.service';

@Component({
  selector: 'app-detail-course',
  templateUrl: './detail-course.page.html',
  styleUrls: ['./detail-course.page.scss'],
})
export class DetailCoursePage implements OnInit {
  selectedCourse;
  constructor(
    private activatedRoute: ActivatedRoute,
    private listCourse: ListCoursesService,
    private alertCtrl: AlertController,
    private router: Router
  ) {}

  ngOnInit() {
    // this.activatedRoute.params.subscribe(
    //   (p: Params) => {
    //     console.log(p['id']);
    //   }
    // );
    this.activatedRoute.paramMap.subscribe((p: ParamMap) => {
      //console.log(p.get('id'));
      this.selectedCourse = this.listCourse.getOneCourse(p.get('id'));
    });
  }

  async onDelete() {
    const alert = await this.alertCtrl.create({
      header: 'Confirm',
      message: 'Are you sure to delete this course ?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.listCourse.deleteCourse(this.selectedCourse);
            this.router.navigateByUrl('/home');
          },
        },
        'No',
      ],
    });

    await alert.present();
  }
}
