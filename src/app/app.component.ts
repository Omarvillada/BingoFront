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

   getBalota():void {
  /**
   * 1. Llamar el servicio
   */
    this.service.getBalota()
    .subscribe((response: any) =>{ 

      this.balota = response.balota;
    });


    //this.balota = "Hola Parcero";



    console.log('Hola Mundo');
  }

  buscarBalot(balota : any){
      
  }
}


