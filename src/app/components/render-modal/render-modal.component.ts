import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Widget } from 'src/app/core/models/widget.model';
import { ReactiveService } from 'src/app/core/services/reactive.service';
import { WidgetTypeEnum } from '../../core/enums/widget-type.enum';

@Component({
  selector: 'app-render-modal',
  templateUrl: './render-modal.component.html',
  styleUrls: ['./render-modal.component.scss']
})
export class RenderModalComponent implements OnInit {
  show = false;
  components: Widget[] = [];
  constructor(
    private reactive: ReactiveService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.reactive.getObservable().subscribe((data) => {
      this.show = data['renderModal'];
      if(data['widgets']) {
        this.components = data['widgets'];
      }
    });
  }


  closeModal(){
    this.reactive.setData({renderModal: false});
  }

}
