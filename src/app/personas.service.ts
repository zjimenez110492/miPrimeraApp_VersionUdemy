import { Persona } from './persona.model';
import { LoggingService } from './LoggingService.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class PersonasService
{
    personas: Persona[] = [new Persona("Juan","Perez"), new Persona("Laura","Juarez")];
    
    saludar= new EventEmitter<number>();
constructor(private loggingService:LoggingService)
{

}
agregarPersona(persona: Persona){
    this.loggingService.enviaMensajeAConsola("Enviamos persona con nombre: " + persona.nombre + " apellido: " + persona.apellido);

    this.personas.push(persona);
  }
  editarPersona(persona: Persona, indice:number){
    this.loggingService.enviaMensajeAConsola("Editamos persona con nombre: " + persona.nombre + " apellido: " + persona.apellido);

    this.personas[indice]=persona;
  }
}