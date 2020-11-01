import { compute } from './compute';

fdescribe('compute', () => {
  it('should return 0 if input is negative', () => {
    const result = compute(-1);

    expect(result).toBe(0);
  });

  it('should increment input if it is positive', () => {
    const result = compute(1);

    expect(result).toBe(2);
  });
});
