---
description: Spieler auf einem Terraria Server kicken und bannen
---

# So kickst und bannst du Spieler auf deinem Terraria Server

Du kickst und bannst Spieler über die **Serverkonsole** in der Verwaltung. Angegeben wird dabei immer der **Spielername**, mit dem der Spieler dem Server beigetreten ist.

:::: info Hinweis
Die Befehle werden in der Serverkonsole **ohne** führenden Schrägstrich eingegeben, also `kick Spielername` statt `/kick Spielername`. Ein Ingame-Admin-System gibt es im normalen Terraria nicht – die Moderation läuft ausschließlich über die Serverkonsole.
::::

## Spielernamen ermitteln

```
playing
```

Der Befehl listet alle aktuell verbundenen Spieler auf. Übernimm den Namen für die folgenden Befehle exakt so, wie er dort steht.

## Spieler kicken

```
kick <Spielername>
```

Der Spieler wird vom Server entfernt, kann aber sofort wieder beitreten.

## Spieler bannen

```
ban <Spielername>
```

Der Spieler wird vom Server entfernt und in die Datei `banlist.txt` eingetragen.

:::: warning Achtung
`ban` funktioniert nur bei Spielern, die **gerade mit dem Server verbunden** sind. Terraria bannt die IP-Adresse der aktiven Verbindung – ist der Spieler offline, kennt der Server sie nicht. Kicke oder banne den Spieler also, solange er online ist. Da der Bann an die IP-Adresse gebunden ist, kann der Spieler mit einer anderen IP-Adresse erneut beitreten.
::::

## Spieler entbannen

Einen `unban`-Befehl gibt es nicht. Zum Entbannen bearbeitest du die Banliste per SFTP:

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>banlist.txt öffnen</b><br>
   Öffne im Hauptverzeichnis deines Servers die Datei:

   ```
   /banlist.txt
   ```

4. <b>Eintrag entfernen</b><br>
   Jeder Bann besteht aus zwei Zeilen: dem Spielernamen und darunter der gebannten IP-Adresse. Entferne **beide** Zeilen des Spielers und speichere die Datei.

   :::: tip Beispiel
   ```
   //Spielername
   123.45.67.89
   ```
   ::::

5. <b>Server starten</b><br>
   Starte deinen Server, damit die Banliste neu eingelesen wird.

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `playing` | Verbundene Spieler anzeigen |
| `kick <Spielername>` | Spieler kicken |
| `ban <Spielername>` | Spieler bannen |
| `say <Nachricht>` | Nachricht an alle Spieler senden |
| `help` | Alle Konsolenbefehle anzeigen |
| `time` | Aktuelle Spielzeit anzeigen |
| `save` | Welt sofort speichern |
| `exit` | Welt speichern und Server beenden |

:::: tip Tipp
Speichere nach einem Ban mit `save`, damit der aktuelle Stand der Welt gesichert ist.
::::
