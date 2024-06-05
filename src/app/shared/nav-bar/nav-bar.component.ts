import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogConfig, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, LoginComponent, MatDialogModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  constructor(private dialogRef: MatDialog) { }

  onSubmit() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.minWidth = '40%'; // Ancho mínimo
    dialogConfig.maxWidth = '100%'; // Ancho máximo
    dialogConfig.hasBackdrop = true;
    this.dialogRef.open(LoginComponent, dialogConfig)
  }
}