import {Component} from "@angular/core";
import {Author, authors} from "../authors.module"
@Component({
    selector: 'authors-list',
    templateUrl: 'authors-list.component.html',
})
export class AuthorsListComponent {
  authors = authors;
  currentAuthor = authors[0];
  onSelect(selectedAuthor:Author) {
    this.currentAuthor = selectedAuthor;
  }
  onDelete(id:number) {
    this.authors = this.authors.filter(author=>author.id !== id);
    if(this.currentAuthor.id === id){
      this.currentAuthor = this.authors[0];
    }
  }
}
