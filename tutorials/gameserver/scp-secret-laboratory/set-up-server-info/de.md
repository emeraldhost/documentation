---
slug: "server-info-hinterlegen"
language: "de"
title: "So hinterlegst Du die Server-Info auf Deinem SCP: Secret Laboratory Server"
description: "Server-Info über Pastebin auf einem SCP: Secret Laboratory Server hinterlegen"
tags: []
date: "2026-08-24"
visibility: "public"
cta: "gameserver"
product_keys: ["scp-secret-laboratory"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server-Info hinterlegen"
sort: 13
related: ["gameserver/scp-secret-laboratory/plugins-not-loading", "gameserver/scp-secret-laboratory/set-up-reserved-slots", "gameserver/scp-secret-laboratory/set-up-whitelist", "gameserver/scp-secret-laboratory/use-remote-admin"]
---

Die Server-Info ist die Beschreibung Deines Servers, die Spieler im Spiel einsehen können – zum Beispiel Deine Regeln, Kontaktmöglichkeiten oder Besonderheiten Deines Servers. Der Text selbst liegt dabei nicht auf dem Server, sondern in einem Dokument auf [pastebin.com](https://pastebin.com/). In der Datei `config_gameplay.txt` hinterlegst Du lediglich die ID dieses Dokuments über den Schlüssel `serverinfo_pastebin_id`.

> [!WARNING]
> Der Pfad zur Konfigurationsdatei enthält den Game Port Deines Servers: `/.config/SCP Secret Laboratory/config/<Port>/config_gameplay.txt`. Ersetze `<Port>` durch den tatsächlichen Game Port Deines Servers. Den findest Du in der Verwaltung unter **Übersicht**.

## Pastebin-Dokument anlegen

1. **Text vorbereiten**\
   Öffne [pastebin.com](https://pastebin.com/) und füge den Text Deiner Server-Info in das Feld **New Paste** ein. Zur Gestaltung mit Farben, Größen und Links siehe den Abschnitt [Formatierung mit Rich-Text-Tags](#formatierung-mit-rich-text-tags) weiter unten.

2. **Sichtbarkeit und Ablaufdatum setzen**\
   Setze **Paste Exposure** auf `Public` und **Paste Expiration** auf `Never`. Ein Paste mit der Sichtbarkeit `Private` funktioniert nicht – den kannst laut Pastebin nur Du selbst im eingeloggten Zustand sehen.

3. **Paste veröffentlichen**\
   Klicke auf **Create New Paste**.

4. **Pastebin-ID kopieren**\
   Die Pastebin-ID ist die Zeichenfolge am Ende der URL Deines Pastes. Bei `https://pastebin.com/7wV681fT` lautet die ID also `7wV681fT`. Notiere Dir Deine ID.

> [!TIP]
> Lege den Paste über ein kostenloses Pastebin-Konto an. Dann kannst Du den Inhalt später jederzeit bearbeiten – die Pastebin-ID bleibt dabei gleich, Deine Server-Konfiguration musst Du also nicht erneut anfassen.

## Pastebin-ID in der Konfiguration hinterlegen

1. **Game Port herausfinden**\
   Öffne die Verwaltung Deines Servers und notiere Dir den Game Port aus der **Übersicht**.

2. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

3. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

4. **Konfigurationsdatei öffnen**\
   Öffne folgende Datei – ersetze `<Port>` durch Deinen Game Port:

   ```text
   /.config/SCP Secret Laboratory/config/<Port>/config_gameplay.txt
   ```

5. **Pastebin-ID eintragen**\
   Suche die Zeile mit dem Schlüssel `serverinfo_pastebin_id` und trage Deine Pastebin-ID als Wert ein – fehlt der Schlüssel, füge ihn als neue Zeile hinzu:

   ```text
   serverinfo_pastebin_id: 7wV681fT
   ```

   Ersetze `7wV681fT` durch Deine eigene Pastebin-ID.

6. **Server starten**\
   Speichere die Datei und starte Deinen Server über die Verwaltung.

> [!NOTE]
> `7wV681fT` ist der Standardwert des Schlüssels und verweist auf die offizielle Beispiel-Vorlage von Northwood. Solange Du den Wert nicht änderst, zeigt Dein Server diese Vorlage als Server-Info an. Wie Du Konfigurationsdateien generell bearbeitest, zeigt Dir die Anleitung [Konfigurationsdateien bearbeiten](/tutorials/gameserver/scp-secret-laboratory/edit-config-files).

## Formatierung mit Rich-Text-Tags

Die Server-Info unterstützt Rich-Text-Tags, mit denen Du Deinen Text formatieren kannst. Laut dem offiziellen Tech Wiki werden in der Server-Beschreibung folgende Tags unterstützt:

| Tag | Wirkung | Beispiel |
|-----|---------|----------|
| `<color=...>` | Textfarbe – als Farbname oder Hex-Code | `<color=green>Text</color>`, `<color=#ff0000>Text</color>` |
| `<size=...>` | Textgröße | `<size=50>Text</size>` |
| `<b>` | Fett | `<b>Text</b>` |
| `<i>` | Kursiv | `<i>Text</i>` |
| `<u>` | Unterstrichen | `<u>Text</u>` |
| `<mark>` | Hervorgehoben | `<mark>Text</mark>` |
| `<align=...>` | Ausrichtung – `left`, `center` oder `right` | `<align=center>Text</align>` |
| `<link=...>` | Anklickbarer Link | `<link="https://example.com">Text</link>` |

Ein Beispiel, das mehrere Tags kombiniert:

```text
<align=center><size=50><b>Willkommen auf meinem Server!</b></size></align>

<color=#ff0000><b>Regeln:</b></color>
1. Sei respektvoll gegenüber anderen Spielern.
2. Kein Cheating.

Fragen? <link="https://example.com">Kontaktiere unser Team</link>
```

> [!WARNING]
> Tags müssen in umgekehrter Reihenfolge geschlossen werden, in der sie geöffnet wurden – also zum Beispiel `<i><b>Text</b></i>`. Falsch verschachtelte Tags werden nicht korrekt dargestellt.

> [!NOTE]
> Wenn Du Deinen Server von Northwood verifizieren lassen möchtest, muss die Server-Info eine Kontaktmöglichkeit enthalten, über die Spieler Dein Server-Team erreichen können. Mehr dazu in der Anleitung [Server verifizieren lassen](/tutorials/gameserver/scp-secret-laboratory/get-server-verified).

> [!NOTE]
> Änderungen an der `config_gameplay.txt` werden erst nach einem Neustart des Servers übernommen.
