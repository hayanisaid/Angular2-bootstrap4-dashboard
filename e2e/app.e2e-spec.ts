import { AdminDashbordPage } from './app.po';

describe('admin-dashbord App', function() {
  let page: AdminDashbordPage;

  beforeEach(() => {
    page = new AdminDashbordPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
