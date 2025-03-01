import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

export interface PeriodicElement {
  name: string;
  id: string;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-list',
  imports: [RouterModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {
  ELEMENT_DATA: PeriodicElement[] = [
    {
      id: '559dbfaf-bc67-44ce-a880-a754b5ba2255',
      name: 'Hydrogen',
      weight: 1.0079,
      symbol: 'H',
    },
    { id: 'asdfasdf-wer-asdfa', name: 'Helium', weight: 4.0026, symbol: 'He' },
    {
      id: 'adfdf-w45era-asdf-asd',
      name: 'Lithium',
      weight: 6.941,
      symbol: 'Li',
    },
    {
      id: 'adf-adfdsgf-aretfa',
      name: 'Beryllium',
      weight: 9.0122,
      symbol: 'Be',
    },
    { id: 'sdf-a4df-wrtg-adf', name: 'Boron', weight: 10.811, symbol: 'B' },
    {
      id: 'asd-adf-atqqasdf-asa',
      name: 'Carbon',
      weight: 12.0107,
      symbol: 'C',
    },
    { id: 'asdf-asdf-adf7', name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { id: 'adf5-adf-34a8', name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    {
      id: 'adf-35azd-adfa-as22',
      name: 'Fluorine',
      weight: 18.9984,
      symbol: 'F',
    },
    { id: '1aadsf-45a-aadf0', name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  ];

  ngOnInit(): void {
    console.log('Element: ');
  }
}
