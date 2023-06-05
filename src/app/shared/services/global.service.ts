import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})

export class GlobalService {
    loader$: BehaviorSubject<boolean> = new BehaviorSubject(false);

    onLoader(): void {
        setTimeout(() => {
            this.loader$.next(true);
        }, 0);
    }

    offLoader(): void {
        this.loader$.next(false);
    }
}