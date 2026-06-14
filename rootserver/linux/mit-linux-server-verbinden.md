---
description: Mit einem Linux Server per SSH verbinden
---

# So verbindest du dich mit deinem Linux Server

Auf einen Linux Server verbindest du dich über **SSH** (Secure Shell). Damit erhältst du Zugriff auf die Kommandozeile deines Servers.

:::: tip Windows Server?
Wenn du dich stattdessen mit einem Windows Server verbinden möchtest, folge der Anleitung [Mit einem Windows Server verbinden](../windows/mit-windows-server-verbinden.md).
::::

## Voraussetzungen

Du benötigst die folgenden Verbindungsdaten. Du findest sie in deiner **Verwaltung** sowie in der Bereitstellungs-E-Mail deines Servers:

- **IP-Adresse** deines Servers
- **Benutzername** (in der Regel `root`)
- **Passwort**

## Verbindung herstellen

### Windows, macOS & Linux (Terminal)

Auf allen modernen Systemen ist ein SSH-Client bereits integriert. Öffne unter Windows die **PowerShell**, unter macOS oder Linux das **Terminal**.

1. <b>SSH-Befehl ausführen</b><br>
   Gib folgenden Befehl ein und ersetze `DEINE_SERVER_IP` durch die IP-Adresse deines Servers:

   ```bash
   ssh root@DEINE_SERVER_IP
   ```

2. <b>Fingerprint bestätigen</b><br>
   Beim ersten Verbinden wirst du gefragt, ob du dem Server vertraust. Bestätige mit `yes`.

3. <b>Passwort eingeben</b><br>
   Gib dein Passwort ein und bestätige mit `Enter`.

   :::: tip Passwort
   Das Passwort findest du in deiner **Verwaltung**.
   ::::

   :::: info Hinweis
   Bei der Passworteingabe wird aus Sicherheitsgründen nichts angezeigt — auch keine Sternchen. Tippe das Passwort blind ein und bestätige mit `Enter`.
   ::::

### Windows (PuTTY)

Alternativ kannst du unter Windows den grafischen SSH-Client **PuTTY** verwenden.

1. <b>PuTTY herunterladen</b><br>
   Lade [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) herunter und installiere es.

2. <b>Verbindung herstellen</b><br>
   Trage im Feld **Host Name (or IP address)** die IP-Adresse deines Servers ein und klicke auf **Open**.

3. <b>Anmelden</b><br>
   Gib als Benutzernamen `root` ein und anschließend dein Passwort.

   :::: tip Passwort
   Das Passwort findest du in deiner **Verwaltung**.
   ::::

:::: warning Achtung
Ändere nach der ersten Anmeldung das Root-Passwort, um deinen Server abzusichern. Folge dazu der Anleitung [Root-Passwort ändern](../grundkonfiguration/root-passwort-aendern.md).
::::

## Nächste Schritte

- [SSH-Zugang absichern](../grundkonfiguration/ssh-zugang-absichern.md) — richte SSH-Keys ein und deaktiviere die Passwort-Anmeldung für mehr Sicherheit.
