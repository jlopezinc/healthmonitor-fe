import { Component } from '@angular/core';

import { BloodPressure, BloodPressureService } from './blood-pressure.service';

@Component({
    selector: 'app-blood-pressure',
    templateUrl: './blood-pressure.component.html',
    providers: [ BloodPressureService ],
    styles: ['.error {color: red;}']
  })
export class BloodPressureComponent {
    displayedColumns=['date', 'systolic', 'diastolic', 'heartrate']
    
    bloodPressures: BloodPressure[];
    model: BloodPressure = new BloodPressure();
    showAddBloodPressurePanel = false;

    constructor(private bloodPressureService: BloodPressureService) {
        this.bloodPressures = [];
    };

    showBloodPressure(){
        this.bloodPressureService.getBloodPressure()
            .subscribe((data: BloodPressure[]) => this.bloodPressures = data)
    }

    toogleBloodPressure(){
        this.showAddBloodPressurePanel = !this.showAddBloodPressurePanel;
    }

    saveBloodPressure(){
        let data : BloodPressure = {
            systolic: this.model.systolic,
            diastolic: this.model.diastolic,
            heartrate: this.model.heartrate,
            createdOn: null
        }
        this.bloodPressureService.saveBloodPressure(data)
            .subscribe(r => this.showBloodPressure);
    }
}