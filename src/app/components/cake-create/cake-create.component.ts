import { Component, OnInit } from '@angular/core';
import { CakesApiService } from 'src/app/services/cakes-api.service';

@Component({
  selector: 'app-cake-create',
  templateUrl: './cake-create.component.html',
  styleUrls: ['./cake-create.component.css']
})
export class CakeCreateComponent implements OnInit {
  cakeCreate: any;
  title = 'Rank My Cake';

  constructor(private _httpService: CakesApiService) { }

  ngOnInit(): void {
    this.cakeCreate = {userName:'', comment:'', stars: 0, cakeImg:''}
  }

  onCakeCreate(){
    let observable = this._httpService.createNewCake(this.cakeCreate);
    observable.subscribe(data => {

    })
  }
}
