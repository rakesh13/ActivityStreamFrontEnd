import { Injectable } from '@angular/core';
import { Circle } from './circle/circle';
import { Http } from '@angular/http';

@Injectable()
export class CircleService {
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) { }
  getAllCircles()
  {
    //return Promise.resolve(CIRCLES);
    return this.http.get('http://localhost:9012/activityStream/api/circle');
  }
  /* getCircleByCircleName(circleName:string)
  {
    
    //return this.getAllCircles().then(circles => circles.find(circle => circle.circleName === circleName));
  } */
 
  createCircle(circle:Circle)
  {
    return this.http.post('http://localhost:9012/activityStream/api/circle/add',circle);
  }
}
