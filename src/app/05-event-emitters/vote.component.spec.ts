import { VoteComponent } from './vote.component';

xdescribe('VoteComponent', () => {
  let component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should raise voteChanged event when upvoted', () => {
    // Arrange
    let totalVotes = null;
    component.voteChanged.subscribe(newTotalVotes => totalVotes = newTotalVotes);

    // Act
    component.upVote();

    // Assert
    expect(totalVotes).toBe(component.totalVotes);
  });
});
