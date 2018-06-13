import { Component, OnInit } from '@angular/core';
import { AutenticationService } from '../services/autentication.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private autService: AutenticationService,
    private router: Router,
    private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
  }

  isAuth() {
    return this.autService.isAuthenticated();
  }


}
