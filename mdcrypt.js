#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { encryptText, decryptText } = require('./utils/crypto');

const args = process.argv.slice(2);
const command = args[0];
const inputPath = args[1];
const outFlagIndex = args.indexOf('--out');
const outPath = outFlagIndex > -1 ? args[outFlagIndex + 1] : null;
const passwordArgIndex = args.indexOf('--password');
const passwordFromArg = passwordArgIndex > -1 ? args[passwordArgIndex + 1] : null;

function showIntro() {
  console.log(`\n🔐 Hallo Welt,

ich bin MD-Crypter – der stille Wächter deiner Markdown-Geheimnisse.

Ich verschlüssele, was nicht jeder lesen soll,
und enthülle, was nur für deine Augen bestimmt ist.

Ob du Notizen schützt, Gedanken verbirgst oder Wissen sicherst –
ich bin bereit.

Sag mir nur dein Passwort... und ich schweige – bis du es mir wieder sagst.\n`);

  console.log(`▶️ Verwendung:
  node mdcrypt.js encrypt <eingabe.md> --out <ausgabe.mdc> [--password geheim]
  node mdcrypt.js decrypt <eingabe.mdc> --out <ausgabe.md> [--password geheim]\n`);
}

if (!command || !['encrypt', 'decrypt'].includes(command) || !inputPath || !outPath) {
  showIntro();
  process.exit(1);
}

function run(password) {
  const inputContent = fs.readFileSync(inputPath, 'utf-8');
  const outputContent = command === 'encrypt'
    ? encryptMarkdown(inputContent, password)
    : decryptMarkdown(inputContent, password);

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, outputContent);
  console.log(`✅ ${command === 'encrypt' ? 'Verschlüsselt' : 'Entschlüsselt'}: ${outPath}`);
}

if (passwordFromArg) {
  run(passwordFromArg);
} else {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true
  });

  rl.question('🔑 Passwort: ', (pw) => {
    run(pw);
    rl.close();
  });
}

function encryptMarkdown(content, password) {
  return content.replace(/```encrypted\n([\s\S]*?)```/g, (_, block) => {
    const encrypted = encryptText(block.trim(), password);
    return `\`\`\`encrypted\n${encrypted}\n\`\`\``;
  });
}

function decryptMarkdown(content, password) {
  return content.replace(/```encrypted\n([\s\S]*?)```/g, (_, block) => {
    try {
      const decrypted = decryptText(block.trim(), password);
      return `\`\`\`encrypted\n${decrypted}\n\`\`\``;
    } catch {
      return '```encrypted\n[Fehler: Falsches Passwort oder beschädigter Block]\n```';
    }
  });
}
