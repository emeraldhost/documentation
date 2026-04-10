---
description: Shifting Sands DLC auf einem Soulmask Server einrichten
---

# So richtest du Shifting Sands auf deinem Soulmask Server ein

Mit dem **Shifting Sands** DLC kannst du einen Server-Cluster einrichten, der es Spielern ermöglicht, zwischen der Basis-Map (Cloud Mist Forest) und der Shifting Sands Map zu reisen.

:::: warning Achtung
Für einen Cluster benötigst du **zwei Soulmask Server** — einen für jede Map. Alle Spieler müssen das **Shifting Sands DLC** besitzen.
::::

## Voraussetzungen

- Zwei Soulmask Server bei EmeraldHost
- Das Shifting Sands DLC für alle Spieler

## Haupt-Server konfigurieren (Cloud Mist Forest)

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines ersten Servers (Basis-Map).

2. <b>Einstellungen öffnen</b><br>
   Navigiere zu den **Einstellungen**.

3. <b>Server ID setzen</b><br>
   Trage im Feld **[CROSS-MAP] SERVER ID** ein:

   ```
   -serverid=1
   ```

4. <b>Broadcast Address setzen</b><br>
   Trage im Feld **[CROSS-MAP] BROADCAST ADDRESS** ein:

   ```
   -mainserverport=20000
   ```

5. <b>Cross-Server aktivieren</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) und bearbeite die Datei:

   ```
   /WS/Saved/GameplaySettings/GameXishu.json
   ```

   Setze den Wert `KaiQiKuaFu` auf `1`.

6. <b>Server starten</b><br>
   Speichere die Einstellungen und starte den Haupt-Server.

## Client-Server konfigurieren (Shifting Sands)

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines zweiten Servers (Shifting Sands).

2. <b>Einstellungen öffnen</b><br>
   Navigiere zu den **Einstellungen**.

3. <b>Server ID setzen</b><br>
   Trage im Feld **[CROSS-MAP] SERVER ID** ein:

   ```
   -serverid=2
   ```

4. <b>Broadcast Address setzen</b><br>
   Trage im Feld **[CROSS-MAP] BROADCAST ADDRESS** ein:

   ```
   -clientserverconnect=IP:Port
   ```

   Ersetze `IP:Port` durch die IP-Adresse des Haupt-Servers und den **Game Port + 4**.

   :::: tip Beispiel
   Wenn der Game Port des Haupt-Servers `8778` ist:
   ```
   -clientserverconnect=123.45.67.89:8782
   ```
   ::::

5. <b>Map ändern</b><br>
   Stelle sicher, dass die Map auf **DLC_Level01_Main** (Shifting Sands) gesetzt ist.

6. <b>Cross-Server aktivieren</b><br>
   Bearbeite auch auf diesem Server die `GameXishu.json` per [SFTP](../sftp-verbindung-herstellen.md) und setze `KaiQiKuaFu` auf `1`.

7. <b>Server starten</b><br>

   Speichere die Einstellungen und starte den Client-Server.

## Zwischen Maps reisen

Spieler können ingame über die **mysteriöse Insel** ein Portal-Terminal nutzen, um zwischen den Maps zu wechseln.

:::: info Hinweis
Nur Charaktere, die nicht der erste erstellte Charakter sind, können zwischen Servern transferiert werden.
::::

:::: danger Wichtig
Der Haupt-Server muss immer **zuerst gestartet** und **zuletzt gestoppt** werden, um Verbindungsfehler zu vermeiden.
::::
