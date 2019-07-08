import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';

const clientID = '04f8fe029b91022e7379';
const clientSecret = 'cfbce8122927414823e2531dfb78ceed2bd6daf0';

@Injectable({
  providedIn: 'root'
})

export class OauthService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAccessToken(code: string) {
    const getAccessTokenUrl = `http://localhost:8080/oauth/redirect?code=${code}` ;

    console.log('getAccessToken', getAccessTokenUrl);

    const headers = new HttpHeaders();

    headers.append('accept', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST');
    headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

   // headers.append('Content-Type', 'application/json');
    console.log(headers);
    return this.httpClient.get<any>(getAccessTokenUrl,  { headers: headers });
  }


  // getAccessToken(code: string) {
  //   const getAccessTokenUrl = `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${code}` ;

  //   console.log('getAccessToken', getAccessTokenUrl);
  //   const body = {
  //   };
  //   const headers = new HttpHeaders();

  //   headers.append('accept', 'application/json');
  //   headers.append('Access-Control-Allow-Origin', '*');
  //   headers.append('Access-Control-Allow-Methods', 'POST');
  //   headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  //  // headers.append('Content-Type', 'application/json');
  //   console.log(headers);
  //   return this.httpClient.post<any>(getAccessTokenUrl, body, { headers: headers });
  // }
}
