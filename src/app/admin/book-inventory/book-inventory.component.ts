import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-book-inventory',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, RouterLinkActive],
  templateUrl: './book-inventory.component.html',
  styleUrl: './book-inventory.component.css'
})
export class BookInventoryComponent implements OnInit{
  public previsualitation: string | undefined;
  public files: any = []

  constructor(private sanitizer: DomSanitizer){}

  ngOnInit(): void {
    
  }

  bookForm= new FormGroup({
    'image': new FormControl('', [ Validators.required]),
    'title': new FormControl('', [Validators.required]),
    'author': new FormControl('', [Validators.required]),
    'amount': new FormControl('', [Validators.required]),
    'price': new FormControl('', [Validators.required]),
    'state': new FormControl('', [Validators.required]),
    'synopsis': new FormControl('', [Validators.required])
  })
  

  captureFile(event: any){
    const captureImg = event.target.files[0]
    this.extraerBase64(captureImg).then(imagen=>{
      this.previsualitation = imagen.base;
      console.log(imagen)
    })
    this.files.push(captureImg);
    console.log()
  }
  
  saveBook(){
    console.log(this.bookForm.value)
  }



  extraerBase64 = async ($event: any): Promise<{ base?: string }> => {
    return new Promise((resolve, reject) => {
      try {
        const unsafeImg = window.URL.createObjectURL($event);
        const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
        const reader = new FileReader();
        reader.readAsDataURL($event);
        reader.onload = () => {
          resolve({ base: reader.result as string });
        };
        reader.onerror = error => {
          // En lugar de simplemente resolver con { base: null }, intentemos rechazar la promesa con un error específico
          reject(new Error(`Error al leer el archivo: ${error}`));
        };
      } catch (e) {
        // Captura errores generales y los rechaza para su manejo adecuado
        reject(e); // Rechaza la promesa con el error para su manejo adecuado
      }
    });
  };
  
  
}
