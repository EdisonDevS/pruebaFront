import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { UrlInterceptor } from './url-interceptor';

describe(`UrlInterceptor`, () => {
    let http: HttpService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [
          HttpService,
          {
            provide: HTTP_INTERCEPTORS,
            useClass: UrlInterceptor,
            multi: true,
          },
        ],
      });

    });

    beforeEach(() => {
        http = TestBed.inject(HttpService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    it('should put API url as a prefix in the called route', () => {
        http.doGet('/prueba').subscribe(response => {
            expect(response).toBeTruthy();
        });

        const httpRequest = httpMock.expectOne(`${environment.API}/prueba`);

        expect(httpRequest.request.url).toEqual(`${environment.API}/prueba`);
    });
});
