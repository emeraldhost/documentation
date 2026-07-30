---
description: Savegame von einem Necesse Server herunterladen
---

# So lädst du das Savegame deines Necesse Servers herunter

Du kannst die Welt deines Servers jederzeit auf deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung, um sie im Einzelspieler weiterzuspielen oder um sie auf einen anderen Server zu übertragen.

:::: warning Achtung
Stoppe deinen Server, bevor du die Welt herunterlädst. Necesse schreibt die Welt-Datei im laufenden Betrieb regelmäßig neu – lädst du währenddessen herunter, kann die Datei unvollständig sein.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Verzeichnis öffnen</b><br>
   Wechsle in folgendes Verzeichnis:

   ```
   /saves/worlds/
   ```

   :::: info Hinweis
   Liegen die Welten deines Servers direkt in `/saves/`, nutze diesen Ordner.
   ::::

4. <b>Welt-Datei herunterladen</b><br>
   Lade die `.zip`-Datei deiner Welt auf deinen PC herunter.

5. <b>Server starten</b><br>
   Starte deinen Server wieder.

:::: info Welche Datei ist die richtige?
Welche Welt dein Server lädt, steht in der Verwaltung unter **Einstellungen** im Feld **Save Name**. Steht dort zum Beispiel `Meine_Welt`, ist `Meine_Welt.zip` deine aktuelle Welt.
::::

:::: warning Achtung
Entpacke die `.zip`-Datei nicht. Sowohl der Server als auch das Spiel erwarten die Welt als gepacktes Archiv.
::::

:::: tip Welt im Einzelspieler weiternutzen
Lege die heruntergeladene `.zip`-Datei in folgendes Verzeichnis, um die Welt lokal zu öffnen:

```
%appdata%\Necesse\saves\worlds
```
::::

:::: tip Konfiguration mitsichern
Möchtest du auch deine Servereinstellungen sichern, lade zusätzlich folgende Datei herunter:

```
/cfg/server.cfg
```
::::

:::: info Regelmäßige Sicherungen
Für automatische bzw. regelmäßige Sicherungen kannst du auch die Backup-Funktion nutzen: [Backup erstellen](backup-erstellen.md).
::::
