---
slug: "savegame-hinzufuegen"
language: "de"
title: "So fügst Du ein Savegame zu Deinem StarRupture Server hinzu"
description: "Savegame auf einem StarRupture Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["starrupture"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame hinzufügen"
sort: 3
related: ["gameserver/starrupture/create-backup", "gameserver/starrupture/download-savegame", "gameserver/starrupture/join-server"]
---

Ein Spielstand von StarRupture besteht aus einem **Ordner**, der genauso heißt wie die Session Deines Servers, und darin aus **zwei Dateien mit demselben Basisnamen**: `AutoSave0.sav` und `AutoSave0.met`. Zusätzlich musst Du den Namen der Session in der Konfigurationsdatei `DSSettings.txt` eintragen, damit der Server den Spielstand findet und lädt.

> [!TIP]
> Erstelle vor dem Hochladen ein [Backup](/tutorials/gameserver/starrupture/create-backup) Deines bisherigen Server-Spielstands, falls Du später zurückwechseln möchtest.

## Aufbau des Spielstands

| Pfad | Inhalt |
|------|--------|
| `/StarRupture/Saved/SaveGames/<SessionName>/AutoSave0.sav` | Der eigentliche Spielstand mit Welt, Basis und Fortschritt |
| `/StarRupture/Saved/SaveGames/<SessionName>/AutoSave0.met` | Die zugehörige Metadatei – gehört zwingend zur `.sav` |
| `/StarRupture/Saved/SaveGames/SaveData.dat` | Übergeordnete Datei, die der Server selbst verwaltet |

> [!NOTE]
> `.sav` und `.met` gehören immer zusammen und müssen denselben Basisnamen tragen. Fehlt eine der beiden Dateien oder weichen die Namen voneinander ab, lädt der Server den Spielstand nicht.

## Die Datei DSSettings.txt

Welche Session der Server verwendet und ob er einen vorhandenen Spielstand lädt oder eine neue Welt erzeugt, steuerst Du in der Datei `DSSettings.txt` im Hauptverzeichnis Deines Servers:

```text
/DSSettings.txt
```

Der Inhalt ist im JSON-Format aufgebaut:

```text
{
  "SessionName": "MeinServer",
  "SaveGameName": "AutoSave0.sav",
  "SaveGameInterval": "300",
  "StartNewGame": "false",
  "LoadSavedGame": "true"
}
```

> [!WARNING]
> Alle Werte stehen in Anführungszeichen – auch Zahlen und `"true"`/`"false"`. Trägst Du sie ohne Anführungszeichen ein, kann der Server die Datei nicht auswerten.

| Wert | Bedeutung |
|------|-----------|
| `SessionName` | Name der Session – entspricht exakt dem Ordnernamen unter `Saved/SaveGames/`, maximal 20 Zeichen |
| `SaveGameName` | Dateiname des Spielstands, standardmäßig `AutoSave0.sav` |
| `SaveGameInterval` | Abstand der automatischen Speicherung in Sekunden, standardmäßig `"300"` |
| `StartNewGame` | `"true"` erzeugt beim Start eine komplett neue Welt |
| `LoadSavedGame` | `"true"` lädt den vorhandenen Spielstand der eingetragenen Session |

> [!WARNING]
> Werden `SessionName`, `StartNewGame` oder `LoadSavedGame` in Deiner **Verwaltung** als Einstellungen angeboten, nimm die Änderungen ausschließlich dort vor. Die `DSSettings.txt` kann beim Serverstart aus diesen Feldern neu geschrieben werden – manuelle Änderungen in der Datei wären dann wieder überschrieben.

## Lokalen Spielstand finden

Deinen eigenen Spielstand vom PC findest Du unter:

```text
C:\Program Files (x86)\Steam\userdata\<SteamID64>\1631270\remote\Saved\SaveGames\
```

