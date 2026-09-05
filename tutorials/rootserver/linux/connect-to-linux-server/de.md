---
slug: "mit-linux-server-verbinden"
language: "de"
title: "So verbindest Du Dich mit Deinem Linux Server"
description: "Mit einem Linux Server per SSH verbinden"
tags: []
date: "2026-06-14"
visibility: "public"
cta: "rootserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Mit einem Linux Server verbinden"
sort: 1
---

Auf einen Linux Server verbindest Du Dich über **SSH** (Secure Shell). Damit erhältst Du Zugriff auf die Kommandozeile Deines Servers.

> [!TIP]
> **Windows Server?**
>
> Wenn Du Dich stattdessen mit einem Windows Server verbinden möchtest, folge der Anleitung [Mit einem Windows Server verbinden](/tutorials/rootserver/windows/connect-to-windows-server).

## Voraussetzungen

Du benötigst die folgenden Verbindungsdaten. Du findest sie in Deiner **Verwaltung** sowie in der Bereitstellungs-E-Mail Deines Servers:

- **IP-Adresse** Deines Servers
- **Benutzername** (in der Regel `root`)
- **Passwort**

## Verbindung herstellen

### Windows, macOS & Linux (Terminal)

Auf allen modernen Systemen ist ein SSH-Client bereits integriert. Öffne unter Windows die **PowerShell**, unter macOS oder Linux das **Terminal**.

1. **SSH-Befehl ausführen**\
   Gib folgenden Befehl ein und ersetze `DEINE_SERVER_IP` durch die IP-Adresse Deines Servers:

   ```bash
   ssh root@DEINE_SERVER_IP
   ```

2. **Fingerprint bestätigen**\
   Beim ersten Verbinden wirst Du gefragt, ob Du dem Server vertraust. Bestätige mit `yes`.

3. **Passwort eingeben**\
   Gib Dein Passwort ein und bestätige mit `Enter`.

   > [!TIP]
   > **Passwort**
   >
   > Das Passwort findest Du in Deiner **Verwaltung**.

   > [!NOTE]
   > Bei der Passworteingabe wird aus Sicherheitsgründen nichts angezeigt – auch keine Sternchen. Tippe das Passwort blind ein und bestätige mit `Enter`.

### Windows (PuTTY)

Alternativ kannst Du unter Windows den grafischen SSH-Client **PuTTY** verwenden.

1. **PuTTY herunterladen**\
   Lade [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) herunter und installiere es.

2. **Verbindung herstellen**\
   Trage im Feld **Host Name (or IP address)** die IP-Adresse Deines Servers ein und klicke auf **Open**.

3. **Anmelden**\
   Gib als Benutzernamen `root` ein und anschließend Dein Passwort.

   > [!TIP]
   > **Passwort**
   >
   > Das Passwort findest Du in Deiner **Verwaltung**.

> [!WARNING]
> Ändere nach der ersten Anmeldung das Root-Passwort, um Deinen Server abzusichern. Folge dazu der Anleitung [Root-Passwort ändern](/tutorials/rootserver/basic-configuration/change-root-password).

## Nächste Schritte

- [SSH-Zugang absichern](/tutorials/rootserver/basic-configuration/secure-ssh-access) – richte SSH-Keys ein und deaktiviere die Passwort-Anmeldung für mehr Sicherheit.
