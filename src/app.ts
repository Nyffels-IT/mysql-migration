#! /usr/bin/env node

const args = process.argv.slice(2);
const action = args.find((a) => a.includes('--action='))?.replace('--action=', '');
console.log(args);
console.log(action);

switch (action) {
  case 'dump':
    throw Error("Not yet implemented");
  case 'restore':
    throw Error("Not yet implemented");
  default:
    throw Error('No valid action defined. Please use the --action flag to define a action! For more information consult the documentation.');
}
