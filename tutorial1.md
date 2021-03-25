### @flyoutOnly true
### Ghost blocks

# Schrittzähler (Mint & Pepper, Zürich)

## Introduction

In diesem Projekt verwandelst Du den micro:bit in einen einfachen Schrittzähler. 
Jedes *wenn geschüttelt*-Ereignis erhöht eine die Variable *Zähler*. Die Anzahl Schritte wird auf dem Display angezeigt.
Für dieses Projekt schnallst Du den micro:bit mit unserer *Mint&Pepper Halterung* an Dein Bein.

## Step 1

Für Deinen Schrittzähler benötigst Du eine Variable ``||variable:Schritte||``. Hier speicherst Du die Anzahl Schritte.

```blocks
let step = 0
```

## Step 2

Wenn Du den micro:bit an Dein Bein bindest, wird er bei jedem Schritt geschüttelt. 
Deshalb benützen wir das ``||input:wenn geschüttelt||`` Ereignis um die Schritte zu erkennen.
Füge den Code hinzu jedes Mal den ``||variable:Schritte||`` um 1 zu erhöhen.
    
```blocks    
input.onGesture(Gesture.Shake, function () {
    step += 1
})
```

## Step 3

Wenn Du den Knopf A drückst, siehst Du wie viele Schritte du gemacht hast. 
In den ``||input:wenn Knopf A gedrückt||``-Block fügst Du nun den ``||basic:zeige Zahl||`` hinzu. 
Nun ziehst Du die Variable ``||variable:Schritte||`` in den Block.

```blocks
let count = 0
basic.showNumber(count)
input.onButtonPressed(Button.A, () => {
    basic.showNumber(Schritte);
})

```

## Step 4
Geschafft! Mache nun eine Runde ums Haus und schaue nach, wie viele Schritte es gebraucht hat.