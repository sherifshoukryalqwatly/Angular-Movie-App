import { Component } from '@angular/core';
import { Navpar } from "../navpar/navpar";
import { Footer } from "../footer/footer";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone:true,
  imports: [Navpar, Footer, RouterOutlet ],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main {

}
