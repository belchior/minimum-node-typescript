
import { resolve } from './server';

describe('server', () => {
  it('should works', () => {
    const receivedPath = resolve('path/to', 'file.ts');
    expect(receivedPath).toMatch(/.*path\/to\/file\.ts/);
  });
});
