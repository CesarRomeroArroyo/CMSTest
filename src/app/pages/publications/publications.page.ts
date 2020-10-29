import { Component, OnInit } from '@angular/core';
import { Widget } from '../../core/models/widget.model';
import { WidgetTypeEnum } from 'src/app/core/enums/widget-type.enum';
@Component({
  selector: 'app-publications',
  templateUrl: './publications.page.html',
  styleUrls: ['./publications.page.scss']
})
export class PublicationsComponent implements OnInit {
  components: Widget[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  addWidget(type){
    let widget: Widget =  new Widget();
    switch (type) {
      case WidgetTypeEnum.Image:
        widget.type = WidgetTypeEnum.Image.toString();
        widget.name = 'component_' + this.components.length;
        widget.value = '';
        this.components.push(widget);
        break;
      case WidgetTypeEnum.Text:
        widget.type = WidgetTypeEnum.Text.toString();
        widget.name = 'component_' + this.components.length;
        widget.value = '';
        this.components.push(widget);
        break;
      case WidgetTypeEnum.Hello:
        widget.type = WidgetTypeEnum.Hello.toString();
        widget.name = 'component_' + this.components.length;
        widget.value = '';
        this.components.push(widget);
        break;
    }
  }

  removeWidget(comp: Widget){
    this.components = this.components.filter((c) => {
      return c.name !== comp.name;
    });
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

  }

  showModalWidget() {
    
  }

}
