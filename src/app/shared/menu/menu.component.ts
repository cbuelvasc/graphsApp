import { Component, OnInit } from '@angular/core';

interface MenuItem {
  route: string;
  name: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[] = [
    {
      route: 'graphs/bars',
      name: 'Bars',
    },
    {
      route: 'graphs/double-bars',
      name: 'Double Bars',
    },
    {
      route: 'graphs/doughnut',
      name: 'Doughnut',
    },
    {
      route: 'graphs/doughnut-http',
      name: 'Doughnut Http',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
