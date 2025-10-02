---
title: GeyserMC mit Floodgate einrichten – Minecraft Java & Bedrock Crossplay
description: Schritt-für-Schritt-Anleitung, wie du für deinen Minecraft Java Edition Server Bedrock Support einrichtest und Crossplay aktivierst.
---

# Minecraft Java mit Bedrock verknüpfen (Crossplay aktivieren)

::: tip Tipp
Manche Paper-Server unterstützen standardmäßig kein Java 17. Füge in diesem Fall folgende Startup-Flag hinzu, um die Abfrage zu umgehen: -DPaper.IgnoreJavaVersion=true
:::

## Anforderungen

### Allgemeine Anforderungen

1. <strong>Einen Minecraft Java Edition Server ab Version 1.16.5.</strong>

2. <strong>Java 17 oder neuer.</strong>

### Benötigte Plugins

1. [GeyserMC](https://geysermc.org/download?project=geyser)

2. [Floodgate](https://geysermc.org/download?project=floodgate)

3. [ViaVersion](https://www.spigotmc.org/resources/viaversion.19254/)

4. [ViaBackwards](https://www.spigotmc.org/resources/viabackwards.27448/)

## Schritt 1: Plugins hochladen

::: info Info
Falls Du den Ordner ```plugins``` nicht siehst, starte Deinen Server einmal, damit der Ordner erstellt wird.
:::

  1. <strong>Öffne Dein Dashboard, wähle Deinen Server aus und gehe zum Datei-Browser **oder** verbinde Dich per SFTP mit Deinem Server. Eine Anleitung hierzu findest du hier: [SFTP-Verbindung herstellen](/gameserver/sftp-verbindung-herstellen.md).</strong>
  
  <img src="/assets/gameserver/minecraft-java-edition/geysermc/1.png" />

  2. <strong>Lade die Plugins in den Ordner ```plugins``` hoch.</strong>

  3. <strong>Starte Deinen Server neu, damit die Plugins geladen werden.</strong>

## Schritt 2: GeyserMC konfigurieren

  1. <strong>Gehe im ```plugins```-Ordner in den ```Geyser-spigot```-Ordner.</strong>

  2. <strong>Öffne die Datei ```config.yml```.</strong>

  3. <strong>Suche nach folgendem Eintrag:</strong>

```
clone-remote-port: false
```

  4. <strong>Ändere den Wert auf ```true```.</strong>

::: tip Tipp
Um Spielern eine bessere Spielerfahrung zu bieten, kannst Du folgende Optionen setzen:

- ```command-suggestions``` auf ```false```
- ```show-cooldown``` auf ```actionbar```
:::

  5. <strong>Suche nach folgendem Eintrag:</strong>

```
auth-type
```

  6. <strong>Ändere den Wert auf ```floodgate```.</strong>

  7. <strong>Speichere die Änderungen.</strong>

## Schritt 3: Floodgate konfigurieren

  1. <strong>Gehe im ```plugins```-Ordner in den ```Floodgate```-Ordner.</strong>

  2. <strong>Lade die Datei ```key.pem``` herunter oder kopiere sie.</strong>

  3. <strong>Füge die Datei ```key.pem``` im ```Geyser-spigot```-Ordner ein.</strong>

::: tip Tipp
Um den Prefix von Bedrock-Spielern im Chat zu ändern, öffne die ```Config.yml``` im Floodgate-Ordner und ändere die Zeile: username-prefix: "_". Trage in die Anführungszeichen deinen gewünschten Prefix ein. Lass einen Prefix bestehen, sonst kann es zu Problemen mit gleichen Spielernamen kommen.
:::

  4. <strong>Speichere die Änderungen.</strong>

## Schritt 4: Chatnachrichten von Bedrock-Spielern erlauben

  1. <strong>Öffne die Datei ```server.properties```.</strong>

  2. <strong>Suche nach folgendem Eintrag:</strong>

```
enforce-secure-profile=true
```

  3. <strong>Ändere den Wert auf ```false```.</strong>

  4. <strong>Speichere die Änderungen.</strong>

## Schritt 5: Fertigstellen & Testen

  1. <strong>Starte den Server neu, damit alle Änderungen aktiv werden.</strong>

  2. <strong>Starte Minecraft Bedrock Edition.</strong>

  3. <strong>Klicke auf „Spielen“ und gehe in den Reiter „Server“.</strong>

  4. <strong>Klicke auf „Server hinzufügen“ und trage die Daten Deines Servers ein:</strong>

```
Servername    # Dein gewünschter Name
Serveradresse    # Deine Server-IP
Port    # Dein Server-Port
```

<img src="/assets/gameserver/minecraft-java-edition/geysermc/2.png" />

  5. <strong>Klicke auf „Server hinzufügen“ und verbinde Dich.</strong>
