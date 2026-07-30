---
description: Admin auf einem Abiotic Factor Server hinzufügen
---

# So fügst du einen Admin auf deinem Abiotic Factor Server hinzu

Admins legst du auf einem Abiotic Factor Server über die Datei `Admin.ini` fest. Eingetragen wird die **SteamID64** des Spielers – eine 17-stellige Zahl, die mit `7656` beginnt.

:::: tip Tipp
Hier findest du eine Anleitung, wie du eine [SteamID64](../steamid64-herausfinden.md) herausfindest.
::::

:::: info Hinweis
Die Anmeldung als Admin funktioniert nur über eine SteamID64. Spieler auf Xbox oder PlayStation lassen sich auf diesem Weg **nicht** als Admin eintragen.
::::

## Admin über die Admin.ini hinzufügen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung. Die Adminliste wird nur beim Serverstart eingelesen.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Admin.ini öffnen</b><br>
   Öffne folgende Datei. Existiert sie noch nicht, starte den Server einmal, damit sie angelegt wird:

   ```
   /AbioticFactor/Saved/SaveGames/Server/Admin.ini
   ```

   :::: info Abweichender Pfad möglich
   Der Pfad der Datei lässt sich über den Startparameter `-AdminIniPath=` verlegen – der Wert wird relativ zum Ordner `Saved` angegeben. Findest du die Datei nicht am oben genannten Ort, schau zusätzlich hier nach:

   ```
   /AbioticFactor/Saved/Config/WindowsServer/Admin.ini
   ```
   ::::

4. <b>SteamID64 eintragen</b><br>
   Trage die SteamID64 unter dem Abschnitt `[Moderators]` ein. Pro Admin schreibst du eine eigene Zeile:

   ```ini
   [Moderators]
   Moderator=76561198012345678
   Moderator=76561198087654321
   ```

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: warning Achtung
Die SteamID64 muss rein numerisch und exakt 17 Zeichen lang sein. Ein Steam-Anzeigename oder eine benutzerdefinierte Profil-URL funktioniert an dieser Stelle nicht.
::::

## Alternative über ein Admin-Passwort

Abiotic Factor unterstützt zusätzlich den Startparameter `-AdminPassword=<Passwort>`. Ist er gesetzt, kann sich ein Spieler im Spiel durch Eingabe dieses Passworts selbst Adminrechte geben – ganz ohne Eintrag in der `Admin.ini`.

:::: info Hinweis
Ob deine Verwaltung ein Feld für das Admin-Passwort oder für zusätzliche Startparameter anbietet, siehst du unter **Einstellungen**. Das Admin-Passwort ist unabhängig vom Server-Passwort – es sind zwei verschiedene Passwörter.
::::

:::: warning Achtung
Jeder, der das Admin-Passwort kennt, kann sich damit Adminrechte auf deinem Server verschaffen. Gib es nur an Personen weiter, denen du vertraust, und verwende ein anderes Passwort als das Server-Passwort.
::::

## Admin-Menü im Spiel öffnen

1. <b>Server beitreten</b><br>
   Tritt deinem Server bei – siehe [Server beitreten](server-beitreten.md).

2. <b>Menü öffnen</b><br>
   Drücke `Esc`, um das Spielmenü zu öffnen.

3. <b>Admin-Bereich öffnen</b><br>
   Wähle den Tab **Admin**. Dort findest du die Liste der verbundenen Spieler und die Admin-Funktionen.

4. <b>Adminrechte prüfen</b><br>
   Ist der Bereich **Admin** für dich zugänglich, hat der Server dich als Admin erkannt. Fehlt er, wurde deine SteamID64 nicht übernommen – prüfe den Eintrag in der `Admin.ini` und starte den Server neu.

:::: tip Tipp
Wie du als Admin Spieler vom Server entfernst, erfährst du unter [Spieler kicken & bannen](spieler-kicken-bannen.md).
::::

:::: warning Keine Chat- oder Konsolenbefehle
Für Abiotic Factor sind **keine** Admin-Befehle im Chat und keine Serverkonsole dokumentiert, über die du Adminrechte vergeben könntest. Häufig kursierende Befehle wie `#SetAdmin` oder Konfigurationswerte wie `AdminSteamIDs` tauchen in der offiziellen Dokumentation nicht auf – Admins vergibst du über die `Admin.ini` oder das Admin-Passwort.
::::
