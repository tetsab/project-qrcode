import chalk from 'chalk';
const PromptSchemaMain = [
    {
        name: 'select',
        description: chalk.yellow.bold('Select a tool to run (1 - QRCODE or 2 - PASSWORD)'),
        pattern: /^[1-2]+$/,
        message: chalk.red('Please enter a valid number (1 or 2)'),
        required: true,
    },
];

export default PromptSchemaMain;