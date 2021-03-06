const { defaultRegister } = require('../client');
const { default: getSummary, getContentType } = require('./summary');

jest.mock('../client', () => ({
  defaultRegister: {
    metrics: jest.fn(() => 'metrics'),
    contentType: 'application/test',
  },
}));

describe('getSummary', () => {
  let summary;

  beforeEach(() => {
    summary = getSummary();
  });

  it('should invoke metrics on the default register', () => {
    expect(defaultRegister.metrics).toHaveBeenCalled();
  });

  it('should return metrics from the default register', () => {
    expect(summary).toEqual('metrics');
  });
});

describe('getContentType', () => {
  let contentType;

  beforeEach(() => {
    contentType = getContentType();
  });

  it('should return content type from the default register', () => {
    expect(contentType).toEqual('application/test');
  });
});
