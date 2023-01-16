import { Component } from '@angular/core';
import { LogService } from './log.service';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercice_Xp';

  message: string;


  constructor(private logService: LogService, private messageService: MessageService) {
    this.message = this.messageService.getMessage();
  }

  log(message: string) {
    this.logService.log(message);
  }
  
}
