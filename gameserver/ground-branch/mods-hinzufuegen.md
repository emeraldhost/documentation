---
description: Mods auf einem Ground Branch Server hinzufügen
---

# So fügst du Mods auf deinem Ground Branch Server hinzu

Mods für Ground Branch werden über den **Steam Workshop** bereitgestellt. Auf dem Server trägst du dafür lediglich die **Workshop-IDs** in die Datei `mods.txt` ein – den Rest erledigt der Server beim Start.

:::: info Ab Version 1035.2
Das Verfahren über die `mods.txt` gilt seit dem Update **V1035.2**. Ältere Anleitungen beschreiben andere Wege, die nicht mehr funktionieren.
::::

## Workshop-ID finden

1. <b>Mod im Workshop öffnen</b><br>
   Öffne die gewünschte Mod im [Ground Branch Workshop](https://steamcommunity.com/app/16900/workshop/).

2. <b>ID aus der Adresszeile ablesen</b><br>
   Die Workshop-ID ist die Zahl am Ende der Adresse hinter `?id=`:

   ```
   https://steamcommunity.com/sharedfiles/filedetails/?id=1234567890
   ```

   In diesem Beispiel lautet die ID `1234567890`.

## Mods auf dem Server eintragen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung. Die Modliste wird nur beim Serverstart eingelesen.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>mods.txt öffnen</b><br>
   Öffne folgende Datei. Existiert sie noch nicht, lege sie an:

   ```
   /GroundBranch/ServerConfig/mods.txt
   ```

   :::: info Hinweis
   Der Ordner `ServerConfig` entsteht erst beim ersten Serverstart. Starte deinen Server einmal, falls du ihn nicht findest.
   ::::

4. <b>IDs eintragen</b><br>
   Trage pro Zeile genau eine Workshop-ID ein:

   ```
   1234567890
   9876543210
   ```

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server. Beim Start lädt er die eingetragenen Mods herunter und legt sie im Ordner `GroundBranch/Mods` ab.

:::: warning Achtung
Der erste Start nach dem Hinzufügen neuer Mods dauert länger, weil die Inhalte erst heruntergeladen werden müssen. Warte den Vorgang ab, bevor du beitrittst.
::::

## Was Spieler tun müssen

Nichts von Hand. Beim Beitritt auf einen Server mit Mods führt der Server Browser automatisch einen **Mod-Sync** durch: Der Client abonniert die benötigten Workshop-Inhalte und lädt sie herunter.

:::: info Hinweis
Spieler sehen vorher einen Hinweis, dass der Server Mods verwendet und diese vor dem Beitritt geladen werden. Nach dem Download tritt man ganz normal bei – siehe [Server beitreten](server-beitreten.md).
::::

## Mods entfernen oder aktualisieren

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Zeile entfernen</b><br>
   Lösche die entsprechende Workshop-ID aus der `mods.txt`.

3. <b>Server starten</b><br>
   Starte deinen Server. Änderungen an der Modliste greifen ausschließlich nach einem Neustart – im laufenden Betrieb passiert nichts.

## Fehlerbehebung

Lädt der Server keine Mods, prüfe folgende Punkte:

- Steht in der `mods.txt` **eine ID pro Zeile**, ohne Kommas, Anführungszeichen oder Leerzeichen?
- Handelt es sich um die ID des Workshop-Eintrags und nicht um die des Erstellers?
- Ist die Mod noch im Workshop verfügbar und zur aktuellen Spielversion kompatibel?
- Wurde der Server nach der Änderung **neu gestartet**?
- Wirft die Mod weiterhin Probleme, entferne die IDs testweise einzeln, um die verursachende Mod einzugrenzen.

:::: info Hinweis
Ground Branch kennt zwei Arten von Mods: Inhalte aus dem **Quick Create** (Spielmodi, Missionen, Ausrüstungssets, Übersetzungen) sowie asset-basierte Mods aus dem **Mod Kit**. Beide werden über dieselbe `mods.txt` geladen. Details zu den Mod-Typen findest du im [offiziellen Modding-Wiki](https://wiki.groundbranch.com/en/modding).
::::

:::: tip Tipp
Sichere deine `mods.txt` zusammen mit dem restlichen Ordner `ServerConfig`, bevor du größere Änderungen vornimmst – siehe [Backup erstellen](backup-erstellen.md).
::::
