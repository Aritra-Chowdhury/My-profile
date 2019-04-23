import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  public doughnutChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public doughnutChartData = [120, 150, 180, 90];
  public doughnutChartType = 'doughnut';
  chart;
  constructor() { }

  ngOnInit() {
    this.frontEndChart();
    this.backEndChart();
    this.databaseChart();
  }

  frontEndChart()
  {
    console.log("in generate")
    this.chart = new Chart('Frontend', {
      type: 'doughnut',
			data: {
				datasets: [{
					data:[90,10],
					backgroundColor: [	
            '#f8781f','white'
          ],
					label: 'Front End'
				}],
				labels: [
					'Front End'
				]
			},
			options: {
				responsive: true,
				 legend: {
			 	position: 'top',
				},
				animation: {
					animateScale: true,
					animateRotate: true
				}
      }
    });
  }

  backEndChart()
  {
    console.log("in generate")
    this.chart = new Chart('Backend', {
      type: 'doughnut',
			data: {
				datasets: [{
					data:[90,10],
					backgroundColor: [	
            '#7cba01','white'
          ],
					label: 'Backend'
				}],
				labels: [
					'Backend'
				]
			},
			options: {
				responsive: true,
				legend: {
				 	position: 'top',
			 },
				animation: {
					animateScale: true,
					animateRotate: true
				}
      }
    });
  }


  databaseChart()
  {
    console.log("in generate")
    this.chart = new Chart('Database', {
      type: 'doughnut',
			data: {
				datasets: [{
					data:[90,10],
					backgroundColor: [	
            '#1ebad0','white'
          ],
					label: 'Database'
				}],
				labels: [
					'Database'
				]
			},
			options: {
				responsive: true,
				 legend: {
				 	position: 'top',
				 },
				animation: {
					animateScale: true,
					animateRotate: true
				}
      }
    });
  }

}
