import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';

export interface PeriodicElement {
  merchantName: string;
  businessType: string;
  id: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {merchantName: "Vipul Srivatsav", businessType: "Proprietorship", id: 4478532},
  {merchantName: "Maria Scoutt", businessType: "Public limited", id: 8759587},
  {merchantName: "Jasmine McDough", businessType: "Partnership", id: 589675},
  {merchantName: "Brain Dean", businessType: "Proprietorship", id: 487789},
  {merchantName: "Melaine Walters", businessType: "Individual", id: 3369856},
];

@Component({
  selector: 'app-reg-merchants',
  templateUrl: './reg-merchants.component.html',
  styleUrls: ['./reg-merchants.component.scss']
})
export class RegMerchantsComponent implements OnInit {
  displayedColumns: string[] = ['select', 'merchantName','businessType','id','view'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);
  disableButton:boolean=false;
  constructor(private router: Router) { }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  onChange(e: any,row: any){
    console.log(row);
    if(e.checked){
      this.disableButton = true;
    }else{
      this.disableButton = false;
    }
  }

  onChangeAll(e: any){
    if(e.checked){
      this.disableButton = true;
    }else{
      this.disableButton = false;
    }
  }

  onRegMerchantsDetails(row: any){
    console.log(row);
    this.router.navigate(['/regMerchantsDetails']);
  }


  ngOnInit(): void {
  }

}
