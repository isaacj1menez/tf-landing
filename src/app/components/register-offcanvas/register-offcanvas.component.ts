import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { addCamper } from '../../../services/tf-camp-api.service';
import { registerSuccess } from '../../../utils/alerts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register-offcanvas',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './register-offcanvas.component.html',
  styleUrl: './register-offcanvas.component.css'
})
export class RegisterOffcanvasComponent {

  constructor(private formBuilder: FormBuilder) { }

  alergias: string[] = [];
  medicamentos: string[] = [];
  error: boolean = false;
  error_message: string = '';
  cargando: boolean = false;

  registerForm = new FormGroup({
    nombre: new FormControl(''),
    edad: new FormControl(''),
    sexo: new FormControl('Sexo...'),
    telefono: new FormControl(''),
    iglesia: new FormControl(''),
    tipo_sangre: new FormControl('Tipo de Sangre...'),
    contacto: new FormControl('Contacto...'),
    nombre_contacto: new FormControl(''),
    telefono_contacto: new FormControl(''),
    talla: new FormControl('Talla de playera...'),
    alergias: new FormControl(''),
    medicamentos: new FormControl(''),
    comentarios: new FormControl('')
  });

  onSubmit = async () => {
    const body = { ...this.registerForm.value, alergias: this.alergias, medicamentos: this.medicamentos };
    this.cargando = true;
    const succes: boolean = await addCamper(body);

    if(succes) {

      this.error = false;
      this.error_message = '';
      this.resetForm();
      this.cargando = false;
      registerSuccess();

    } else {
      this.error = true;
      this.error_message = 'Algo salió mal, verifica tus datos. Si el problema persiste, contacta al pastor Edgar Serés'
    }
  }

  addAlergia = () => {
    const alergia = this.registerForm.controls.alergias.value?.toUpperCase();
    if (alergia) {
      this.alergias.push(alergia);
      this.registerForm.controls.alergias.setValue('');
    }
  }

  addMedicamento = () => {
    const medicamento = this.registerForm.controls.medicamentos.value?.toUpperCase();
    if (medicamento) {
      this.medicamentos.push(medicamento);
      this.registerForm.controls.medicamentos.setValue('');
    }
  }

  resetForm = () => {
    this.registerForm.reset();
    this.registerForm.controls.tipo_sangre.setValue('Tipo de Sangre...');
    this.registerForm.controls.contacto.setValue('Contacto...');
    this.registerForm.controls.talla.setValue('Talla de playera...');
    const btnClose: HTMLButtonElement = document.querySelector('#btnClose') as HTMLButtonElement;
    btnClose.click();
  }
}
