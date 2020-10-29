import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PublicationsPageRoutingModule } from './publications-routing.module';

import { PublicationsComponent } from './publications.page';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PublicationsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PublicationsComponent]
})
export class PublicationsPageModule {}
