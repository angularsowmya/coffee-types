import { Component, OnInit } from '@angular/core';
import { CoffeeService } from '../coffee-service/coffee-service.service';
import {MatTableDataSource} from '@angular/material/table';
import { Coffee } from '../coffee-model/coffee-model';




@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.scss']
})

export class CoffeeComponent implements OnInit {
  displayedColumns: string[] = ['blend_name', 'origin', 'variety', 'notes','intensifier'];
  dataSource = new MatTableDataSource<Coffee>();

  constructor( private coffeeService: CoffeeService) { }

  ngOnInit() {
    this.coffeeService.getCoffeeTypes().subscribe({
      next:(data:any) =>{
        this.dataSource = data;
      },
      error:(err:Error) => {
        console.log(err.message)
      }
    });
  }

}
