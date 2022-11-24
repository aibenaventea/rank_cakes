import { Component, Input, OnInit } from '@angular/core';
import { CakesApiService } from 'src/app/services/cakes-api.service';

@Component({
  selector: 'app-cake-details',
  templateUrl: './cake-details.component.html',
  styleUrls: ['./cake-details.component.css']
})
export class CakeDetailsComponent implements OnInit {

  @Input()
  cakeToShow: any;
  editCake: any;

  constructor(private _httpService: CakesApiService) { }

  ngOnInit(): void {
    this.editCake =[{_id:'', userName:'', comment:'', stars: 0, cakeImg:''}]
  }

  onEditCake(){
    const id = this.editCake._id
    this.editCake = this.cakeToShow

    let observable = this._httpService.updateCake(id, this.editCake);
    observable.subscribe(data => {

    })
  }

}
