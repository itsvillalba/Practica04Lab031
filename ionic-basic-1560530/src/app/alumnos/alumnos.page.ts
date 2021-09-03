import { Component, OnInit } from '@angular/core';
import { Alumno } from './alumno.model';
import { AlumnoService } from './alumno.service';
import { Personaje } from './personajes.model';


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.page.html',
  styleUrls: ['./alumnos.page.scss'],
})
export class AlumnosPage implements OnInit {

  alumnos: Alumno[];
  personajes: Personaje[];
  constructor(private alumnosService: AlumnoService) { }

  ngOnInit() {
    this.alumnos = this.alumnosService.getAlumnos();
    this.alumnosService.getPersonajes().subscribe((response: any)=>{
      this.personajes = response.results;
      console.log(response);
    });
  }

  ionViewWillEnter()
  {
    this.alumnos = this.alumnosService.getAlumnos();
  }

}
