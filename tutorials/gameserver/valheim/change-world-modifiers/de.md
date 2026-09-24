---
slug: "welt-modifikatoren-aendern"
language: "de"
title: "So änderst Du die Welt-Modifikatoren auf Deinem Valheim Server"
description: "Welt-Modifikatoren auf einem Valheim Server ändern"
tags: []
date: "2026-09-24"
visibility: "public"
cta: "gameserver"
product_keys: ["valheim"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Welt-Modifikatoren ändern"
sort: 18
related: ["gameserver/valheim/add-admin", "gameserver/valheim/reset-world", "gameserver/valheim/add-savegame", "gameserver/valheim/restore-automatic-backup"]
---
Mit den Welt-Modifikatoren passt Du den Schwierigkeitsgrad Deiner Welt an, zum Beispiel die Stärke der Gegner, die Strafe beim Tod, die Menge an Ressourcen, die Häufigkeit von Überfällen oder die Regeln für Portale. Die Modifikatoren werden in der Welt selbst gespeichert. Du kannst sie direkt im Spiel über die Konsole ändern oder eine Welt lokal mit den gewünschten Modifikatoren vorbereiten und auf Deinen Server hochladen.

> [!NOTE]
> Erstelle vor dem Ändern ein [Backup](/tutorials/gameserver/valheim/create-backup), damit Du jederzeit zum vorherigen Stand zurückkehren kannst.

## Modifikatoren im Spiel per Konsole ändern

Auf diesem Weg änderst Du die Modifikatoren Deiner bestehenden Welt, während der Server läuft. Die Änderung wirkt sofort und wird mit der nächsten Speicherung der Welt dauerhaft übernommen.

1. **Admin werden**\
   Trage Dich als Admin auf Deinem Server ein, siehe [Admin hinzufügen](/tutorials/gameserver/valheim/add-admin). Nur Admins dürfen diese Befehle auf dem Server ausführen.

2. **Konsole aktivieren**\
   Aktiviere die Entwicklerkonsole in den Einstellungen des Spiels, falls sie noch nicht aktiv ist.

3. **Server beitreten**\
   Verbinde Dich mit Deinem Server, siehe [Server beitreten](/tutorials/gameserver/valheim/join-server).

4. **Befehl eingeben**\
   Öffne die Konsole mit `F5`, gib einen der folgenden Befehle ein und bestätige mit Enter. Groß- und Kleinschreibung spielt dabei keine Rolle.

### Preset festlegen

```text
setworldpreset <Preset>
```

Mögliche Presets sind `Normal`, `Casual`, `Easy`, `Hard`, `Hardcore`, `Immersive` und `Hammer`. Beispiel:

```text
setworldpreset Hard
```

Ein Preset ersetzt alle bisher gesetzten Welt-Modifikatoren.

### Einzelnen Modifikator ändern

```text
setworldmodifier <Modifikator> <Wert>
```

| Modifikator | Bedeutung | Mögliche Werte |
|-------------|-----------|----------------|
| `Combat` | Kampfschwierigkeit | `VeryEasy`, `Easy`, `Hard`, `VeryHard` |
| `DeathPenalty` | Strafe beim Tod | `Casual`, `VeryEasy`, `Easy`, `Hard`, `Hardcore` |
| `Resources` | Menge an Ressourcen | `MuchLess`, `Less`, `More`, `MuchMore`, `Most` |
| `Raids` | Häufigkeit von Überfällen | `None`, `MuchLess`, `Less`, `More`, `MuchMore` |
| `Portals` | Regeln für Portale | `Casual`, `Hard`, `VeryHard` |

Beispiel:

```text
setworldmodifier Combat Hard
```

### Alle Modifikatoren zurücksetzen

```text
resetworldkeys
```

Setzt alle Welt-Modifikatoren auf den Standard zurück.

> [!WARNING]
> `setworldpreset` und `resetworldkeys` setzen alle Welt-Modifikatoren zurück, auch Schalter wie keine Karte oder keine Baukosten, die in Deiner Welt aktiv sind. Dein Fortschritt bei den Bossen bleibt dabei erhalten.

> [!TIP]
> Einen einzelnen Modifikator kannst Du mit `setworldmodifier` nicht auf den Normalwert zurücksetzen, da `Normal` kein gültiger Wert ist. Setze in diesem Fall mit `resetworldkeys` alle Modifikatoren zurück und lege die gewünschten Modifikatoren danach neu fest. Schalter wie keine Karte stellst Du anschließend über das Menü der Welt-Modifikatoren wieder ein, siehe [Welt mit Modifikatoren vorbereiten und hochladen](#welt-mit-modifikatoren-vorbereiten-und-hochladen).

> [!NOTE]
> Die Befehle werden auf dem Server ausgeführt, daher erhältst Du im Spiel keine Bestätigung. Rückmeldungen des Servers erscheinen in der Konsole in der Verwaltung, bei ungültigen Eingaben zum Beispiel `Invalid preset` oder `Invalid input, possible valid values are: ...`. Bist Du nicht als Admin eingetragen, meldet das Spiel `You are not admin`.

## Welt mit Modifikatoren vorbereiten und hochladen

Auf diesem Weg legst Du die Modifikatoren im Menü der Welt-Modifikatoren des Spiels fest. Hier stehen Dir auch Schalter wie keine Karte oder keine Baukosten zur Verfügung, die Du mit `setworldpreset` und `setworldmodifier` nicht einzeln setzen kannst. Die Modifikatoren werden in der Welt gespeichert und von Deinem Server beim Laden übernommen.

1. **Welt lokal erstellen**\
   Starte Valheim, wähle Deinen Charakter und erstelle in der Weltauswahl eine neue Welt, zum Beispiel mit dem Namen `MeineWelt`.

2. **Welt-Modifikatoren festlegen**\
   Wähle die Welt in der Weltauswahl aus und öffne das Menü der Welt-Modifikatoren. Wähle ein Preset oder stelle die einzelnen Modifikatoren und Schalter ein und bestätige Deine Auswahl.

3. **Welt einmal betreten**\
   Starte die Welt einmal lokal und verlasse sie wieder, damit alle Weltdateien angelegt werden.

4. **Welt hochladen**\
   Lade die Welt auf Deinen Server hoch und trage ihren Namen im Feld **Welt Name** ein, wie in [Savegame hinzufügen](/tutorials/gameserver/valheim/add-savegame) beschrieben.

5. **Server starten**\
   Starte Deinen Server. Er lädt die Welt mit den gewählten Modifikatoren.

> [!TIP]
> Auf dieselbe Weise kannst Du auch die Modifikatoren Deiner bestehenden Server-Welt ändern: Lade den Weltordner mit [Savegame herunterladen](/tutorials/gameserver/valheim/download-savegame) auf Deinen PC herunter, kopiere ihn in das lokale Verzeichnis `%userprofile%\AppData\LocalLow\IronGate\Valheim\worlds_local`, passe die Modifikatoren in der Weltauswahl an und lade die Welt anschließend wieder hoch.

> [!WARNING]
> Starte Deinen Server nach dem Herunterladen erst wieder, wenn Du die geänderte Welt hochgeladen hast. Sonst geht alles verloren, was in der Zwischenzeit auf dem Server passiert. Liegt in Deinem lokalen Verzeichnis `worlds_local` bereits eine Welt mit demselben Namen, verschiebe sie vorher an einen anderen Ort, damit Du sie nicht überschreibst.
