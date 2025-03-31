import {TabPanelComponent} from "./tab-panel.component";
import {Component, ContentChildren, EventEmitter, Input, OnInit, Output, QueryList} from "@angular/core";

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
})
export class TabGroupComponent implements OnInit {
  tabPanelList: TabPanelComponent[] = [];

  @Input() tabActiveIndex = 0;
  @Output() tabActiveChange = new EventEmitter<number>();
  @ContentChildren(TabPanelComponent) tabs!: QueryList<TabPanelComponent>;

  ngAfterContentInit() {
    this.tabs.changes.subscribe(console.log)
  }
  constructor() {}

  ngOnInit() {}

  selectItem(idx: number) {
    this.tabActiveIndex = idx;
    this.tabActiveChange.emit(idx);
  }

  addTabPanel(tab: TabPanelComponent) {
    this.tabPanelList.push(tab);
  }
  removeTabPanel(tab: TabPanelComponent) {
    let index = -1;
    const tabPanelList: TabPanelComponent[] = [];
    this.tabPanelList.forEach((item, idx) => {
      if (tab === item) {
        index = idx;
        return;
      }
      tabPanelList.push(item);
    });
    this.tabPanelList = tabPanelList;
    if (index !== -1) {
      this.selectItem(0);
    }
  }
}
