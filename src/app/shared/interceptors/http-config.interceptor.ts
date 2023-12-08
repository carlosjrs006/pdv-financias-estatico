// import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { TokenService } from '../services/token.service';
// import { Router } from '@angular/router';

// @Injectable()
// export class HttpConfigInterceptor implements HttpInterceptor {
//   constructor( public tokenService: TokenService,public router: Router) {}

//   intercept(
//     request: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {

//     const token = localStorage.getItem('token'); // Obtenha o token JWT do armazenamento local (ou de qualquer outra fonte)

//     if (token) {
//       request = request.clone({
//         setHeaders: {
//           Authorization: `Bearer ${token}` // Adicione o token JWT no cabeçalho "Authorization"
//         }
//       });
//     }

//     return next.handle(request);
//   }

// }
