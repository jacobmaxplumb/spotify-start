import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) { }

  public ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const code = localStorage.getItem('code');
      if (code) {
        this.authService.getToken(code).subscribe((result: any) => {
          localStorage.removeItem('code');
          localStorage.setItem('token', result.access_token);
          this.router.navigateByUrl('/home');
        })
      } else if (params && Object.keys(params).length > 0 && Object.keys(params).includes('code')) {
        const urlWithoutQueryParams = this.router.url.substring(0, this.router.url.indexOf('?'));
        localStorage.setItem('code', params.code);
        this.router.navigateByUrl(urlWithoutQueryParams);
      }
    });
  }

  public login(): void {
    window.location.href = environment.loginUrl
  }

}
