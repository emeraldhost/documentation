---
slug: "mit-windows-server-verbinden"
language: "de"
title: "So verbindest Du Dich mit Deinem Windows Server"
description: "Mit einem Windows Server per Remotedesktop (RDP) verbinden"
tags: []
date: "2026-06-14"
visibility: "public"
cta: "rootserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Mit einem Windows Server verbinden"
sort: 1
related: ["rootserver/windows/windows-hard-drive-expand", "rootserver/windows/open-windows-firewall-ports"]
---

Auf einen Windows Server verbindest Du Dich über **Remotedesktop (RDP)**. Damit erhältst Du eine grafische Oberfläche Deines Servers – so, als würdest Du direkt davor sitzen.

> [!TIP]
> **Linux Server?**
>
> Wenn Du Dich stattdessen mit einem Linux Server verbinden möchtest, folge der Anleitung [Mit einem Linux Server verbinden](/tutorials/rootserver/linux/connect-to-linux-server).

## Voraussetzungen

Du benötigst die folgenden Verbindungsdaten. Du findest sie in Deiner **Verwaltung** sowie in der Bereitstellungs-E-Mail Deines Servers:

- **IP-Adresse** Deines Servers
- **Benutzername** (in der Regel `Administrator`)
- **Passwort**

## Verbindung herstellen

### Windows

1. **Remotedesktopverbindung öffnen**\
   Suche im Windows-Startmenü nach **Remotedesktopverbindung** und öffne sie.

   > [!TIP]
   > **Alternative**
   >
   > Du kannst stattdessen auch `Windows + R` drücken, `mstsc` eingeben und mit `Enter` bestätigen.

2. **IP-Adresse eingeben**\
   Trage im Feld **Computer** die IP-Adresse Deines Servers ein und klicke auf **Verbinden**.

3. **Anmelden**\
   Gib den Benutzernamen (`Administrator`) und das Passwort ein.

   > [!TIP]
   > **Passwort**
   >
   > Das Passwort findest Du in Deiner **Verwaltung**.

4. **Zertifikat bestätigen**\
   Beim ersten Verbinden erscheint eine Zertifikatswarnung. Bestätige sie mit **Ja**, um die Verbindung herzustellen.

### macOS

1. **Windows App installieren**\
   Installiere die **Windows App** (ehemals *Microsoft Remote Desktop*) aus dem App Store.

2. **PC hinzufügen**\
   Öffne die App, klicke auf **+** und wähle **Add PC**. Trage die IP-Adresse Deines Servers ein.

3. **Anmelden**\
   Doppelklicke auf den Eintrag und melde Dich mit Benutzername (`Administrator`) und Passwort an.

   > [!TIP]
   > **Passwort**
   >
   > Das Passwort findest Du in Deiner **Verwaltung**.

### Linux

1. **RDP-Client installieren**\
   Installiere einen RDP-Client wie **Remmina** (`sudo apt install remmina`).

2. **Verbindung anlegen**\
   Öffne Remmina, wähle als Protokoll **RDP** und trage die IP-Adresse Deines Servers ein.

3. **Anmelden**\
   Verbinde Dich und melde Dich mit Benutzername (`Administrator`) und Passwort an.

   > [!TIP]
   > **Passwort**
   >
   > Das Passwort findest Du in Deiner **Verwaltung**.

> [!WARNING]
> Ändere nach der ersten Anmeldung das Administrator-Passwort, um Deinen Server abzusichern. Verwende ein langes, einzigartiges Passwort.

## Nächste Schritte

- [Windows Festplatte erweitern](/tutorials/rootserver/windows/windows-hard-drive-expand) – falls nicht der gesamte Speicherplatz der `C:`-Partition zugewiesen ist.
