import {forkJoin} from 'rxjs';
import {mergeMap} from 'rxjs/operators';

export function currentLimitingRequest() {
   forkJoin([1,2,3,4,5,6,7,8,9,10])
    .pipe(mergeMap((val: any) => val, 10))
    .subscribe(x => console.log(x))
}

currentLimitingRequest()
