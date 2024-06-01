import { ProductsService } from './../Services/products.service';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarBlankComponent } from '../Components/navbar-blank/navbar-blank.component';
import { FooterComponent } from '../Components/footer/footer.component';
import { NavbarAuthComponent } from '../Components/navbar-auth/navbar-auth.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../Services/auth.service';
import { ProductDetailsComponent } from '../Components/product-details/product-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarBlankComponent,
    FooterComponent,
    NavbarAuthComponent,
    HttpClientModule,
    ProductDetailsComponent,
  ],
  providers: [AuthService, ProductsService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'e-commerce';
}
