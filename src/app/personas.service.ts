import { Persona } from './persona.model';
import { LoggingService } from './LoggingService.service';
import { Injectable } from '@angular/core';

@Injectable()
export class PersonasService
{
    personas: Persona[] = [new Persona("Juan","Perez"), new Persona("Laura","Juarez")];
constructor(private loggingService:LoggingService)
{

}
    agregarPersona(persona: Persona){
        this.loggingService.enviaMensajeAConsola("Enviamos persona con nombre: " + persona.nombre + " apellido: " + persona.apellido);
   
        this.personas.push(persona);
      }
}