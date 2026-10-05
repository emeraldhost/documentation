---
description: Spieler auf einem The Bus Server kicken und bannen
---

# So kickst und bannst du Spieler auf einem The Bus Server

Alle Befehle in dieser Anleitung gibst du im **Ingame-Chat** ein. Du benötigst dafür einen entsprechenden Rang (z.B. Owner oder Admin). Wie du Ränge vergibst, erfährst du unter [Admin hinzufügen](admin-hinzufuegen.md).

:::: tip Tipp
Mit `/commands` lässt du dir im Ingame-Chat alle verfügbaren Befehle anzeigen.
::::

:::: info Hinweis
Die Konsole in der Verwaltung zeigt auf unseren Servern nur die Ausgabe des Servers an und nimmt keine Befehle entgegen.
::::

## So zeigst du die Spielerliste an

Um alle Spieler auf dem Server anzuzeigen, gib folgenden Befehl ein:

```
/list
```

## So kickst du einen Spieler

```
/kick <spielername>
```

Damit entfernst du den Spieler vom Server.

## So bannst du einen Spieler

```
/ban <spielername>
```

Damit bannst du den Spieler dauerhaft.

## So bannst du einen Spieler temporär

Seit Update 3.2 EA kannst du Spieler auch zeitlich begrenzt bannen:

```
/tempban <spielername> <dauer>
```

:::: info Hinweis
In welcher Einheit `/tempban` die Dauer erwartet, ist nicht offiziell dokumentiert. Mit `/commands` lässt du dir alle verfügbaren Befehle anzeigen.
::::

## So entbannst du einen Spieler

```
/unban <spielername>
```

## So entbannst du einen Spieler per SFTP

Alternativ kannst du einen Bann auch direkt in der Spielerdatei aufheben.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Datei öffnen</b><br>
   Öffne die Datei `/TheBus/Saved/PlayerData.json`.

4. <b>Bann aufheben</b><br>
   Suche den Eintrag des gewünschten Spielers und setze den Wert von `"banned"` auf `false`, zum Beispiel:

   ```json
   {
       "name": "Spieler123",
       "banned": false,
       ...
   }
   ```

   :::: tip Tipp
   Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server die Spielerdaten nicht mehr einlesen kann.
   ::::

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server wieder.

## So mutest du einen Spieler

```
/mute <spielername>
```

Damit schaltest du den Spieler für den gesamten Server stumm.

## So entmutest du einen Spieler

```
/unmute <spielername>
```

## Befehlsübersicht

| Befehl | Beschreibung |
|--------|-------------|
| `/list` | Alle Spieler anzeigen |
| `/kick <spielername>` | Spieler vom Server kicken |
| `/ban <spielername>` | Spieler dauerhaft bannen |
| `/tempban <spielername> <dauer>` | Spieler temporär bannen |
| `/unban <spielername>` | Spieler entbannen |
| `/mute <spielername>` | Spieler serverweit stummschalten |
| `/unmute <spielername>` | Serverweite Stummschaltung aufheben |
| `/commands` | Verfügbare Befehle anzeigen |
