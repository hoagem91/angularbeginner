import {Component, Input, OnChanges, OnInit, SimpleChanges} from "@angular/core";

@Component({
  selector: "progress-bar",
  template:`
  <div
    class="progress-bar-container"
    [style.backgroundColor]="backgroundColor"
  >
    <div class="progress" [style]="{backgroundColor:progressColor,width:progress+'%'}">
    </div>

  </div>
  `,
  styles: [`
    .progress-bar-container,
    .progress{
      height: 20px;
    }
    .progress-bar-container {
      width: 100%;
    }
  `]
})
export class ProgressBarComponent implements OnInit,OnChanges {
  @Input() set progress(value: number) {
    if(typeof value !== 'number') {
      const progress = Number(value);
      if(Number.isNaN(progress)) {
        this._progress = 0;
      }
      else{
        this._progress = progress;
      }
    }
    this._progress = value;
  };
  private _progress=0;
  get progress() {
    return this._progress;
  }
  @Input() backgroundColor = "#ccc";
  @Input('progress-color') progressColor = "tomato";
  constructor() {

  }
  ngOnInit() {
    console.log('onInit',{
      progress: this.progress,
      backgroundColor: this.backgroundColor,
      progressColor: this.progressColor,
    })
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('onChanges',{
      progress: this.progress,
      backgroundColor: this.backgroundColor,
      progressColor: this.progressColor,
    })
  }
}
