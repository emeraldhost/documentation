---
description: Spieler auf einem Space Engineers Server kicken und bannen
---

# So kickst und bannst du Spieler auf deinem Space Engineers Server

Du kannst Spieler direkt im Spiel kicken und bannen oder sie dauerhaft über die Server-Konfiguration sperren.

:::: info Hinweis
Zum Kicken und Bannen im Spiel benötigst du Admin-Rechte. Siehe [Admins hinzufügen](admins-hinzufuegen.md).
::::

## Methode 1: Direkt im Spiel

1. <b>Server beitreten</b><br>
   Tritt als Admin deinem Server bei.

2. <b>Admin-Menü öffnen</b><br>
   Öffne die Spielerliste mit `F3` oder das Admin-Menü mit `Alt` + `F10`.

3. <b>Spieler kicken oder bannen</b><br>
   Wähle den Spieler aus und klicke auf **Kick** (vorübergehend entfernen) oder **Ban** (dauerhaft sperren).

## Methode 2: Über die Server-Konfiguration

Du kannst Spieler auch dauerhaft über die Ban-Liste sperren.

:::: warning Achtung
Stoppe deinen Server, bevor du die Konfigurationsdatei bearbeitest.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server oder nutze den Datei-Browser.

3. <b>Konfiguration öffnen</b><br>
   Öffne die Datei `SpaceEngineers-Dedicated.cfg`.

4. <b>Spieler bannen</b><br>
   Suche den Abschnitt `<Banned>` und trage pro Spieler die SteamID64 ein:

   ```xml
   <Banned>
     <unsignedLong>76561198000000000</unsignedLong>
   </Banned>
   ```

   Zum Entbannen entferne die entsprechende Zeile wieder.

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: info Hinweis
Space Engineers hat **keine** eingebauten Konsolenbefehle zum Kicken oder Bannen. Befehle wie `/kick` oder `/ban` stammen aus Mods (z.B. Torch) und sind nicht Teil des Standard-Servers.
::::

:::: tip Tipp
Die [SteamID64](../steamid64-herausfinden.md) eines Spielers findest du über die verlinkte Anleitung.
::::
