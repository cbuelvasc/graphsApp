import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartType, ChartData, ChartEvent } from 'chart.js';

@Component({
  selector: 'app-double-bars',
  templateUrl: './double-bars.component.html',
  styleUrls: ['./double-bars.component.css'],
})
export class DoubleBarsComponent implements OnInit {
  productData: ChartData<'bar'> = {
    labels: ['2021', '2022', '2023', '2024', '2025'],
    datasets: [
      {
        data: [200, 300, 400, 300, 100],
        label: 'Vendedor A',
        backgroundColor: '#ED5F76',
      },
      {
        data: [100, 200, 300, 400, 500],
        label: 'Vendedor B',
        backgroundColor: '#F763C4',
      },
      {
        data: [50, 250, 30, 450, 200],
        label: 'Vendedor C',
        backgroundColor: 'blue',
      },
    ],
  };

  carsData: ChartData<'bar'> = {
    labels: ['2021', '2022', '2023', '2024', '2025'],
    datasets: [
      {
        data: [200, 300, 400, 300, 100],
        label: 'Chevrolet',
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,0.2)',
      },
      {
        data: [100, 200, 300, 400, 500],
        label: 'Ford',
        backgroundColor: '#F763C4',
      },
      {
        data: [50, 250, 303, 450, 200],
        label: 'Nissan',
        backgroundColor: 'blue',
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
