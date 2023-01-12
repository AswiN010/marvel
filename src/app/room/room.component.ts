import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent {

  constructor(private router: Router, private ds: DataService) { }

  ngOnInit(): void {
  }

  goToHome() {
    this.router.navigateByUrl('')
  }

  logout() {
    this.ds.logout();
    
  }
}
