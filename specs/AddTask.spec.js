const byText = text => {
  // https://webdriver.io/docs/selectors.html
  if (driver.isAndroid) {
    return `android=new UiSelector().textMatches("(?i)${text}")`;
  } else if (driver.isIOS) {
    return `-ios predicate string:name LIKE[bc] '${text}'`;
  }
  return `=${text}`;
};

const byAccessibilityLabel = label => {
  return driver.isMobile ? `~${label}` : `[aria-label="${label}"]`;
};

it('can add task', () => {
  const newTask = byAccessibilityLabel('task card');

  if (!driver.isMobile) {
    driver.navigateTo('http://127.0.0.1:19006/');
  }

  expect($(newTask).isExisting()).toBeFalsy();
  $(byAccessibilityLabel('add task')).click();
  $(newTask).waitForExist();
});
