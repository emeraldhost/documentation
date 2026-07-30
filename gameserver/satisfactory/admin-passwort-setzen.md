---
description: Admin Passwort auf einem Satisfactory Server setzen
---

# So setzt du ein Admin Passwort auf deinem Satisfactory Server

Das Admin Passwort brauchst du, um dich im Spiel als Administrator anzumelden. Du legst es im **Server Manager** fest – es steht in keiner Konfigurationsdatei, die du per SFTP bearbeiten könntest.

:::: info Hinweis
Satisfactory speichert Servername, Admin Passwort und Server Passwort in einer Datei, die mit `ServerSettings.` beginnt und den Game Port deines Servers im Namen trägt. Diese Datei ist nicht als Textdatei lesbar – setze das Passwort daher immer über den Server Manager.
::::

## Admin Passwort beim Beanspruchen festlegen

Ist für deinen Server noch kein Admin Passwort hinterlegt, gilt er als **nicht beansprucht**. Beim ersten Hinzufügen im Server Manager legst du das Passwort dann direkt fest.

1. <b>Server hinzufügen</b><br>
   Trage deinen Server im Server Manager ein – der Ablauf steht unter [Server beitreten](server-beitreten.md).

2. <b>Server Namen vergeben</b><br>
   Das Spiel fragt zuerst nach einem Namen für den Server.

3. <b>Admin Passwort festlegen</b><br>
   Anschließend legst du das Admin Passwort fest. Danach bist du Administrator des Servers.

## Admin Passwort ändern

1. <b>Server Manager öffnen</b><br>
   Starte Satisfactory, wähle im Hauptmenü **Server Manager** und dort deinen Server aus.

2. <b>Authentifizieren</b><br>
   Wechsle auf einen beliebigen Reiter außer **Status**, klicke auf **Authenticate** und melde dich mit dem aktuellen Admin Passwort an.

3. <b>Servereinstellungen öffnen</b><br>
   Wechsle zum Reiter **Server Settings**.

4. <b>Passwort ändern</b><br>
   Ändere dort den Eintrag für das Admin Passwort und bestätige die Eingabe.

5. <b>Neu anmelden</b><br>
   Alle Admins müssen sich danach mit dem neuen Passwort erneut über **Authenticate** anmelden.

:::: tip Tipp
Teile das Admin Passwort nur mit vertrauenswürdigen Spielern. Jeder, der es kennt, hat volle Kontrolle über deinen Server. Mehr dazu unter [Admin hinzufügen](admin-hinzufuegen.md).
::::

:::: danger Admin Passwort vergessen
Kennst du das Admin Passwort nicht mehr, kannst du den Server zurücksetzen:

1. Stoppe den Server über die Verwaltung.
2. Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) und öffne das Verzeichnis `/.config/Epic/FactoryGame/Saved/SaveGames/`.
3. Lösche die Datei, die mit `ServerSettings.` beginnt und den Game Port deines Servers im Namen trägt.
4. Starte den Server. Er gilt jetzt wieder als nicht beansprucht und kann neu beansprucht werden.

Dabei gehen auch Servername, Server Passwort und das Zertifikat des Servers verloren – bestehende Spielstände bleiben erhalten.
::::
