import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../generics/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  isLoading = false;
  constructor(private loadingService: LoadingService) { 
    this.loadingService.isLoading.subscribe(data => {
      this.isLoading = data;
    });
  }

  ngOnInit(): void {
  }

}
