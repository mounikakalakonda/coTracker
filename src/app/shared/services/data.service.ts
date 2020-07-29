import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  subjectName: string;
  topicName:string;
  constructor() { }

  updateSubject(name) {
    this.subjectName = name;
  }
  setTopicName(name){
    this.topicName=name;
  }

}
