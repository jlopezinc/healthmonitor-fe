import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { BloodPressure, BloodPressureService } from './blood-pressure.service';
import { MatPaginator } from '@angular/material/paginator';
import { BloodPressureDatasource } from './blood-pressure.datasource';
import { tap } from 'rxjs/operators';

@Component({
    selector: 'app-blood-pressure',
    templateUrl: './blood-pressure.component.html',
    providers: [ BloodPressureService ],
    styles: ['.error {color: red;}']
  })
export class BloodPressureComponent implements OnInit, AfterViewInit {

    dataSource: BloodPressureDatasource;

    displayedColumns = ['date', 'systolic', 'diastolic', 'heartrate'];

    @ViewChild(MatPaginator) paginator: MatPaginator;

    bloodPressures: BloodPressure[];
    bloodPressureCount: number;
    model: BloodPressure = new BloodPressure();
    showAddBloodPressurePanel = false;

    constructor(private bloodPressureService: BloodPressureService) {

    }

    showBloodPressure() {
      this.dataSource.loadBloodPressures(
        this.paginator.pageIndex,
        this.paginator.pageSize
      );
    }

    toogleBloodPressure() {
        this.showAddBloodPressurePanel = !this.showAddBloodPressurePanel;
    }

    saveBloodPressure() {
        const data: BloodPressure = {
            systolic: this.model.systolic,
            diastolic: this.model.diastolic,
            heartrate: this.model.heartrate,
            createdOn: null
        };
        this.bloodPressureService.saveBloodPressure(data)
            .subscribe(r => {
                this.showAddBloodPressurePanel = false;
                this.showBloodPressure();
            });
    }

    ngOnInit() {
      this.bloodPressureService.getBloodPressureCount()
        .subscribe((data: number) => this.bloodPressureCount = data);
      this.dataSource = new BloodPressureDatasource (this.bloodPressureService);
      this.dataSource.loadBloodPressures(0, 10);
    }

    ngAfterViewInit() {
      this.paginator.page
          .pipe(
              tap(() => this.showBloodPressure())
          )
          .subscribe();
    }
}
