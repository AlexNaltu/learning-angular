import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'custom-header-card',
  standalone: true,
  imports: [],
  template: '<div><h1>{{ text }}</h1><button #save>Save</button></div>',
  styleUrl: './custom-header-card.component.css',
})
export class CustomHeaderCardComponent {
  text: string = 'Hello';
}

@Component({
  selector: 'custom-header',
  standalone: true,
  imports: [CustomHeaderCardComponent],
  template: `<custom-header-card>Hello</custom-header-card>`,
})
export class CustomHeaderComponent {
  @ViewChild(CustomHeaderCardComponent, { static: true })
  header!: CustomHeaderCardComponent;

  ngAfterViewInit() {
    console.log(this.header.text);
  }

  @ViewChild('save') saveButton!: ElementRef<HTMLButtonElement>;
}
