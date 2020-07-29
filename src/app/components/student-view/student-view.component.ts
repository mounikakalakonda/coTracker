import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { firestore } from 'firebase';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {
subject1:any;
downloadURL:any;
index=0;

  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone,public firestore: AngularFirestore ,public storage:AngularFireStorage
  ) {}
    
              retrieve(subject1){
                this.subject1 = this.firestore.collection('subject').doc(subject1).collection('unit1').valueChanges();
              }
  ngOnInit(): void {
  }



}

