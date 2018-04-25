import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {trigger,state,style,animate,transition,keyframes,query,stagger} from '@angular/animations';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

  animations: [
	trigger('goals', [
		transition('*=>*',[

			query(':enter', style({ opacity: '0' }), {optional:true}),

		    query(':enter', stagger('300ms', [
	    		animate('.6s ease-in', keyframes([
			        style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
			        style({opacity: 0.5, transform: 'translateY(35px)', offset: 0.3}),
			        style({opacity: 1, transform: 'translateY(0)', offset: 1.0})
			      ]))
		    	]), {optional:true}),

		    query(':leave', stagger('300ms', [
	    		animate('.6s ease-in', keyframes([
			        style({opacity: 1, transform: 'translateY(0)', offset: 0}),
			        style({opacity: 0.5, transform: 'translateY(35px)', offset: 0.3}),
			        style({opacity: 0, transform: 'translateY(-75%)', offset: 1.0})
			      ]))
		    	]), {optional:true})

			])
	    
	    transition('inactive => active', animate('100ms ease-in')),
	    transition('active => inactive', animate('100ms ease-out'))
	  ])
	]
})

@NgModule({
  imports: [
  	NgbModule,
  	FormsModule
  ]
})

export class HomeComponent implements OnInit {

	itemCount: number;
	btnText: string = "Add Item";
	goalText: string = "";
	goals = ['Angular', 'Bootstrap', 'Firebase'];

  constructor() { }

  ngOnInit() {
  	this.itemCount = this.goals.length;
  }

  addItem(){
  	this.goals.push(this.goalText);
  	this.goalText="";
  	this.itemCount = this.goals.length;
  }
  removeItem(i){
  	this.goals.splice(i, 1);
  	this.itemCount = this.goals.length;
  }
}
