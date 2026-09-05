---
slug: "screen-nutzen"
language: "de"
title: "So nutzt Du Screen auf Deinem Linux Rootserver / vServer"
description: "Screen auf einem Linux Rootserver / vServer nutzen (Ubuntu/Debian)"
tags: []
date: "2026-04-01"
visibility: "public"
cta: "rootserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Screen nutzen"
sort: 4
related: ["rootserver/services-tools/install-docker", "rootserver/services-tools/install-minecraft-server", "rootserver/services-tools/install-phpmyadmin-apache2-und-mysql", "rootserver/services-tools/install-teamspeak-3-server"]
---

Mit **Screen** kannst Du Terminal-Sitzungen im Hintergrund laufen lassen. So laufen Prozesse wie z.B. ein Minecraft Server weiter, auch wenn Du die SSH-Verbindung schließt.

## Screen installieren

1. **System aktualisieren**\
   Aktualisiere zunächst die Paketlisten:

   ```bash
   sudo apt update
   ```

2. **Screen installieren**\
   Installiere Screen mit folgendem Befehl:

   ```bash
   sudo apt install screen -y
   ```

## Screen verwenden

### Neue Sitzung starten

Starte eine neue Screen-Sitzung mit einem Namen:

```bash
screen -S meine-sitzung
```

Du befindest Dich jetzt in der Screen-Sitzung und kannst Befehle ausführen.

### Sitzung trennen (detach)

Um die Sitzung im Hintergrund weiterlaufen zu lassen, drücke:

```text
Strg + A, dann D
```

Die Sitzung läuft nun im Hintergrund weiter, auch wenn Du die SSH-Verbindung schließt.

### Sitzungen anzeigen

Zeige alle laufenden Screen-Sitzungen an:

```bash
screen -ls
```

### Sitzung wieder öffnen (reattach)

Verbinde Dich mit einer laufenden Sitzung:

```bash
screen -r meine-sitzung
```

### Sitzung beenden

Um eine Sitzung komplett zu beenden, gib innerhalb der Sitzung ein:

```bash
exit
```

## Beispiel: Minecraft Server

1. **Screen-Sitzung starten**\
   Erstelle eine neue Sitzung für den Minecraft Server:

   ```bash
   screen -S minecraft
   ```

2. **Server starten**\
   Navigiere zum Server-Verzeichnis und starte den Server:

   ```bash
   cd /home/minecraft/server
   java -Xmx4G -Xms4G -jar server.jar nogui
   ```

3. **Sitzung trennen**\
   Drücke `Strg + A`, dann `D`. Der Minecraft Server läuft nun im Hintergrund weiter.

4. **Später wieder verbinden**\
   Um die Server-Konsole wieder zu öffnen:

   ```bash
   screen -r minecraft
   ```

## Alle Befehle

| Befehl | Beschreibung |
|--------|-------------|
| `screen -S name` | Neue Sitzung mit Namen starten |
| `screen -ls` | Alle Sitzungen anzeigen |
| `screen -r name` | Mit Sitzung verbinden |
| `Strg + A, D` | Sitzung trennen (detach) |
| `exit` | Sitzung beenden |
