import { Component } from '@angular/core';
import { TestApiService } from '../service/test-api.service';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrl: './pais.component.css'
})
export class PaisComponent {
  pais: any={};

  constructor(private api:TestApiService) { }

  ngOnInit(): void{
    this.busquedaPais();
  } busquedaPais():void{
    this.api.consultapais('deutschland').subscribe({
      next:(infoPais)=>{
        this.pais = infoPais;
        console.log(this.pais);
      }
    })
  }
}
