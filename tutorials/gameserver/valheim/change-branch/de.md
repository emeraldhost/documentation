---
slug: "branch-wechseln"
language: "de"
title: "So wechselst Du den Branch auf Deinem Valheim Server"
description: "Branch auf einem Valheim Server wechseln"
tags: []
date: "2026-02-25"
visibility: "public"
updated: "2026-09-24"
cta: "gameserver"
product_keys: ["valheim"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Branch wechseln"
sort: 4
related: ["gameserver/valheim/add-mods", "gameserver/valheim/add-savegame", "gameserver/valheim/change-backup-settings", "gameserver/valheim/change-server-name"]
---

Du kannst den Branch Deines Servers ändern, um eine ältere Version von Valheim zu verwenden.

## Verfügbare Branches

| Branch | Beschreibung |
|--------|-------------|
| `public` | Offizieller Standard-Branch |
| `default_old` | Letzter stabiler Build vor der aktuellsten Version |
| `default_pre1_0` | Letzter stabiler Build vor Valheim 1.0 (Version 0.221.12) |
| `default_preml` | Letzter stabiler Build vor dem Mistlands-Update |
| `default_precta` | Letzter stabiler Build vor dem Call-To-Arms-Update |
| `default_prebw` | Letzter stabiler Build vor dem Bog-Witch-Update |
| `default_preal` | Letzter stabiler Build vor dem Ashlands-Update |

> [!NOTE]
> Alle verfügbaren Branches findest Du auf [SteamDB](https://steamdb.info/app/896660/depots/).

## Welt auf dem Stand vor Valheim 1.0 weiterspielen

Mit dem Branch `default_pre1_0` spielst Du Deine Welt mit der letzten Version vor Valheim 1.0 weiter. Deine Spieler müssen dafür in Steam ebenfalls den Branch `default_pre1_0` auswählen, da sich Valheim 1.0 nicht mit dieser Version verbinden kann.

> [!WARNING]
> Eine Welt, die Dein Server bereits mit Valheim 1.0 gespeichert hat, kann er auf diesem Branch nicht laden. Er erstellt dann stattdessen eine neue Welt. Wechsle in diesem Fall zuerst den Branch und spiele erst danach das Backup von vor der Umstellung auf 1.0 ein, siehe [Backups aus der Zeit vor Valheim 1.0](/tutorials/gameserver/valheim/restore-automatic-backup#backups-aus-der-zeit-vor-valheim-1-0). Lädt der Server das Backup noch mit Valheim 1.0, wandelt er die Welt beim ersten Speichern erneut um.

## Branch wechseln

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Einstellungen öffnen**\
   Navigiere zu den **Einstellungen**.

3. **Branch eintragen**\
   Trage den gewünschten Branch im Feld **Steam Beta Branch** ein.

   > [!TIP]
   > Um zum Standard-Branch zurückzukehren, lasse das Feld leer.

4. **Server neu installieren**\
   Klicke auf das **Drei-Punkte-Menü** Deines Servers (neben dem **Updaten**-Button) und wähle **Neuinstallieren**.

> [!WARNING]
> Versteckte Branches (z.B. `public-test`) können nicht ausgewählt werden.
