---
description: Crossplay auf einem Minecraft Java Edition Server aktivieren
---

# So aktivierst du Bedrock-Crossplay auf einem Minecraft Java Server

Mit den Plugins **GeyserMC** und **Floodgate** können Spieler der Minecraft Bedrock Edition (Smartphone, Konsole, Windows) auf deinem Java-Server mitspielen — auch ohne Java-Account.

:::: warning Achtung
GeyserMC benötigt einen **eigenen Port**. Verwende **nicht** den Standard-Port deines Servers!
::::

## Schritt 1: Plugins installieren

1. <b>Plugins herunterladen</b><br>
   Lade die **Spigot**-Version von [GeyserMC](https://geysermc.org/download?project=geyser) und [Floodgate](https://geysermc.org/download?project=floodgate) herunter.

2. <b>Plugins hochladen</b><br>
   Lade beide Dateien in den Ordner `plugins` hoch. Falls du den Ordner nicht siehst, starte deinen Server einmal, damit er erstellt wird.

3. <b>Server neu starten</b><br>
   Starte deinen Server neu, damit die Config-Dateien erstellt werden.

:::: info Hinweis
Läuft dein Server **nicht** auf der aktuellen Minecraft-Version, installiere zusätzlich [ViaVersion](https://www.spigotmc.org/resources/viaversion.19254/), damit neuere Bedrock-Clients beitreten können.
::::

## Schritt 2: Port freischalten

1. <b>Netzwerk öffnen</b><br>
   Öffne den Abschnitt "Netzwerk" in deiner Verwaltung. Dort findest du eine Übersicht aller verfügbaren Ports.

2. <b>Port auswählen</b><br>
   Wähle einen freien Port aus und notiere ihn dir.

:::: warning Wichtig
Verwende **nicht** den Standard-Port deines Servers! Nutzt du weitere Plugins mit eigenem Port (z.B. [Simple Voice Chat](simple-voice-chat-einrichten.md)), benötigt jedes seinen eigenen Port.
::::

## Schritt 3: GeyserMC konfigurieren

1. <b>Config öffnen</b><br>
   Öffne im Datei-Browser die Datei `plugins/Geyser-Spigot/config.yml`.

2. <b>Port eintragen</b><br>
   Suche im Abschnitt `bedrock:` die Zeile `port:` und trage deinen gewählten Port aus Schritt 2 ein:

   ```yaml
   bedrock:
     port: DEIN_PORT
   ```

3. <b>Auth-Type prüfen</b><br>
   Suche im Abschnitt `java:` die Zeile `auth-type:` und stelle sicher, dass sie auf `floodgate` steht:

   ```yaml
   java:
     auth-type: floodgate
   ```

4. <b>Änderungen speichern</b><br>
   Speichere die Datei.

:::: tip Tipp
Die übrigen Einstellungen kannst du auf den Standardwerten belassen — `address: 0.0.0.0` und `clone-remote-port: false` sind bereits korrekt.
::::

## Schritt 4: Chat für Bedrock-Spieler erlauben

1. <b>Datei öffnen</b><br>
   Öffne die Datei `server.properties`.

2. <b>Eintrag ändern</b><br>
   Suche nach `enforce-secure-profile=true` und ändere den Wert auf `false` — andernfalls können Bedrock-Spieler nicht chatten:

   ```
   enforce-secure-profile=false
   ```

3. <b>Server neu starten</b><br>
   Speichere die Datei und starte deinen Server neu, damit alle Änderungen aktiv werden.

## Schritt 5: Mit Bedrock verbinden

1. <b>Server hinzufügen</b><br>
   Starte Minecraft Bedrock Edition, klicke auf **Spielen**, wechsle in den Reiter **Server** und wähle **Server hinzufügen**.

2. <b>Verbindungsdaten eintragen</b><br>
   Trage als **Serveradresse** die IP-Adresse deines Servers ein und ersetze den vorausgefüllten Port `19132` durch **deinen gewählten Port** aus Schritt 2.

3. <b>Verbinden</b><br>
   Speichere den Server und verbinde dich.

:::: info Hinweis
Bedrock-Spieler erscheinen auf dem Server standardmäßig mit einem `.` vor dem Namen — so kommt es nicht zu Konflikten mit Java-Accounts.
::::

:::: tip Verbindung testen
In der Server-Konsole kannst du mit `geyser connectiontest <Server-IP> <Port>` prüfen, ob dein Bedrock-Port erreichbar ist.
::::

:::: warning Hinweis für bestehende Setups
Nach älteren Anleitungen wurde die Datei `key.pem` aus dem Floodgate-Ordner in den Geyser-Ordner kopiert. Das ist **nicht mehr nötig** — lösche eine dort vorhandene Kopie, da sie zu Verbindungsfehlern führen kann.
::::
