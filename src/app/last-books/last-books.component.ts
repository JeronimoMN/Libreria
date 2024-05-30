import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { NgbCarouselConfig, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-last-books',
  standalone: true,
  imports: [NgbModule, CommonModule],
  providers:[NgbCarouselConfig],
  templateUrl: './last-books.component.html',
  styleUrl: './last-books.component.css'
})
export class LastBooksComponent implements OnInit {

  ngOnInit(): void {
    
  }
}
