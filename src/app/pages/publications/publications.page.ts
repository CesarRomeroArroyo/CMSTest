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
  components: Widget[] = [];
  user = 'Cesar Romero Arroyo';
  constructor(
    private reactive: ReactiveService
  ) { }

  ngOnInit(): void {
    this.reactive.getObservable().subscribe((data) => {
      if(data['widgets']) {
        this.components = data['widgets'];
      }
    });
  }

  ngOnDestroy(): void {
    this.reactive.closeObservable();
  }

  removeWidget(comp: Widget){
    this.components = this.components.filter((c) => {
      return c.name !== comp.name;
    });
    this.reactive.setData({widgets: this.components});
  }

  public handleUpload(event, component) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        console.log(reader.result);
        component.value = reader.result;
    };
  }

  showRender(){
    this.reactive.setData({renderModal: true});
    console.log(this.components);
  }

  showModalWidget() {
    this.reactive.setData({widgetModal: true});
  }

}
