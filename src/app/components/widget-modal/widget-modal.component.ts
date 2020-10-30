import { Component, OnInit } from '@angular/core';

import { WidgetTypeEnum } from 'src/app/core/enums/widget-type.enum';
import { Widget } from 'src/app/core/models/widget.model';
import { ReactiveService } from '../../core/services/reactive.service';

@Component({
  selector: 'app-widget-modal',
  templateUrl: './widget-modal.component.html',
  styleUrls: ['./widget-modal.component.scss']
})
export class WidgetModalComponent implements OnInit {

  public show = false;
  public widgets: Widget[] = [];

  constructor(
    private reactive: ReactiveService
  ) { }

  ngOnInit(): void {
    this.reactive.getObservable().subscribe((data) => {
      this.show = data.widgetModal;
      if (data.widgets) {
        this.widgets = data.widgets;
      }
    });
  }

  public closeModal(): void  {
    this.reactive.setData({ widgetModal: false });
  }

  public addWidget(type: number): void  {
    const widget: Widget = new Widget();
    switch (type) {
      case WidgetTypeEnum.Image:
        widget.type = WidgetTypeEnum.Image.toString();
        widget.name = 'component_' + this.widgets.length;
        widget.value = '';
        this.widgets.push(widget);
        break;
      case WidgetTypeEnum.Text:
        widget.type = WidgetTypeEnum.Text.toString();
        widget.name = 'component_' + this.widgets.length;
        widget.value = '';
        this.widgets.push(widget);
        break;
      case WidgetTypeEnum.Hello:
        widget.type = WidgetTypeEnum.Hello.toString();
        widget.name = 'component_' + this.widgets.length;
        widget.value = '';
        this.widgets.push(widget);
        break;
    }
    this.reactive.setData({ widgets: this.widgets });
  }

}
