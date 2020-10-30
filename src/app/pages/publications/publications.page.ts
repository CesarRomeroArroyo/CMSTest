import { Component, OnDestroy, OnInit } from '@angular/core';

import { Widget } from '../../core/models/widget.model';
import { WidgetTypeEnum } from 'src/app/core/enums/widget-type.enum';
import { ReactiveService } from '../../core/services/reactive.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.page.html',
  styleUrls: ['./publications.page.scss']
})
export class PublicationsComponent implements OnInit, OnDestroy {

  public components: Widget[] = [];
  public user = 'Cesar Romero Arroyo';

  constructor(
    private reactive: ReactiveService
  ) { }

  ngOnInit(): void {
    this.reactive.getObservable().subscribe((data: any) => {
      if (data.widgets) {
        const dataW = data.widgets;
        this.components = dataW;
      }
    });
  }

  ngOnDestroy(): void {
    this.reactive.closeObservable();
  }

  get validate(): boolean {
    return this.components.length > 0 ? false : true;
  }

  public validFile(component: Widget): boolean {
    return component.type === WidgetTypeEnum.Image.toString() ? true : false;
  }
  public validText(component: Widget): boolean {
    return component.type === WidgetTypeEnum.Text.toString() ? true : false;
  }
  public validHello(component: Widget): boolean {
    return component.type === WidgetTypeEnum.Hello.toString() ? true : false;
  }

  public removeWidget(comp: Widget): void {
    this.components = this.components.filter((c) => {
      return c.name !== comp.name;
    });
    this.reactive.setData({ widgets: this.components });
  }

  public handleUpload(event, component): void {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      component.value = reader.result;
    };
  }

  public showRender(): void {
    this.components.length > 0 ? this.reactive.setData({ renderModal: true }) : null;
  }

  public showModalWidget(): void {
    this.reactive.setData({ widgetModal: true });
  }

}
