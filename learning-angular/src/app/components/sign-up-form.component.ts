import { Component } from '@angular/core';

@Component({
  selector: 'sign-up-form',
  standalone: true,
  template: `<button type="submit" [disabled]="formIsInvalid">
    Sign Up
  </button> `,
})
export class SignUpFormComponent {
  formIsInvalid = true;
}
