import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'sign-up-form',
  standalone: true,
  template: `<button type="submit" [disabled]="formIsInvalid">Sign Up</button>
    <form>
      <input type="text" name="name" required />
    </form> `,
})
export class SignUpFormComponent {
  formIsInvalid = true;

  @Input() name: string = '';

  ngOnChanges(changes: SimpleChanges) {
    for (const inputName in changes) {
      const inputValues = changes[inputName];
      console.log(`Previous ${inputName} == ${inputValues.previousValue}`);
      console.log(`Current ${inputName} == ${inputValues.currentValue}`);
      console.log(`Is first ${inputName} == ${inputValues.firstChange}`);
    }
  }
}
