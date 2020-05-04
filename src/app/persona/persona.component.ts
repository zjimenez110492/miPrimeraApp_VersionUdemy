import { Component, OnInit, Input } from '@angular/core';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';


@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  @Input() persona: Persona;
  @Input() indice: number;
  creado:boolean=false;
  personaEdit:Persona;
  nombre:string;
  apellido:string;
  constructor(private PersonasService:PersonasService) 
  {
  
   }

  ngOnInit() {
  }
  emitirSaludo()
  {

    this.PersonasService.saludar.emit( this.indice);
  }
  crear()
  {
    if(this.creado)
    this.creado=false;
    else
    this.creado=true;
  }
  guardar()
  {
    this.crear();
    this.personaEdit=new Persona(this.nombre, this.apellido);
    this.PersonasService.editarPersona(this.personaEdit,this.indice);
  }
}
