import { Routes } from '@angular/router';
import { HomeComponent } from '../Components/home/home.component';
import { CategoriesComponent } from '../Components/categories/categories.component';
import { BrandsComponent } from '../Components/brands/brands.component';
import { LoginComponent } from '../Components/login/login.component';
import { RegisterComponent } from '../Components/register/register.component';
import { CartComponent } from '../Components/cart/cart.component';
import { ProductsComponent } from '../Components/products/products.component';
import { NotFoundComponent } from '../Components/not-found/not-found.component';
import { AuthLayoutComponent } from '../layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from '../layouts/blank-layout/blank-layout.component';
import { authGuard } from '../guards/auth.guard';
import { ProductDetailsComponent } from '../Components/product-details/product-details.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent, title: 'Log In' },
      { path: 'register', component: RegisterComponent, title: 'Register' },
    ],
  },
  {
    path: '',
    component: BlankLayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full', title: 'Home' },
      { path: 'home', component: HomeComponent, title: 'Home' },
      {
        path: 'categories',
        component: CategoriesComponent,
        title: 'Categories',
      },
      { path: 'brands', component: BrandsComponent, title: 'Brands' },
      { path: 'cart', component: CartComponent, title: 'Cart' },
      { path: 'products', component: ProductsComponent, title: 'Products' },
      { path: 'products/:id', component: ProductDetailsComponent },
    ],
  },

  { path: '**', component: NotFoundComponent, title: 'Error' },
];
