import { HighlighterPipe } from "./highlighter.pipe";

describe('HighlighterPipe', () => {
  it('create an instance', () => {
    const pipe = new HighlighterPipe();
    expect(pipe).toBeTruthy();
  });
});