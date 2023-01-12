import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router, private ds: DataService) { }

  ngOnInit(): void {
  }

  goToHome() {
    this.router.navigateByUrl('login')
  }

  
}
