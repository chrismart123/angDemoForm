import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
    selector: 'app-entity-filter',
    templateUrl: './entity-filter.component.html',
    styleUrls: ['./entity-filter.component.scss']
})
export class EntityFilterComponent implements OnInit {
    @Input() inputData: any = {};
    model: any = {};
    constructor() { }

    ngOnInit(): void {
    }

    entityChange($event:any){
        alert($event.target.innerText)
    }

    ngOnChanges(changes: { [property: string]: SimpleChange }) {
		let modelData: SimpleChange = changes['inputData'];
        this.model = modelData.currentValue;
       
    }

   
}
