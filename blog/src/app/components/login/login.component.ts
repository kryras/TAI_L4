import {AuthenticationService} from '../../services/authentication.service';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  constructor(private router: Router,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
  }

  handleBasicAuthLogin() {
    this.authenticationService.executeAuthenticationService(this.username, this.password)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/']);
          // this.router.navigate(['home', this.username]);
          this.invalidLogin = false;
        },
        error => {
          console.log(error);
          this.invalidLogin = true;
        }
      );
  }
}


// import {Component, OnInit} from '@angular/core';
// import {AuthServiceService} from "../../services/auth-service.service";
// import {Router} from "@angular/router";
//
// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   credentials = {
//     login: '',
//     password: ''
//   };
//   private logged: boolean;
//   private logout: boolean;
//
//
//   constructor(private authService: AuthServiceService, private router: Router) {
//   }
//
//   ngOnInit() {
//   }
//
//   signIn() {
//     return this.authService.authenticate(this.credentials).subscribe((result) => {
//       if (!result) {
//         this.logged = false;
//       } else {
//         this.logout = false;
//         this.credentials = {
//           login: '',
//           password: ''
//         };
//         this.router.navigate(['/']);
//       }
//     });
//   }
//
// }
