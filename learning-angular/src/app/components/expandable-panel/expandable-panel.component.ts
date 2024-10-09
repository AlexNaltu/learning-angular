import { Component, EventEmitter, output, Output, signal } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-expandable-panel',
  standalone: true,
  imports: [],
  templateUrl: './expandable-panel.component.html',
  styleUrl: './expandable-panel.component.css',
  outputs: ['new-closed-panel'],
  host: {
    role: 'expandable-panel',
    '[class.active]': 'isActive()',
  },
})
export class ExpandablePanelComponent {
  value: number = 0;
  isActive = signal(false);
  isDisabled: boolean = false;

  @Output('new-closed-panel') closePanel = new EventEmitter<number>();

  onClosePanel() {
    this.closePanel.emit(7);
  }

  @Output() Thumbdotted = new EventEmitter<{
    pointerX: number;
    pointerY: number;
  }>();

  onThumbdotted() {
    this.Thumbdotted.emit({
      pointerX: 7,
      pointerY: 14,
    });
  }

  savePanelState() {
    console.log('Panel state saved');
  }

  nameChange = output<string>({ alias: 'NewName' });

  onNameChange(newName: string) {
    this.nameChange.emit(newName);
  }
}
