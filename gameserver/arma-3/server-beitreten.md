---
description: Einem Arma 3 Server beitreten
---

# So trittst du deinem Arma 3 Server bei

Frisch gestartete Server tauchen im öffentlichen Serverbrowser häufig erst mit Verzögerung auf. Der schnellste und zuverlässigste Weg auf deinen Server ist deshalb die Direktverbindung über IP-Adresse und Port – entweder im Arma-3-Launcher oder im Spiel selbst.

## Verbindungsdaten finden

:::: danger Wichtig
Für die Verbindung benötigst du die **IP-Adresse** und den **Game Port** deines Servers. Beides findest du in der **Verwaltung** deines Servers. Trage den **Game Port** ein – nicht den Query Port.
::::

Ist für deinen Server ein Passwort gesetzt, brauchst du dieses zusätzlich.

## Über den Arma-3-Launcher verbinden

1. <b>Launcher starten</b><br>
   Starte Arma 3 über Steam. Der Arma-3-Launcher öffnet sich.

2. <b>Serverliste öffnen</b><br>
   Klicke links auf **Servers**.

3. <b>Direct Connect öffnen</b><br>
   Klicke unten auf **Direct Connect**.

4. <b>Serveradresse eintragen</b><br>
   Trage die IP-Adresse deines Servers und den Game Port aus der Verwaltung ein:

   ```
   123.45.67.89
   ```

   :::: info Hinweis
   IP-Adresse und Port haben im Launcher zwei getrennte Felder. Der Port ist dort bereits vorbelegt – ersetze den Wert durch den Game Port aus deiner Verwaltung.
   ::::

5. <b>Passwort eintragen</b><br>
   Ist dein Server passwortgeschützt, trage das Server-Passwort in das entsprechende Feld ein.

6. <b>Verbinden</b><br>
   Bestätige die Eingabe. Der Launcher startet das Spiel und verbindet dich direkt mit deinem Server.

## Über den Serverbrowser im Spiel

1. <b>Arma 3 starten</b><br>
   Starte das Spiel und warte, bis das Hauptmenü geladen ist.

2. <b>Multiplayer öffnen</b><br>
   Wähle im Hauptmenü **Multiplayer** und anschließend **Server Browser**.

3. <b>Direct Connect wählen</b><br>
   Klicke auf **Direct Connect**.

4. <b>Serveradresse eintragen</b><br>
   Trage die IP-Adresse, den Game Port und – falls gesetzt – das Server-Passwort ein.

5. <b>Server beitreten</b><br>
   Nach dem Bestätigen erscheint dein Server im Tab **LAN**. Wähle ihn dort aus und klicke auf **Join**.

   :::: info Hinweis
   Dass der Server im Tab **LAN** auftaucht, ist normal. Arma 3 legt direkt hinzugefügte Server dort ab, unabhängig davon, ob sie im Internet stehen.
   ::::

## Mods müssen übereinstimmen

:::: warning Achtung
Läuft dein Server mit Mods, die über `-mod=` geladen werden, musst du dieselben Mods vor dem Beitritt im Launcher aktivieren. Fehlt ein Mod oder ist eine andere Version aktiv, wirst du beim Verbinden abgewiesen. Wie du Mods einrichtest, erfährst du unter [Mods hinzufügen](mods-hinzufuegen.md).
::::

Mods, die dein Server über `-serverMod=` lädt, laufen ausschließlich serverseitig. Diese musst du als Spieler **nicht** installieren.

## Welche Ports nutzt Arma 3?

:::: info Hinweis
Ein Arma-3-Server belegt mehrere aufeinanderfolgende UDP-Ports. Ausgehend vom Game Port sieht die Aufteilung so aus:

| Port | Verwendung |
|------|------------|
| Game Port | Spieldaten und Voice over Net (VON) – hierüber verbinden sich Spieler |
| Game Port + 1 | Query Port – hierüber fragen Steam und der Serverbrowser den Server ab |
| Game Port + 2 | Steam-Port |
| Game Port + 3 | Reservierter VON-Port – aktuell nicht genutzt |
| Game Port + 4 | BattlEye – hierüber läuft auch RCON |

Welche konkreten Werte für deinen Server gelten, siehst du in der **Verwaltung**. Alle diese Ports werden für deinen Server reserviert.
::::

:::: warning Server wird nicht gefunden
Taucht dein Server im öffentlichen Serverbrowser nicht auf, nutze die Direktverbindung. Über **Direct Connect** erreichst du ihn unabhängig davon, ob er in der öffentlichen Liste erscheint.
::::
