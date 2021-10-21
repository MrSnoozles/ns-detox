describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have a label', async () => {
    await expect(element(by.label('myLabel'))).toBeVisible();
  });

  it('should habe a button', async () => {
    await element(by.id('myButton')).toBeVisible();
  });
});
