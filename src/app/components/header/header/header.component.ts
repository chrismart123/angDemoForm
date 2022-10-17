import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
	providedIn: 'root'
})
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(	private router: Router,) { }

  ngOnInit(): void {
  }

  isActive(url: any) {
		let routeUrl = this.router.url;
		let act = '';
		if (url === routeUrl) { act = 'active'; }
		return act;
	}

}
