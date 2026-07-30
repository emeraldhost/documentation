---
description: Spieler auf einem Mordhau Server kicken und bannen
---

# So kickst und bannst du Spieler auf deinem Mordhau Server

Spieler entfernst du auf einem Mordhau Server über **RCON**. Damit verwaltest du deinen Server von deinem PC aus, ohne selbst im Spiel zu sein. RCON ist ab Werk deaktiviert und muss einmalig eingerichtet werden.

:::: warning Achtung
Die Konsole in der **Verwaltung** ist keine Befehlszeile für Mordhau. Kick- und Bann-Befehle nimmt der Server ausschließlich über RCON entgegen – in der Serverkonsole eingetippt passiert nichts.
::::

## RCON einrichten

1. <b>Port zuweisen</b><br>
   RCON benötigt einen eigenen Port. Weise deinem Server in der **Verwaltung** einen zusätzlichen Port zu und notiere dir den Wert.

   :::: info Hinweis
   RCON läuft bei Mordhau über **TCP**, nicht über UDP. Der Port unterscheidet sich also von Game Port und Query Port und muss separat vergeben werden.
   ::::

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die **Verwaltung**.

   :::: warning Achtung
   Bearbeite die `Game.ini` ausschließlich bei gestopptem Server. Mordhau schreibt die Datei beim Beenden komplett neu – Änderungen im laufenden Betrieb gehen dabei verloren.
   ::::

3. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

4. <b>Game.ini öffnen</b><br>
   Öffne folgende Datei:

   ```
   /Mordhau/Saved/Config/LinuxServer/Game.ini
   ```

5. <b>RCON aktivieren</b><br>
   Trage im Abschnitt `[/Script/Mordhau.MordhauGameSession]` dein RCON-Passwort und den zugewiesenen Port ein:

   ```ini
   [/Script/Mordhau.MordhauGameSession]
   RconPassword=EinSicheresPasswort
   RconPort=DeinRconPort
   RconTimeout=120.000000
   ```

   :::: danger Wichtig
   Steht bei `RconPort` eine `0`, ist RCON deaktiviert. Vergib außerdem unbedingt ein eigenes, sicheres RCON-Passwort – wer es kennt, hat die volle Kontrolle über deinen Server.
   ::::

6. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

7. <b>Mit RCON verbinden</b><br>
   Verbinde dich mit einem RCON-Tool, das das Source-RCON-Protokoll unterstützt. Trage dort die IP-Adresse deines Servers, den RCON-Port und das RCON-Passwort ein.

## Spieler auflisten

Für Kick und Bann brauchst du die **PlayFab-ID** des Spielers. Diese liefert dir folgender Befehl:

```
playerlist
```

Der Server gibt pro Zeile die PlayFab-ID und den Spielernamen aus.

:::: info Hinweis
`playerlist` zeigt nur Spieler, die gerade verbunden sind. Notiere dir die ID also, solange der Spieler noch online ist.
::::

## Spieler kicken

```
kick <PlayFabID> <Grund>
```

Der Spieler wird sofort vom Server getrennt, kann aber jederzeit wieder beitreten.

## Spieler bannen

```
ban <PlayFabID> <Dauer> <Grund>
```

Die **Dauer wird in Minuten** angegeben. Trägst du `0` ein, gilt der Bann dauerhaft.

:::: tip Beispiel
```
ban 909275ECE8FEDDB 1440 Teamkilling
```
Dieser Bann gilt für 1440 Minuten, also 24 Stunden.
::::

## Bann aufheben

```
unban <PlayFabID>
```

Mit `banlist` siehst du vorher alle aktiven Banns mit ihrer verbleibenden Dauer.

:::: warning Achtung
Bearbeite die Bann- und Mute-Listen in der `Game.ini` nicht von Hand. Der Server pflegt diese Einträge selbst – hebe Banns ausschließlich über `unban` auf.
::::

## Spieler stummschalten

```
mute <PlayFabID> <Minuten>
```

```
unmute <PlayFabID>
```

Mit `mutelist` rufst du alle aktuell stummgeschalteten Spieler ab.

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|--------------|
| `playerlist` | Zeigt alle verbundenen Spieler mit PlayFab-ID und Namen |
| `kick <ID> <Grund>` | Trennt einen Spieler vom Server |
| `ban <ID> <Minuten> <Grund>` | Sperrt einen Spieler aus, `0` bedeutet dauerhaft |
| `unban <ID>` | Hebt einen Bann auf |
| `banlist` | Listet alle aktiven Banns mit Dauer auf |
| `mute <ID> <Minuten>` | Schaltet einen Spieler stumm |
| `unmute <ID>` | Hebt die Stummschaltung auf |
| `mutelist` | Listet alle stummgeschalteten Spieler auf |
| `addadmin <ID>` | Trägt einen Spieler als Admin ein |
| `removeadmin <ID>` | Entfernt einen Admin |
| `adminlist` | Zeigt alle Admins an |
| `say <Text>` | Sendet eine Nachricht an alle Spieler |
| `changelevel <Karte>` | Wechselt die Karte |
| `killplayer <ID>` | Tötet einen Spieler im Spiel |
| `info` | Zeigt Informationen zum Server an |

:::: tip Tipp
Wie du dauerhafte Adminrechte vergibst, erfährst du unter [Admin hinzufügen](admin-hinzufuegen.md).
::::

:::: info Hinweis
Der Ordner `LinuxServer` und die `Game.ini` entstehen erst, nachdem dein Server einmal vollständig gestartet ist. Findest du die Datei nicht, starte deinen Server einmal und stoppe ihn wieder.
::::
