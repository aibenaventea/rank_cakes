import { Component, Input } from '@angular/core';
import { CakesApiService } from './services/cakes-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rank My Cakes';
  listOfCakes: any;

  @Input()
  cake: any;
  editCake: any = {};
  selectedCake: any;

  constructor(private _httpService: CakesApiService){}

  ngOnInit(): void {
    this.showCakes();

  }

  showCakes(){
    let observable = this._httpService.getAllCakes();
    observable.subscribe(data => {
      this.listOfCakes = data;
      console.log('list of cackes:', this.listOfCakes )
    })
  }

  showCake(cake:any){
    this.selectedCake = cake;
  }

  onEditCake(id: String){
    let observable = this._httpService.updateCake(id, this.cake)
    observable.subscribe(data => {

    })
  }
}
