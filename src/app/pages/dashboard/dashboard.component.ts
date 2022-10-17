import { Component, OnInit } from '@angular/core';
import { ConnectableObservable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  formObject:any = {};
  trashDisabled:boolean = false;
  showAnsTypeBoxText:boolean = false;
  showAnsTypeBoxCheck:boolean = false;
  answerType:any[] = [];
  choices:any[] = [];
  category:any[] = [];
  displayQuestion:boolean = false;

  constructor() {
    this.formObject={
      category:'cat',
      title:'',
      description: '',
      question:'',
      qsubtitle:'',
      answerType:'select',
      radio:false,
      answerText:'',
      minLength:'',
      maxLength:'',
    }

    this.choices = [ {
        checkbox:false,
        choiceInput:''
    }]

    this.category =[
      {id:0,value:'cat', name:'Select Category'},
      {id:1,value:'cata', name:'Category A'},
      {id:2,value:'catb', name:'Category B'},
      {id:3,value:'catc', name:'Category C'}
    ]

    this.answerType =[
      {id:0,value:'select', name:'Select Answer Type'},
      {id:1,value:'textbox', name:'Textbox'},
      {id:2,value:'checkbox', name:'Checkbox'}
    ]

      
   }

  ngOnInit(): void {
    this.trashDisabled = this.choices.length === 1?true:false;
  }

  duplicateChoice(){
    console.log('dupicateChoice');
    let choiceAdd = {
        checkbox:false,
        choiceInput:''
    }
    this.choices.push(choiceAdd);
    this.trashDisabled = this.choices.length === 1?true:false;
  }

  removeChoice(index:any){
    console.log('dupicateChoice',index);
    this.choices.splice(index, 1);
    this.trashDisabled = this.choices.length === 1?true:false;
    console.log('trashDisabled',this.trashDisabled)
  }

  selectAnswerType(){
    console.log("selectAnswerttype", this.formObject.answerType)
    if(this.formObject.answerType === 'textbox'){
      this.showAnsTypeBoxText = true;
      this.showAnsTypeBoxCheck = false;
    }else if(this.formObject.answerType === 'checkbox'){
      this.showAnsTypeBoxText = false;
      this.showAnsTypeBoxCheck = true;
    }
    else{
      this.showAnsTypeBoxText = false;
      this.showAnsTypeBoxCheck = false;
    }
  }

  showQuestion(){
    this.displayQuestion = true;
  }

}
