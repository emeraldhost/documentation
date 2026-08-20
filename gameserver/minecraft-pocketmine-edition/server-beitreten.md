---
description: Einem Minecraft PocketMine Edition Server beitreten
---

# So trittst du deinem Minecraft PocketMine Edition Server bei

PocketMine-MP ist eine Serversoftware für Minecraft Bedrock Edition. Du verbindest dich also mit einem ganz normalen Bedrock Client, zum Beispiel unter Windows, Android oder iOS. Der Server wird dort einmalig manuell eingetragen.

## Verbindungsdaten finden

:::: info Hinweis
Die IP-Adresse und den Game Port deines Servers findest du in der **Verwaltung** deines Servers. Trage im Spiel immer genau diesen Game Port ein.
::::

:::: danger Wichtig
PocketMine-MP beantwortet Serverabfragen über denselben UDP-Port, auf dem auch das Spiel läuft. Einen getrennten Query Port zum Verbinden gibt es nicht – wer versucht, einen anderen Port einzutragen, kommt nicht auf den Server.
::::

## Server im Spiel hinzufügen

1. <b>Minecraft starten</b><br>
   Starte Minecraft Bedrock Edition auf deinem Gerät.

2. <b>Spielen öffnen</b><br>
   Wähle im Hauptmenü **Play** beziehungsweise **Spielen**.

3. <b>Reiter Server öffnen</b><br>
   Wechsle in den Reiter **Servers** beziehungsweise **Server**.

4. <b>Server hinzufügen</b><br>
   Scrolle nach unten und wähle **Add Server** beziehungsweise **Server hinzufügen**.

5. <b>Verbindungsdaten eintragen</b><br>
   Trage einen frei wählbaren Servernamen sowie die IP-Adresse und den Game Port aus der Verwaltung ein:

   ```
   Server Name:    Mein PocketMine Server
   Server Address: 123.45.67.89
   Port:           Game Port aus der Verwaltung
   ```

6. <b>Speichern</b><br>
   Speichere den Eintrag. Dein Server erscheint anschließend in der Liste unter **Additional Servers** beziehungsweise **Weitere Server**.

7. <b>Beitreten</b><br>
   Wähle deinen Server aus und klicke auf **Join Server** beziehungsweise **Server beitreten**.

## Warum dein Server nicht in der Serverliste auftaucht

:::: info Hinweis
Im Reiter **Server** listet Minecraft unter "Featured Servers" ausschließlich die großen Partner-Server von Mojang. Eigene Server – egal ob gemietet oder selbst betrieben – erscheinen dort grundsätzlich nicht. Du erreichst deinen Server nur über den manuellen Eintrag mit IP-Adresse und Game Port.
::::

## Anmeldung mit Microsoft-Konto

:::: info Hinweis
PocketMine-MP prüft standardmäßig die Xbox-Authentifizierung deiner Spieler. Jeder Spieler muss also in seinem Minecraft Client mit einem Microsoft- beziehungsweise Xbox-Konto angemeldet sein. Gesteuert wird das über den Eintrag `xbox-auth` in der Datei `server.properties` im Hauptordner deines Servers.
::::

## Beitritt von Konsolen

:::: warning Achtung
Auf Xbox, PlayStation und Nintendo Switch lassen sich keine eigenen Server-Adressen eintragen. Spieler auf diesen Konsolen können sich nur über einen speziellen DNS-Dienst oder über eine LAN-Verbindung mit deinem Server verbinden.
::::

## Minecraft Java Edition

:::: danger Wichtig
Clients der **Minecraft Java Edition** können einem PocketMine-Server nicht beitreten. Beide Editionen nutzen unterschiedliche Netzwerkprotokolle – Bedrock kommuniziert über UDP, Java über TCP. Es existieren Plugins, die eine teilweise Unterstützung nachrüsten; laut offizieller PocketMine-Dokumentation ist diese aber ausdrücklich nur teilweise und kein vollwertiger Ersatz.
::::
