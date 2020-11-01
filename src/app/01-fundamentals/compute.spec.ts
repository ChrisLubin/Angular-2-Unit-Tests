import { compute } from './compute';

describe('compute', () => {
  it('should return 0 if input is negative', () => {
    // Arrage
    let result;

    // Act
    result = compute(-1);

    // Assert
    expect(result).toBe(0);
  });

  it('should increment input if it is positive', () => {
    // Arrage
    let result;

    // Act
    result = compute(1);

    // Assert
    expect(result).toBe(2);
  });
});
