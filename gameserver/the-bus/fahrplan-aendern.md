---
description: Fahrplan auf einem The Bus Server ändern
---

# So änderst du den Fahrplan auf einem The Bus Server

Den Fahrplan, im Spiel Betriebsplan (Operating Plan) genannt, änderst du im Spiel über das **Admin-Menü** oder per **Befehl** im Ingame-Chat.

:::: info Hinweis
Karte und Betriebsplan stellst du getrennt ein. Wenn du die Karte änderst, z.B. auf Hamburg, wähle danach einen Betriebsplan, der zur neuen Karte passt. Wie du die Karte wechselst, erfährst du in der Anleitung [Map ändern](map-aendern.md).
::::

## Fahrplan über das Admin-Menü ändern

1. <b>Admin-Menü öffnen</b><br>
   Öffne im Spiel das Pausenmenü und wähle das **Admin-Menü**. Du benötigst Owner- oder Admin-Rechte oder das Admin-Passwort, siehe [Admin hinzufügen](admin-hinzufuegen.md).

2. <b>Betriebsplan auswählen</b><br>
   Wähle im Admin-Menü den gewünschten Betriebsplan aus den verfügbaren Optionen aus.

## Fahrplan per Befehl ändern

Alternativ setzt du den Betriebsplan im Ingame-Chat. Dafür benötigst du Owner- oder Admin-Rechte. Gib folgenden Befehl ein und ersetze `<plan>` durch den gewünschten Betriebsplan:

```
/operatingPlan <plan>
```

:::: tip Tipp
Die genaue Angabe für `<plan>` ist nicht offiziell dokumentiert. Mit `/commands` lässt du dir alle verfügbaren Befehle anzeigen. Die Konsole in der Verwaltung zeigt auf unseren Servern nur die Ausgabe des Servers an und nimmt keine Befehle entgegen.
::::

## Eigene Fahrpläne verwenden

Eigene Fahrpläne oder Fahrpläne aus dem Steam Workshop lädst du wie andere Mods in den Ordner `/TheBus/Mods/` hoch. Wie das genau funktioniert, erfährst du in der Anleitung [Mods hinzufügen](mods-hinzufuegen.md).

:::: warning Achtung
Ist eine Mod als „Client and Server“ markiert, muss sie auch bei jedem Spieler installiert sein, sonst kann er sich nicht mit deinem Server verbinden.
::::
