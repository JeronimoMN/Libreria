import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../../shared/nav-bar/nav-bar.component';
import { SideBarComponent } from '../../shared/side-bar/side-bar.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-page-admin',
  standalone: true,
  imports: [CommonModule, NavBarComponent, SideBarComponent, RouterOutlet],
  templateUrl: './main-page-admin.component.html',
  styleUrl: './main-page-admin.component.css'
})
export class MainPageAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
