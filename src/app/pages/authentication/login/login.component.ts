import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  private readonly authService: AuthService = inject(AuthService);
  private readonly router = inject(Router);
  loginForm!: FormGroup;
  private _fb: FormBuilder = inject(FormBuilder);

  ngOnInit() {
    this.loginForm = this._fb.group({
      api_key: new FormControl('', [Validators.required]),
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.authService
        .login(this.loginForm.controls['api_key'].value)
        .subscribe({
          next: (response) => {
            this.loginForm.reset();
            this.router.navigate(['/menu/list']);
          },
          error: (error) => {
            console.error('Autenticación fallida', error);
            this.loginForm.reset();
          },
        });
    }
  }
}
