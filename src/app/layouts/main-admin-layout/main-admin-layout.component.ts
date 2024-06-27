import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavBarComponent } from '../../shared/nav-bar/nav-bar.component';
import { SideBarComponent } from '../../shared/side-bar/side-bar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-admin-layout',
  standalone: true,
  imports: [CommonModule, NavBarComponent, SideBarComponent, RouterOutlet],
  templateUrl: './main-admin-layout.component.html',
  styleUrl: './main-admin-layout.component.css'
})
export class MainAdminLayoutComponent {

}
