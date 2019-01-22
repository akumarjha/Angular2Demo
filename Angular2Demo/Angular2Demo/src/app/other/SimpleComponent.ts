import { Input, Component,OnChanges,SimpleChanges, SimpleChange } from "@angular/core";
import { Console } from "@angular/core/src/console";

@Component({
    selector: 'simple',
    template: `You entered : {{simpleInput}}`
})

export class SimpleComponent implements OnChanges {
    @Input()
    simpleInput: string
    ngOnChanges(changes: SimpleChanges) {
        for (let propertyName in changes) {
            let change = changes[propertyName];
            let current = JSON.stringify(change.currentValue);
            let previous = JSON.stringify(change.previousValue);
            console.log("propertyName:=" + propertyName + "change:=" + change + "Current Value:=" + current+ "Previous Value:=" + previous);
        }
    }
}