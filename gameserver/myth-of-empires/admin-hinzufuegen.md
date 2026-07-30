---
description: Admin auf einem Myth of Empires Server hinzufügen
---

# So fügst du einen Admin auf deinem Myth of Empires Server hinzu

Admins – im Spiel **GM-Accounts** genannt – werden auf einem Myth of Empires Server über ihre **SteamID64** eingetragen. Das ist eine 17-stellige Zahl, die mit `7656` beginnt. Eine Admin-Datei zum Bearbeiten per SFTP gibt es nicht: Die Liste wird beim Serverstart übergeben.

:::: tip Tipp
Hier findest du eine Anleitung, wie du deine [SteamID64](../steamid64-herausfinden.md) herausfindest.
::::

:::: danger Wichtig
Mehrere SteamID64 trennst du durch ein **Semikolon** (`;`) – ohne Leerzeichen dazwischen. Ein Komma als Trennzeichen funktioniert nicht.
::::

## Admin eintragen

1. <b>Verwaltung öffnen</b><br>
   Öffne die **Verwaltung** deines Servers und wechsle zu den **Einstellungen**.

2. <b>SteamID64 eintragen</b><br>
   Trage deine SteamID64 in das Feld für die Admin- beziehungsweise GM-Accounts ein. Bietet deine Verwaltung nur ein Feld für zusätzliche Startparameter, ergänzt du dort:

   ```
   -ServerAdminAccounts=76561198012345678;76561198087654321
   ```

3. <b>GM-Accounts aktivieren</b><br>
   Prüfe, ob in den Einstellungen zusätzlich ein Schalter für die GM-Accounts vorhanden ist (`bUseServerAdmin`). Ist er vorhanden, muss er aktiviert sein, sonst bleibt die Liste wirkungslos.

4. <b>Server neu starten</b><br>
   Speichere die Änderung und starte deinen Server neu. Die Admin-Liste wird nur beim Serverstart eingelesen.

## Adminbefehle im Spiel nutzen

1. <b>Server beitreten</b><br>
   Tritt deinem Server bei, siehe [Server beitreten](server-beitreten.md).

2. <b>Konsole öffnen</b><br>
   Drücke die Taste `~` beziehungsweise `` ` `` – auf einer englischen Tastatur die Taste links neben der `1`. Die Konsole öffnet sich nur, wenn dein Account als Admin eingetragen ist.

   :::: tip Tastatur
   Reagiert die Taste nicht, stelle dein Tastaturlayout auf Englisch (US) um und versuche es erneut.
   ::::

3. <b>Befehl eingeben</b><br>
   Alle Adminbefehle beginnen mit `cheat`, zum Beispiel:

   ```
   cheat SaveWorld
   ```

## Befehle im Überblick

:::: warning Achtung
Für Myth of Empires gibt es **keine offizielle Befehlsübersicht** des Entwicklers. Die folgende Liste stammt aus der Serveradministrations-Community. Je nach Serverversion kann ein einzelner Befehl deshalb abweichen oder fehlen.
::::

| Befehl | Beschreibung |
|--------|-------------|
| `cheat SaveWorld` | Welt sofort speichern |
| `cheat Fly` | Flugmodus aktivieren |
| `cheat Walk` | Flugmodus wieder beenden |
| `cheat Ghost` | Durch Objekte hindurchbewegen |
| `cheat God` | Unverwundbarkeit ein- bzw. ausschalten |
| `cheat Hide` | Für andere Spieler unsichtbar werden |
| `cheat EnableSpectator` | Zuschauermodus aktivieren |
| `cheat DisableSpectator` | Zuschauermodus beenden |
| `cheat GotoPlayer <SteamID64>` | Zu einem Spieler teleportieren |
| `cheat PullPlayer <SteamID64>` | Einen Spieler zu dir teleportieren |
| `cheat GotoPosition <x> <y> <z>` | Zu einer Koordinate teleportieren |
| `cheat AttachPlayerForWatch <SteamID64>` | Einem Spieler zusehen |
| `cheat UnAttachPlayerForWatch` | Zusehen beenden |
| `cheat DestroyTarget` | Anvisiertes Objekt entfernen |
| `cheat StunTarget` | Anvisiertes Ziel betäuben |
| `cheat AddItem <ItemID> <Menge> <Qualität>` | Gegenstand ins eigene Inventar legen |
| `cheat AddItemToPlayer <SteamID64> <ItemID> <Menge> <Qualität>` | Gegenstand einem Spieler geben |
| `cheat AddCopper <SteamID64> <Menge>` | Einem Spieler Kupfermünzen geben |
| `cheat AddExpToPlayer <SteamID64> <XP>` | Einem Spieler Erfahrung geben |
| `cheat EmptyPlayerInventory <SteamID64>` | Inventar eines Spielers leeren |
| `cheat SpawnNPCByIndex <Index> <Distanz> <Level> <Anzahl>` | NPCs erzeugen |
| `cheat KillAllSpawnedNPC` | Alle erzeugten NPCs entfernen |
| `cheat SetServerLevel <Level>` | Server-Level setzen |
| `cheat setTime <HH:MM>` | Uhrzeit in der Welt setzen |
| `cheat setTimeSpeed <Faktor>` | Vergehen der Zeit beschleunigen oder verlangsamen |
| `cheat setWeather <0-15>` | Wetter setzen |

:::: warning Achtung
Adminrechte lassen sich ausschließlich über die Admin-Liste beim Serverstart vergeben. Häufig kursierende Befehle wie `cheat SetAdmin` funktionieren nicht – ein Spieler, der nicht in der Liste steht, kann sich im Spiel keine Adminrechte geben.
::::

:::: info Hinweis
Wird ein Admin nachträglich eingetragen, muss der Server neu gestartet werden. Speichere die Welt vorher mit `cheat SaveWorld` und warte rund 30 bis 45 Sekunden, bevor du den Server stoppst.
::::

:::: tip Tipp
Wie du Spieler als Admin vom Server entfernst, erfährst du unter [Spieler kicken & bannen](spieler-kicken-bannen.md).
::::
