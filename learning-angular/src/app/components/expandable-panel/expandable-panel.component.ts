import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-expandable-panel',
  standalone: true,
  imports: [],
  templateUrl: './expandable-panel.component.html',
  styleUrl: './expandable-panel.component.css',
  outputs: ['new-closed-panel'],
})
export class ExpandablePanelComponent {
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
}
