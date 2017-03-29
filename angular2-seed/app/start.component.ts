import  {Component} from 'angular2/core'

@Component({
  selector: 'start',
  template: `
  <span
    class="glyphicon"
    [class.glyphicon-star]="isSelected"
    [class.glyphicon-star-empty]="!isSelected"
    (click)="onClick()"
    aria-hidden="true">
  </span>`,
})
export class StartComponent {
  isSelected = false

  onClick() {
    this.isSelected = !this.isSelected
  }
}
