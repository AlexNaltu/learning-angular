import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SettingsProfileComponent } from '../profile/settings-profile.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css',
})
export class SettingsComponent {}
