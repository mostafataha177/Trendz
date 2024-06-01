import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../Services/products.service';
import { CommonModule } from '@angular/common';
import { CutTextPipe } from '../../Pipes/cut-text.pipe';
import { Router } from '@angular/router';
import { range, interval, timer, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CutTextPipe],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private _ProductsService: ProductsService,
    private _Router: Router
  ) {
    // let range$ = range(0, 5);
    // let interval$ = setInterval(() => {
    //   range$.subscribe({
    //     next: (data) => {
    //       console.log(data);
    //     },
    //     error: (error) => {
    //       console.log(error);
    //     },
    //     complete: () => {
    //       console.log('--new Interval--');
    //     },
    //   });
    // }, 3000);
    // clearInterval(interval$);
    //Task 1
    let counter = 0;
    let observer$ = new Observable((observer) => {
      observer.next(counter++);
    });
    let intervalId = setInterval(() => {
      if (counter <= 5) {
        observer$.subscribe({
          next: (data) => {
            console.log(data);
          },
          error: (err) => {
            console.log(err);
          },
          complete: () => {
            console.log('complete');
          },
        });
      } else {
        counter = 0;
      }
    }, 1000);

    //Task 2
    let interval2 = setInterval(() => {
      let int$ = range(0, 3);

      int$.subscribe({
        next: (data) => {
          console.log('Hello World');
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {
          console.log('done');
        },
      });
    }, 5000);
    // clearInterval(interval2);
  }
  products: any;

  ngOnInit(): void {
    this._ProductsService.getProducts().subscribe({
      next: (response) => {
        this.products = response.data.map((product: any) => ({
          ...product,
          heart: false, // Add a heart property to each product
        }));
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  hadleProductDetails(id: any) {
    this._Router.navigate([`products/${id}`]);
  }
  toggleHeart(product: any) {
    product.heart = !product.heart; // Toggle the heart property of the specific product
  }
}
