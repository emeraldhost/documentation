---
description: Savegame von einem Terraria tShock Server herunterladen
---

# So lädst du das Savegame deines Terraria tShock Servers herunter

Du kannst die Welt deines Servers jederzeit auf deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung, zum Archivieren oder um sie auf einen anderen Server zu übertragen. tShock verwendet das ganz normale Terraria-Weltformat: Die komplette Welt steckt in **einer einzigen `.wld`-Datei**.

:::: warning Achtung
Stoppe deinen Server, bevor du die Datei herunterlädst. Beim Stoppen über die Verwaltung speichert tShock die Welt sauber ab. Lädst du die Datei im laufenden Betrieb herunter, erwischst du unter Umständen einen unvollständigen Stand.
::::

## Welt herunterladen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Hauptverzeichnis öffnen</b><br>
   Die Weltdatei liegt direkt im Hauptverzeichnis deines Servers:

   ```
   /
   ```

4. <b>Welt herunterladen</b><br>
   Lade die `.wld`-Datei deiner Welt auf deinen PC herunter.

5. <b>Server starten</b><br>
   Starte deinen Server wieder.

:::: tip Welche Datei ist die richtige?
Welche Welt geladen wird, erkennst du am Feld **World Name** in den **Einstellungen** der Verwaltung. Steht dort z.B. `MeineWelt`, benötigst du die Datei `MeineWelt.wld`.
::::

## Weitere Daten, die zum Spielstand gehören

| Pfad | Inhalt |
|------|--------|
| `/<World Name>.wld` | Die Welt selbst – Gelände, Bauten, Truhen, NPCs |
| `/tshock/tshock.sqlite` | Accounts, Gruppen, Banns und – bei aktivierten Server Side Characters – die Charakterdaten der Spieler |
| `/tshock/config.json` | Die Servereinstellungen von tShock |
| `/tshock/backups/` | Die automatischen Weltsicherungen von tShock |

:::: danger Server Side Characters
Sind die Server Side Characters aktiv (Wert `Enabled` in `/tshock/sscconfig.json`), liegen Inventar und Fortschritt der Spieler **nicht** in der `.wld`-Datei, sondern in `/tshock/tshock.sqlite`. Lade in diesem Fall beide Dateien herunter, sonst fehlen dir die Charaktere.
::::

:::: info Sicherungsdateien von tShock
tShock legt zusätzlich in regelmäßigen Abständen eigene Sicherungen im Ordner `/tshock/backups/` ab. Der Dateiname besteht aus dem Weltnamen, der Endung `.wld` und einem Zeitstempel, z.B. `MeineWelt.wld.2026-07-30T12.00.00Z.bak`. Ältere Sicherungen werden nach einer eingestellten Zeit automatisch gelöscht – lade dir wichtige Stände deshalb rechtzeitig herunter.
::::

:::: tip Welt lokal weiterspielen
Kopiere die heruntergeladene `.wld`-Datei auf deinem PC nach `%userprofile%\Documents\My Games\Terraria\Worlds`, um die Welt im Einzelspieler zu öffnen. Unter Linux liegt der Ordner in `~/.local/share/Terraria/Worlds`, unter macOS in `~/Library/Application Support/Terraria/Worlds`.
::::

:::: tip Welt wieder einspielen
Möchtest du die Welt später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](savegame-hinzufuegen.md).
::::

:::: info Regelmäßige Sicherungen
Für automatische bzw. regelmäßige Sicherungen kannst du auch die Backup-Funktion nutzen: [Backup erstellen](backup-erstellen.md).
::::
