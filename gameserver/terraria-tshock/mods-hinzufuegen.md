---
description: Plugins auf einem Terraria tShock Server hinzufügen
---

# So fügst du Plugins zu deinem Terraria tShock Server hinzu

tShock hat **kein Mod-System für den Client**. Erweitert wird ein tShock-Server über **Plugins**: `.dll`-Dateien, die ausschließlich auf dem Server liegen und dort neue Befehle, Regeln oder Automatismen ergänzen.

:::: info Hinweis
Deine Spieler müssen dafür nichts installieren. Sie verbinden sich weiterhin mit dem ganz normalen Terraria-Client: [Server beitreten](server-beitreten.md).
::::

:::: danger Wichtig
`.tmod`-Dateien funktionieren auf einem tShock-Server **nicht**. Sie gehören zu tModLoader und benötigen einen eigenen Servertyp: [Mods hinzufügen (tModLoader)](../terraria-tmodloader/mods-hinzufuegen.md).
::::

## Plugin herunterladen

1. <b>Passendes Plugin suchen</b><br>
   Eine gepflegte Übersicht verfügbarer Plugins findest du im offiziellen [tShock-Wiki](https://github.com/Pryaxis/TShock/wiki) sowie auf GitHub unter dem Thema [tshock-plugin](https://github.com/topics/tshock-plugin).

2. <b>Version prüfen</b><br>
   Ein Plugin muss zu der tShock-Version passen, die auf deinem Server läuft. Welche Version installiert wird, steuerst du in der Verwaltung über das Feld **tShock Version**.

   :::: warning Achtung
   Passt ein Plugin nicht zur installierten tShock-Version, wird es beim Start nicht geladen oder der Server bricht mit einer Fehlermeldung ab. Prüfe daher immer die Angaben des Entwicklers zur unterstützten Version.
   ::::

3. <b>Datei entpacken</b><br>
   Lade das Plugin herunter und entpacke es, falls es als Archiv vorliegt. Du benötigst die enthaltene `.dll`-Datei. Bringt ein Plugin zusätzliche Bibliotheken mit, gehören auch diese `.dll`-Dateien mit auf den Server.

:::: danger Nur vertrauenswürdige Quellen
Ein Plugin ist ausführbarer Programmcode, der mit den vollen Rechten deines Servers läuft. Lade Plugins deshalb ausschließlich aus offiziellen bzw. bekannten Quellen herunter – auch das tShock-Wiki warnt ausdrücklich davor, Plugins unbekannter Herkunft zu installieren.
::::

## Plugin hochladen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung. Plugins werden nur beim Serverstart geladen.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Plugin-Ordner öffnen</b><br>
   Wechsle in folgendes Verzeichnis:

   ```
   /ServerPlugins/
   ```

   :::: info Hinweis
   Der Ordner wird bei der Installation von tShock angelegt und enthält bereits die Datei `TShockAPI.dll`. Lösche vorhandene Dateien dort nicht – sie gehören zu tShock selbst.
   ::::

4. <b>Datei hochladen</b><br>
   Lade die `.dll`-Datei des Plugins in diesen Ordner hoch.

5. <b>Server starten</b><br>
   Starte deinen Server und beobachte die Serverkonsole. Geladene Plugins werden dort beim Start mit Namen und Version aufgeführt.

## Plugin konfigurieren

Die meisten Plugins legen ihre Konfigurationsdatei beim ersten Start automatisch im Ordner `/tshock/` ab. Gehe also so vor:

1. <b>Server einmal starten</b><br>
   Starte den Server nach dem Hochladen einmal, damit das Plugin seine Dateien anlegt.

2. <b>Server stoppen</b><br>
   Stoppe den Server wieder, bevor du die Konfiguration bearbeitest.

3. <b>Konfiguration anpassen</b><br>
   Öffne die Konfigurationsdatei des Plugins im Ordner `/tshock/` und passe die Werte an.

4. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: tip Tipp
Viele Plugins bringen eigene Befehle mit. Welche Befehle dir zur Verfügung stehen, zeigt dir `/help` im Spiel. Damit auch andere Gruppen die neuen Befehle nutzen dürfen, musst du die zugehörigen Berechtigungen vergeben: [Admin hinzufügen](admin-hinzufuegen.md).
::::

## Plugin entfernen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Datei löschen</b><br>
   Lösche die `.dll`-Datei des Plugins aus dem Ordner `/ServerPlugins/`.

3. <b>Server starten</b><br>
   Starte deinen Server. Das Plugin ist damit deaktiviert.

:::: warning Achtung
Startet dein Server nach dem Hochladen eines Plugins nicht mehr, entferne die zuletzt hinzugefügte `.dll`-Datei wieder. Füge Plugins am besten einzeln hinzu und starte dazwischen den Server – so erkennst du sofort, welches Plugin Probleme macht.
::::

:::: tip Tipp
Erstelle vor größeren Änderungen ein [Backup](backup-erstellen.md) deines Servers.
::::
