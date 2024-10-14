import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listbox',
  standalone: true,
  imports: [],
  templateUrl: './listbox.component.html',
  styleUrl: './listbox.component.css',
  host: {
    '(keydown)': 'handleKey($event)',
  },
})
export class ListboxComponent {
  @Input() value!: string;
  handleKey(event: KeyboardEvent) {}
}

// these components are typescript classes, we can extend them
// after you extend a class , it inherits all the properties, url, templates etc
//if you want to override an lifecycle hook, you need to use super method
@Component({
  selector: 'app-listbox-child',
  standalone: true,
  imports: [],
  templateUrl: './listbox.component.html',
  styleUrl: './listbox.component.css',
  host: {
    '(click)': 'focusActiveOption()',
  },
})
export class ListboxChildComponent extends ListboxComponent {
  @Input() disabled = true;
  focusActiveOption() {
    console.log('focusActiveOption called');
  }
}
