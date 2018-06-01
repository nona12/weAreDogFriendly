import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public title: String;
  public mostrarMenu:Boolean;

  constructor() {
    
   }

  ngOnInit() {
    this.title='Contacta con nosotros';
    this.mostrarMenu=false;

  }

}
