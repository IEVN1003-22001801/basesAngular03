import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  templateUrl: './operas-bas.component.html',
  styleUrl: './operas-bas.component.css'
})
export class OperasBasComponent {
  num1:string='';
  num2:string='';
  resultado:number=0
  operacion:string='';

  calcular(): void {
    const n1 = parseInt(this.num1);
    const n2 = parseInt(this.num2);

    switch (this.operacion) {
      case 'sumar':
        this.resultado = n1 + n2;
        break;
      case 'restar':
        this.resultado = n1 - n2;
        break;
      case 'multiplicar':
        this.resultado = n1 * n2;
        break;
      case 'dividir':
        this.resultado = n2 !== 0 ? n1 / n2 : NaN;
        break;
      default:
        this.resultado = 0; 
        break;
    }
 
  }
}
