import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { Persona } from '../persona.model';
import { LoggingService } from '../LoggingService.service';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() personaCreada = new EventEmitter<Persona>();
  // nombreInput:string;
  // apellidoInput:string;
  @ViewChild('nombreInput') nombreInput: ElementRef;
  @ViewChild('apellidoInput') apellidoInput: ElementRef;

  constructor(private loggingService:LoggingService, private personasService:PersonasService) 
  {
    this.personasService.saludar.subscribe(
      (indice:number)=>  alert("  El indice es:  "+indice)
    )
    
  }
  ngOnInit() {
  }

  onAgregarPersona(){
    //Aqui se asigna el viewChils, comvirtiendolo a elemento nativo y sacando su valor
    let persona1 = new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value);
   this.personasService.agregarPersona(persona1);
    //this.personaCreada.emit(persona1);
  }
}
