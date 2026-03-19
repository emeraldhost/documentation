---
title: Admins auf deinem ARK Survival Evolved Server hinzufügen
description: Schritt-für-Schritt-Anleitung, wie du Admins auf einem ARK Survival Evolved Server hinzufügst
---

# ARK Survival Evolved Server Admin hinzufügen

::: tip Tipp
Hier findest du eine Anleitung, wie du deine [Steam64ID](../steamid64-herausfinden.md) herausfindest.
:::

## Methode 1: Admin-Passwort (Temporäre Admin-Rechte)

Mit dieser Methode kannst du dich im Spiel als Admin anmelden, indem du das Admin-Passwort eingibst.

1. <strong>Öffne deine Verwaltung und wähle deinen ARK Survival Evolved Server aus.</strong>

2. <strong>Navigiere zu den Einstellungen deines Servers.</strong>

3. <strong>Suche nach der Option ```Admin Passwort``` und setze ein sicheres Passwort.</strong>

4. <strong>Speichere die Änderungen und starte deinen Server neu.</strong>

5. <strong>Im Spiel: Öffne die Konsole mit der Tab-Taste und gib folgenden Befehl ein:</strong>
   ```
   enablecheats DeinAdminPasswort
   ```

::: info Info
Die Admin-Rechte über das Passwort sind nur für die aktuelle Sitzung gültig. Nach einem Neuverbinden musst du das Passwort erneut eingeben.
:::

## Methode 2: Permanente Admins (Steam64ID)

Mit dieser Methode wirst du dauerhaft als Admin hinterlegt und musst kein Passwort eingeben.

1. <strong>Öffne deine Verwaltung und wähle deinen ARK Survival Evolved Server aus.</strong>

2. <strong>Navigiere zum Datei-Browser und öffne den Ordner ```ShooterGame/Saved```.</strong>

3. <strong>Erstelle oder öffne die Datei ```AllowedCheaterSteamIDs.txt```.</strong>

4. <strong>Füge deine Steam64ID in einer neuen Zeile ein.</strong>

5. <strong>Speichere die Datei und starte deinen Server neu, damit die Änderungen übernommen werden.</strong>

::: info Info
Wenn du mehrere Admins hinzufügen möchtest, füge einfach **mehrere Steam64IDs** ein - jede in einer **neuen Zeile**.
:::

## Wichtige Admin-Befehle

Nach dem Aktivieren der Admin-Rechte stehen dir folgende Befehle zur Verfügung:

| Befehl | Beschreibung |
|--------|--------------|
| `cheat fly` | Aktiviert den Flugmodus |
| `cheat walk` | Deaktiviert den Flugmodus |
| `cheat god` | Aktiviert den Unsterblichkeitsmodus |
| `cheat giveresources` | Gibt dir 50 Einheiten jeder Ressource |
| `cheat infinitestats` | Unendlich Ausdauer, Gesundheit, etc. |
| `cheat destroywilddinos` | Entfernt alle wilden Dinos |
