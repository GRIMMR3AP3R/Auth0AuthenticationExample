import { Auth0AuthenticationExamplePage } from './app.po';

describe('auth0-authentication-example App', () => {
  let page: Auth0AuthenticationExamplePage;

  beforeEach(() => {
    page = new Auth0AuthenticationExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
