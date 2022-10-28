import { Component, Input, OnInit, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None // this means that any styles applied to this component in its css file will be applied globally to all components; the default would be .Emulated instead of .None
  // ViewEncapsulation.Emulated is the default which would mean styles in the corresponding css file would only apply to that specific component
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  @Input('srvElement') element: {type: string, name: string, content: string}; //@Input decorator now exposes this component's properties to it's parents
  // inside the parenthesis we have put an alias so we use that name instead to reference this property

  @Input() name: string;

  @ViewChild('heading', {static: true}) header: ElementRef;

  constructor() {
    console.log('constructor called!');
   }

  ngOnChanges(changes: SimpleChanges){ // gets called after a bound input property changes; in this case we changed 
                                        // the name input property in this component using the onChangeFirst method from the app component,
                                        // which gets called when we click the Change first Element button
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called!');
  }

  ngDoCheck(){ // gets called whenever Angular checks for any changes; lots of things (events, promises) can trigger this one
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit(){ // Called after content (ng-content) has been projected into view
    console.log('ngAfterContentInit called!');
  }

  ngAfterContentChecked(){ // Called every time the projected content has been checked
    console.log('ngAfterContentInit called!');
  }

  ngAfterViewInit(){ // Called after the component’s view (and child views) has been initialized
    console.log('ngAfterViewInit called!');
    console.log('Text Content: ' + this.header.nativeElement.textContent); // before this hook runs there would be no text content to log
  }

  ngAfterViewChecked(){ // Called every time the view (and child views) have been checked
    console.log('ngAfteViewChecked called!');
  }

  ngOnDestroy(){ // Called once the component is about to be destroyed
    console.log('ngOnDestroy called');
  }
}
