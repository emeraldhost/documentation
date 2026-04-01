---
description: Screen auf einem Linux Rootserver / vServer nutzen (Ubuntu/Debian)
---

# So nutzt du Screen auf deinem Linux Rootserver / vServer

Mit **Screen** kannst du Terminal-Sitzungen im Hintergrund laufen lassen. So laufen Prozesse wie z.B. ein Minecraft Server weiter, auch wenn du die SSH-Verbindung schließt.

## Screen installieren

1. <b>System aktualisieren</b><br>
   Aktualisiere zunächst die Paketlisten:

   ```bash
   sudo apt update
   ```

2. <b>Screen installieren</b><br>
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

Du befindest dich jetzt in der Screen-Sitzung und kannst Befehle ausführen.

### Sitzung trennen (detach)

Um die Sitzung im Hintergrund weiterlaufen zu lassen, drücke:

```
Strg + A, dann D
```

Die Sitzung läuft nun im Hintergrund weiter, auch wenn du die SSH-Verbindung schließt.

### Sitzungen anzeigen

Zeige alle laufenden Screen-Sitzungen an:

```bash
screen -ls
```

### Sitzung wieder öffnen (reattach)

Verbinde dich mit einer laufenden Sitzung:

```bash
screen -r meine-sitzung
```

### Sitzung beenden

Um eine Sitzung komplett zu beenden, gib innerhalb der Sitzung ein:

```bash
exit
```

## Beispiel: Minecraft Server

1. <b>Screen-Sitzung starten</b><br>
   Erstelle eine neue Sitzung für den Minecraft Server:

   ```bash
   screen -S minecraft
   ```

2. <b>Server starten</b><br>
   Navigiere zum Server-Verzeichnis und starte den Server:

   ```bash
   cd /home/minecraft/server
   java -Xmx4G -Xms4G -jar server.jar nogui
   ```

3. <b>Sitzung trennen</b><br>
   Drücke `Strg + A`, dann `D`. Der Minecraft Server läuft nun im Hintergrund weiter.

4. <b>Später wieder verbinden</b><br>
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
