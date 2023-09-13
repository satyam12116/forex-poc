import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  selectedLogin: string = 'user';
  constructor() { }

  ngOnInit(): void {
  }
  onLoginOptionSelected(loginOption: any) {
    this.selectedLogin = loginOption;
    localStorage.setItem('selectedLogin', loginOption); 
  }
}
