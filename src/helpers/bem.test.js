import bem from './bem';

describe('bem', () => {
  it('throws error if block parameter is not provided', () => {
    expect(() => bem()).toThrow();
  });

  it('returns string parameter if only one defined', () => {
    expect(bem('button')).toEqual('button');
  });

  it('returns string with parameters separated with one space. From second parameter it is added as modifier.', () => {
    expect(bem('button', 'neutral', 'disabled')).toEqual('button button--neutral button--disabled');
  });

  it('notices only string parameters', () => {
    expect(bem('button', true, false, undefined, 'disabled')).toEqual('button button--disabled');
  });

  it('splits parameters with spaces', () => {
    expect(bem('button', 'default disabled')).toEqual('button button--default button--disabled');
  });
})
