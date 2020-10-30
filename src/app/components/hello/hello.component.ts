import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  @Input() user = 'Cesar Romero Arroyo';
  @Input() background = 'var(--white)';
  currentDate = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
