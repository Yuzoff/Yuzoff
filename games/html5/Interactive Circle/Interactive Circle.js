(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("AAAgEIAAAJ");
	this.shape.setTransform(0,40.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0033").s().p("AkaEcQh0h0gCiiIAAgKQACijB0hzQB1h2ClAAQCmAAB2B2QB1B1AAClQAACmh1B2Qh2B1imAAQilAAh1h1g");
	this.shape_1.setTransform(40.1,40.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-1,0,81.2,80.2), null);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlcDjQgVgCgNgGQgTgIgFgQQgDgHAAgQQABgmAJgVQAGgNAMgPQARgVAegaQANgLAIgEQAOgGAMAEIAMAFQAGADASgBQAdgCAgAIQAXAGAKANQAHAKABAVQAAAjgSAVQgEAFgJAHIgrAnQgQAOgJAGQgdASgrAAQgNAAgPgCgAkvAyIgPAKQgUAOgUAZQgSAZgEARQgCAMABAXQAAAKAEAEIAHAFQAOAEARACIAggBQATgBAIgDQAJgDAJgHIAHgGIA2gtIALgLQAQgRgCgYQgBgJgDgEQgEgEgJgDQgcgKglABQgMABgGgCQgJgFgEgBIgCAAQgFAAgHADgAAhDcQgTgBgHgHQgGgHAAgUQAAgigCgzIgGhVQgEhIAAh1QAAgOAFgFIAMgGQAHgCAJgJIAOgMQAJgFAOAAIAXACIAwAGQArAHAZAYQAKAKALARQAkA3AIBPQAHA6gKBUQgEAlgLATQgSAdgvAMQggAIgoACIgRAAIg6gCgAAzjFQgFACgHAGIgLAKQgIAFgCADQgDAEAAAHQgCA1AGBpIACAjIAHCdQAzAGAjgCQAvgDAkgPQAMgFAHgIQALgKAFgbQAHgqAAg8QABglgEgbQgGghgWgyQgQgjgPgNQgHgFgXgKQgMgFgJgCQgGgBgLABIgRAAIgVgFIgKgBQgGAAgEACgANQDGQgCgEgBgLIgCgNQgEgXgJgNQgEgFgDgCQgFgDgKABQgbACgQAFQgBAXADAZQABAJgCAEQgCAFgEACQgFACgEgCQgHgDgDgIQgCgGAAgJIgBgnIABgOQADgJAGgDQADgCAJgBIANgDQANgEAdgBQAIgBAFACIALAHIALAKQAFAHAEAHQAJAUAEAjQAAAJgBACQgDAHgIABQgIAAgEgGgArQDKQgYAAgRgCQgwgHgjgiQgOgOgHgQQgHgQABgjQADhNAIgyQAMhFAag0QANgZAQgOQAVgTAXAAQAIAAAHAFQAHAFgCAHQgCAJgLACIgRACQgQAEgOAXQgXAjgLArQgIAcgHA6IgFAqQgEAfABARQACAbALASQATAfAsALQARAEAWABIAmAAQAlAAAOgDQAqgHAkgeQAigcAXgqQADgGgCgDQgCgFgIAAQhRgGhSAFQgUABgEgKQgCgFADgFQADgEAEgDQAGgDAOAAIA3gBQBOgBAnAGQAWAEAGALQAFAKgKAVQgxBehNAaQgYAJggACIgiAAIgYAAgAGfDAQgsgCgVgTQgNgMgIgVIgOglQgJgXABgLIABgLIgDgJQgBgIAJgEQAEgCAKAAIAqABQAHABAMAGIAlATQANAHAFAFQAKAHADAKIABAOIAAAgQAAANgCAGIgHAPIgHAMQgEAHgGADQgEABgGAAIgGAAgAFjA/QgQADgFAJQAMAoALAUQAFALAGAFQAIAIAPADQAJACASAAIAIgPQAGgMgBgbQgBgKgCgDQgCgDgJgGIgogUIgLgGIgDAAIgIABgAJ+DAQgKgBgFgCQgJgFgIgRQgfAXgmgFQgJgBgEgDQgFgDgGgHQgJgNgBgEQgDgGAAgKQAAgUADgXQABgHACgFQAFgGAHAAQAHgBAEAHQADAFgDAMQgCAMgBAPQAAAWAKAHQAHAEAKgBQAPgCAMgGQAHgDAFgGQAHgJgBgQQgBgMACgGQACgLAJgCQAKgBAEAKQAEAHgCAKIgCASQAAAKAGARQACAFACABIAIACIAJAAQAFABACgBQAJgCADgRQAFgagEgOIgEgKQgBgGABgEQABgGAGgCQAGgDAFADQAFACAEAJQAGANgBAVQAAAbgJATQgDAJgFAFQgIAHgNACIgJAAIgOAAg");
	this.shape.setTransform(141.2183,30.3886);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AzjEpIAApRMAnHAAAIAAJRgAiYAeQgJAEgMALQgfAagQAVQgMAPgGANQgJAVgBAmQAAAQACAHQAGAQATAIQANAGAVACQA+AIAlgYQAKgGAQgOIArgnQAJgHADgFQARgVAAgjQgBgVgHgKQgIgNgXgGQghgIgdACQgRABgHgDIgMgFQgEgBgFAAQgIAAgIADgADFjXIgPAMQgJAJgGACIgNAGQgFAFAAAOQAAB1AEBIIAFBVQAEAzgBAiQAAAUAHAHQAGAHAUABQAwADAagBQApgCAggIQAugMASgdQAMgTAEglQAKhUgHg6QgJhPgkg3QgKgRgKgKQgZgYgrgHIgxgGIgXgCQgNAAgJAFgAPXCGQADACAEAFQAKANADAXIACANQABALACAEQAEAGAIAAQAJgBACgHQABgCAAgJQgDgjgKgUQgDgHgGgHIgLgKIgLgHQgFgCgIABQgcABgOAEIgNADQgIABgEACQgGADgCAJIgBAOIABAnQAAAJACAGQACAIAHADQAFACAEgCQAFgCACgFQACgEgBgJQgDgZAAgXQAQgFAcgCIAEAAQAGAAAEACgAp5jKQgPAOgNAZQgbA0gLBFQgJAygCBNQgBAjAGAQQAHAQAPAOQAjAiAwAHQAQACAYAAQApABARgBQAggCAYgJQBNgaAxheQALgVgGgKQgFgLgWgEQgngGhPABIg2ABQgOAAgGADQgFADgCAEQgDAFACAFQAEAKATgBQBSgFBSAGQAIAAACAFQACADgEAGQgXAqghAcQglAegqAHQgNADglAAIgnAAQgWgBgQgEQgtgLgTgfQgLgSgBgbQgBgRAEgfIAFgqQAHg6AHgcQAMgrAXgjQAOgXAPgEIASgCQALgCACgJQABgHgHgFQgGgFgJAAIgBAAQgWAAgVATgAHZAqQgIAEABAIIADAJIgBALQgCALAKAXIANAlQAJAVANAMQAVATAsACQAKABAGgCQAFgDAFgHIAHgMIAGgPQACgGAAgNIAAggIgBgOQgDgKgJgHQgGgFgNgHIglgTQgMgGgGgBIgqgBQgKAAgFACgAMQDEQAEACAKABQASABAFgBQANgCAIgHQAFgFAEgJQAIgTAAgbQABgVgGgNQgEgJgFgCQgFgDgFADQgGACgCAGQgBAEACAGIADAKQAEAOgFAaQgDARgIACQgDABgEgBIgKAAIgHgCQgCgBgCgFQgGgRAAgKIACgSQABgKgDgHQgFgKgKABQgJACgCALQgBAGABAMQABAQgHAJQgGAGgGADQgMAGgQACQgKABgGgEQgLgHAAgWQABgPADgMQADgMgDgFQgEgHgIABQgHAAgEAGQgDAFgBAHQgDAXABAUQAAAKACAGQACAEAJANQAFAHAGADQAEADAJABQAmAFAegXQAJARAJAFgAiyDQQgSgCgNgEIgIgFQgEgEAAgKQgBgXADgMQAEgRASgZQAUgZATgOIAQgKQAIgDAFAAQAFABAIAFQAGACAMgBQAlgBAdAKQAJADADAEQAEAEABAJQABAYgPARIgMALIg1AtIgIAGQgIAHgJADQgJADgSABIgXABIgJAAgAC8DFIgHidIgCgkQgGhoADg1QAAgHACgEQACgDAJgFIALgKQAGgGAFgCQAIgDAMACIAVAFIASAAQALgBAGABQAJACAMAFQAWAKAHAFQAQANAQAjQAWAyAFAhQAFAbgBAlQAAA8gIAqQgFAbgKAKQgHAIgNAFQgjAPgwADIgTAAQgdAAgmgEgAIoCpQgPgDgJgIQgFgFgGgLQgLgUgLgoQAEgJARgDQAFgBAFAAIAMAGIAnAUQAKAGABADQADADABAKQABAbgGAMIgJAPQgRAAgJgCg");
	this.shape_1.setTransform(125.175,29.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,250.4,59.4), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjfDhQgigIgSgVQgIgJgMgWIgLgZQgFgOgBgUQgCg2AggeQAIgHATgMQASgJAIgDQANgDAfABIAgACQASACANAFQASAGARAOQASAPAJAOQAPAagBAiQgBAXgKAmQgGAVgHAJQgKAPgWAIQgVAIgoABIgLAAQgdAAgUgFgAjSAXQgDADgGABIgTAAQgIACgIAFQgPAKgJASQgIASAAATQAAArAeAiQAIAJAHAFQAMAIAUADQASACAWAAIAhgBQATgDAMgGQAJgFAEgGQADgDADgJQANgoAAgWQACgkgUgWIgOgMQgLgIgJgFQgJgFgWgDQgVgCgdAAQABAEgFAEgAHmDdQgCgFAAgLIgBjXQAAggAIgNQAHgKAPgJQAhgUArgFQAogEApAKQAmAJAWARQAeAXADAgQACAQgKAMQgGAHgPAIQgbAPgRAEQgRAEgbACIhTAFQgiADgUgDIABCSQAAAJgCAFQgDAIgHAAIgBAAQgHAAgEgIgAIOgyQgIAFgDADQgDAEgBAJQgDAVABAhIABAGQACADAGACIAQAAICEgIQANgBAGgDQAGgBAJgGIAPgIIAIgDIAIgEQAIgHgFgOQgIgVgUgLQgQgJgZgHIgegGIgXgBQguAAgoAYgACmDbQgWgGgMgLQgOgNgGgXQgDgPgBgbQgEiQANhuQAEgfAEgXQACgMAFgGQAIgJAIAFQAKAFgFATQgNA9gEBOQgDAwAABcQAAAiADASQADATAJAKQALAOAbADQArAFAjgUQAlgUAQgnQAEgLAEgSQAWhrgjhpQgFgLABgIQACgNAJAAQAMgBAGAVQAMAsAEAWQAQBagWBXQgHAZgHAOQgNAXgZATQgbAVgiAHQgRADgQAAQgSAAgRgEgAo4DAQgpgBgYgEQgjgGgZgPQgggTgSglQgSgjgBgnQgBhGAwhKQAmg7A5gqQAXgRASgCQAOgCAHAHQAFAEAAAGQABAHgFADQgEADgHAAIgMAAQgKAAgPANQg4AvggAtQgnA7gDA7QgBAhAKAcQALAgAXASQAXASAjAHQAYAFApABQAyAAAfgFQAggEASgMQAXgOAMgaQAMgZgFgbQgkgIg1AAQg8ABgegBQgJAAgGgDQgJgEABgIQACgMAVAAIA7AAQBTgBAsAIQALACAEAEQAGAGAAASQgCAegDAOQgFAZgMAQQgLAPgUAMQgdARgqAGQgYADgiAAIgSAAg");
	this.shape.setTransform(132.0401,29.5366);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AzZEzIAAplMAmzAAAIAAJlgAiWgVQgJADgRAKQgTALgJAHQgfAeACA2QABAUAFAOIALAZQALAWAJAJQASAVAiAIQAYAGAjgBQApgBAVgIQAWgIAJgPQAHgJAFgVQALgmAAgXQACgigPgaQgJgOgRgPQgRgNgSgHQgNgFgSgCIgggCIgNAAQgVAAgKACgAKchvQgrAFghAUQgQAJgGAKQgJANAAAgIABDXQABALACAFQAEAJAIgBQAHAAADgIQACgFAAgJIgBiSQAUADAhgDIBTgFQAcgCAQgEQASgEAbgPQAPgIAGgHQAKgLgDgRQgCgggegXQgXgRglgJQgdgHgcAAIgYABgADSjWQgEAGgCAMQgFAXgDAfQgNBuAECQQAAAbAEAPQAGAXANANQAMALAXAGQAgAIAkgHQAhgHAcgVQAZgTANgXQAHgOAGgZQAXhXgQhaQgEgWgNgsQgFgVgMABQgKAAgBANQgBAIAEALQAkBpgWBrQgEASgEALQgQAnglAUQgjAUgsgFQgagDgMgOQgIgKgDgTQgDgSAAgiQAAhbADgxQAEhOANg9QAFgTgKgFIgGgCQgFAAgGAGgAn1jwQgRACgXARQg5AqgnA7QgvBKABBGQABAnASAjQASAlAgATQAYAPAkAGQAYAEAoABQAwABAdgEQAqgGAdgRQAUgMALgPQAMgQAEgZQAEgOACgeQAAgSgGgGQgEgEgMgCQgrgIhTABIg7AAQgWAAgBAMQgBAIAJAEQAFADAKAAQAdABA9gBQA1AAAkAIQAEAbgLAZQgMAagXAOQgSAMghAEQgeAFgzAAQgogBgZgFQgigHgXgSQgXgSgLggQgKgcABghQADg7Ang7QAfgtA4gvQAQgNAJAAIANAAQAHAAAEgDQAFgDgBgHQgBgGgEgEQgGgGgKAAIgGABgAiCC9QgUgDgMgIQgHgFgJgJQgdgiAAgrQAAgTAIgSQAJgSAOgKQAJgFAIgCIATAAQAGgBADgDQAEgEAAgEQAdAAAUACQAXADAJAFQAJAFALAIIANAMQAUAWgCAkQAAAWgNAoQgCAJgDADQgEAGgJAFQgMAGgTADIghABQgWAAgSgCgAJUAYQgFgCgCgDIgBgGQgBghADgVQABgJADgEQADgDAHgFQAzgeA6AHIAfAGQAZAHAPAJQAVALAHAVQAGAOgIAIIgIAEIgJADIgOAHQgJAGgGABQgGADgNABIiEAIIgRAAg");
	this.shape_1.setTransform(124.15,30.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,248.3,61.5), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkaEcQh2h2AAimQAAilB2h1QB1h2ClAAQCmAAB2B2QB1B1AAClQAACmh1B2Qh2B1imAAQilAAh1h1g");
	this.shape.setTransform(40.1,40.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,80.2,80.2), null);


