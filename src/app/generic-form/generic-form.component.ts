import { Component, OnInit } from '@angular/core';

import {Pikachu} from '../pikachu'
import {PostpikachuService} from '../post-pikachu.service'

@Component({
  selector: 'app-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['./generic-form.component.css']
})
export class genericFormComponent implements OnInit {
  [x: string]: any;

  pikachu: Pikachu = {
    id: 112,
    name: "Salomo"
  }

  constructor(private PostgenericService: PostpikachuService) { }

  ngOnInit() {
  }

  newgeneric() {
    this.PostgenericService.addGeneric(this.pikachu).subscribe();
  }

}
