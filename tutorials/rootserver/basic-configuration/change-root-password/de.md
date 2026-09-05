---
slug: "root-passwort-aendern"
language: "de"
title: "So änderst Du das Root-Passwort auf Deinem Linux Rootserver / vServer"
description: "Root-Passwort auf einem Linux Rootserver / vServer ändern"
tags: []
date: "2026-04-17"
visibility: "public"
cta: "rootserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Root-Passwort ändern"
sort: 2
related: ["rootserver/basic-configuration/install-fail2ban", "rootserver/basic-configuration/secure-ssh-access", "rootserver/basic-configuration/install-ufw"]
---

Mit dem Befehl `passwd` kannst Du das Passwort Deines aktuellen Benutzers – oder als Root auch das anderer Benutzer – direkt auf dem Server ändern.

## Als Root anmelden

1. **Per SSH verbinden**\
   Verbinde Dich per SSH mit Deinem Server:

   ```bash
   ssh root@DEINE_SERVER_IP
   ```

## Eigenes Passwort ändern

Führe folgenden Befehl aus:

```bash
passwd
```

Du wirst nacheinander aufgefordert:

1. Dein **aktuelles Passwort** einzugeben (nur bei Nicht-Root-Nutzern).
2. Dein **neues Passwort** einzugeben.
3. Das neue Passwort zur Bestätigung **erneut einzugeben**.

> [!NOTE]
> Aus Sicherheitsgründen wird während der Eingabe nichts angezeigt – auch keine Sternchen. Tippe das Passwort blind ein und bestätige mit Enter.

## Passwort eines anderen Benutzers ändern

Als Root kannst Du das Passwort jedes anderen Benutzers setzen, ohne das alte zu kennen:

```bash
passwd BENUTZERNAME
```

Beispiel:

```bash
passwd meinbenutzer
```

## Tipps für sichere Passwörter

- Mindestens **16 Zeichen**.
- Mischung aus Groß-/Kleinbuchstaben, Zahlen und Sonderzeichen.
- Kein Wort aus dem Wörterbuch und keine persönlichen Daten.
- Für jeden Dienst ein eigenes Passwort – idealerweise verwaltet in einem Passwortmanager.

> [!TIP]
> Noch mehr Sicherheit gewinnst Du, wenn Du statt Passwörtern SSH-Keys nutzt. Die komplette Anleitung dazu findest Du unter [SSH-Zugang absichern](/tutorials/rootserver/basic-configuration/secure-ssh-access).
