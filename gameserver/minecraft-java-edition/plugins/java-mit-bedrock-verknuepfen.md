---
description: Crossplay auf einem Minecraft Java Edition Server aktivieren
---

# So aktivierst du Bedrock-Crossplay auf einem Minecraft Java Server

:::: tip Tipp
Manche Paper-Server unterstützen standardmäßig kein Java 17. Füge in diesem Fall folgende Startup-Flag hinzu, um die Abfrage zu umgehen: -DPaper.IgnoreJavaVersion=true
::::

## Anforderungen

### Allgemeine Anforderungen

1. <b>Einen Minecraft Java Edition Server ab Version 1.16.5.</b><br>

2. <b>Java 17 oder neuer.</b><br>

### Benötigte Plugins

1. [GeyserMC](https://geysermc.org/download?project=geyser)

2. [Floodgate](https://geysermc.org/download?project=floodgate)

3. [ViaVersion](https://www.spigotmc.org/resources/viaversion.19254/)

4. [ViaBackwards](https://www.spigotmc.org/resources/viabackwards.27448/)

## Schritt 1: Plugins hochladen

:::: info Info
Falls Du den Ordner ```plugins``` nicht siehst, starte Deinen Server einmal, damit der Ordner erstellt wird.
::::

  1. <b>Öffne Dein Dashboard, wähle Deinen Server aus und gehe zum Datei-Browser **oder** verbinde Dich per SFTP mit Deinem Server. Eine Anleitung hierzu findest du hier: [SFTP-Verbindung herstellen](/gameserver/sftp-verbindung-herstellen.md).</b><br>
  
  <img src="/assets/gameserver/minecraft-java-edition/geysermc/1.png" />

  2. <b>Lade die Plugins in den Ordner ```plugins``` hoch.</b><br>

  3. <b>Starte Deinen Server neu, damit die Plugins geladen werden.</b><br>

## Schritt 2: GeyserMC konfigurieren

  1. <b>Gehe im ```plugins```-Ordner in den ```Geyser-spigot```-Ordner.</b><br>

  2. <b>Öffne die Datei ```config.yml```.</b><br>

  3. <b>Suche nach folgendem Eintrag:</b><br>

```
clone-remote-port: false
```

  4. <b>Ändere den Wert auf ```true```.</b><br>

:::: tip Tipp
Um Spielern eine bessere Spielerfahrung zu bieten, kannst Du folgende Optionen setzen:

- ```command-suggestions``` auf ```false```
- ```show-cooldown``` auf ```actionbar```
::::

  5. <b>Suche nach folgendem Eintrag:</b><br>

```
auth-type
```

  6. <b>Ändere den Wert auf ```floodgate```.</b><br>

  7. <b>Speichere die Änderungen.</b><br>

## Schritt 3: Floodgate konfigurieren

  1. <b>Gehe im ```plugins```-Ordner in den ```Floodgate```-Ordner.</b><br>

  2. <b>Lade die Datei ```key.pem``` herunter oder kopiere sie.</b><br>

  3. <b>Füge die Datei ```key.pem``` im ```Geyser-spigot```-Ordner ein.</b><br>

:::: tip Tipp
Um den Prefix von Bedrock-Spielern im Chat zu ändern, öffne die ```Config.yml``` im Floodgate-Ordner und ändere die Zeile: username-prefix: "_". Trage in die Anführungszeichen deinen gewünschten Prefix ein. Lass einen Prefix bestehen, sonst kann es zu Problemen mit gleichen Spielernamen kommen.
::::

  4. <b>Speichere die Änderungen.</b><br>

## Schritt 4: Chatnachrichten von Bedrock-Spielern erlauben

  1. <b>Öffne die Datei ```server.properties```.</b><br>

  2. <b>Suche nach folgendem Eintrag:</b><br>

```
enforce-secure-profile=true
```

  3. <b>Ändere den Wert auf ```false```.</b><br>

  4. <b>Speichere die Änderungen.</b><br>

## Schritt 5: Fertigstellen & Testen

  1. <b>Starte den Server neu, damit alle Änderungen aktiv werden.</b><br>

  2. <b>Starte Minecraft Bedrock Edition.</b><br>

  3. <b>Klicke auf „Spielen“ und gehe in den Reiter „Server“.</b><br>

  4. <b>Klicke auf „Server hinzufügen“ und trage die Daten Deines Servers ein:</b><br>

```
Servername    # Dein gewünschter Name
Serveradresse    # Deine Server-IP
Port    # Dein Server-Port
```

<img src="/assets/gameserver/minecraft-java-edition/geysermc/2.png" />

  5. <b>Klicke auf „Server hinzufügen“ und verbinde Dich.</b><br>
