import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  getMessage(): string {
    return 'Hello Exercice4 xp week4 day3 terminé ';
  }
}