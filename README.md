# Draggable
A library to make DOM nodes draggable

## Instructions
[Download](https://raw.githubusercontent.com/waltertan12/Draggable/master/draggable.js) and require the Draggable library

```html
<script type="text/javascript" src="./draggable.js"></script>
```

Set an id on the DOM node you want draggable

```html
<div id="drag">
  Drag Me
</div>
```

Create a draggable instance and pass in the ids of the DOM nodes you want draggable
```javascript
var d = new Draggable(["drag"]);
```

You are also able to pass additional ids to the draggable instance using `Draggable#makeNodeDraggable` and `Draggable#makeNodesDraggable`:

```javascript
d.makeNodeDraggable("another-id");
d.makeNodesDraggable(["yet-another-id","wow-such-id"]);
```

Feel free to take a look at an example [here](http://waltertan12.github.io/Draggable)