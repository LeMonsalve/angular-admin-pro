import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {RouterLinkWithHref} from "@angular/router";



@NgModule({
	declarations: [
		BreadcrumbsComponent,
		SidebarComponent,
		HeaderComponent,
    PageNotFoundComponent
	],
  exports: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    PageNotFoundComponent
  ],
	imports: [
		CommonModule,
		RouterLinkWithHref
	]
})
export class SharedModule { }
