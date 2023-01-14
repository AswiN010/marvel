import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {

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
