
import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {Observable, BehaviorSubject, of} from 'rxjs';
import {catchError, finalize} from 'rxjs/operators';
import { BloodPressure, BloodPressureService } from './blood-pressure.service';

export class BloodPressureDatasource implements DataSource<BloodPressure> {

    private bloodPressureSubject = new BehaviorSubject<BloodPressure[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private bloodPressureService: BloodPressureService) {

    }

    loadBloodPressures(pageIndex: number, pageSize: number) {

        this.loadingSubject.next(true);

        this.bloodPressureService.getBloodPressure(pageIndex, pageSize).pipe(
                catchError(() => of([])),
                finalize(() => this.loadingSubject.next(false))
            )
            .subscribe(bp => this.bloodPressureSubject.next(bp));

    }

    connect(collectionViewer: CollectionViewer): Observable<BloodPressure[]> {
        console.log('Connecting data source');
        return this.bloodPressureSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.bloodPressureSubject.complete();
        this.loadingSubject.complete();
    }
}
