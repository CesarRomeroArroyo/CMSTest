import { Component, OnInit } from '@angular/core';

import { Widget } from 'src/app/core/models/widget.model';
import { WidgetTypeEnum } from 'src/app/core/enums/widget-type.enum';
import { ReactiveService } from 'src/app/core/services/reactive.service';

@Component({
  selector: 'app-render-modal',
  templateUrl: './render-modal.component.html',
  styleUrls: ['./render-modal.component.scss']
})
export class RenderModalComponent implements OnInit {

  public show = false;
  public components: Widget[] = [];

  constructor(private reactive: ReactiveService) { }

  ngOnInit(): void {
    this.reactive.getObservable().subscribe((data) => {
      this.show = data.renderModal;
      if (data.widgets) {
        this.components = data.widgets;
      }
    });
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

  public validImg(img: string): boolean {
    return img.length > 0 ? true : false;
  }

  public closeModal(): void {
    this.reactive.setData({ renderModal: false });
  }

}
