---
description: Einem Sons Of The Forest Server beitreten
---

# So trittst du deinem Sons Of The Forest Server bei

Du kannst deinem Server direkt über die IP-Adresse beitreten oder ihn im Serverbrowser des Spiels suchen. Die Direktverbindung ist die zuverlässigste Variante, da sie unabhängig von der Serverliste funktioniert.

## Verbindungsdaten finden

:::: warning Wichtig
Für die Direktverbindung benötigst du die **IP-Adresse** und den **Gameport** (Standard `8766`) deines Servers. Der **Query Port** (Standard `27016`) wird ausschließlich für die Steam-Serverabfrage verwendet – trage ihn nicht in die Direktverbindung ein. Beide Werte findest du in der Verwaltung deines Servers.
::::

## Über die Direktverbindung

1. <b>Sons Of The Forest starten</b><br>
   Starte das Spiel und warte, bis das Hauptmenü geladen ist.

2. <b>Multiplayer öffnen</b><br>
   Wähle im Hauptmenü **Multiplayer** und anschließend **Join**.

3. <b>Direktverbindung wählen</b><br>
   Klicke unten auf **Direct**.

4. <b>Serveradresse eingeben</b><br>
   Gib die IP-Adresse und den **Gameport** deines Servers ein.

   :::: tip Beispiel
   ```
   123.45.67.89:8766
   ```
   ::::

5. <b>Server beitreten</b><br>
   Klicke auf **Join**. Ist auf dem Server ein Passwort gesetzt, gib es anschließend ein.

## Über den Serverbrowser im Spiel

1. <b>Sons Of The Forest starten</b><br>
   Starte das Spiel.

2. <b>Multiplayer öffnen</b><br>
   Wähle im Hauptmenü **Multiplayer** und anschließend **Join**.

3. <b>Quelle umstellen</b><br>
   Stelle **Source** auf **Dedicated**. Bei den anderen Quellen (P2P, Friends, LAN) wird dein Server nicht angezeigt.

4. <b>Server suchen</b><br>
   Gib im Filterfeld den exakten Namen deines Servers ein.

5. <b>Server beitreten</b><br>
   Wähle deinen Server aus der Liste und klicke auf **Join**.

## Über die Steam-Favoriten

1. <b>Steam öffnen</b><br>
   Öffne den Steam-Client.

2. <b>Server-Browser öffnen</b><br>
   Klicke oben links auf **Anzeige** und wähle **Spielserver**.

3. <b>Server hinzufügen</b><br>
   Wechsle auf den Tab **Favoriten** und klicke auf **Server hinzufügen**.

4. <b>Serveradresse eintragen</b><br>
   Gib die IP-Adresse und den **Query Port** deines Servers ein.

   :::: tip Beispiel
   ```
   123.45.67.89:27016
   ```
   ::::

5. <b>Server beitreten</b><br>
   Starte Sons Of The Forest und wähle deinen Server aus der Favoritenliste aus.

:::: info Hinweis
Nach einem Neustart dauert es einige Minuten, bis dein Server im Serverbrowser auftaucht. Nutze in dieser Zeit die Direktverbindung – sie funktioniert sofort.
::::

:::: warning Server wird nicht gefunden
Steht in der Serverkonfiguration `LanOnly` auf `true`, erscheint dein Server grundsätzlich nicht in der öffentlichen Serverliste. Die Einstellung findest du in der Datei `/serverconfig/dedicatedserver.cfg`, die du per [SFTP](../sftp-verbindung-herstellen.md) bearbeiten kannst.
::::
