import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import { Router} from '@angular/router';
import * as swal from 'sweetalert';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public title: String;
  public mostrarMenu:Boolean;

  constructor(public _MessageService: MessageService,
    private _router: Router) {
    
   }

  ngOnInit() {
    this.title='Contacta con nosotros';
    
  }
  contactForm(form) {
    this._MessageService.sendMessage(form).subscribe(() => {
      sweetAlert("Muchas gracias por contarnos cositas", "Tu mensaje ha sido enviado correctamente","success");
     this._router.navigate(['/hotel, this.hotel._id']);
     
    });
    }
   }