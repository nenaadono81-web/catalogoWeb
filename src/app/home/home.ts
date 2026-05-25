import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppHeader } from '../app-header/app-header';
import { AppFooter } from '../app-footer/app-footer';
import { DescCatalogo } from '../desc-catalogo/desc-catalogo';

@Component({
  selector: 'app-home',
  imports: [RouterModule, AppHeader, AppFooter, DescCatalogo,],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
