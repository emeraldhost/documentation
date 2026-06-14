---
description: Mit einem Windows Server per Remotedesktop (RDP) verbinden
---

# So verbindest du dich mit deinem Windows Server

Auf einen Windows Server verbindest du dich über **Remotedesktop (RDP)**. Damit erhältst du eine grafische Oberfläche deines Servers — so, als würdest du direkt davor sitzen.

:::: tip Linux Server?
Wenn du dich stattdessen mit einem Linux Server verbinden möchtest, folge der Anleitung [Mit einem Linux Server verbinden](../linux/mit-linux-server-verbinden.md).
::::

## Voraussetzungen

Du benötigst die folgenden Verbindungsdaten. Du findest sie in deiner **Verwaltung** sowie in der Bereitstellungs-E-Mail deines Servers:

- **IP-Adresse** deines Servers
- **Benutzername** (in der Regel `Administrator`)
- **Passwort**

## Verbindung herstellen

### Windows

1. <b>Remotedesktopverbindung öffnen</b><br>
   Suche im Windows-Startmenü nach **Remotedesktopverbindung** und öffne sie.

   :::: tip Alternative
   Du kannst stattdessen auch `Windows + R` drücken, `mstsc` eingeben und mit `Enter` bestätigen.
   ::::

2. <b>IP-Adresse eingeben</b><br>
   Trage im Feld **Computer** die IP-Adresse deines Servers ein und klicke auf **Verbinden**.

3. <b>Anmelden</b><br>
   Gib den Benutzernamen (`Administrator`) und das Passwort ein.

   :::: tip Passwort
   Das Passwort findest du in deiner **Verwaltung**.
   ::::

4. <b>Zertifikat bestätigen</b><br>
   Beim ersten Verbinden erscheint eine Zertifikatswarnung. Bestätige sie mit **Ja**, um die Verbindung herzustellen.

### macOS

1. <b>Windows App installieren</b><br>
   Installiere die **Windows App** (ehemals *Microsoft Remote Desktop*) aus dem App Store.

2. <b>PC hinzufügen</b><br>
   Öffne die App, klicke auf **+** und wähle **Add PC**. Trage die IP-Adresse deines Servers ein.

3. <b>Anmelden</b><br>
   Doppelklicke auf den Eintrag und melde dich mit Benutzername (`Administrator`) und Passwort an.

   :::: tip Passwort
   Das Passwort findest du in deiner **Verwaltung**.
   ::::

### Linux

1. <b>RDP-Client installieren</b><br>
   Installiere einen RDP-Client wie **Remmina** (`sudo apt install remmina`).

2. <b>Verbindung anlegen</b><br>
   Öffne Remmina, wähle als Protokoll **RDP** und trage die IP-Adresse deines Servers ein.

3. <b>Anmelden</b><br>
   Verbinde dich und melde dich mit Benutzername (`Administrator`) und Passwort an.

   :::: tip Passwort
   Das Passwort findest du in deiner **Verwaltung**.
   ::::

:::: warning Achtung
Ändere nach der ersten Anmeldung das Administrator-Passwort, um deinen Server abzusichern. Verwende ein langes, einzigartiges Passwort.
::::

## Nächste Schritte

- [Windows Festplatte erweitern](windows-hard-drive-expand.md) — falls nicht der gesamte Speicherplatz der `C:`-Partition zugewiesen ist.
