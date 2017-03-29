import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'
import {StartComponent} from './start.component'

@Component({
    selector: 'my-app',
    template: `
        <start></start>
        <h1> {{title}}</h1>
        <input type="text" [(ngModel)]="title" />
        <courses></courses>
        <authors></authors>
        `,
    directives: [CoursesComponent, AuthorsComponent, StartComponent]
})
export class AppComponent {
  title = " Angular App"
}
