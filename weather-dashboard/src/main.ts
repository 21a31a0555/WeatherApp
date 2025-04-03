import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/components/login/login.component';
import { RegisterComponent } from './app/components/register/register.component';
import { authGuard } from './app/guards/auth.guard';
import { AuthInterceptor } from './app/interceptors/auth.interceptor';
import { WeatherComponent } from './app/weather/weather.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: WeatherComponent, canActivate: [authGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' as const }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([AuthInterceptor]))
  ]
}).catch(err => console.error(err));
