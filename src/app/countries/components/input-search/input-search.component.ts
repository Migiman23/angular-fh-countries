import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styles: [
  ]
})
export class InputSearchComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter()
  @Output() onDebounce: EventEmitter<string> = new EventEmitter()
  @Input() placeholder: string = ''
  deBoucer: Subject<string> = new Subject();

  termino: string = ''
  constructor() { }

  ngOnInit(): void {
    this.deBoucer
    .pipe(debounceTime(300))
    .subscribe(value => {
      //console.log('debouncer', value);
      this.onDebounce.emit(value)
    })
  }

  buscar() {
    this.onEnter.emit(this.termino)
  }
  pressed() {
    //const value = event.target.value
    this.deBoucer.next(this.termino)
  }
}
