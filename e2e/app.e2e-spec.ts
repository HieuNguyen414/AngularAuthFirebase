import { Angular4FirebaseAuthPage } from './app.po';

describe('angular4-firebase-auth App', () => {
  let page: Angular4FirebaseAuthPage;

  beforeEach(() => {
    page = new Angular4FirebaseAuthPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
