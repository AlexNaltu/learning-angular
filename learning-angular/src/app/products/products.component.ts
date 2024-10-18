import {
  Component,
  computed,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import _ from 'lodash';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  // Writable signals
  count: WritableSignal<number> = signal(0);

  // Computed signals that depends on writable signals, it does not update if its not accessed and it is memoized until the writable signal changes
  doubleCount: Signal<number> = computed(() => this.count() * 2);

  updateCount() {
    this.count.update((value) => value + 1);
    console.log(
      'Count updated' + ' ' + this.count(),
      +' ' + this.doubleCount()
    );
  }

  // Conditional computed signal that depends on a writable signal
  showCount = signal(true);
  conditionalCount = computed(() => {
    if (this.showCount()) {
      return `the count is ${this.count()}`;
    } else {
      return 'the count is hidden';
    }
  });
}
