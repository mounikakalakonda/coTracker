import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";

@Component({
  selector: 'app-fac-sign',
  templateUrl: './fac-sign.component.html',
  styleUrls: ['./fac-sign.component.css']
})
export class FacSignComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
