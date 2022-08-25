import { Component } from '@angular/core';
import { GenerarBalotaService } from './generar-balota.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bingoFront';

  constructor(private service: GenerarBalotaService){
      console.log("Se crea componente principal");
  }
  balota: string = "";
  intentos: string = "";
  tablero: any = {"b":["14","15","12"],"i":["30","28","30"],"g":["68","64","64"],"n":["46","49","48"],"o":["76","80","87"]};
  letras = Object.keys(this.tablero);
  numeros = Object.values(this.tablero);
   getBalota():void {
  /**
   * 1. Llamar el servicio
   */
    this.service.getBalota()
    .subscribe((response: any) =>{ 

      this.balota = response.balota;
      this.findNumber(this.balota);
    });


    //this.balota = "Hola Parcero";



    console.log('Hola Mundo');
  
  }

  buscarBalot(balota : any){
      
  }

  findNumber(number: string){
    var celda = document.getElementById(number);
    if(celda != null){
      celda.style.backgroundColor = 'yellow'; 
      console.log(celda)
      console.log(number)
    }
   
  }
}


