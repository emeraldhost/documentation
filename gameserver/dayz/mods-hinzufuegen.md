---
description: Mods auf einem DayZ Server installieren
---

# So installierst du Mods auf einem DayZ Server

Es gibt zwei Methoden, um Mods auf deinem DayZ Server zu installieren: per Modlist-Datei (einfacher) oder manuell (für mehr Kontrolle).

## Methode 1: Modlist-Datei

Diese Methode ist am einfachsten und empfohlen für die meisten Nutzer.

1. **DayZ starten und Mods auswählen**<br>
   Starte DayZ und klicke auf **Mods**.

2. **Gewünschte Mods aktivieren**<br>
   Aktiviere alle Mods, die du auf deinem Server haben möchtest.

3. **Modlist exportieren**<br>
   Klicke auf **More** und wähle **Export list of mods to a file**.

4. **Nur geladene Mods exportieren**<br>
   Wähle **Only loaded mods** und speichere die `.html` Datei.

5. **Server stoppen**<br>
   Stoppe deinen Server über das Webinterface.

6. **Modlist hochladen**<br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und lade die `.html` Datei als `modlist.html` hoch.

7. **Modlist konfigurieren**<br>
   Gehe in die **Einstellungen** über deine Verwaltung und trage den Dateinamen bei **Modliste-Datei (Exportiert aus dem DayZ Launcher)** ein. Standardmäßig ist dort bereits `modlist.html` eingetragen.

8. **Server starten**<br>
   Starte deinen Server.

## Methode 2: Manuelle Installation

Diese Methode bietet mehr Kontrolle und ist nötig für Server-Side-Only Mods.

1. **Mod im Steam Workshop abonnieren**<br>
   Öffne Steam, wähle DayZ aus deiner Bibliothek und gehe zum **Workshop** Tab. Abonniere den gewünschten Mod.

::: warning Hinweis
Manche Mods haben Abhängigkeiten, die zuerst installiert werden müssen.
:::

2. **DayZ starten**<br>
   Starte DayZ, damit die Mods heruntergeladen werden.

3. **Mod-Ordner öffnen**<br>
   Gehe zu **Mods**, wähle einen Mod aus und klicke auf die drei Punkte. Wähle **Open folder**.

4. **Mods komprimieren**<br>
   Komprimiere die gewünschten Mod-Ordner (beginnen mit `@`) in eine `.zip` Datei.

5. **Server stoppen**<br>
   Stoppe deinen Server über das Webinterface.

6. **Mod-Archiv hochladen**<br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und lade die `.zip` Datei hoch.

7. **Archiv entpacken**<br>
   Entpacke die `.zip` Datei auf dem Server.

8. **Bikey-Dateien kopieren**<br>
   Öffne den Mod-Ordner und navigiere zum `Keys` Unterordner. Lade alle `.bikey` Dateien herunter und lade sie in den `/keys` Ordner deines Servers hoch.

9. **Mods aktivieren**<br>
   Gehe in die **Einstellungen** über deine Verwaltung und trage die Mod-Namen unter **Zusätzliche Mods** ein, getrennt durch Semikolon:
   ```
   @CF;@ModName1;@ModName2
   ```

::: tip Hinweis
Mods unter **Zusätzliche Mods** müssen auch von Spielern installiert werden. Mods unter **Mods** sind Server-Side Only und erfordern keine Installation durch Spieler.
:::

10. **Server starten**<br>
    Starte deinen Server.

## Fehlerbehebung

| Problem | Lösung |
|---------|--------|
| Server startet nicht | Prüfe, ob alle Mod-Namen korrekt eingetragen sind |
| Mod Mismatch | Spieler müssen dieselben Mods installiert haben |
| Signatur-Fehler | Prüfe, ob alle `.bikey` Dateien im `/keys` Ordner liegen |
