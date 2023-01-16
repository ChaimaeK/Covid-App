import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {UserService} from "../services/user.service";
import {UserAuthService} from "../services/user-auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private userService: UserService,
    private userAuthService: UserAuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login(loginForm: NgForm) {
    this.userService.login(loginForm.value).subscribe(
      (response: any) => {
        this.userAuthService.setRoles(response.user.role);
        this.userAuthService.setToken(response.jwtToken);

        const role = response.user.role[0].roleName;
        if (role === 'Admin' || role ==='Medecin') {
          this.userAuthService.setCenterId(response.user.center.idCenter);
        }
        if (role === 'Admin' || role === 'Super_Admin' || role ==='Medecin') {
          this.router.navigate(['/back-office']);
        } else {
          this.router.navigate(['']);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
