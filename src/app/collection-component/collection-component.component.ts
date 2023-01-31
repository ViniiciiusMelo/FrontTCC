import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-component',
  templateUrl: './collection-component.component.html',
  styleUrls: ['./collection-component.component.scss']
})
export class CollectionComponentComponent implements OnInit {


  public listaTeste: string[]  = ['vinicius', 'yann'];
  constructor() { }

  ngOnInit(): void {
  }

}
