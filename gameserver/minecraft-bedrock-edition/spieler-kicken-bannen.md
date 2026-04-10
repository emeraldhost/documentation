---
description: Spieler auf einem Minecraft Bedrock Edition Server kicken und bannen
---

# So kickst und bannst du Spieler auf deinem Minecraft Bedrock Edition Server

Du kannst Spieler per Ingame-Befehl oder über die Serverkonsole kicken und bannen.

## Spieler kicken

Gib folgenden Befehl im Chat oder in der Serverkonsole ein:

```
/kick <Name>
```

Der Spieler wird vom Server entfernt, kann aber erneut beitreten.

## Spieler bannen

```
/ban <Name>
```

Der Spieler wird dauerhaft vom Server ausgeschlossen.

## Spieler entbannen

Es gibt keinen Ingame-Befehl zum Entbannen. Du musst die Banliste manuell bearbeiten:

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Banliste bearbeiten</b><br>
   Öffne die Datei `banned-players.json` oder `banned-ips.json` und entferne den Eintrag des Spielers.

4. <b>Server starten</b><br>
   Starte deinen Server.

## Alle Befehle

| Befehl | Beschreibung |
|--------|-------------|
| `/kick <Name>` | Spieler kicken |
| `/ban <Name>` | Spieler bannen |
