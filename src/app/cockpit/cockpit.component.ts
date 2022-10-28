import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>(); // we have just turned these first two properties into events
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>(); // added the alias 'bpCreated' so this is how you must now reference the event from the outside
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(){
    this.serverCreated.emit({ // emitting our created events from above and passing the data
      serverName: this.newServerName,
      serverContent: this.newServerContent
    })
  }

  onAddBlueprint(){
    this.blueprintCreated.emit({ // emitting our created events from above and passing the data
      serverName: this.newServerName,
      serverContent: this.newServerContent
    })
  }
}
