import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customerService.service';


@Component({
    selector: 'app-relationship-income',
    templateUrl: './relationship-income.component.html',
    styleUrls: ['./relationship-income.component.scss']
})
export class RelationshipIncomeComponent implements OnInit {
    relationshipData: any = [];
    model: any = {};

    groupingLookupRef: any = [];
    incomeTypes: any = [];
    relationshipTotal: any = [];

    relationDataArray: any = [];
    relationRowData: any = [];
    relationTotalData: any = [];

    constructor(
        private cs: CustomerService
    ) { }

    ngOnInit(): void {
        this.getloadHeader();
        this.getloadPageModel();
    }

    getloadHeader() {
        this.cs.GetHeader().subscribe(
            (data) => {
                this.relationshipData = data;
                console.log('success', data)
            },
            (err) => {
                console.log('err', err)
            }
        )
    }

    getloadPageModel() {
        this.cs.GetHPageModel().subscribe(
            (data) => {
                this.model = data;
                console.log(data)
                this.groupingLookupRef = data.summary?.groupingLookupRef;
                this.incomeTypes = data.summary?.incomeTypes;
                this.relationshipTotal = data.summary?.relationshipTotal;
                this.relationDataArray = this.incomeTypes[0]?.groups;
                this.relationDataArray.sort((a: any, b: any) => a.groupLabel.localeCompare(b.groupLabel))

            },
            (err) => {
                console.log('err', err)
            }
        )
    }

    /** return specific revenue or roe on specific yr */
    checkPeriods(perArray: any, perString: any, results: string) {
        let returnValue:any;
        for (let i = 0; i < perArray.length; i++) {

            if (perArray[i].periodCode === perString) {
                if (perArray[i].results != '') {
                    if (results ==='revenue') {
                        if(perArray[i]?.results?.revenue){
                            returnValue  = this.numberWithCommas(perArray[i]?.results?.revenue);
                        }else{
                            returnValue = '-';
                        } 
                    } else if (results ==='roe') {
                        if(perArray[i].results?.roe){
                            returnValue = perArray[i].results?.roe;
                            returnValue = returnValue?.toFixed(2)+'%';
                        }
                        else{
                            returnValue = '-';
                        }
                      
                    } else{
                        returnValue = '-';
                    }
                } else {
                    returnValue = '-';
                }
            }

        }

        return returnValue;

    }



    numberWithCommas(x: any) {
        return  x?.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          });
    }

}
