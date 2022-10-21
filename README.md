# Set of missed elemental2-like artifacts:

* audio
* clipboard
* pointerlock
* gamepad
* proxy
* resizeobserver
* permissions
* webxr
* webgpu
* webshare



# elemental2-pointerlock

Generated JsInterop types for J2CL projects to use when interacting with the Pointer lock API. This project
uses the same mechanism as [elemental2](https://github.com/google/elemental2/) to generate its output: 
[jsinterop-generator](https://github.com/google/jsinterop-generator/). 

```xml
<dependency>
    <groupId>org.treblereel.gwt.elemental2</groupId>
    <artifactId>pointerlock</artifactId>
    <version>0.2</version>
</dependency>
```

```java
        final HTMLCanvasElement canvasElement = (HTMLCanvasElement) DomGlobal.document.createElement("canvas");
        canvasElement.style.width = Js.cast(640);
        canvasElement.style.height = Js.cast(360);
        canvasElement.style.backgroundColor = "red";
        DomGlobal.document.body.append(canvasElement);

        canvasElement.addEventListener("click", new EventListener() {
            public void handleEvent(Event evt) {
                PointerlockElement.of(canvasElement).requestPointerLock();
                canvasElement.addEventListener("mousemove", new EventListener() {
                    public void handleEvent(Event evt) {
                        PointerlockMouseEvent event = PointerlockMouseEvent.of(Js.<MouseEvent>uncheckedCast(evt));
                        DomGlobal.console.log("PointerlockMouseEvent " + event.movementX + " " + event.movementY);
                    }
                });
            }
        });
```

and so on ...
