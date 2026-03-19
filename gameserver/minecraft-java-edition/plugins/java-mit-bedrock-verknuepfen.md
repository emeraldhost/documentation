---
description: Crossplay auf einem Minecraft Java Edition Server aktivieren
---

# So aktivierst du Bedrock-Crossplay auf einem Minecraft Java Server

:::: tip Tipp
Manche Paper-Server unterstützen standardmäßig kein Java 17. Füge in diesem Fall folgende Startup-Flag hinzu, um die Abfrage zu umgehen: -DPaper.IgnoreJavaVersion=true
::::

## Anforderungen

### Allgemeine Anforderungen

1. Einen Minecraft Java Edition Server ab Version 1.16.5.

2. Java 17 oder neuer.

### Benötigte Plugins

1. [GeyserMC](https://geysermc.org/download?project=geyser)

2. [Floodgate](https://geysermc.org/download?project=floodgate)

3. [ViaVersion](https://www.spigotmc.org/resources/viaversion.19254/)

4. [ViaBackwards](https://www.spigotmc.org/resources/viabackwards.27448/)

## Schritt 1: Plugins hochladen

:::: info Info
Falls Du den Ordner ```plugins``` nicht siehst, starte Deinen Server einmal, damit der Ordner erstellt wird.
::::

1. <b>Datei-Browser öffnen</b><br>
   Öffne Dein Dashboard, wähle Deinen Server aus und gehe zum Datei-Browser **oder** verbinde Dich per SFTP mit Deinem Server. Eine Anleitung hierzu findest du hier: [SFTP-Verbindung herstellen](/gameserver/sftp-verbindung-herstellen.md).

   <img src="/assets/gameserver/minecraft-java-edition/geysermc/1.png" />

2. <b>Plugins hochladen</b><br>
   Lade die Plugins in den Ordner ```plugins``` hoch.

3. <b>Server neu starten</b><br>
   Starte Deinen Server neu, damit die Plugins geladen werden.

## Schritt 2: GeyserMC konfigurieren

1. <b>Ordner öffnen</b><br>
   Gehe im ```plugins```-Ordner in den ```Geyser-spigot```-Ordner.

2. <b>Config öffnen</b><br>
   Öffne die Datei ```config.yml```.

3. <b>Eintrag suchen</b><br>
   Suche nach folgendem Eintrag:

   ```
   clone-remote-port: false
   ```

4. <b>Wert ändern</b><br>
   Ändere den Wert auf ```true```.

:::: tip Tipp
Um Spielern eine bessere Spielerfahrung zu bieten, kannst Du folgende Optionen setzen:

- ```command-suggestions``` auf ```false```
- ```show-cooldown``` auf ```actionbar```
::::

5. <b>Auth-Type suchen</b><br>
   Suche nach folgendem Eintrag:

   ```
   auth-type
   ```

6. <b>Wert ändern</b><br>
   Ändere den Wert auf ```floodgate```.

7. <b>Änderungen speichern</b><br>
   Speichere die Datei.

## Schritt 3: Floodgate konfigurieren

1. <b>Ordner öffnen</b><br>
   Gehe im ```plugins```-Ordner in den ```Floodgate```-Ordner.

2. <b>Key herunterladen</b><br>
   Lade die Datei ```key.pem``` herunter oder kopiere sie.

3. <b>Key einfügen</b><br>
   Füge die Datei ```key.pem``` im ```Geyser-spigot```-Ordner ein.

:::: tip Tipp
Um den Prefix von Bedrock-Spielern im Chat zu ändern, öffne die ```Config.yml``` im Floodgate-Ordner und ändere die Zeile: username-prefix: "_". Trage in die Anführungszeichen deinen gewünschten Prefix ein. Lass einen Prefix bestehen, sonst kann es zu Problemen mit gleichen Spielernamen kommen.
::::

4. <b>Änderungen speichern</b><br>
   Speichere die Datei.

## Schritt 4: Chatnachrichten von Bedrock-Spielern erlauben

1. <b>Datei öffnen</b><br>
   Öffne die Datei ```server.properties```.

2. <b>Eintrag suchen</b><br>
   Suche nach folgendem Eintrag:

   ```
   enforce-secure-profile=true
   ```

3. <b>Wert ändern</b><br>
   Ändere den Wert auf ```false```.

4. <b>Änderungen speichern</b><br>
   Speichere die Datei.

## Schritt 5: Fertigstellen & Testen

1. <b>Server neu starten</b><br>
   Starte den Server neu, damit alle Änderungen aktiv werden.

2. <b>Bedrock starten</b><br>
   Starte Minecraft Bedrock Edition.

3. <b>Server-Tab öffnen</b><br>
   Klicke auf „Spielen" und gehe in den Reiter „Server".

4. <b>Server hinzufügen</b><br>
   Klicke auf „Server hinzufügen" und trage die Daten Deines Servers ein:

   ```
   Servername    # Dein gewünschter Name
   Serveradresse    # Deine Server-IP
   Port    # Dein Server-Port
   ```

   <img src="/assets/gameserver/minecraft-java-edition/geysermc/2.png" />

5. <b>Verbinden</b><br>
   Klicke auf „Server hinzufügen" und verbinde Dich.
