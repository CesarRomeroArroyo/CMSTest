import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PublicationsPageRoutingModule } from './publications-routing.module';

import { PublicationsComponent } from './publications.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PublicationsPageRoutingModule
  ],
  declarations: [PublicationsComponent]
})
export class PublicationsPageModule {}
