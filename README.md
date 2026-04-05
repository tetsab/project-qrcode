# Study Tools CLI

A simple command-line interface (CLI) project for learning purposes, with two main functionalities: generating QR Codes and creating random passwords.

---

## Technologies

- Node.js
- prompt
- chalk
- qrcode-terminal

---

## Project Structure
project-root/
│
├─ prompts/
│ ├─ prompt-main.js # Main prompt to select the tool
│ └─ prompt-schema-qrcode.js
│
├─ services/
│ ├─ qr-code/
│ │ ├─ create.js
│ │ └─ handle.js
│ │
│ ├─ password/
│ │ ├─ create.js
│ │ └─ handle.js
│
├─ utils/
│ └─ permitted-characters.js
│
└─ index.js


---

## How to Use

1. Clone the repository and navigate to the project folder:

```bash
git clone <repo-url>
cd project-root
```

2. Install dependencies:
```bash
npm install
````

3. Configure environment variables for password generation (optional):
```bash
# Example .env
PASSWORD_LENGTH=12
UPPERCASE_LETTERS=true
LOWERCASE_LETTERS=true
NUMBERS=true
SPECIAL_CHARACTERS=true
````

4. Run the project:
```bash
npm run start
````

Follow the prompt:
1 - Generate QR Code
2 - Create Random Password

QR Code Generation
Enter the link you want to encode

Select type:
1 - Normal
2 - Console (QR Code displayed directly in terminal)



