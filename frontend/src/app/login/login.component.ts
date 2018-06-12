import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AutenticationService } from '../services/autentication.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mensaje = false;
  isAuth() {
    return this.autService.isAuthenticated();
  }



  loginForm: FormGroup;
  userdata: any;
  constructor(private formBuilder: FormBuilder,
    private autService: AutenticationService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'email': ['', [
        Validators.required,
        Validators.email
      ]
      ],
      'password': ['', [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6)
      ]
      ]
    });

  }

  onSubmit() {

    this.userdata = this.saveUserdata();
    this.autService.initSession(this.userdata);
    setTimeout(() => {
      if (this.isAuth() === false) {
        this.mensaje = true
      }
    }, 1000);
  }

  saveUserdata() {

    const saveUserdata = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value,
    };
    return saveUserdata;
  }



}
