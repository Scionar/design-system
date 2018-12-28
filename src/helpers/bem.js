const bem = (block, ...args) => {
  const classes = [];

  if (!block || typeof block !== 'string') {
    throw new Error('Block class name should be a string');
  }
  classes.push(block);

  args.forEach(value => {
    if (!value || typeof value !== 'string') return;

    // If string can be split, add those separately
    if (value.trim().split(' ').length > 1) {
      value
        .trim()
        .split(' ')
        .forEach(splitValue => {
          classes.push(`${block}--${splitValue}`);
        });
    } else {
      classes.push(`${block}--${value}`);
    }
  });

  return classes.join(' ');
};

export default bem;
