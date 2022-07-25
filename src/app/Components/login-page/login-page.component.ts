import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/Services/backend.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent implements OnInit {

  loginForm = this.formBuilder.group({
    username: [''],
    password: ['']
  });

  displayError = false;
  displayLoading = false;

  submit(){
    this.displayLoading = true;
    this.backendService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe(result => {
      this.displayLoading = false;
      this.router.navigateByUrl('home');
      localStorage.setItem('login-token', result.token);
    }, err => {
      this.displayError = true;
      this.displayLoading = false;
    });
  }

  constructor(private formBuilder: FormBuilder, 
              private backendService: BackendService,
              private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('login-token') != null){
      this.router.navigateByUrl('/home');
    }

    this.loginForm.valueChanges.subscribe(value => {
      this.displayError = false;
    });
  }

}
