import {Component, ContentChild, Input, OnDestroy, OnInit, TemplateRef, ViewChild} from "@angular/core";
import {TabGroupComponent} from "./tab-group.component";
import {TabPanelDirective} from "./tab.directive";

@Component({
  selector: 'app-tab-panel',
  template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `,
  styles: [''],
})
export class TabPanelComponent implements OnInit, OnDestroy {
  @Input() title!: string;
  @ViewChild(TemplateRef, { static: true }) implicitBody!: TemplateRef<unknown>;
  @ContentChild(TabPanelDirective, { static: true,read:TemplateRef }) explicitBody!: TemplateRef<unknown>;

  constructor(private tabGroup: TabGroupComponent) {}

  get panelBody():TemplateRef<unknown>{
    return this.explicitBody || this.implicitBody;
  }
  ngOnInit() {
    console.log(this.explicitBody);
    this.tabGroup.addTabPanel(this);
  }
  ngOnDestroy() {
    this.tabGroup.removeTabPanel(this);
  }
}
