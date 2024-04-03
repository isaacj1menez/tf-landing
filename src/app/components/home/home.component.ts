import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { RegisterOffcanvasComponent } from '../register-offcanvas/register-offcanvas.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    RegisterOffcanvasComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) { }
}
