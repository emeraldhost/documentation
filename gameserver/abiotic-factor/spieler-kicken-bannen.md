---
description: Spieler auf einem Abiotic Factor Server kicken und bannen
---

# So kickst und bannst du Spieler auf deinem Abiotic Factor Server

Spieler entfernst du auf einem Abiotic Factor Server über das **Admin-Menü im Spiel**. Chat- oder Konsolenbefehle sind dafür nicht dokumentiert.

:::: info Hinweis
Die Funktionen stehen nur Spielern zur Verfügung, die als Admin eingetragen sind. Siehe [Admin hinzufügen](admin-hinzufuegen.md).
::::

## Spieler kicken oder bannen

1. <b>Als Admin beitreten</b><br>
   Tritt deinem Server mit einem Account bei, der als Admin hinterlegt ist.

2. <b>Menü öffnen</b><br>
   Drücke `Esc`, um das Spielmenü zu öffnen.

3. <b>Admin-Bereich öffnen</b><br>
   Wähle den Tab **Admin**. Dort siehst du die Liste aller verbundenen Spieler.

4. <b>Spieler auswählen</b><br>
   Klicke den Spieler an, den du entfernen möchtest.

5. <b>Aktion wählen</b><br>
   Wähle **Kick** oder **Ban**:

   - **Kick** trennt den Spieler vom Server. Er kann jederzeit wieder beitreten.
   - **Ban** trennt den Spieler und sperrt ihn dauerhaft aus.

## Bann aufheben

Gebannte Spieler verwaltest du ebenfalls über den Admin-Bereich: Öffne dort die Liste der gebannten Spieler (**Banned Players**), wähle den Spieler aus und klicke auf **Unban**. Danach kann er deinem Server sofort wieder beitreten.

:::: info Hinweis
Die genaue Bezeichnung der Liste und der Schaltflächen kann sich mit Spiel-Updates ändern. Such im Admin-Bereich des `Esc`-Menüs nach der Übersicht der gebannten Spieler.
::::

## Bann über die Konfigurationsdatei

Banns werden in derselben Datei gespeichert, in der auch deine Admins stehen – in einem eigenen Abschnitt:

```
/AbioticFactor/Saved/SaveGames/Server/Admin.ini
```

```ini
[BannedPlayers]
BannedPlayer=76561198012345678
```

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Admin.ini bearbeiten</b><br>
   Füge unter `[BannedPlayers]` pro Spieler eine Zeile mit dessen [SteamID64](../steamid64-herausfinden.md) hinzu, oder entferne eine Zeile, um einen Bann aufzuheben.

4. <b>Server starten</b><br>
   Starte deinen Server. Die Banns werden beim Serverstart eingelesen.

:::: warning Achtung
Dieser Weg über die Datei ist **nicht offiziell dokumentiert**. Er wird nur beim Serverstart ausgewertet – einen bereits verbundenen Spieler wirft ein Eintrag in der Datei also nicht sofort vom Server. Nutze zum sofortigen Entfernen das Admin-Menü im Spiel und prüfe nach einem Spiel-Update, ob der Eintrag noch greift.
::::

## Keine Befehle und kein RCON

:::: danger Wichtig
Für Abiotic Factor sind **keine Serverkonsole, keine Chat-Befehle und kein RCON** dokumentiert. Alles, was Kicken und Bannen betrifft, läuft über das Admin-Menü im Spiel oder über die `Admin.ini`. Befehle wie `/kick` oder `/ban` tauchen in der offiziellen Dokumentation nicht auf – verlasse dich nicht auf kursierende Befehlslisten.
::::

:::: tip Tipp
Möchtest du deinen Server generell nur bestimmten Spielern zugänglich machen, setze ein Server-Passwort und gib es nur an diese Personen weiter.
::::
