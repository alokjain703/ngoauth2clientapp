import { OauthService } from './../oauth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-oauth',
  templateUrl: './oauth.component.html',
  styleUrls: ['./oauth.component.scss']
})
export class OauthComponent implements OnInit {

  code = '';
  constructor(
    private route: ActivatedRoute,
    private oauthService: OauthService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.code = params['code'];
    });
    // console.log('parammap', this.route.snapshot.paramMap);
    // this.code = this.route.snapshot.paramMap.get('code');
    console.log('Oauth code', this.code);
    console.log('Oauth component called');

    // Call The oauth provider to get the token

    if (this.code) {
      this.oauthService.getAccessToken(this.code).subscribe(
        data => {
          console.log('getContactsSummaries', data);
          if (data) {
            console.log('data', data);
          }
        },
        err => {
          const tempError = 'Could not authenticate';
          console.log('Error', tempError);
        }
      );
    }

  }

}
