---
description: Einem Citadel Forged with Fire Server beitreten
---

# So trittst du deinem Citadel Forged with Fire Server bei

Citadel Forged with Fire kennt **keine Direktverbindung über die IP-Adresse**. Du erreichst deinen Server ausschließlich über den Serverbrowser im Spiel, indem du dort nach dem **Namen deines Servers** suchst.

## Verbindungsdaten finden

:::: danger Wichtig
Für den Beitritt brauchst du den **Namen deines Servers**. Die IP-Adresse sowie den Game Port und den Query Port findest du in der **Verwaltung** – sie sind für die Suche im Spiel selbst nicht nötig, aber wichtig, falls dein Server nicht in der Liste auftaucht.
::::

## Über den Serverbrowser beitreten

1. <b>Citadel Forged with Fire starten</b><br>
   Starte das Spiel und warte, bis das Hauptmenü geladen ist.

2. <b>Join Game öffnen</b><br>
   Wähle im Hauptmenü **Join Game**. Es öffnet sich die Serverliste.

3. <b>Server suchen</b><br>
   Gib im Suchfeld der Serverliste den Namen deines Servers ein.

4. <b>Beitreten</b><br>
   Wähle deinen Server aus der Liste aus und klicke auf **Join**.

5. <b>Charakter erstellen</b><br>
   Beim ersten Beitritt legst du deinen Charakter an. Dein Fortschritt wird anschließend auf dem Server gespeichert und beim nächsten Beitritt wieder geladen.

:::: info Hinweis
Ein Menüpunkt für eine Direktverbindung per `IP:Port` ist in Citadel Forged with Fire nicht vorhanden. Der Serverbrowser ist der vorgesehene Weg auf deinen Server – such dort einfach nach dem Servernamen.
::::

:::: info Passwortgeschützter Server
Ist für deinen Server ein Beitrittspasswort gesetzt, benötigst du es beim Verbinden. Gib es nur an die Spieler weiter, die auf deinen Server sollen.
::::

## Welche Ports nutzt Citadel Forged with Fire?

:::: info Hinweis
Ein Server belegt mehrere Ports. Game Port und Query Port laufen dabei über **UDP**:

| Konfigurationswert | Verwendung |
|--------------------|------------|
| `ConnectionPort` | Game Port – über ihn läuft die eigentliche Verbindung der Spieler zum Server |
| `QueryPort` | Query Port – über ihn meldet sich dein Server an der Serverliste an und wird dort gefunden |
| `SteamPort` | Kommunikation mit Steam |

Welche Ports für deinen Server gelten, siehst du in der **Verwaltung**. Game Port und Query Port dürfen nie derselbe Port sein.
::::

## Server wird nicht gefunden

:::: warning Server erscheint nicht in der Liste
Taucht dein Server im Serverbrowser nicht auf, liegt es meist am Query Port – nur über ihn meldet sich der Server an der Liste an. Prüfe in der **Verwaltung**, ob Game Port und Query Port unterschiedliche Ports sind, und starte deinen Server anschließend neu. Direkt nach dem ersten Start kann es außerdem einige Minuten dauern, bis der Server in der Liste erscheint.
::::

:::: danger Join-Schaltfläche lässt sich nicht anklicken
Wird dein Server zwar angezeigt, der Beitritt aber nicht ausgelöst, stimmt der Port in der `Engine.ini` nicht mit dem Game Port überein. Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und lege folgende Datei an, falls sie noch nicht existiert:

```
/Config/Engine.ini
```

Ergänze darin diesen Abschnitt und trage als Port den **Game Port** aus deiner Verwaltung ein:

```ini
[URL]
Port=<Game Port>
```

Speichere die Datei und starte deinen Server neu.
::::

:::: info Wo liegt die Konfiguration?
Die Konfigurationsdateien deines Servers liegen im Ordner `/Config/`. Der Pfad `/Citadel/Saved/Config/LinuxServer/` verweist auf denselben Ordner – du kannst also beide Wege nutzen, es sind dieselben Dateien.
::::
