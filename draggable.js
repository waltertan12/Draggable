(function (root) {
  'use strict';
  var Draggable = root.Draggable = function (ids) {
    this.ids = ids;
    this.makeNodesDraggable(ids);
  };

  Draggable.prototype.addIds = function (ids) {
    this.makeNodesDraggable(ids);
    this.ids.concat(ids);
  };

  Draggable.prototype.addId = function (id) {
    this.makeNodeDraggable(id);
    this.ids.push(id);
  };

  Draggable.prototype.removeId = (first_argument) => {
    // TODO
  };

  Draggable.prototype.removeIds = (first_argument) => {
    // TODO
  };

  Draggable.prototype.makeNodeDraggable = (id) => {
    node = document.getElementById(id);
    this._addStyling(node)
    this._makeDraggable(node);
  };

  Draggable.prototype.makeNodesDraggable = function (ids) {
    var len = ids.length, i, id, node;
    for (i = 0; i < len; i++) {
      id = ids[i];
      this.makeNodeDraggable(id);
    }
  };

  Draggable.prototype._addStyling = (node) => {
    node = document.getElementById(id);
    node.style.position = "fixed";
    node.style.cursor = "-webkit-grabbing";
  };

  Draggable.prototype._addListeners = (node) => {
    var dragState = false,
        dX, dY;

    // Mouse Listeners
    node.addEventListener("mousedown", function (e) {
      dragState = true;
      var rect = node.getBoundingClientRect();
      dX = e.clientX - rect.left;
      dY = e.clientY - rect.top;
    }, false)

    document.addEventListener("mousemove", function (e) {
      if (dragState) {
        node.style.left = (e.clientX - dX) + "px";
        node.style.top  = (e.clientY - dY) + "px";
      }
    }, false);

    document.addEventListener("mouseup", function (e) {
      dragState = false;
    }, false);

    // Touch Listeners
    node.addEventListener("touchstart", function (e) {
      dragState = true;
      var rect = d.getBoundingClientRect();
      dX = e.targetTouches[0].clientX - rect.left;
      dY = e.targetTouches[0].clientY - rect.top;
    }, false)

    document.addEventListener("touchmove", function (e) {
      if (dragState) {
        node.style.left = (parseInt(e.targetTouches[0].clientX - dX)) + "px";
        node.style.top  = (parseInt(e.targetTouches[0].clientY - dY)) + "px";
      }
    }, false);
  }
})(this);