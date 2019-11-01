import { Component } from '@angular/core';

import { BloodPressure, BloodPressureService } from './blood-pressure.service';

@Component({
    selector: 'app-blood-pressure',
    templateUrl: './blood-pressure.component.html',
    providers: [ BloodPressureService ],
    styles: ['.error {color: red;}']
  })
export class BloodPressureComponent {
    uuidInScope='dsadas';
    displayedColumns=['date', 'systolic', 'diastolic', 'heartrate']
    
    bloodPressures: BloodPressure[];

    constructor(private bloodPressureService: BloodPressureService) {
        this.bloodPressures = [];
    };

    showBloodPressure(){
        this.bloodPressureService.getBloodPressure(this.uuidInScope)
            .subscribe((data: BloodPressure[]) => this.bloodPressures = data)
    }
}