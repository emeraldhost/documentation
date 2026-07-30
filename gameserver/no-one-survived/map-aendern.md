---
description: Karte eines No One Survived Servers ändern
---

# So änderst du die Karte deines No One Survived Servers

No One Survived bringt zwei Karten mit. Welche davon dein Server lädt, steuerst du über den Wert `OpenMap` in der Konfigurationsdatei.

| Wert | Karte |
|------|-------|
| `Map01` | Große Karte (Standard), rund 8 x 8 km |
| `Map02` | Kleine Karte, rund 4 x 4 km – die ursprüngliche Karte des Spiels |

:::: info Hinweis
Die Nummerierung ist nicht chronologisch: `Map01` ist die später hinzugekommene **große** Karte, `Map02` die kleinere Ursprungskarte.
::::

:::: danger Vorher sichern
Erstelle vor dem Wechsel ein [Backup](backup-erstellen.md). Ein Kartenwechsel ändert, welche Welt dein Server lädt – ohne Sicherung kommst du nicht mehr an deinen bisherigen Stand.
::::

## Karte umstellen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung. Die Einstellung wird nur beim Serverstart eingelesen.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Game.ini öffnen</b><br>
   Öffne folgende Datei:

   ```
   /WRSH/Saved/Config/WindowsServer/Game.ini
   ```

   :::: info Hinweis
   Existiert die Datei noch nicht, starte den Server einmal, damit sie angelegt wird. Stoppe ihn anschließend wieder.

   Der Ordner heißt auch auf deinem Linux-Server `WindowsServer`. Das ist so gewollt – No One Survived stellt nur ein Windows-Serverprogramm bereit, das auf Linux-Servern über eine Kompatibilitätsschicht läuft.
   ::::

4. <b>Karte eintragen</b><br>
   Trage im Abschnitt `[ServerSetting]` den gewünschten Wert ein. Ist die Zeile noch nicht vorhanden, ergänze sie:

   ```ini
   [ServerSetting]
   OpenMap=Map02
   ```

5. <b>Neuen Savegame-Namen setzen</b><br>
   Trage in der **Verwaltung** einen neuen Savegame-Namen ein, damit für die neue Karte eine eigene Welt erzeugt wird. Dein bisheriger Spielstand bleibt dabei unter seinem alten Namen erhalten.

   :::: info Warum ein eigener Name?
   Ein vorhandener Spielstand wurde auf der Karte erzeugt, auf der du ihn gestartet hast. Vergibst du für die neue Karte einen eigenen Savegame-Namen, kannst du später jederzeit zurückwechseln, indem du den alten Namen wieder einträgst.
   ::::

6. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server. Beim Start wird die gewählte Karte geladen.

:::: tip Zurückwechseln
Um wieder auf die vorherige Karte zu wechseln, setzt du `OpenMap` zurück und trägst in der Verwaltung wieder den zugehörigen Savegame-Namen ein.
::::

:::: warning Arbeitsspeicher beachten
Die große Karte `Map01` benötigt deutlich mehr Arbeitsspeicher als die kleine Karte `Map02`. Der Entwickler empfiehlt für die große Karte mindestens 8 GB, für die kleine Karte mindestens 4 GB. Reicht der Arbeitsspeicher nicht aus, startet der Server nicht sauber oder stürzt im Betrieb ab.
::::

:::: info Kein Feld in der Verwaltung
Die Kartenauswahl wird nicht über die Verwaltung gesteuert, sondern nur über die `Game.ini`. Dieser Wert wird dadurch beim Serverstart auch nicht überschrieben und bleibt erhalten.
::::
