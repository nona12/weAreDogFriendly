import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import * as swal from 'sweetalert';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public title: String;
  public mostrarMenu:Boolean;

  constructor(public _MessageService: MessageService) {
    
   }

  ngOnInit() {
    this.title='Contacta con nosotros';
    
  }
  contactForm(form) {
    console.info("entra en el boton del contacto")
    this._MessageService.sendMessage(form).subscribe(() => {
    });
    }
   }