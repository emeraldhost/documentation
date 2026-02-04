---
description: Server-Icon auf einem Minecraft Java Edition Server ändern
---

# So änderst du das Server-Icon auf einem Minecraft Java Server

## Anforderungen an das Icon

Das Server-Icon muss folgende Anforderungen erfüllen:

| Eigenschaft | Anforderung |
|-------------|-------------|
| Dateiname | `server-icon.png` |
| Format | PNG |
| Größe | 64x64 Pixel |

## Wie ändere ich das Server-Icon?

1. <strong>Erstelle ein Bild mit genau 64x64 Pixeln und speichere es als `server-icon.png`.</strong>

2. <strong>Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und lade die Datei `server-icon.png` in das Hauptverzeichnis hoch.</strong>

3. <strong>Starte den Server neu, damit das Icon aktiv wird.</strong>

::: warning Wichtig
Die Datei muss exakt `server-icon.png` heißen und genau 64x64 Pixel groß sein. Andere Formate oder Größen werden nicht erkannt.
:::
