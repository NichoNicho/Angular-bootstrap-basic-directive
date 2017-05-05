import { BasicDirectivesPage } from './app.po';

describe('basic-directives App', () => {
  let page: BasicDirectivesPage;

  beforeEach(() => {
    page = new BasicDirectivesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
