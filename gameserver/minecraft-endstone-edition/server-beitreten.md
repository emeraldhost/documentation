---
description: Einem Minecraft Endstone Edition Server beitreten
---

# So trittst du deinem Minecraft Endstone Edition Server bei

Endstone startet im Hintergrund den offiziellen Bedrock Dedicated Server. Du verbindest dich deshalb mit einem ganz normalen Minecraft Bedrock Client – zum Beispiel unter Windows, Android oder iOS. Der Server wird dort einmalig manuell mit IP-Adresse und Port eingetragen.

## Verbindungsdaten finden

:::: info Hinweis
Die IP-Adresse und den Game Port deines Servers findest du in der **Verwaltung** deines Servers. Trage im Spiel immer genau diesen Game Port ein.
::::

:::: danger Wichtig
Der Server beantwortet Serverabfragen über denselben UDP-Port, auf dem auch das Spiel läuft. Einen getrennten Query Port zum Verbinden gibt es nicht – trägst du einen anderen Port ein, kommst du nicht auf den Server.
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
   Server Name:    Mein Endstone Server
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

## Erster Start dauert länger

:::: warning Achtung
Beim allerersten Start lädt Endstone zunächst den offiziellen Bedrock Dedicated Server herunter und richtet ihn ein. Das dauert einen Moment – warte, bis in der Konsole der Serverstart abgeschlossen ist, bevor du dich verbindest.
::::

## Beitritt von Konsolen

Konsolen erlauben es nicht, eigene Server-Adressen direkt einzutragen. Über einen DNS-Umweg (BedrockConnect) kannst du die Liste der "Featured Server" so umleiten, dass du deine eigene IP eingeben kannst.

:::: warning Achtung
Du änderst hierbei die DNS-Einstellungen deiner Konsole. Notiere dir vorher die aktuellen Werte, falls du sie später wiederherstellen möchtest.
::::

### DNS-Adressen

| Konsole | Primär | Sekundär |
|---------|--------|----------|
| Xbox One / Series X\|S | `104.238.130.180` | `8.8.8.8` |
| PlayStation 4 / 5 | `45.55.68.52` | `8.8.8.8` |
| Nintendo Switch | `104.238.130.180` | `8.8.8.8` |

### Xbox

1. <b>Netzwerk-Einstellungen öffnen</b><br>
   Gehe zu **Einstellungen → Allgemein → Netzwerkeinstellungen → Erweiterte Einstellungen → DNS-Einstellungen**.

2. <b>Manuell wählen</b><br>
   Wähle **Manuell** und trage die DNS-Adressen aus der Tabelle ein.

3. <b>Speichern und neustarten</b><br>
   Speichere die Einstellung und starte die Xbox neu.

### PlayStation

1. <b>Netzwerk-Einstellungen öffnen</b><br>
   Gehe zu **Einstellungen → Netzwerk → Einstellungen → Internet einrichten**.

2. <b>Verbindung anpassen</b><br>
   Wähle dein Netzwerk aus, öffne die **Erweiterten Einstellungen** und setze die **DNS-Einstellungen** auf **Manuell**.

3. <b>DNS eintragen</b><br>
   Trage die DNS-Adressen aus der Tabelle ein und bestätige.

4. <b>Konsole neustarten</b><br>
   Starte deine Konsole neu.

### Server verbinden

1. <b>Minecraft starten</b><br>
   Öffne Minecraft Bedrock Edition und wechsle in den Reiter **Server**.

2. <b>Featured Server beitreten</b><br>
   Klicke auf einen der angezeigten Featured Server. Du wirst stattdessen zu BedrockConnect weitergeleitet.

3. <b>Eigene IP eingeben</b><br>
   Wähle **Connect to a Server** und gib die IP-Adresse sowie den Game Port deines Servers ein.

## Minecraft Java Edition

:::: danger Wichtig
Clients der **Java Edition** können deinem Server nicht beitreten. Endstone startet den Bedrock Dedicated Server, und beide Editionen nutzen unterschiedliche Netzwerkprotokolle – Bedrock kommuniziert über UDP, Java über TCP.
::::
