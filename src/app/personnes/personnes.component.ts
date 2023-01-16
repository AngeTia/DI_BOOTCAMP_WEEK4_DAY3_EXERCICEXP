import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { perloadedPersons } from '../mocks/person.mock';
import { ApiService } from '../service/api/api.service';

@Component({
  selector: 'app-personnes',
  templateUrl: './personnes.component.html',
  styleUrls: ['./personnes.component.css'],
  providers :[ ApiService]
})

export class PersonnesComponent implements OnInit {

  usernames$!: Observable<string[]>;
  persons = perloadedPersons();

  constructor(private api : ApiService){ }

  ngOnInit() {
    this.usernames$ = this.api.getUsers().pipe(
     map((users : any) => users.map((user: { name: string; }) => user.name))
    );
  }

}



