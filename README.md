> 🔐 MD-Crypt

| ![Build Status](https://github.com/bylickilabs/MD-Crypter/actions/workflows/main.yml/badge.svg) | ![Node.js Versions](https://img.shields.io/badge/node-18.x-brightgreen) | ![Repo Size](https://img.shields.io/github/repo-size/bylickilabs/MD-Crypter) | ![License](https://img.shields.io/github/license/bylickilabs/MD-Crypter) | ![Last Commit](https://img.shields.io/github/last-commit/bylickilabs/MD-Crypter) |
|---|---|---|---|---|

> Schütze vertrauliche Abschnitte in Markdown-Dokumenten sicher mit AES-256 – selektiv, effizient und CLI-basiert.

|![MD-Crypter1](https://github.com/user-attachments/assets/4bd7bf09-4f68-4885-9fc1-2dde832d825d)|
|---|

<br>

---

<br>

> 📌 Überblick

> **MD-Crypt** ist ein leichtgewichtiges CLI-Tool zur **selektiven Verschlüsselung** von Markdown-Inhalten. 
  - Es nutzt AES-256-CBC und SHA-256 zur sicheren Speicherung sensibler Abschnitte – z. B. in Projektnotizen, Protokollen oder technischen Dokumentationen.

Nur Abschnitte im Format  
\\`\\`\\`encrypted  
HERE.............
\\`\\`\\`  
werden verschlüsselt – der Rest des Dokuments bleibt lesbar.

<br>

---

<br>

> ✨ Features

| Funktion                          | Beschreibung                                                                 |
|-----------------------------------|------------------------------------------------------------------------------|
| 🔐 Absatzweise Verschlüsselung    | Nur markierte Bereiche werden gesichert                                     |
| 🛡️ AES-256 mit SHA-256 Key        | Starke symmetrische Verschlüsselung                                         |
| 🖥️ CLI-Modus                      | Einfache Kommandozeilen-Integration ohne GUI                                |
| 📄 Format bleibt Markdown         | Auch verschlüsselte Dateien behalten die `.md`-Struktur                     |
| 📁 Flexible I/O-Dateien           | Ein- und Ausgabepfade frei wählbar                                          |
| 🔑 Passwortbasierte Entschlüsselung | Kein Key-Management notwendig                                             |

<br>

---

<br>

> 🚀 Schnellstart
  -  🔧 Voraussetzungen

- Node.js (ab Version 14)
- Terminal / Konsole

> 📦 Installation

```bash
# Repository klonen oder ZIP entpacken
cd md-crypt
```

> 🔐 Verschlüsseln

```bash
node mdcrypt.js encrypt examples/geheim.md --out output/geheim.mdc
```

<br>

> 🔓 Entschlüsseln

```bash
node mdcrypt.js decrypt output/geheim.mdc --out output/geheim.decrypted.md
```

- 🔑 Du wirst jeweils zur Eingabe eines Passworts aufgefordert.

<br>

---

<br>

> 🧱 Projektstruktur

```bash
md-crypt/
├── mdcrypt.js              # CLI-Tool
├── utils/
│   └── crypto.js           # AES-Logik
├── examples/
│   └── geheim.md           # Beispiel-Datei mit verschlüsselbarem Abschnitt
├── output/                 # Generierte Dateien (verschlüsselt/entschlüsselt)
└── README.md               # Projektdokumentation
```

<br>

---

<br>

> 📝 Beispiel: Markdown mit verschlüsselbarem Block

```encrypted
Dieser Abschnitt ist vertraulich und wird verschlüsselt.
```

<br>

---

<br>

> 🛠️ Optionen & Hinweise

| Parameter         | Beschreibung                                |
|-------------------|---------------------------------------------|
| `encrypt`         | Verschlüsselt eine Datei                    |
| `decrypt`         | Entschlüsselt eine Datei                    |
| `--out`           | Zielpfad für die Ausgabedatei               |

```yarn
output muss im Hauptverzeichnis erstellt werden, und liegen
``` 

> 🔐 **Hinweis:** Nur Inhalte in ` ```encrypted ` Blöcken werden verschlüsselt.

<br>

---

<br>

> 🧪 Tests
 - Beispiel ausführen:

```bash
node mdcrypt.js encrypt examples/geheim.md --out output/geheim.mdc
node mdcrypt.js decrypt output/geheim.mdc --out output/geheim.decrypted.md
```

<br>

---

<br>

## ⚠️ Sicherheitshinweise

- Die Eingabedatei (`.md`) bleibt nach der Verschlüsselung im Klartext bestehen.
- Du solltest sie nach erfolgreicher Verschlüsselung **löschen oder sicher aufbewahren**.
- Das Passwort wird **nicht gespeichert**. Ohne korrektes Passwort ist der Inhalt **nicht wiederherstellbar**.

<br>

---

<br>

## 📜 Lizenz

MIT License – © 2025 [LICENSE](LICENSE)

<br>

---

<br>

## 🧠 Idee & Entwicklung

Erstellt und konzipiert von **Thorsten Bylicki**, inspiriert durch den Bedarf an sicherer Markdown-Kommunikation ohne externe Tools.

<br>

---

<br>

> „Ich bin MD-Crypt – der stille Wächter deiner Markdown-Geheimnisse.“
