import { Component, OnInit, Input, ChangeDetectorRef, NgModule } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { DataService } from '../shared/services/data.service';
import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';



@Component({
  selector: 'upload-task',
  templateUrl: './upload-task.component.html',
  styleUrls: ['./upload-task.component.scss']
})
export class UploadTaskComponent implements OnInit {

  @Input() file: File;

  task: AngularFireUploadTask;

  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: string;
  topic:string;
  // path: string[];
  
  constructor(private storage: AngularFireStorage, private db: AngularFirestore,
              private dataService: DataService) { }
  
 
  ngOnInit() {
    this.startUpload();
  }
  // selectedLevel;
     
  // sub;
  // data:Array<Object> = [
  //     {id: 0, name: "VLSI"},
  //     {id: 1, name: "M1"}
  // ];
  
 
  
  startUpload() {

    // this.sub=this.selectedLevel;
    // console.log(this.selectedLevel.name)
    // The storage path
    const path = `subject/${Date.now()}_${this.file.name}`;

    // Reference to storage bucket
    const ref = this.storage.ref(path);

    // The main task
    this.task = this.storage.upload(path, this.file);

    // Progress monitoring
    this.percentage = this.task.percentageChanges();

    this.snapshot   = this.task.snapshotChanges().pipe(
      tap(console.log),
      // The file's download URL
      finalize( async() =>  {
        this.downloadURL = await ref.getDownloadURL().toPromise();
        // for(var i=0;i<4;i++)
        // var okok=String(this.selectedLevel.name);
        if (this.dataService.subjectName == 'Choose') {
          alert('select Input field');
          return ;
        }
        this.db.collection('subject').doc( this.dataService.subjectName).collection('unit1').add({ downloadURL: this.downloadURL, path,topic:this.dataService.topicName});
        //console.log(this.sub.name);
      }),
    );
  }

  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }

}
