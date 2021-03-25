### @flyoutOnly true


# Schrittzähler (Mint & Pepper, Zürich)

## Introduction @unplugged

In diesem Projekt verwandelst Du den micro:bit in einen einfachen Schrittzähler. 
Jedes *wenn geschüttelt*-Ereignis erhöht eine die Variable *step*. Die Anzahl Schritte wird auf dem Display angezeigt.
Für dieses Projekt schnallst Du den micro:bit mit unserer *Mint&Pepper Halterung* an Dein Bein.

## Step 1 @fullscreen

Für Deinen Schrittzähler benötigst Du eine Variable ``||variable:step||``. In dieser Variable speicherst Du die Anzahl Schritte.

```template
let step = 0
```
```blocks
let step = 0
step = 0
```


## Step 2 @fullscreen

Wenn Du den micro:bit an Dein Bein bindest, wird er bei jedem Schritt geschüttelt. 
Deshalb benützen wir das ``||input:wenn geschüttelt||`` Ereignis um die Schritte zu erkennen.
Füge den Code hinzu jedes Mal den ``||variable:step||`` um 1 zu erhöhen.
    
```blocks    
let step = 0
input.onGesture(Gesture.Shake, function () {
    step += 1
})
step = 0
```

## Step 3 @fullscreen

Wenn Du den Knopf A drückst, siehst Du wie viele Schritte du gemacht hast. 
In den ``||input:wenn Knopf A gedrückt||``-Block fügst Du nun den ``||basic:zeige Zahl||`` hinzu. 
Nun ziehst Du die Variable ``||variable:step||`` in den Block.

```blocks
let step = 0
input.onGesture(Gesture.Shake, function () {
    step += 1
})
basic.forever(function() {
    basic.showNumber(step)
})
step = 0

```

## Step 4 @fullscreen
Geschafft! Mache nun eine Runde ums Haus und schaue nach, wie viele Schritte du gebraucht hat.