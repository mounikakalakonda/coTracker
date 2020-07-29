import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-fac-upload',
  templateUrl: './fac-upload.component.html',
  styleUrls: ['./fac-upload.component.css']
})
export class FacUploadComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private dataService: DataService,
    public router: Router,
    public ngZone: NgZone
  ) { }

  ngOnInit(): void {
  }
  onChange(value) {
    this.dataService.subjectName = value;
  }
  value = '';
  onEnter(value: string) 
  { this.dataService.topicName = value; }
}
