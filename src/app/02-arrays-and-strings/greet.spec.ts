import { greet } from './greet';

describe('greet', () => {
  it('should include the name in the message', () => {
    // Arrage
    let message;

    // Act
    message = greet('Chris');

    // Assert
    expect(message).toContain('Chris');
  })
});
