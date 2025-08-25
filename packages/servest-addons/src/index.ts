#!/usr/bin/env node
import { Command } from 'commander';
import packageJson from '../package.json';
import { add } from './command/add';
import { init } from './command/init';

// Handle graceful exit
process.on('SIGINT', () => process.exit(0));
process.on('SIGTERM', () => process.exit(0));

async function main() {
  const program = new Command()
    .name('add-servest')
    .description('Add optional backend features to your project')
    .version(packageJson.version || '1.0.0', '-v, --version', 'display the version number');

  // Register addon commands
  program.addCommand(init).addCommand(add);

  program.parse();
}

main();