> [!NOTE]
> `1631270` ist die Steam-App-ID von StarRupture. Der Ordner `<SteamID64>` besteht aus einer langen Zahlenfolge – wie Du Deine ID ermittelst, steht unter [SteamID64 herausfinden](/tutorials/gameserver/steamid64-find-out). Hast Du Steam in einem anderen Verzeichnis installiert, liegt der Ordner `userdata` entsprechend dort.

## Savegame hochladen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. Solange der Server läuft, schreibt er selbst in die Spielstandsdateien.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /StarRupture/Saved/SaveGames/
   ```

   > [!NOTE]
   > Existiert der Ordner noch nicht, starte den Server einmal, damit die Ordnerstruktur angelegt wird. Stoppe ihn anschließend wieder, bevor Du die Dateien hochlädst.

4. **Ordner für die Session anlegen**\
   Lege dort einen Ordner an, der exakt so heißt wie der Wert `SessionName` in Deiner `DSSettings.txt`. Der Name darf maximal 20 Zeichen lang sein.

5. **Dateien hochladen**\
   Lade die `.sav`-Datei und die zugehörige `.met`-Datei Deines Spielstands in diesen Ordner hoch.

6. **Dateien umbenennen**\
   Benenne beide Dateien so um, dass sie zum Wert `SaveGameName` passen:

   ```text
   AutoSave0.sav
   AutoSave0.met
   ```

   > [!WARNING]
   > Der Basisname muss bei beiden Dateien identisch sein. `AutoSave0.sav` zusammen mit `Spielstand.met` funktioniert nicht.

7. **DSSettings.txt anpassen**\
   Öffne die Datei `/DSSettings.txt` und setze folgende Werte:

   ```text
   "SessionName": "<dein Ordnername>",
   "SaveGameName": "AutoSave0.sav",
   "StartNewGame": "false",
   "LoadSavedGame": "true"
   ```

8. **Server starten**\
   Speichere alle Änderungen und starte Deinen Server. Beim Start wird jetzt Dein hochgeladener Spielstand geladen.

> [!IMPORTANT]
> `StartNewGame` muss auf `"false"` stehen. Bleibt der Wert auf `"true"`, erzeugt der Server bei jedem Start eine frische Welt und überschreibt damit Deinen hochgeladenen Spielstand.

## Neue Welt erstellen

Möchtest Du stattdessen mit einer komplett neuen Welt beginnen, gehst Du so vor:

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Neue Welt aktivieren**\
   Öffne die Datei `/DSSettings.txt`, trage den gewünschten `SessionName` ein und setze:

   ```text
   "StartNewGame": "true",
   "LoadSavedGame": "false"
   ```

3. **Server starten**\
   Starte Deinen Server. Er erzeugt jetzt eine neue Welt.

4. **Server beitreten**\
   Verbinde Dich mit Deinem Server, siehe [Server beitreten](/tutorials/gameserver/starrupture/join-server).

5. **Welt speichern**\
   Drücke im Spiel `ESC` und wähle **Save**. Erst dadurch wird die neue Welt tatsächlich als Spielstand auf den Server geschrieben.

6. **Verbindung trennen und Server stoppen**\
   Verlasse den Server und stoppe ihn anschließend über die Verwaltung.

7. **Werte zurücksetzen**\
   Setze in der `/DSSettings.txt` die beiden Werte wieder zurück:

   ```text
   "StartNewGame": "false",
   "LoadSavedGame": "true"
   ```

8. **Server starten**\
   Starte Deinen Server erneut. Ab jetzt wird Deine neue Welt bei jedem Start geladen und der Fortschritt bleibt erhalten.

> [!IMPORTANT]
> Vergiss diesen letzten Schritt nicht. Bleibt `StartNewGame` auf `"true"`, wird Deine gerade erstellte Welt beim nächsten Serverstart wieder durch eine frische Welt ersetzt.

> [!NOTE]
> Der Server speichert im Betrieb automatisch. Wie oft, steuert der Wert `SaveGameInterval` in der `DSSettings.txt` – die Angabe erfolgt in Sekunden.
