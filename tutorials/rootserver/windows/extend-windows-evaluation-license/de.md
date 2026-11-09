---
slug: "windows-evaluationslizenz-verlaengern"
language: "de"
title: "So verlängerst Du die Evaluationslizenz auf Deinem Windows Server"
description: "Die 180-Tage-Evaluationslizenz eines Windows Servers mit slmgr prüfen und verlängern"
tags: []
date: "2026-11-09"
visibility: "public"
cta: "rootserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Windows Evaluationslizenz verlängern"
sort: 4
related: ["rootserver/windows/connect-to-windows-server", "rootserver/windows/open-windows-firewall-ports", "rootserver/windows/windows-hard-drive-expand"]
---

Fährt Dein Windows Server plötzlich etwa jede Stunde von selbst herunter oder siehst Du auf dem Desktop den Hinweis **Windows License is expired**, ist meist die Evaluationslizenz abgelaufen. Diese Anleitung zeigt Dir, wie Du die Lizenz prüfst und verlängerst.

> [!NOTE]
> **Windows Server bei EmeraldHost**
>
> Unsere Windows-Server-Betriebssysteme werden mit der **180-Tage-Evaluationslizenz** von Microsoft bereitgestellt. Nach 180 Tagen läuft die Lizenz ab und muss verlängert oder durch eine eigene Lizenz ersetzt werden.
>
> Wir bieten selbst **keine Windows-Lizenzen** an. Eine eigene Lizenz erwirbst Du direkt bei Microsoft oder einem Microsoft-Händler.

## Voraussetzungen

- Du bist [mit Deinem Windows Server verbunden](/tutorials/rootserver/windows/connect-to-windows-server).
- Du bist als **Administrator** angemeldet.

## Schritt 1: Lizenzstatus prüfen

1. **PowerShell als Administrator öffnen**\
   Klicke mit der rechten Maustaste auf das Startmenü und wähle **Terminal (Administrator)** bzw. **Windows PowerShell (Administrator)**.

2. **Lizenzinformationen anzeigen**\
   Führe den folgenden Befehl aus:

   ```powershell
   slmgr /dlv
   ```

   Nach einigen Sekunden öffnet sich ein Fenster mit den Lizenzinformationen.

3. **Werte ablesen**\
   Achte auf diese Angaben:
   - **Beschreibung** (englisch: **Description**): Enthält sie `EVAL`, läuft Dein Server mit einer Evaluationslizenz.
   - **Verbleibende Rückstellungen** (englisch: **Remaining Windows rearm count**): So oft kannst Du die Lizenz noch verlängern.
   - **Lizenzstatus und Ablaufdatum** (englisch: **License Status** und **Timebased activation expiration**): Ob und wann die Lizenz abläuft.

> [!TIP]
> Solange die Lizenz läuft, zeigt Windows die verbleibenden Tage auch unten rechts auf dem Desktop an.

## Schritt 2: Lizenz verlängern

1. **Lizenz zurücksetzen**\
   Führe in der PowerShell als Administrator aus:

   ```powershell
   slmgr /rearm
   ```

   Ein Fenster bestätigt, dass der Befehl erfolgreich ausgeführt wurde.

2. **Server neu starten**\
   Starte den Server neu, damit die Änderung wirksam wird:

   ```powershell
   Restart-Computer
   ```

3. **Ergebnis prüfen**\
   Verbinde Dich nach dem Neustart erneut und führe `slmgr /dlv` aus. Die Lizenz sollte nun wieder 180 Tage laufen und die Anzahl der verbleibenden Rückstellungen um eins gesunken sein.

> [!WARNING]
> Die Lizenz lässt sich nur so oft verlängern, wie unter **Remaining Windows rearm count** angegeben. Steht dort `0`, meldet `slmgr /rearm` den Fehler `0xC004D307` und eine weitere Verlängerung ist nicht möglich. Dann benötigst Du eine eigene Lizenz (siehe unten) oder eine Neuinstallation des Servers.

> [!NOTE]
> Damit die Lizenz nach dem Zurücksetzen wieder die vollen 180 Tage läuft, muss Dein Server mit dem Internet verbunden sein. Zeigt `slmgr /dlv` nach dem Neustart nur noch wenige Tage an, prüfe die Internetverbindung des Servers.

## Auf eine eigene Lizenz umstellen

Möchtest Du Deinen Windows Server dauerhaft betreiben, kannst Du die Evaluationsversion mit einem gekauften Produktschlüssel in eine Vollversion umwandeln. Dabei bleiben Deine Daten und Programme erhalten. Wie die Umstellung per `DISM` Schritt für Schritt funktioniert, beschreibt Microsoft in der [offiziellen Anleitung zur Umwandlung in eine Vollversion](https://learn.microsoft.com/de-de/windows-server/get-started/upgrade-conversion-options).

> [!WARNING]
> Ist Dein Server ein **Active-Directory-Domänencontroller**, lässt er sich laut Microsoft nicht von der Evaluations- in die Vollversion umwandeln. Erstelle vor der Umstellung außerdem einen Snapshot oder ein Backup Deines Servers.
