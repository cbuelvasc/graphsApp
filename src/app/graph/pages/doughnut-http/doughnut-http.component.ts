import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ChartData, ChartDataset, ChartType } from 'chart.js';

import { GraphsService } from '../../services/graphs.service';

@Component({
  selector: 'app-doughnut-http',
  templateUrl: './doughnut-http.component.html',
  styleUrls: ['./doughnut-http.component.css'],
})
export class DoughnutHttpComponent implements OnInit {
  doughnutChartLabels: string[] = [];

  doughnutChartDataSet: number[] = [];

  doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: this.doughnutChartDataSet,
      },
    ],
  };

  doughnutChartType: ChartType = 'doughnut';

  constructor(private graphsService: GraphsService) {}

  ngOnInit(): void {
    this.graphsService.getUsers().subscribe(({ labels, values }) => {
      labels.forEach((label) => {
        this.doughnutChartLabels.push(label);
      });

      values.forEach((element) => {
        this.doughnutChartDataSet.push(element);
      });
    });
  }
}
