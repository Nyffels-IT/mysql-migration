#! /usr/bin/env node

const args = process.argv.slice(2);
const action = args.find((a) => a.includes('--action='))?.replace('--action=', '');
console.log(args);
console.log(action);

switch (action) {
  case 'dump':
    // TODO Dump to config action
    break;
  case 'restore':
    // TODO restore action
  default:
    throw Error('No valid action defined. Please use the --action flag to define a action! For more information consult the documentation.');
}
