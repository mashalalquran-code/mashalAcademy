import { Component, input } from '@angular/core';

@Component({
  selector: 'app-spk-task-discussion',
  imports: [],
  templateUrl: './spk-task-discussion.html',
  styleUrl: './spk-task-discussion.scss'
})
export class SpkTaskDiscussion {
    taskDiscussion = input<any>({});
}


