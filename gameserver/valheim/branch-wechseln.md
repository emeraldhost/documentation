---
description: Branch auf einem Valheim Server wechseln
---

# So wechselst du den Branch auf deinem Valheim Server

Du kannst den Branch deines Servers ändern, um eine ältere Version von Valheim zu verwenden.

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

:::: info Hinweis
Alle verfügbaren Branches findest du auf [SteamDB](https://steamdb.info/app/896660/depots/).
::::

## Welt auf dem Stand vor Valheim 1.0 weiterspielen

Mit dem Branch `default_pre1_0` spielst du deine Welt mit der letzten Version vor Valheim 1.0 weiter. Deine Spieler müssen dafür in Steam ebenfalls den Branch `default_pre1_0` auswählen, da sich Valheim 1.0 nicht mit dieser Version verbinden kann.

:::: warning Achtung
Eine Welt, die dein Server bereits mit Valheim 1.0 gespeichert hat, kann er auf diesem Branch nicht laden. Er erstellt dann stattdessen eine neue Welt. Wechsle in diesem Fall zuerst den Branch und spiele erst danach das Backup von vor der Umstellung auf 1.0 ein, siehe [Backups aus der Zeit vor Valheim 1.0](automatisches-backup-wiederherstellen.md#backups-aus-der-zeit-vor-valheim-1-0). Lädt der Server das Backup noch mit Valheim 1.0, wandelt er die Welt beim ersten Speichern erneut um.
::::

## Branch wechseln

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Servers.

2. <b>Einstellungen öffnen</b><br>
   Navigiere zu den **Einstellungen**.

3. <b>Branch eintragen</b><br>
   Trage den gewünschten Branch im Feld **Steam Beta Branch** ein.

   :::: tip Tipp
   Um zum Standard-Branch zurückzukehren, lasse das Feld leer.
   ::::

4. <b>Server neu installieren</b><br>
   Klicke auf das **Drei-Punkte-Menü** deines Servers (neben dem **Updaten**-Button) und wähle **Neuinstallieren**.

:::: warning Achtung
Versteckte Branches (z.B. `public-test`) können nicht ausgewählt werden.
::::
