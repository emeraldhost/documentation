---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem s&box Server"
description: "Spieler auf einem s&box Server kicken und bannen"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["sbox"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 6
related: ["gameserver/sbox/change-gamemode", "gameserver/sbox/change-map", "gameserver/sbox/create-backup", "gameserver/sbox/join-server"]
---

Spieler entfernst Du über die **Server-Konsole** in der Verwaltung Deines Servers. Spieler mit dem Claim `admin` können im offiziellen Sandbox-Modus zusätzlich direkt im Spiel kicken und bannen – siehe [Admin hinzufügen](/tutorials/gameserver/sbox/add-admin).

## Befehle über die Server-Konsole nutzen

1. **Server-Konsole öffnen**\
   Öffne die Verwaltung Deines Servers und wechsle zur **Server-Konsole**.

2. **Spieler anzeigen**\
   Lass Dir die verbundenen Spieler und ihre SteamID64 anzeigen:

   ```text
   status
   ```

3. **Befehl ausführen**\
   Gib den gewünschten Befehl ein, zum Beispiel:

   ```text
   kick 76561198012345678 Regelverstoß
   ```

> [!NOTE]
> Diese Befehle funktionieren nur über die Server-Konsole. Ein normaler Spieler kann sie in der Spielkonsole zwar eintippen, sie bleiben dort aber wirkungslos.

## Spieler kicken

```text
kick <SteamID64 oder Namensteil> [Grund]
```

Als Ziel gibst Du entweder die exakte SteamID64 oder einen Teil des Anzeigenamens an. Ein Kick trennt den Spieler sofort, er kann aber jederzeit wieder beitreten.

> [!TIP]
> Namen mit Leerzeichen oder Sonderzeichen sind unzuverlässig als Suchbegriff. Nutze im Zweifel die SteamID64 aus der `status`-Ausgabe.

## Spieler bannen

```text
ban <SteamID64 oder Namensteil> [Grund]
```

Ein Bann wirft den Spieler sofort vom Server und verhindert, dass er sich erneut verbindet. Gibst Du keinen Grund an, wird `Banned` verwendet.

> [!NOTE]
> Mit einer SteamID64 kannst Du auch Spieler bannen, die gerade nicht verbunden sind. So sperrst Du jemanden vorsorglich aus, bevor er überhaupt beitritt.

> [!IMPORTANT]
> Der Befehl `ban` gehört zum offiziellen Sandbox-Modus (`facepunch.sandbox`) und steht daher nicht in jedem Spielmodus zur Verfügung. `kick` stammt dagegen aus der Engine und funktioniert unabhängig vom Spielmodus.

## Bann aufheben

Es gibt in s&box **keinen `unban`-Befehl**. Gebannte Spieler stehen im Sandbox-Modus in einer Datei auf Deinem Server, die Du von Hand bearbeiten musst.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Bann-Liste öffnen**\
   Öffne folgende Datei:

   ```text
   /data/facepunch/sandbox/bans.json
   ```

4. **Eintrag entfernen**\
   Lösche den Eintrag des Spielers aus der Liste und achte darauf, dass die Datei gültiges JSON bleibt.

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!WARNING]
> Bearbeite die Datei niemals im laufenden Betrieb. Der Server hält die Bann-Liste im Arbeitsspeicher und schreibt sie bei jeder Änderung komplett neu – Deine Bearbeitung wäre damit sofort wieder überschrieben.

> [!NOTE]
> Der Pfad gilt für den offiziellen Sandbox-Modus. Andere Spielmodi speichern ihre Daten unter `/data/<organisation>/<package>/` und verwenden dort eigene Dateinamen.

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `status` | Serverstatus, verbundene Spieler und Lobby-ID anzeigen |
| `kick <SteamID64 oder Namensteil> [Grund]` | Spieler vom Server trennen |
| `ban <SteamID64 oder Namensteil> [Grund]` | Spieler aussperren (Sandbox-Modus) |
| `game <Spielmodus> [Map]` | Spielmodus und Map wechseln |
| `find <Text>` | Verfügbare Befehle und Variablen durchsuchen |
| `quit` | Server beenden |

> [!WARNING]
> `quit` beendet den Serverprozess. Nutze zum Neustarten Deines Servers die Verwaltung.
