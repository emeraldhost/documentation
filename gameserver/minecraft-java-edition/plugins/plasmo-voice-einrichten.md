---
description: Plasmo Voice auf einem Minecraft Java Edition Server einrichten
---

# So richtest du Plasmo Voice auf einem Minecraft Java Server ein

Plasmo Voice bringt Proximity Voice Chat auf deinen Minecraft Server – ähnlich zu Simple Voice Chat, aber mit zusätzlichen Features wie Gruppen und Radios.

:::: warning Achtung
Plasmo Voice benötigt einen **eigenen Port**. Verwende **nicht** den Standard-Port deines Servers!
::::

:::: info Hinweis
Alle Spieler, die Voice Chat nutzen möchten, müssen den [Plasmo Voice Mod](https://modrinth.com/mod/plasmo-voice) ebenfalls installiert haben.
::::

## Schritt 1: Mod/Plugin installieren

1. <b>Mod herunterladen</b><br>
   Lade [Plasmo Voice](https://modrinth.com/plugin/plasmo-voice) für deine Server-Version herunter.
   - Für **Fabric/Forge/NeoForge**: Lade die Mod-Version herunter und lege sie in den `mods`-Ordner.
   - Für **Paper/Folia**: Lade die Plugin-Version herunter und lege sie in den `plugins`-Ordner.

2. <b>Server neu starten</b><br>
   Starte deinen Server neu, damit die Config-Dateien erstellt werden.

## Schritt 2: Port freischalten

1. <b>Netzwerk öffnen</b><br>
   Öffne den Abschnitt **Netzwerk** in deiner Verwaltung. Dort findest du eine Übersicht aller verfügbaren Ports.

2. <b>Port auswählen</b><br>
   Wähle einen freien Port aus und notiere ihn dir.

:::: warning Wichtig
Verwende **nicht** den Standard-Port deines Servers! Plasmo Voice benötigt einen separaten Port.
::::

## Schritt 3: Config-Datei anpassen

1. <b>Config-Datei öffnen</b><br>
   Navigiere im Datei-Browser zur Config-Datei von Plasmo Voice.
   - **Fabric/Forge/NeoForge**: `config/plasmovoice/config.toml`
   - **Paper/Folia**: `plugins/PlasmoVoice/config.toml`

2. <b>Port-Zeile suchen</b><br>
   Öffne die Datei und suche nach der Zeile:
   ```
   port = 0
   ```

3. <b>Port ersetzen</b><br>
   Ersetze `0` mit deinem gewählten Port aus Schritt 2.
   ```
   port = DEIN_PORT
   ```

4. <b>Änderungen speichern</b><br>
   Speichere die Datei.

:::: tip Tipp
Der Standardwert `0` bedeutet, dass Plasmo Voice denselben Port wie dein Minecraft-Server verwendet. Um Konflikte zu vermeiden, empfehlen wir einen dedizierten Port.
::::

## Schritt 4: Server neu starten

1. <b>Server neu starten</b><br>
   Starte deinen Server neu, damit die Änderungen übernommen werden.

2. <b>Konsole prüfen</b><br>
   Überprüfe in der Server-Konsole, ob Plasmo Voice erfolgreich gestartet wurde.
