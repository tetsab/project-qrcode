import chalk from 'chalk';

const promptQrCode = [
    {
        name: 'link',
        description: chalk.yellow("Enter the link to generate the QR code"),
    },
    {
        name: 'type',
        description: chalk.yellow(
            "Select the type of QR code (1- NORMAL or 2- CONSOLE)"
        ),
        pattern: /^[1-2]+$/,    
        message: chalk.red.italic("Please enter between 1 and 2"),
        required: true
    }
];

export default promptQrCode;