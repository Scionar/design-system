const bem = (block, ...args) => {
  const classes = [];

  const addString = stringValue => {
    // If string can be split, add those separately
    if (stringValue.trim().split(' ').length > 1) {
      stringValue
        .trim()
        .split(' ')
        .forEach(splitValue => {
          classes.push(`${block}--${splitValue}`);
        });
    } else {
      classes.push(`${block}--${stringValue}`);
    }
  };

  if (!block || typeof block !== 'string') {
    throw new Error('Block class name should be a string');
  }
  classes.push(block);

  args.forEach(value => {
    if (!value) return;

    if (typeof value === 'string') {
      addString(value);
    }

    if (Array.isArray(value)) {
      value.forEach(arrayValue => {
        if (!arrayValue) return; // Do not add falsy values
        addString(arrayValue);
      });
    }
  });

  return classes.join(' ');
};

export default bem;
