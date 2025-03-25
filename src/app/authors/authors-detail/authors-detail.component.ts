import {Component, EventEmitter, Input, Output} from "@angular/core";
import { Author } from "../../authors.module"
@Component({
  selector: 'authors-detail',
  templateUrl: 'authors-detail.component.html',
})
export class AuthorsDetailComponent {
  @Input() author! : Author;
  @Output() select = new EventEmitter<Author>();
  @Output() deleted = new EventEmitter<number>();
}
