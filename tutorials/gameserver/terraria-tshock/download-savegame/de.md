---
slug: "savegame-herunterladen"
language: "de"
title: "So lädst Du das Savegame Deines Terraria tShock Servers herunter"
description: "Savegame von einem Terraria tShock Server herunterladen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["terraria-tshock"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame herunterladen"
sort: 4
related: ["gameserver/terraria-tshock/add-savegame", "gameserver/terraria-tshock/create-backup", "gameserver/terraria-tshock/join-server", "gameserver/terraria-tshock/kick-ban-players"]
---

Du kannst die Welt Deines Servers jederzeit auf Deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung, zum Archivieren oder um sie auf einen anderen Server zu übertragen. tShock verwendet das ganz normale Terraria-Weltformat: Die komplette Welt steckt in **einer einzigen `.wld`-Datei**.

> [!WARNING]
> Stoppe Deinen Server, bevor Du die Datei herunterlädst. Beim Stoppen über die Verwaltung speichert tShock die Welt sauber ab. Lädst Du die Datei im laufenden Betrieb herunter, erwischst Du unter Umständen einen unvollständigen Stand.

## Welt herunterladen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Hauptverzeichnis öffnen**\
   Die Weltdatei liegt direkt im Hauptverzeichnis Deines Servers:

   ```text
   /
   ```

4. **Welt herunterladen**\
   Lade die `.wld`-Datei Deiner Welt auf Deinen PC herunter.

5. **Server starten**\
   Starte Deinen Server wieder.

> [!TIP]
> **Welche Datei ist die richtige?**
>
> Welche Welt geladen wird, erkennst Du am Feld **World Name** in den **Einstellungen** der Verwaltung. Steht dort z.B. `MeineWelt`, benötigst Du die Datei `MeineWelt.wld`.

## Weitere Daten, die zum Spielstand gehören

| Pfad | Inhalt |
|------|--------|
| `/<World Name>.wld` | Die Welt selbst – Gelände, Bauten, Truhen, NPCs |
| `/tshock/tshock.sqlite` | Accounts, Gruppen, Banns und – bei aktivierten Server Side Characters – die Charakterdaten der Spieler |
| `/tshock/config.json` | Die Servereinstellungen von tShock |
| `/tshock/backups/` | Die automatischen Weltsicherungen von tShock |

> [!CAUTION]
> **Server Side Characters**
>
> Sind die Server Side Characters aktiv (Wert `Enabled` in `/tshock/sscconfig.json`), liegen Inventar und Fortschritt der Spieler **nicht** in der `.wld`-Datei, sondern in `/tshock/tshock.sqlite`. Lade in diesem Fall beide Dateien herunter, sonst fehlen Dir die Charaktere.

> [!NOTE]
> **Sicherungsdateien von tShock**
>
> tShock legt zusätzlich in regelmäßigen Abständen eigene Sicherungen im Ordner `/tshock/backups/` ab. Der Dateiname besteht aus dem Weltnamen, der Endung `.wld` und einem Zeitstempel, z.B. `MeineWelt.wld.2026-07-30T12.00.00Z.bak`. Ältere Sicherungen werden nach einer eingestellten Zeit automatisch gelöscht – lade Dir wichtige Stände deshalb rechtzeitig herunter.

> [!TIP]
> **Welt lokal weiterspielen**
>
> Kopiere die heruntergeladene `.wld`-Datei auf Deinem PC nach `%userprofile%\Documents\My Games\Terraria\Worlds`, um die Welt im Einzelspieler zu öffnen. Unter Linux liegt der Ordner in `~/.local/share/Terraria/Worlds`, unter macOS in `~/Library/Application Support/Terraria/Worlds`.

> [!TIP]
> **Welt wieder einspielen**
>
> Möchtest Du die Welt später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](/tutorials/gameserver/terraria-tshock/add-savegame).

> [!NOTE]
> **Regelmäßige Sicherungen**
>
> Für automatische bzw. regelmäßige Sicherungen kannst Du auch die Backup-Funktion nutzen: [Backup erstellen](/tutorials/gameserver/terraria-tshock/create-backup).