// stage content:
(lib.InteractiveCircle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var proj = this;
		this.circleRed.visible=false;
		this.circleRed.addEventListener("click", colorBack)
		this.circle.addEventListener("click", colorRed);
		this.btnUp.addEventListener("click", goUp);
		this.btnDown.addEventListener("click", goDown);
		
		function goUp() {
			proj.circle.y-=10;
			proj.circleRed.y-=10;
		}
		
		function goDown() {
			proj.circle.y+=10;
			proj.circleRed.y+=10;
		}
		
		function colorRed() {
			proj.circle.visible=false;
			proj.circleRed.visible=true;
		}
		
		function colorBack() {
			proj.circle.visible=true;
			proj.circleRed.visible=false;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btnUp
	this.btnUp = new lib.Symbol2();
	this.btnUp.name = "btnUp";
	this.btnUp.setTransform(146.1,466.7,1,1,0,0,0,124.2,30.7);

	this.timeline.addTween(cjs.Tween.get(this.btnUp).wait(1));

	// btnDown
	this.btnDown = new lib.Symbol3();
	this.btnDown.name = "btnDown";
	this.btnDown.setTransform(147.2,551.1,1,1,0,0,0,125.2,29.7);

	this.timeline.addTween(cjs.Tween.get(this.btnDown).wait(1));

	// circleRed
	this.circleRed = new lib.Symbol4();
	this.circleRed.name = "circleRed";
	this.circleRed.setTransform(151.75,375.7,1,1,0,0,0,40.1,40.1);

	this.timeline.addTween(cjs.Tween.get(this.circleRed).wait(1));

	// circle
	this.circle = new lib.Symbol1();
	this.circle.name = "circle";
	this.circle.setTransform(151.75,375.7,1,1,0,0,0,40.1,40.1);

	this.timeline.addTween(cjs.Tween.get(this.circle).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(171.9,635.6,100.49999999999997,-54.80000000000007);
// library properties:
lib.properties = {
	id: '93969D94F5B670448BDB6B24AE1C4F9D',
	width: 300,
	height: 600,
	fps: 30,
	color: "#0099FF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['93969D94F5B670448BDB6B24AE1C4F9D'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
