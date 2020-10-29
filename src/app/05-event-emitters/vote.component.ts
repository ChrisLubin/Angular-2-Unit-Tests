
import { EventEmitter } from '@angular/core';

export class VoteComponent {
  public totalVotes = 0;
  public voteChanged = new EventEmitter<number>();

  upVote(): void {
    this.totalVotes++;
    this.voteChanged.emit(this.totalVotes);
  }
}
