import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-beans',
  templateUrl: './beans.component.html',
  styleUrls: ['./beans.component.css']
})
export class BeansComponent implements OnInit {

  beans: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('https://if899ldo5k.execute-api.us-east-1.amazonaws.com/prod/bean_products')
      .subscribe((data: any[]) => {
        this.beans = data;
      });
  }

}
