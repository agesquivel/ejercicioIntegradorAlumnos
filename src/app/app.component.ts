import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Alumno } from './alumnos/alumno.model';
import { AlumnosService } from './alumnos/alumnos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formGroupAnidado';
}
