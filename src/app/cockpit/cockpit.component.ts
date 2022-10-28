import { Component, EventEmitter, OnInit, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>(); // we have just turned these first two properties into events
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>(); // added the alias 'bpCreated' so this is how you must now reference the event from the outside
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef; // gives direct access to elements in our DOM in our template based on reference name serverContentInput
  // must put {static: true} if you plan on accessing the selected element inside of ngOnInit()
  // do not use view child to change elements in the DOM; there are better ways

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement){
    this.serverCreated.emit({ // emitting our created events from above and passing the data
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    })
  }

  onAddBlueprint(nameInput: HTMLInputElement){
    this.blueprintCreated.emit({ // emitting our created events from above and passing the data
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    })
  }
}
