import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloComponent } from './hello/hello.component';
import { WidgetModalComponent } from './widget-modal/widget-modal.component';
import { RenderModalComponent } from './render-modal/render-modal.component';

@NgModule({
	declarations: [
        HelloComponent,
        WidgetModalComponent,
        RenderModalComponent
    ],
	imports: [
        CommonModule,
	],
	exports: [
        HelloComponent,
        WidgetModalComponent,
        RenderModalComponent
	]
})
export class ComponentsModule { }
