import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  panelOpenState: boolean = false;
  selectedItem: string = '';
  isExpanded: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick(selected : string){
    this.selectedItem = selected
  }

  regMerchants(){
    console.log('hi');
    this.router.navigate(['/regMerchants']);
  }

}
