(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.boca = function() {
	this.initialize(img.boca);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,93,54);


(lib.bubble_grande_01 = function() {
	this.initialize(img.bubble_grande_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,80);


(lib.fondo_cielo_mar = function() {
	this.initialize(img.fondo_cielo_mar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,1300);


(lib.morena_final = function() {
	this.initialize(img.morena_final);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,218,160);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.Normal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_164 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(164).call(this.frame_164).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.Deformado = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_164 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(164).call(this.frame_164).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.texto_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdA0IgBgDQABgDABgDQABgDAEgEIAXgdQAIgKAEgHQAEgHgBgHQABgJgGgEQgFgEgKAAQgLAAgLACIAAgJQALgDAMAAQAQAAAJAHQAHAHABANQAAAGgCAFQgCAGgEAGIgMAOIgYAdIAuAAIAAAKg");
	this.shape.setTransform(90.1,27.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgmA1QgKgKAAgRQAAgQAKgKQANgLAcAAIAZAAIAAgHQAAgIgBgFQgCgFgDgDQgIgIgQAAQgQAAgRAEIgBgQQASgFASAAQAaAAAMAMQAGAFACAIQADAIAAAMIAABQIgRAAIgBgIQgSAMgUAAQgUAAgLgMgAgVAKQgGAFAAALQAAALAGAFQAHAGAMAAQAGAAAJgCQAIgCAHgEIAAgkIgWAAQgSAAgJAGg");
	this.shape_1.setTransform(243.7,50.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdA/IAAh5IARAAIABAKQAQgOASAAIAIABIAAATIgLgBQgQgBgNAJIAABig");
	this.shape_2.setTransform(233.8,50);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgnA0QgLgKAAgWIAAhSIAVAAIAABQQAAAHACAGQABAEADAEQAGAFAOAAQAHAAAJgCQAJgCAIgDIAAhjIAVAAIAAB6IgSAAIgBgKQgKAGgLAEQgKADgKAAQgUAAgKgLg");
	this.shape_3.setTransform(221.9,50.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAABNQgGgCgEgFQgFgFgCgHQgBgHAAgMIAAhGIgWAAIAAgLIAWgDIAAgdQALgEAJAAIAAAgIAgAAIAAAPIggAAIAABDIAAAOQABAFADADQAEAFAMAAQAJAAAJgCIABAPQgMADgNAAQgJAAgHgCg");
	this.shape_4.setTransform(210.1,48.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdAyQgQgRAAgfQAAggAQgRQAQgRAcAAQAPAAAOAEIgBAQQgPgDgKAAQgVAAgKAMQgKANAAAXQAAAYAKALQAKAMAWAAIANgBIAMgCIACAQIgPADIgQABQgdAAgPgPg");
	this.shape_5.setTransform(199.8,50.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgmA1QgKgKAAgRQAAgQAKgKQANgLAcAAIAZAAIAAgHQAAgIgBgFQgCgFgDgDQgIgIgQAAQgQAAgRAEIgBgQQASgFASAAQAaAAAMAMQAGAFACAIQADAIAAAMIAABQIgRAAIgBgIQgSAMgUAAQgUAAgLgMgAgVAKQgGAFAAALQAAALAGAFQAHAGAMAAQAGAAAJgCQAIgCAHgEIAAgkIgWAAQgSAAgJAGg");
	this.shape_6.setTransform(187.3,50.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgSBbIAAhqIgXAAIAAgLIAXgEIAAgQQAAgXAJgKQAJgLAVAAQALAAAKACIAAAPIgSgBQgNAAgFAFQgDAEgBAFIgBANIAAARIAgAAIAAAPIggAAIAABqg");
	this.shape_7.setTransform(177.5,47.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgnA0QgKgKAAgWIAAhSIAUAAIAABQQAAAHABAGQACAEADAEQAHAFANAAQAHAAAJgCQAJgCAIgDIAAhjIAVAAIAAB6IgSAAIgBgKQgKAGgKAEQgLADgKAAQgUAAgKgLg");
	this.shape_8.setTransform(160.5,50.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAABNQgHgCgDgFQgFgFgCgHQgBgHAAgMIAAhGIgWAAIAAgLIAWgDIAAgdQALgEAJAAIAAAgIAgAAIAAAPIggAAIAABDIAAAOQACAFACADQAEAFAMAAQAIAAAKgCIABAPQgMADgNAAQgJAAgHgCg");
	this.shape_9.setTransform(148.7,48.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAeA/IAAhPQAAgJgBgFQgCgFgDgDQgGgGgOAAQgHAAgJADQgJACgIADIAABjIgVAAIAAh5IASAAIABAJQAJgGALgEQALgDAKAAQAUAAALALQAKAKAAAVIAABTg");
	this.shape_10.setTransform(131.8,50);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgjAyQgQgQAAgiQAAgfAPgQQAOgRAXAAQAZAAANARQANARAAAeIAAAEQAAABAAABQgBAAAAABQAAAAgBAAQAAAAgBAAIhOAAQAAAWALAKQAFAEAHADQAHACALAAQAPAAAPgDIACAPIgRADIgTACQgcAAgPgPgAgVglQgIALAAATIA8AAQAAgTgHgKQgIgLgPAAQgOAAgIAKg");
	this.shape_11.setTransform(118.3,50.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgXA/IgRgDIABgQIAQADIASABQAOAAAIgFQAHgFAAgJQAAgIgGgEQgHgEgNgFIgVgIQgIgCgGgIQgGgHAAgLQAAgSAMgJQANgJATAAIASACIASAEIgCAPQgSgEgPAAQgZAAAAARQAAAIAHAFQAHAEANAEQANAEAIAEQAIADAFAHQAGAHAAALQAAATgNAJQgNAKgWAAIgTgCg");
	this.shape_12.setTransform(100.8,50.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgmA1QgKgKAAgRQAAgQAKgKQANgLAcAAIAZAAIAAgHQAAgIgBgFQgCgFgDgDQgIgIgQAAQgQAAgRAEIgBgQQASgFASAAQAaAAAMAMQAGAFACAIQADAIAAAMIAABQIgRAAIgBgIQgSAMgUAAQgUAAgLgMgAgVAKQgGAFAAALQAAALAGAFQAHAGAMAAQAGAAAJgCQAIgCAHgEIAAgkIgWAAQgSAAgJAGg");
	this.shape_13.setTransform(88.4,50.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgXA/IgRgDIABgQIAQADIASABQAOAAAIgFQAHgFAAgJQAAgIgGgEQgHgEgNgFIgVgIQgIgCgGgIQgGgHAAgLQAAgSAMgJQANgJATAAIASACIASAEIgCAPQgSgEgPAAQgZAAAAARQAAAIAHAFQAHAEANAEQANAEAIAEQAIADAFAHQAGAHAAALQAAATgNAJQgNAKgWAAIgTgCg");
	this.shape_14.setTransform(76.5,50.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgjAyQgQgQAAgiQAAgfAPgQQAOgRAXAAQAZAAANARQANARAAAeIAAAEQAAABAAABQgBAAAAABQAAAAgBAAQAAAAgBAAIhOAAQAAAWALAKQAFAEAHADQAHACALAAQAPAAAPgDIACAPIgRADIgTACQgcAAgPgPgAgVglQgIALAAATIA8AAQAAgTgHgKQgIgLgPAAQgOAAgIAKg");
	this.shape_15.setTransform(64.3,50.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgdA/IAAh5IARAAIABAKQAQgOASAAIAIABIAAATIgLgBQgQgBgNAJIAABig");
	this.shape_16.setTransform(54.2,50);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgzBbIAAiyIASAAIABAJQAJgGAKgDQAKgDAIAAQAXAAAMARQAMARAAAeQAAAhgNAPQgMAQgXAAQgJAAgJgCQgJgDgHgEIAAA+gAgOhGQgJACgHAEIAABOQAFADAJACQAIACAIAAQAPAAAIgLQAHgKAAgaQAAgYgHgLQgIgMgPAAQgGAAgIADg");
	this.shape_17.setTransform(42.8,52.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgeA/IAAh5IASAAIABAKQAPgOATAAIAIABIAAATIgLgBQgQgBgNAJIAABig");
	this.shape_18.setTransform(32,50);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgpAwQgOgRAAgfQAAgeAOgRQAOgRAbAAQAcAAAOARQAOARAAAeQAAAfgOARQgOARgcAAQgbAAgOgRgAgZgjQgIAMAAAXQAAAYAIAMQAIAMARAAQASAAAIgMQAIgMAAgYQAAgXgIgMQgIgMgSAAQgRAAgIAMg");
	this.shape_19.setTransform(20.2,50.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgXA/IgRgDIABgQIAQADIASABQAOAAAIgFQAHgFAAgJQAAgIgGgEQgHgEgNgFIgVgIQgIgCgGgIQgGgHAAgLQAAgSAMgJQANgJATAAIASACIASAEIgCAPQgSgEgPAAQgZAAAAARQAAAIAHAFQAHAEANAEQANAEAIAEQAIADAFAHQAGAHAAALQAAATgNAJQgNAKgWAAIgTgCg");
	this.shape_20.setTransform(7.6,50.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgXA/IgRgDIABgQIAQADIASABQAOAAAIgFQAHgFAAgJQAAgIgGgEQgHgEgNgFIgVgIQgIgCgGgIQgGgHAAgLQAAgSAMgJQANgJATAAIASACIASAEIgCAPQgSgEgPAAQgZAAAAARQAAAIAHAFQAHAEANAEQANAEAIAEQAIADAFAHQAGAHAAALQAAATgNAJQgNAKgWAAIgTgCg");
	this.shape_21.setTransform(208.6,20.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgmBWQgKgKAAgRQAAgQAKgKQANgLAcAAIAZAAIAAgIQAAgIgBgFQgCgEgDgDQgIgHgQAAQgQAAgRADIgBgQQASgEASgBQAaAAAMAMQAGAFACAIQADAHAAAMIAABSIgRAAIgBgJQgSAMgUAAQgUAAgLgMgAgVArQgGAFAAALQAAALAGAGQAHAFAMAAQAGAAAJgCQAIgCAHgDIAAglIgWAAQgSAAgJAGgAgXg6IAsgnIALAQIguAig");
	this.shape_22.setTransform(196.2,17.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgdA/IAAh5IARAAIABAKQAQgOASAAIAHABIAAATIgKgBQgRgBgMAJIAABig");
	this.shape_23.setTransform(186.3,20.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgmBLQgNgRAAgfQAAgdAOgSQANgRAYgBQAGABAKACIAPAGIAAg9IAVAAIAACyIgRAAIgBgIQgIAFgKADQgKADgHAAQgZAAgMgQgAgVgIQgIAMAAAXQgBAYAJALQAIAMAQAAQAGAAAIgCQAIgCAGgDIAAhRIgOgFIgOgBQgRAAgHAMg");
	this.shape_24.setTransform(174.2,18.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAeA/IAAhPQAAgJgBgFQgCgFgDgDQgGgGgOAAQgHAAgJADQgJABgIAEIAABjIgVAAIAAh5IASAAIABAJQAJgGALgEQALgDAKAAQAUAAALALQAKAKAAAVIAABTg");
	this.shape_25.setTransform(160.8,20.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgjAyQgQgQAAgiQAAgfAPgQQAOgRAXAAQAZAAANARQANARAAAeIAAAEQAAABAAABQgBAAAAABQAAAAgBAAQAAAAgBAAIhOAAQAAAWALAKQAFAEAHADQAHACALAAQAPAAAPgDIACAPIgRADIgTACQgcAAgPgPgAgVglQgIALAAATIA8AAQAAgTgHgKQgIgLgPAAQgOAAgIAKg");
	this.shape_26.setTransform(147.4,20.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAABNQgHgCgDgFQgFgFgCgHQgBgHAAgMIAAhGIgWAAIAAgLIAWgDIAAgdQALgEAJAAIAAAgIAgAAIAAAPIggAAIAABDIAAAOQACAFACADQAEAFAMAAQAIAAAKgCIABAPQgMADgNAAQgJAAgHgCg");
	this.shape_27.setTransform(136.1,19.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgpAwQgOgRAAgfQAAgeAOgRQAOgRAbAAQAcAAAOARQAOARAAAeQAAAfgOARQgOARgcAAQgbAAgOgRgAgZgjQgIAMAAAXQAAAYAIAMQAIAMARAAQASAAAIgMQAIgMAAgYQAAgXgIgMQgIgMgSAAQgRAAgIAMg");
	this.shape_28.setTransform(119.3,20.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAeA/IAAhPQAAgJgBgFQgCgFgDgDQgGgGgOAAQgHAAgJADQgJABgIAEIAABjIgVAAIAAh5IASAAIABAJQAJgGALgEQALgDAKAAQAUAAALALQAKAKAAAVIAABTg");
	this.shape_29.setTransform(105.5,20.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgzBBQgQgYAAgpQAAgoAQgYQAQgYAjAAQAkAAAQAYQAQAYAAAoQAAApgQAYQgQAYgkAAQgjAAgQgYgAgigzQgKASAAAhQAAAiAKASQAKASAYAAQAZAAAKgSQAKgSAAgiQAAghgKgSQgKgSgZAAQgYAAgKASg");
	this.shape_30.setTransform(79.4,18.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAeA/IAAhPQAAgJgBgFQgCgFgDgDQgGgGgOAAQgHAAgJADQgJABgIAEIAABjIgVAAIAAh5IASAAIABAJQAJgGALgEQALgDAKAAQAUAAALALQAKAKAAAVIAABTg");
	this.shape_31.setTransform(58.7,20.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgxBWIAAirIBhAAIgCASIhIAAIAAA6IA6AAIAAARIg6AAIAAA8IBLAAIAAASg");
	this.shape_32.setTransform(45.3,18.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.texto_01, new cjs.Rectangle(0,0,252.7,64.5), null);


(lib.o2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// O2-Logo (1).svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AD8G9IAAg1IAhggQAcgZASgVQA6g+AAglQAAgVgQgLQgOgLgWABQgiAAgmAZIgGg2QAWgJAXgGQAZgHAZABQAtAAAbAXQAbAXAAAuQAAAsgpA0QgPAUgYAYIgnAnICBAAIAAAzgAj1ETQhCgdgyg0QgvgzgbhEQgahFgBhKQABhSAahFQAZhEAxgzQAxgyBBgbQBFgcBRgBQBQABBDAcQBCAbAyAyQAvAzAaBEQAaBFAABSQAABKgbBFQgZBEgxAzQgxA0hCAdQhDAdhPAAQhPAAhFgdgAjAk6QgoAVgeAnQgdAmgPAwQgPAvAAA1QAAAxAMAtQAOAxAbAlQAdAoApAXQAtAXA4AAQA3AAAsgXQApgXAcgoQAaglAPgxQANgtAAgxQAAg1gPgvQgQgwgbgmQgegngogVQgrgXgzABQg0gBgrAXg");
	this.shape.setTransform(46.3,44.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.o2, new cjs.Rectangle(0,0,92.5,88.9), null);


(lib.LUZ_MAR_BRILLA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(62,152,255,0.91)","rgba(8,75,249,0)"],[0,1],-17.4,-241.6,0,-18.1,-96.5,185).s().p("EgvLAchQpQs3BByxQA/yzKGpUQKFpUf0gaQfygaPDHaQPDHblSSZQlRSXh3PKUgB4APJgpjAAbIinABUgnPAAAgI8gMdg");
	this.shape.setTransform(355.4,262.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.LUZ_MAR_BRILLA, new cjs.Rectangle(0,0,710.8,524.5), null);


(lib.fondo_mar_cielo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		_stage = this;
		var contenedor=new createjs.Container()
		_stage.addChild(contenedor);
		var clip;
		var orden=0;
		var px
		var py
		createjs.Ticker.addEventListener("tick", crearCosas)
		var lloviendo=true;
		
		function aleatorio(a,b) {
		         return Math.round(Math.random()*(b-a)+parseInt(a));
		}
		
		stage.addEventListener("stagemousedown", function(evt) {
			/*if(lloviendo)
				{
					lloviendo=false
				}else
				{
					lloviendo=true;
				}*/
			
		})
		
		
		function crearCosas(event) {
		 if(lloviendo){	
			var cual=aleatorio(0,1)
			 if(cual==0){
			var clip = new lib.Burbuja2();//lib.LINKAGE
			 }
			 else
			 {
			var clip = new lib.Burbuja2();//lib.LINKAGE	 
			}
			contenedor.addChild(clip);
			clip.name = "cosa_"+orden
			var orden=Math.floor(Math.abs(Math.random()*10+1));
			clip.orden=orden;
			
			 //clip.orden=Math.abs(Math.random()*3+1);
			clip.x = Math.random()*300
			
			clip.y = aleatorio(0,1400)
			clip.addEventListener("tick",moverCosa)
		 }
		}
		function moverCosa(evt)
		{
			var cosa=evt.currentTarget
			cosa.x-=Math.random()*Math.sin(cosa.y)+aleatorio(-2,2);
			cosa.y-=2+Math.random()*2
			cosa.scaleX=cosa.scaleY=aleatorio(0,1)/10
			var orden=Math.abs(Math.random()*3+1);
			//console.log("ORDEN "+cosa.orden);
			cosa.gotoAndStop(cosa.orden)
			//cosa.alpha-=0.06
			if(cosa.y<=660)
				{
					cosa.removeEventListener("tick", moverCosa);
					contenedor.removeChild(cosa)	
				}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// mar cielo
	this.instance = new lib.fondo_cielo_mar();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.fondo_mar_cielo, new cjs.Rectangle(0,0,300,1300), null);


(lib.cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRAzIgNgDIABgJQAMADANAAQAMAAAIgEQAGgFAAgJQAAgGgDgEQgEgEgEgBIgMgFIgQgFQgHgDgDgFQgFgFAAgKQAAgNAJgHQAKgHAPAAIANABIAMACIgBAJQgNgCgKAAQgLAAgHAEQgGAEAAAJQAAAFAEAEQACAEAGACIALAEIAQAGQAGADAFAFQAEAGAAAIQAAAOgJAIQgKAHgRAAIgOgBg");
	this.shape.setTransform(115.2,20.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgbBFQgJgHAAgPQAAgNAIgIQAFgEAHgCQAIgCAKgBIAYAAIAAgHQAAgNgGgHQgGgFgOAAQgMAAgOADIgBgJQAPgEANAAQAUAAAIAJQAIAHAAAQIAABEIgJAAIgBgHQgHAEgIADQgIADgHgBQgPABgJgJgAgKAcQgFABgEADQgFAFAAAKQAAAKAGAFQAGAFALAAQAGAAAHgCQAIgCAGgDIAAgiIgWAAQgIAAgGACgAgRgtIAhgfIAIAKIgkAag");
	this.shape_1.setTransform(105.8,17.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA5AzIAAhAIgBgNQgBgEgDgDQgGgGgMABQgPgBgPAIQACAGAAAIIAABEIgKAAIAAhAIgCgNQgBgEgDgDQgGgGgLABQgGAAgIABIgPAGIAABSIgLAAIAAhhIAJAAIABAHQAGgFAJgCQAJgDAHAAQAJAAAHADQAHACADAGQAIgGAKgCQAJgDAJAAQAHAAAHACQAHACAEAEQAEAEACAGQABAGABAIIAABEg");
	this.shape_2.setTransform(92.9,20);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVAzIAAhhIAJAAIABAIQAHgFAGgDQAIgDAHAAIAFAAIAAALIgHAAQgOgBgKAJIAABRg");
	this.shape_3.setTransform(77.9,20);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgbAmQgLgNAAgZQAAgXAKgOQAKgOATAAQAmAAAAA0IAAABIAAACIgCABIg/AAQAAASAIAJQAJAKARAAQAMAAANgDIABAJIgNADIgOABQgXAAgLgOgAgTgfQgHAKAAARIA2AAQAAgRgHgKQgGgKgOAAQgNAAgHAKg");
	this.shape_4.setTransform(69.2,20.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgOBGQgIgDgHgEIAAAHIgJAAIAAiOIALAAIAAAyQAHgEAHgCQAIgCAGAAQASAAALANQAJANAAAZQAAAdgMANQgJAKgQAAQgIAAgIgDgAgNgSQgIADgGACIAABEQAGADAIACQAHACAGAAQAGAAAHgCQAFgDADgFQAGgLAAgUQAAgWgHgKQgHgJgNAAQgGAAgHACg");
	this.shape_5.setTransform(59.4,18);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgbAsQgJgIAAgPQAAgNAIgHQAFgEAHgCQAIgCAKAAIAYAAIAAgIQAAgOgGgGQgGgFgOgBQgMAAgOAEIgBgKQAPgEANAAQAUAAAIAJQAIAIAAARIAABCIgJAAIgBgGQgHAEgIACQgIADgHAAQgPAAgJgIgAgKACQgFACgEADQgFAEAAAKQAAAKAGAGQAGAEALAAQAGAAAHgCQAIgCAGgCIAAgiIgWAAQgIAAgGABg");
	this.shape_6.setTransform(48.8,20.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgoBBIADgKQAQAFAQAAQAJAAAGgBQAGgCAFgDQAIgHAAgNQAAgIgEgGQgEgGgHgDIgRgJIgTgIQgIgEgEgHQgGgHAAgLQAAgPAJgJQALgLAWAAQAQAAAQAFIgDAJQgOgEgPAAQgeAAAAAYQgBAHAFAGQAEAFAGADIAQAJQANAFAHAEQAIAEAGAIQAFAHAAAMQAAASgMAKQgMAJgUAAQgTAAgSgGg");
	this.shape_7.setTransform(39,18.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Capa 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(2,1,1).p("ArHi0IWPAAQAyAAAAAyIAAEFQAAAygyAAI2PAAQgyAAAAgyIAAkFQAAgyAyAAg");
	this.shape_8.setTransform(76.2,18.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,154.5,38.1);


(lib.Burbuja2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(69,69,69,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.525,1],5.5,-22.6,0,5.5,-22.6,102.2).s().p("AvjOLQtD3tX3rCIXPiwQGYaFx1LaQmMJKlpAAQlqAAlHpKg");
	this.shape.setTransform(-1.4,0.4,0.12,0.12);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Burbuja2, new cjs.Rectangle(-16.8,-17.4,31,35.8), null);


(lib.Burbuja1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_2
	this.instance = new lib.bubble_grande_01();
	this.instance.parent = this;
	this.instance.setTransform(-40,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Burbuja1, new cjs.Rectangle(-40,-40,80,80), null);


(lib.burbuja_grandecita = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.burbuja_grandecita, null, null);


(lib.BRILLO_ANIMADO = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(8,81,252,0)","rgba(12,106,253,0.369)","rgba(13,113,254,0.498)","rgba(13,107,254,0.267)","rgba(13,107,254,0.357)","rgba(8,75,249,0)"],[0,0.392,0.486,0.576,0.576,1],-23,0,22.9,0).s().p("EgJNAjjMAAAhHFISbAAMAAABHFg");
	this.shape.setTransform(59,409.9,1,1.765);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.BRILLO_ANIMADO, new cjs.Rectangle(0,8.4,118,803), null);


(lib.boton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,204,51,0.82)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(150,300);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.boca_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.boca();
	this.instance.parent = this;
	this.instance.setTransform(-18,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.boca_1, new cjs.Rectangle(-18,-32,93,54), null);


(lib.tarifa_final = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cta
	this.instance = new lib.cta();
	this.instance.parent = this;
	this.instance.setTransform(0,290.8);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.cta(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(77.4,409.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,1,1).p("AL4AAI3vAA");
	this.shape_1.setTransform(77,155);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("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");
	this.shape_2.setTransform(77.3,129.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tarifa_final, new cjs.Rectangle(-1,0,155.6,415.4), null);


(lib.morena = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"in":1,out:23});

	// timeline functions:
	this.frame_0 = function() {
		//this.stop();
	}
	this.frame_1 = function() {
		this.play();
	}
	this.frame_22 = function() {
		this.stop();
	}
	this.frame_33 = function() {
		this.gotoAndStop(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(21).call(this.frame_22).wait(11).call(this.frame_33).wait(1));

	// boca
	this.instance = new lib.boca_1();
	this.instance.parent = this;
	this.instance.setTransform(124.7,70.8,1,1,-22.9,0,0,-18,-13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({regX:-17.9,regY:-13.4,rotation:-8,x:124.8,y:70.9},10).wait(1).to({regX:-18,regY:-13.5,rotation:-22.9,x:124.7,y:70.8},10).wait(1));

	// cuerpo_morena
	this.instance_1 = new lib.morena_final();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,224.2,160);


(lib.LUZ_MAR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.LUZ_MAR_BRILLA();
	this.instance.parent = this;
	this.instance.setTransform(355.4,262.3,1,1,0,0,0,355.4,262.3);
	this.instance.alpha = 0.422;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:355.3,scaleX:1.48,x:355.3,y:258.3,alpha:0.789},23).to({regX:355.4,scaleX:1,x:355.4,y:262.3,alpha:0.422},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,710.8,524.5);


(lib.Accesorias = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{go:87});

	// timeline functions:
	this.frame_72 = function() {
		this.gotoAndPlay("go");
	}
	this.frame_126 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(72).call(this.frame_72).wait(54).call(this.frame_126).wait(1));

	// burbujas
	this.instance = new lib.burbuja_grandecita();
	this.instance.parent = this;
	this.instance.setTransform(126,527.8,0.18,0.18,0,0,0,40.3,39.8);

	this.instance_1 = new lib.burbuja_grandecita();
	this.instance_1.parent = this;
	this.instance_1.setTransform(122.3,518.5,0.14,0.14,19.2,0,0,40.6,39.6);

	this.instance_2 = new lib.burbuja_grandecita();
	this.instance_2.parent = this;
	this.instance_2.setTransform(122.5,514,0.14,0.14,0,0,0,40.4,39.6);

	this.instance_3 = new lib.burbuja_grandecita();
	this.instance_3.parent = this;
	this.instance_3.setTransform(124.8,522.5,0.18,0.18,0,0,0,40.3,39.8);

	this.instance_4 = new lib.burbuja_grandecita();
	this.instance_4.parent = this;
	this.instance_4.setTransform(131.7,517.5,0.18,0.18,0,0,0,40.3,39.8);

	this.instance_5 = new lib.burbuja_grandecita();
	this.instance_5.parent = this;
	this.instance_5.setTransform(120.1,503.5,0.14,0.14,0,0,0,40.4,39.6);

	this.instance_6 = new lib.burbuja_grandecita();
	this.instance_6.parent = this;
	this.instance_6.setTransform(123.7,512.5,0.18,0.18,0,0,0,40.3,39.8);

	this.instance_7 = new lib.burbuja_grandecita();
	this.instance_7.parent = this;
	this.instance_7.setTransform(136.1,507.6,0.18,0.18,0,0,0,40.3,39.8);

	this.instance_8 = new lib.burbuja_grandecita();
	this.instance_8.parent = this;
	this.instance_8.setTransform(141.4,494.6,0.18,0.18,0,0,0,40.3,39.8);

	this.instance_9 = new lib.burbuja_grandecita();
	this.instance_9.parent = this;
	this.instance_9.setTransform(115.1,493.3,0.11,0.11,-34.9,0,0,40.4,41);

	this.instance_10 = new lib.burbuja_grandecita();
	this.instance_10.parent = this;
	this.instance_10.setTransform(133.7,500.2,0.119,0.119,-35,0,0,40.4,40.6);

	this.instance_11 = new lib.burbuja_grandecita();
	this.instance_11.parent = this;
	this.instance_11.setTransform(129.6,489.1,0.14,0.14,0.5,0,0,40.6,41);

	this.instance_12 = new lib.burbuja_grandecita();
	this.instance_12.parent = this;
	this.instance_12.setTransform(120.5,483,0.131,0.131,-34.9,0,0,40.5,41.8);

	this.instance_13 = new lib.burbuja_grandecita();
	this.instance_13.parent = this;
	this.instance_13.setTransform(130.9,477.6,0.12,0.12,-34.9,0,0,40.2,41.3);

	this.instance_14 = new lib.burbuja_grandecita();
	this.instance_14.parent = this;
	this.instance_14.setTransform(140.4,469.2,0.133,0.133,-35,0,0,40.6,40.8);

	this.instance_15 = new lib.burbuja_grandecita();
	this.instance_15.parent = this;
	this.instance_15.setTransform(117.6,462.5,0.131,0.131,-34.9,0,0,40.5,41.8);

	this.instance_16 = new lib.burbuja_grandecita();
	this.instance_16.parent = this;
	this.instance_16.setTransform(130.8,465.6,0.12,0.12,-34.9,0,0,40.2,41.3);

	this.instance_17 = new lib.burbuja_grandecita();
	this.instance_17.parent = this;
	this.instance_17.setTransform(142.4,457.8,0.133,0.133,-35,0,0,40.6,40.8);

	this.instance_18 = new lib.burbuja_grandecita();
	this.instance_18.parent = this;
	this.instance_18.setTransform(120.3,455.1,0.139,0.139,-35,0,0,40.6,40.7);

	this.instance_19 = new lib.burbuja_grandecita();
	this.instance_19.parent = this;
	this.instance_19.setTransform(140,454.2,0.114,0.114,-34.9,0,0,40.8,40.9);

	this.instance_20 = new lib.burbuja_grandecita();
	this.instance_20.parent = this;
	this.instance_20.setTransform(120.3,455.1,0.139,0.139,-35,0,0,40.6,40.7);

	this.instance_21 = new lib.burbuja_grandecita();
	this.instance_21.parent = this;
	this.instance_21.setTransform(140,454.2,0.114,0.114,-34.9,0,0,40.8,40.9);

	this.instance_22 = new lib.burbuja_grandecita();
	this.instance_22.parent = this;
	this.instance_22.setTransform(133.1,452.9,0.11,0.11,-34.9,0,0,40.4,41);

	this.instance_23 = new lib.burbuja_grandecita();
	this.instance_23.parent = this;
	this.instance_23.setTransform(151.5,438.7,0.114,0.114,-34.9,0,0,40.8,40.9);

	this.instance_24 = new lib.burbuja_grandecita();
	this.instance_24.parent = this;
	this.instance_24.setTransform(138.3,429.3,0.13,0.13,-34.9,0,0,40.6,41.1);

	this.instance_25 = new lib.burbuja_grandecita();
	this.instance_25.parent = this;
	this.instance_25.setTransform(133.3,421.9,0.11,0.11,-34.9,0,0,40.4,41);

	this.instance_26 = new lib.burbuja_grandecita();
	this.instance_26.parent = this;
	this.instance_26.setTransform(153.1,428,0.128,0.128,-34.9,0,0,41,41);

	this.instance_27 = new lib.burbuja_grandecita();
	this.instance_27.parent = this;
	this.instance_27.setTransform(138.6,418.5,0.148,0.148,-34.9,0,0,40.8,41.3);

	this.instance_28 = new lib.burbuja_grandecita();
	this.instance_28.parent = this;
	this.instance_28.setTransform(128.1,423.5,0.11,0.11,-34.9,0,0,40.4,41);

	this.instance_29 = new lib.burbuja_grandecita();
	this.instance_29.parent = this;
	this.instance_29.setTransform(140.1,406.5,0.148,0.148,-34.9,0,0,40.8,41.3);

	this.instance_30 = new lib.burbuja_grandecita();
	this.instance_30.parent = this;
	this.instance_30.setTransform(131.2,418.5,0.122,0.122,-34.9,0,0,40.6,41.4);

	this.instance_31 = new lib.burbuja_grandecita();
	this.instance_31.parent = this;
	this.instance_31.setTransform(139.4,419,0.133,0.133,-34.9,0,0,40.9,41.9);

	this.instance_32 = new lib.burbuja_grandecita();
	this.instance_32.parent = this;
	this.instance_32.setTransform(145.4,360.7,0.166,0.166,-35,0,0,40.6,40.9);
	this.instance_32.alpha = 0.578;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance,p:{regX:40.3,regY:39.8,scaleX:0.18,scaleY:0.18,rotation:0,x:126,y:527.8,alpha:1}}]},73).to({state:[{t:this.instance_4,p:{regX:40.3,regY:39.8,scaleX:0.18,scaleY:0.18,rotation:0,x:131.7,y:517.5}},{t:this.instance_3,p:{regX:40.3,scaleX:0.18,scaleY:0.18,rotation:0,x:124.8,y:522.5,regY:39.8,alpha:1}},{t:this.instance_2,p:{regX:40.4,regY:39.6,scaleX:0.14,scaleY:0.14,x:122.5,y:514,rotation:0}},{t:this.instance_1,p:{regX:40.6,rotation:19.2,x:122.3,y:518.5,regY:39.6,scaleX:0.14,scaleY:0.14}},{t:this.instance,p:{regX:40.9,regY:40,scaleX:0.123,scaleY:0.123,rotation:-35,x:128.6,y:514.4,alpha:1}}]},1).to({state:[{t:this.instance_7,p:{x:136.1,y:507.6,regX:40.3,regY:39.8,scaleX:0.18,scaleY:0.18,rotation:0}},{t:this.instance_6,p:{regX:40.3,regY:39.8,scaleX:0.18,scaleY:0.18,x:123.7,y:512.5,rotation:0,alpha:1}},{t:this.instance_5,p:{regX:40.4,rotation:0,x:120.1,y:503.5,regY:39.6,scaleX:0.14,scaleY:0.14}},{t:this.instance_4,p:{regX:40.6,regY:39.6,scaleX:0.14,scaleY:0.14,rotation:19.2,x:119.1,y:509.2}},{t:this.instance_3,p:{regX:40.5,scaleX:0.16,scaleY:0.16,rotation:-19.7,x:130.3,y:504.2,regY:39.8,alpha:1}},{t:this.instance_2,p:{regX:40.8,regY:39.7,scaleX:0.146,scaleY:0.146,x:130.6,y:511.5,rotation:0}},{t:this.instance_1,p:{regX:40.7,rotation:0,x:125.2,y:502.6,regY:39.6,scaleX:0.14,scaleY:0.14}},{t:this.instance,p:{regX:40.9,regY:40,scaleX:0.123,scaleY:0.123,rotation:-35,x:135,y:512.5,alpha:1}}]},1).to({state:[{t:this.instance_10,p:{regX:40.4,regY:40.6,scaleX:0.119,scaleY:0.119,x:133.7,y:500.2,rotation:-35,alpha:1}},{t:this.instance_9,p:{y:493.3,regY:41,scaleX:0.11,scaleY:0.11,x:115.1,regX:40.4,rotation:-34.9,alpha:1}},{t:this.instance_8,p:{x:141.4,y:494.6,regX:40.3,regY:39.8,scaleX:0.18,scaleY:0.18,rotation:0,alpha:1}},{t:this.instance_7,p:{x:122.5,y:500.4,regX:40.3,regY:39.8,scaleX:0.18,scaleY:0.18,rotation:0}},{t:this.instance_6,p:{regX:40.4,regY:39.6,scaleX:0.14,scaleY:0.14,x:117.6,y:490.4,rotation:0,alpha:1}},{t:this.instance_5,p:{regX:40.6,rotation:19.2,x:116.6,y:497.9,regY:39.6,scaleX:0.14,scaleY:0.14}},{t:this.instance_4,p:{regX:40.5,regY:39.8,scaleX:0.16,scaleY:0.16,rotation:-19.7,x:131.7,y:491.4}},{t:this.instance_3,p:{regX:40.8,scaleX:0.146,scaleY:0.146,rotation:0,x:141.2,y:498.8,regY:39.7,alpha:1}},{t:this.instance_2,p:{regX:40.7,regY:39.6,scaleX:0.14,scaleY:0.14,x:125,y:490.6,rotation:0}},{t:this.instance_1,p:{regX:40.5,rotation:-35,x:139.6,y:503.2,regY:40.3,scaleX:0.092,scaleY:0.092}},{t:this.instance,p:{regX:40.4,regY:41,scaleX:0.11,scaleY:0.11,rotation:-34.9,x:128.6,y:501.7,alpha:1}}]},1).to({state:[{t:this.instance_13,p:{x:130.9,y:477.6,regX:40.2,regY:41.3,scaleX:0.12,scaleY:0.12,rotation:-34.9}},{t:this.instance_12,p:{x:120.5,y:483,regY:41.8,scaleX:0.131,scaleY:0.131,regX:40.5,rotation:-34.9}},{t:this.instance_11,p:{x:129.6,y:489.1,regX:40.6,regY:41,scaleX:0.14,scaleY:0.14,rotation:0.5}},{t:this.instance_10,p:{regX:40.6,regY:40.8,scaleX:0.133,scaleY:0.133,x:137.5,y:488.2,rotation:-35,alpha:1}},{t:this.instance_9,p:{y:482.2,regY:41,scaleX:0.11,scaleY:0.11,x:115.1,regX:40.4,rotation:-34.9,alpha:1}},{t:this.instance_8,p:{x:145.7,y:482.9,regX:40.3,regY:39.8,scaleX:0.18,scaleY:0.18,rotation:0,alpha:1}},{t:this.instance_7,p:{x:120.4,y:490.2,regX:40.3,regY:39.8,scaleX:0.18,scaleY:0.18,rotation:0}},{t:this.instance_6,p:{regX:40.6,regY:39.6,scaleX:0.151,scaleY:0.151,x:114.6,y:478.7,rotation:0,alpha:1}},{t:this.instance_5,p:{regX:40.6,rotation:19.2,x:113.6,y:487.6,regY:39.6,scaleX:0.14,scaleY:0.14}},{t:this.instance_4,p:{regX:40.5,regY:39.8,scaleX:0.16,scaleY:0.16,rotation:-19.7,x:134.1,y:479.2}},{t:this.instance_3,p:{regX:40.8,scaleX:0.146,scaleY:0.146,rotation:0,x:146.9,y:487.5,regY:39.7,alpha:1}},{t:this.instance_2,p:{regX:40.7,regY:39.6,scaleX:0.14,scaleY:0.14,x:124.5,y:477.7,rotation:0}},{t:this.instance_1,p:{regX:40.5,rotation:-35,x:142.7,y:492.6,regY:40.3,scaleX:0.092,scaleY:0.092}},{t:this.instance,p:{regX:40.4,regY:41,scaleX:0.11,scaleY:0.11,rotation:-34.9,x:128,y:485.6,alpha:1}}]},1).to({state:[{t:this.instance_14,p:{regY:40.8,scaleX:0.133,scaleY:0.133,rotation:-35,x:140.4,y:469.2,regX:40.6}},{t:this.instance_13,p:{x:130.8,y:465.6,regX:40.2,regY:41.3,scaleX:0.12,scaleY:0.12,rotation:-34.9}},{t:this.instance_12,p:{x:121.5,y:475.9,regY:41.8,scaleX:0.131,scaleY:0.131,regX:40.5,rotation:-34.9}},{t:this.instance_11,p:{x:131,y:478.1,regX:40.6,regY:41,scaleX:0.14,scaleY:0.14,rotation:0.5}},{t:this.instance_10,p:{regX:40.6,regY:40.8,scaleX:0.133,scaleY:0.133,x:139.4,y:477.2,rotation:-35,alpha:1}},{t:this.instance_9,p:{y:469.2,regY:41.1,scaleX:0.147,scaleY:0.147,x:121.1,regX:40.4,rotation:-34.9,alpha:1}},{t:this.instance_8,p:{x:149.8,y:471.4,regX:40.3,regY:39.8,scaleX:0.18,scaleY:0.18,rotation:0,alpha:1}},{t:this.instance_7,p:{x:120.1,y:478.8,regX:40.3,regY:39.8,scaleX:0.18,scaleY:0.18,rotation:0}},{t:this.instance_6,p:{regX:40.6,regY:39.6,scaleX:0.154,scaleY:0.154,x:111.5,y:477.1,rotation:19.2,alpha:1}},{t:this.instance_5,p:{regX:40.8,rotation:0,x:150.8,y:477.1,regY:39.7,scaleX:0.146,scaleY:0.146}},{t:this.instance_4,p:{regX:40.5,regY:40.3,scaleX:0.092,scaleY:0.092,rotation:-35,x:145.3,y:482.2}},{t:this.instance_3,p:{regX:40.4,scaleX:0.11,scaleY:0.11,rotation:-34.9,x:128,y:474.6,regY:41,alpha:1}},{t:this.instance_2,p:{regX:40.5,regY:39.8,scaleX:0.16,scaleY:0.16,x:135.7,y:467.3,rotation:-19.7}},{t:this.instance_1,p:{regX:40.7,rotation:0,x:124.5,y:465.9,regY:39.6,scaleX:0.14,scaleY:0.14}},{t:this.instance,p:{regX:40.6,regY:39.6,scaleX:0.151,scaleY:0.151,rotation:0,x:112,y:466.7,alpha:1}}]},1).to({state:[{t:this.instance_19,p:{regX:40.8,regY:40.9,scaleX:0.114,scaleY:0.114,rotation:-34.9,x:140,y:454.2,alpha:1}},{t:this.instance_18,p:{regX:40.6,regY:40.7,scaleX:0.139,scaleY:0.139,rotation:-35,x:120.3,y:455.1}},{t:this.instance_17,p:{regX:40.6,regY:40.8,scaleX:0.133,scaleY:0.133,rotation:-35,x:142.4,y:457.8,alpha:1}},{t:this.instance_16,p:{regX:40.2,regY:41.3,scaleX:0.12,scaleY:0.12,rotation:-34.9,x:130.8,y:465.6}},{t:this.instance_15,p:{regX:40.5,regY:41.8,scaleX:0.131,scaleY:0.131,rotation:-34.9,x:117.6,y:462.5,alpha:1}},{t:this.instance_14,p:{regY:41,scaleX:0.14,scaleY:0.14,rotation:0.5,x:130,y:458.9,regX:40.6}},{t:this.instance_13,p:{x:145.1,y:463.9,regX:40.6,regY:40.8,scaleX:0.133,scaleY:0.133,rotation:-35}},{t:this.instance_12,p:{x:121.9,y:462.3,regY:41.9,scaleX:0.161,scaleY:0.161,regX:40.5,rotation:-34.9}},{t:this.instance_11,p:{x:154.6,y:459.2,regX:40.4,regY:39.7,scaleX:0.157,scaleY:0.157,rotation:0}},{t:this.instance_10,p:{regX:40.3,regY:39.8,scaleX:0.18,scaleY:0.18,x:117.9,y:469.7,rotation:0,alpha:1}},{t:this.instance_9,p:{y:466.5,regY:39.6,scaleX:0.142,scaleY:0.142,x:108.8,regX:40.7,rotation:19.2,alpha:1}},{t:this.instance_8,p:{x:154.6,y:466.3,regX:40.9,regY:40,scaleX:0.159,scaleY:0.159,rotation:0,alpha:1}},{t:this.instance_7,p:{x:148.4,y:471.5,regX:40.5,regY:40.3,scaleX:0.092,scaleY:0.092,rotation:-35}},{t:this.instance_6,p:{regX:40.4,regY:41,scaleX:0.11,scaleY:0.11,x:132.9,y:468.5,rotation:-34.9,alpha:1}},{t:this.instance_5,p:{regX:40.6,rotation:-19.7,x:135.9,y:454.9,regY:39.9,scaleX:0.136,scaleY:0.136}},{t:this.instance_4,p:{regX:40.7,regY:39.6,scaleX:0.14,scaleY:0.14,rotation:0,x:124.6,y:453.2}},{t:this.instance_3,p:{regX:40.6,scaleX:0.151,scaleY:0.151,rotation:0,x:109.7,y:455.4,regY:39.6,alpha:1}},{t:this.instance_2,p:{regX:40.6,regY:40.6,scaleX:0.12,scaleY:0.12,x:141.3,y:467,rotation:-35}},{t:this.instance_1,p:{regX:40.8,rotation:-34.9,x:131.2,y:453.2,regY:40.9,scaleX:0.114,scaleY:0.114}},{t:this.instance,p:{regX:40.6,regY:40.6,scaleX:0.12,scaleY:0.12,rotation:-35,x:136.9,y:463,alpha:0.281}}]},1).to({state:[{t:this.instance_22,p:{x:133.1,y:452.9,regX:40.4,regY:41,scaleX:0.11,scaleY:0.11,rotation:-34.9,alpha:1}},{t:this.instance_21,p:{x:140,y:454.2,regX:40.8,regY:40.9,scaleX:0.114,scaleY:0.114,rotation:-34.9,alpha:1}},{t:this.instance_20,p:{regX:40.6,regY:40.7,scaleX:0.139,scaleY:0.139,x:120.3,y:455.1,rotation:-35,alpha:1}},{t:this.instance_19,p:{regX:40.6,regY:40.8,scaleX:0.133,scaleY:0.133,rotation:-35,x:144.7,y:446.3,alpha:1}},{t:this.instance_18,p:{regX:40.2,regY:41.3,scaleX:0.12,scaleY:0.12,rotation:-34.9,x:129.5,y:448.3}},{t:this.instance_17,p:{regX:40.8,regY:42.5,scaleX:0.145,scaleY:0.145,rotation:-34.9,x:106.6,y:456.8,alpha:1}},{t:this.instance_16,p:{regX:40.6,regY:41,scaleX:0.14,scaleY:0.14,rotation:0.5,x:130,y:458.9}},{t:this.instance_15,p:{regX:40.6,regY:40.8,scaleX:0.133,scaleY:0.133,rotation:-35,x:148.4,y:451.5,alpha:1}},{t:this.instance_14,p:{regY:39.7,scaleX:0.157,scaleY:0.157,rotation:0,x:158.3,y:447.2,regX:40.4}},{t:this.instance_13,p:{x:117.6,y:458.3,regX:40.3,regY:39.8,scaleX:0.18,scaleY:0.18,rotation:0}},{t:this.instance_12,p:{x:109.8,y:448.4,regY:39.6,scaleX:0.142,scaleY:0.142,regX:40.7,rotation:19.2}},{t:this.instance_11,p:{x:158.6,y:455.5,regX:40.9,regY:40,scaleX:0.159,scaleY:0.159,rotation:0}},{t:this.instance_10,p:{regX:41.1,regY:40.9,scaleX:0.11,scaleY:0.11,x:150.6,y:460.1,rotation:-34.9,alpha:1}},{t:this.instance_9,p:{y:457.9,regY:41,scaleX:0.11,scaleY:0.11,x:135.1,regX:40.4,rotation:-34.9,alpha:1}},{t:this.instance_8,p:{x:139.3,y:442.1,regX:40.6,regY:39.9,scaleX:0.136,scaleY:0.136,rotation:-19.7,alpha:1}},{t:this.instance_7,p:{x:124.6,y:453.2,regX:40.7,regY:39.6,scaleX:0.14,scaleY:0.14,rotation:0}},{t:this.instance_6,p:{regX:40.6,regY:39.6,scaleX:0.151,scaleY:0.151,x:107.5,y:444,rotation:0,alpha:1}},{t:this.instance_5,p:{regX:40.6,rotation:-35,x:144.5,y:454.2,regY:40.6,scaleX:0.12,scaleY:0.12}},{t:this.instance_4,p:{regX:40.8,regY:40.9,scaleX:0.114,scaleY:0.114,rotation:-34.9,x:131.8,y:441}},{t:this.instance_3,p:{regX:40.6,scaleX:0.135,scaleY:0.135,rotation:-35,x:135,y:447.2,regY:40.6,alpha:0.281}},{t:this.instance_2,p:{regX:40.5,regY:41.9,scaleX:0.161,scaleY:0.161,x:120.9,y:450.3,rotation:-34.9}},{t:this.instance_1,p:{regX:40.6,rotation:-34.9,x:124.8,y:441.2,regY:42.3,scaleX:0.123,scaleY:0.123}},{t:this.instance,p:{regX:40.6,regY:42.3,scaleX:0.123,scaleY:0.123,rotation:-34.9,x:118.6,y:443.5,alpha:1}}]},1).to({state:[{t:this.instance_24,p:{regX:40.6,regY:41.1,scaleX:0.13,scaleY:0.13,x:138.3,y:429.3,rotation:-34.9,alpha:1}},{t:this.instance_23,p:{regX:40.8,regY:40.9,scaleX:0.114,scaleY:0.114,rotation:-34.9,x:151.5,y:438.7,alpha:1}},{t:this.instance_22,p:{x:135.7,y:447.1,regX:40.4,regY:41,scaleX:0.11,scaleY:0.11,rotation:-34.9,alpha:1}},{t:this.instance_21,p:{x:145.9,y:444.1,regX:40.8,regY:40.9,scaleX:0.114,scaleY:0.114,rotation:-34.9,alpha:1}},{t:this.instance_20,p:{regX:40.7,regY:40.6,scaleX:0.09,scaleY:0.09,x:112.7,y:443.7,rotation:-35,alpha:1}},{t:this.instance_19,p:{regX:40.6,regY:40.8,scaleX:0.133,scaleY:0.133,rotation:-35,x:142.5,y:440.3,alpha:1}},{t:this.instance_18,p:{regX:40.5,regY:41.9,scaleX:0.139,scaleY:0.139,rotation:-35,x:130.3,y:441.5}},{t:this.instance_17,p:{regX:40.8,regY:42.5,scaleX:0.145,scaleY:0.145,rotation:-34.9,x:104.1,y:445.4,alpha:1}},{t:this.instance_16,p:{regX:40.6,regY:41,scaleX:0.14,scaleY:0.14,rotation:0.5,x:127.3,y:443.3}},{t:this.instance_15,p:{regX:40.5,regY:41.1,scaleX:0.109,scaleY:0.109,rotation:-35,x:147.2,y:433.9,alpha:1}},{t:this.instance_14,p:{regY:39.7,scaleX:0.157,scaleY:0.157,rotation:0,x:161.9,y:435.6,regX:40.4}},{t:this.instance_13,p:{x:117.4,y:447.7,regX:40.4,regY:39.7,scaleX:0.155,scaleY:0.155,rotation:0}},{t:this.instance_12,p:{x:107.7,y:437.6,regY:39.6,scaleX:0.142,scaleY:0.142,regX:40.7,rotation:19.2}},{t:this.instance_11,p:{x:161.9,y:445.2,regX:40.9,regY:40,scaleX:0.159,scaleY:0.159,rotation:0}},{t:this.instance_10,p:{regX:41.1,regY:40.9,scaleX:0.11,scaleY:0.11,x:152.4,y:450.1,rotation:-34.9,alpha:1}},{t:this.instance_9,p:{y:441.1,regY:41,scaleX:0.11,scaleY:0.11,x:136,regX:40.4,rotation:-34.9,alpha:1}},{t:this.instance_8,p:{x:141.1,y:430.6,regX:40.6,regY:39.9,scaleX:0.136,scaleY:0.136,rotation:-19.7,alpha:1}},{t:this.instance_7,p:{x:128,y:435.5,regX:40.7,regY:39.6,scaleX:0.14,scaleY:0.14,rotation:0}},{t:this.instance_6,p:{regX:40.6,regY:39.6,scaleX:0.151,scaleY:0.151,x:105.6,y:432.2,rotation:0,alpha:1}},{t:this.instance_5,p:{regX:40.6,rotation:-35,x:152.2,y:442.1,regY:40.6,scaleX:0.12,scaleY:0.12}},{t:this.instance_4,p:{regX:40.6,regY:41.1,scaleX:0.13,scaleY:0.13,rotation:-34.9,x:132.1,y:429.3}},{t:this.instance_3,p:{regX:40.6,scaleX:0.135,scaleY:0.135,rotation:-35,x:136.9,y:436,regY:40.6,alpha:0.281}},{t:this.instance_2,p:{regX:40.5,regY:41.9,scaleX:0.161,scaleY:0.161,x:120.3,y:438.3,rotation:-34.9}},{t:this.instance_1,p:{regX:40.8,rotation:-34.9,x:124.8,y:429.3,regY:42.5,scaleX:0.135,scaleY:0.135}},{t:this.instance,p:{regX:40.6,regY:42.3,scaleX:0.123,scaleY:0.123,rotation:-34.9,x:119.3,y:432.1,alpha:1}}]},1).to({state:[{t:this.instance_28,p:{regX:40.4,scaleX:0.11,scaleY:0.11,x:128.1,y:423.5,regY:41,rotation:-34.9}},{t:this.instance_27,p:{regX:40.8,regY:41.3,scaleX:0.148,scaleY:0.148,x:138.6,y:418.5,rotation:-34.9,alpha:1}},{t:this.instance_26,p:{regX:41,regY:41,scaleX:0.128,scaleY:0.128,rotation:-34.9,x:153.1,y:428,alpha:1}},{t:this.instance_25,p:{regX:40.4,regY:41,scaleX:0.11,scaleY:0.11,rotation:-34.9,x:133.3,y:421.9,alpha:1}},{t:this.instance_24,p:{regX:40.7,regY:41.4,scaleX:0.099,scaleY:0.099,x:148.3,y:433,rotation:-34.9,alpha:1}},{t:this.instance_23,p:{regX:40.7,regY:40.6,scaleX:0.09,scaleY:0.09,rotation:-35,x:111.7,y:433.8,alpha:1}},{t:this.instance_22,p:{x:144.2,y:429.6,regX:40.6,regY:40.8,scaleX:0.133,scaleY:0.133,rotation:-35,alpha:1}},{t:this.instance_21,p:{x:130.3,y:441.5,regX:40.5,regY:41.9,scaleX:0.139,scaleY:0.139,rotation:-35,alpha:1}},{t:this.instance_20,p:{regX:40.8,regY:42.5,scaleX:0.145,scaleY:0.145,x:101.9,y:435.8,rotation:-34.9,alpha:1}},{t:this.instance_19,p:{regX:40.7,regY:41.3,scaleX:0.113,scaleY:0.113,rotation:0.5,x:126.3,y:433.6,alpha:1}},{t:this.instance_18,p:{regX:40.5,regY:41.1,scaleX:0.109,scaleY:0.109,rotation:-35,x:149.4,y:422.6}},{t:this.instance_17,p:{regX:40.4,regY:39.7,scaleX:0.157,scaleY:0.157,rotation:0,x:165.1,y:423.9,alpha:1}},{t:this.instance_16,p:{regX:40.4,regY:39.7,scaleX:0.155,scaleY:0.155,rotation:0,x:116.4,y:438.3}},{t:this.instance_15,p:{regX:40.7,regY:39.6,scaleX:0.142,scaleY:0.142,rotation:19.2,x:106,y:426.5,alpha:1}},{t:this.instance_14,p:{regY:40,scaleX:0.159,scaleY:0.159,rotation:0,x:165.4,y:434.4,regX:40.9}},{t:this.instance_13,p:{x:155.2,y:440.3,regX:41.1,regY:40.9,scaleX:0.11,scaleY:0.11,rotation:-34.9}},{t:this.instance_12,p:{x:136.9,y:435.3,regY:41,scaleX:0.11,scaleY:0.11,regX:40.4,rotation:-34.9}},{t:this.instance_11,p:{x:143.1,y:419,regX:40.6,regY:39.9,scaleX:0.136,scaleY:0.136,rotation:-19.7}},{t:this.instance_10,p:{regX:40.7,regY:39.6,scaleX:0.14,scaleY:0.14,x:131.1,y:429.5,rotation:0,alpha:1}},{t:this.instance_9,p:{y:420.7,regY:39.6,scaleX:0.151,scaleY:0.151,x:103.3,regX:40.6,rotation:0,alpha:1}},{t:this.instance_8,p:{x:154.8,y:430.7,regX:40.5,regY:40.8,scaleX:0.108,scaleY:0.108,rotation:-35,alpha:1}},{t:this.instance_7,p:{x:132.7,y:416.9,regX:40.8,regY:41.6,scaleX:0.103,scaleY:0.103,rotation:-35}},{t:this.instance_6,p:{regX:40.6,regY:40.6,scaleX:0.135,scaleY:0.135,x:138.8,y:426.8,rotation:-35,alpha:0.281}},{t:this.instance_5,p:{regX:40.5,rotation:-34.9,x:119.6,y:425.8,regY:41.9,scaleX:0.161,scaleY:0.161}},{t:this.instance_4,p:{regX:40.8,regY:42.5,scaleX:0.135,scaleY:0.135,rotation:-34.9,x:124.4,y:417.5}},{t:this.instance_3,p:{regX:40.6,scaleX:0.123,scaleY:0.123,rotation:-34.9,x:118.3,y:420.6,regY:42.3,alpha:1}},{t:this.instance_2,p:{regX:41.1,regY:41.5,scaleX:0.062,scaleY:0.062,x:154.3,y:437.6,rotation:-34.9}},{t:this.instance_1,p:{regX:41.1,rotation:-34.9,x:153.8,y:422.1,regY:41.5,scaleX:0.062,scaleY:0.062}},{t:this.instance,p:{regX:41.1,regY:41.5,scaleX:0.062,scaleY:0.062,rotation:-34.9,x:148.1,y:418.6,alpha:1}}]},1).to({state:[{t:this.instance_30,p:{regX:40.6,regY:41.4,scaleX:0.122,scaleY:0.122,x:131.2,y:418.5,rotation:-34.9}},{t:this.instance_29,p:{regX:40.8,regY:41.3,scaleX:0.148,scaleY:0.148,x:140.1,y:406.5,rotation:-34.9}},{t:this.instance_28,p:{regX:41,scaleX:0.128,scaleY:0.128,x:153.1,y:428,regY:41,rotation:-34.9}},{t:this.instance_27,p:{regX:40.4,regY:41,scaleX:0.11,scaleY:0.11,x:133.8,y:410.5,rotation:-34.9,alpha:1}},{t:this.instance_26,p:{regX:40.6,regY:41.7,scaleX:0.133,scaleY:0.133,rotation:-35,x:155.4,y:415.6,alpha:1}},{t:this.instance_25,p:{regX:40.7,regY:40.6,scaleX:0.09,scaleY:0.09,rotation:-35,x:110.7,y:423.3,alpha:1}},{t:this.instance_24,p:{regX:40.6,regY:40.8,scaleX:0.133,scaleY:0.133,x:151.7,y:411.1,rotation:-35,alpha:1}},{t:this.instance_23,p:{regX:40.5,regY:41.9,scaleX:0.139,scaleY:0.139,rotation:-35,x:146,y:420,alpha:1}},{t:this.instance_22,p:{x:99.9,y:425.8,regX:40.8,regY:42.5,scaleX:0.145,scaleY:0.145,rotation:-34.9,alpha:1}},{t:this.instance_21,p:{x:121.6,y:405.8,regX:40.7,regY:41.3,scaleX:0.113,scaleY:0.113,rotation:0.5,alpha:1}},{t:this.instance_20,p:{regX:40.5,regY:41.1,scaleX:0.109,scaleY:0.109,x:149.4,y:422.6,rotation:-35,alpha:1}},{t:this.instance_19,p:{regX:40.4,regY:39.7,scaleX:0.157,scaleY:0.157,rotation:0,x:168.5,y:412.9,alpha:1}},{t:this.instance_18,p:{regX:40.4,regY:39.7,scaleX:0.155,scaleY:0.155,rotation:0,x:115.3,y:427.2}},{t:this.instance_17,p:{regX:40.7,regY:39.6,scaleX:0.142,scaleY:0.142,rotation:19.2,x:103.8,y:415.4,alpha:1}},{t:this.instance_16,p:{regX:40.9,regY:40,scaleX:0.159,scaleY:0.159,rotation:0,x:168.9,y:424.5}},{t:this.instance_15,p:{regX:40.9,regY:41.3,scaleX:0.139,scaleY:0.139,rotation:-34.9,x:144.4,y:406.9,alpha:1}},{t:this.instance_14,p:{regY:42.2,scaleX:0.094,scaleY:0.094,rotation:-34.9,x:137.3,y:426,regX:40}},{t:this.instance_13,p:{x:138.9,y:413,regX:40.6,regY:39.9,scaleX:0.136,scaleY:0.136,rotation:-19.7}},{t:this.instance_12,p:{x:127.4,y:423,regY:39.7,scaleX:0.115,scaleY:0.115,regX:41,rotation:0}},{t:this.instance_11,p:{x:101.1,y:409.2,regX:40.6,regY:39.6,scaleX:0.151,scaleY:0.151,rotation:0}},{t:this.instance_10,p:{regX:40.5,regY:40.8,scaleX:0.108,scaleY:0.108,x:156.7,y:429.6,rotation:-35,alpha:1}},{t:this.instance_9,p:{y:404.7,regY:41.6,scaleX:0.103,scaleY:0.103,x:133.7,regX:40.8,rotation:-35,alpha:1}},{t:this.instance_8,p:{x:138.8,y:418.8,regX:40.6,regY:40.6,scaleX:0.135,scaleY:0.135,rotation:-35,alpha:0.281}},{t:this.instance_7,p:{x:118.8,y:414.7,regX:40.5,regY:41.9,scaleX:0.161,scaleY:0.161,rotation:-34.9}},{t:this.instance_6,p:{regX:40.8,regY:42.5,scaleX:0.135,scaleY:0.135,x:124.7,y:405.2,rotation:-34.9,alpha:1}},{t:this.instance_5,p:{regX:40.6,rotation:-34.9,x:117.5,y:408.7,regY:42.3,scaleX:0.123,scaleY:0.123}},{t:this.instance_4,p:{regX:41.1,regY:41.5,scaleX:0.062,scaleY:0.062,rotation:-34.9,x:155.3,y:421.3}},{t:this.instance_3,p:{regX:41.1,scaleX:0.091,scaleY:0.091,rotation:-34.9,x:158.5,y:419.7,regY:42.2,alpha:1}},{t:this.instance_2,p:{regX:41.1,regY:41.5,scaleX:0.062,scaleY:0.062,x:148.1,y:418.6,rotation:-34.9}},{t:this.instance_1,p:{regX:40.6,rotation:-34.9,x:124.6,y:415.9,regY:42,scaleX:0.067,scaleY:0.067}},{t:this.instance,p:{regX:40.8,regY:41.6,scaleX:0.103,scaleY:0.103,rotation:-35,x:135.1,y:404.5,alpha:1}}]},1).to({state:[{t:this.instance_31,p:{regX:40.9,regY:41.9,scaleX:0.133,scaleY:0.133,rotation:-34.9,x:139.4,y:419}},{t:this.instance_30,p:{regX:40.9,regY:41.6,scaleX:0.126,scaleY:0.126,x:145.6,y:395.8,rotation:-34.9}},{t:this.instance_29,p:{regX:41,regY:41,scaleX:0.128,scaleY:0.128,x:151.7,y:402.5,rotation:-34.9}},{t:this.instance_28,p:{regX:40.3,scaleX:0.133,scaleY:0.133,x:131.8,y:407.5,regY:41.1,rotation:-34.9}},{t:this.instance_27,p:{regX:40.6,regY:42.1,scaleX:0.12,scaleY:0.12,x:158.3,y:403.7,rotation:-35,alpha:1}},{t:this.instance_26,p:{regX:40.7,regY:40.6,scaleX:0.09,scaleY:0.09,rotation:-35,x:109.1,y:412.8,alpha:1}},{t:this.instance_25,p:{regX:40.5,regY:41.9,scaleX:0.139,scaleY:0.139,rotation:-35,x:146.9,y:409.3,alpha:1}},{t:this.instance_24,p:{regX:40.8,regY:42.5,scaleX:0.145,scaleY:0.145,x:98.1,y:415.3,rotation:-34.9,alpha:1}},{t:this.instance_23,p:{regX:40.7,regY:41.3,scaleX:0.113,scaleY:0.113,rotation:0.5,x:116.1,y:396.6,alpha:1}},{t:this.instance_22,p:{x:152.3,y:410.5,regX:40.5,regY:41.1,scaleX:0.109,scaleY:0.109,rotation:-35,alpha:1}},{t:this.instance_21,p:{x:170.7,y:400.6,regX:40.4,regY:39.7,scaleX:0.157,scaleY:0.157,rotation:0,alpha:1}},{t:this.instance_20,p:{regX:40.4,regY:39.7,scaleX:0.155,scaleY:0.155,x:113.6,y:416.7,rotation:0,alpha:1}},{t:this.instance_19,p:{regX:40.7,regY:39.6,scaleX:0.142,scaleY:0.142,rotation:19.2,x:101.7,y:404.2,alpha:1}},{t:this.instance_18,p:{regX:40.9,regY:40,scaleX:0.159,scaleY:0.159,rotation:0,x:171.3,y:413.7}},{t:this.instance_17,p:{regX:40.9,regY:41.3,scaleX:0.139,scaleY:0.139,rotation:-34.9,x:142.2,y:394.3,alpha:1}},{t:this.instance_16,p:{regX:40,regY:42.2,scaleX:0.094,scaleY:0.094,rotation:-34.9,x:138.5,y:415}},{t:this.instance_15,p:{regX:40.6,regY:39.9,scaleX:0.136,scaleY:0.136,rotation:-19.7,x:139.9,y:402.1,alpha:1}},{t:this.instance_14,p:{regY:39.7,scaleX:0.115,scaleY:0.115,rotation:0,x:126.8,y:413.8,regX:41}},{t:this.instance_13,p:{x:99.1,y:397.2,regX:40.6,regY:39.6,scaleX:0.151,scaleY:0.151,rotation:0}},{t:this.instance_12,p:{x:158.9,y:419.9,regY:41.2,scaleX:0.094,scaleY:0.094,regX:40.3,rotation:-35}},{t:this.instance_11,p:{x:134,y:393.6,regX:40.8,regY:41.8,scaleX:0.12,scaleY:0.12,rotation:-34.9}},{t:this.instance_10,p:{regX:40.6,regY:40.6,scaleX:0.135,scaleY:0.135,x:138.8,y:418.8,rotation:-35,alpha:0.281}},{t:this.instance_9,p:{y:414.7,regY:41.9,scaleX:0.161,scaleY:0.161,x:118.8,regX:40.5,rotation:-34.9,alpha:1}},{t:this.instance_8,p:{x:124.5,y:393.7,regX:40.8,regY:42.5,scaleX:0.135,scaleY:0.135,rotation:-34.9,alpha:1}},{t:this.instance_7,p:{x:118,y:402.5,regX:40.6,regY:42.5,scaleX:0.156,scaleY:0.156,rotation:-34.9}},{t:this.instance_6,p:{regX:41.1,regY:41.5,scaleX:0.062,scaleY:0.062,x:159.3,y:417.8,rotation:-34.9,alpha:1}},{t:this.instance_5,p:{regX:41.1,rotation:-34.9,x:160.6,y:408.5,regY:42.2,scaleX:0.091,scaleY:0.091}},{t:this.instance_4,p:{regX:41.1,regY:41.5,scaleX:0.062,scaleY:0.062,rotation:-34.9,x:152.7,y:404}},{t:this.instance_3,p:{regX:40.6,scaleX:0.067,scaleY:0.067,rotation:-34.9,x:123.9,y:404.5,regY:42,alpha:1}},{t:this.instance_2,p:{regX:40.8,regY:41.6,scaleX:0.103,scaleY:0.103,x:134.4,y:397.6,rotation:-35}},{t:this.instance_1,p:{regX:41.6,rotation:0,x:129.7,y:414.8,regY:40.2,scaleX:0.075,scaleY:0.075}},{t:this.instance,p:{regX:40.8,regY:41.3,scaleX:0.11,scaleY:0.11,rotation:-35,x:152.9,y:399.2,alpha:1}}]},1).to({state:[{t:this.instance_30,p:{regX:40.9,regY:42,scaleX:0.096,scaleY:0.096,x:139.1,y:404.6,rotation:-34.9}},{t:this.instance_29,p:{regX:40.9,regY:41.6,scaleX:0.126,scaleY:0.126,x:144.6,y:382.5,rotation:-34.9}},{t:this.instance_28,p:{regX:40.9,scaleX:0.109,scaleY:0.109,x:154.6,y:388.5,regY:41.5,rotation:-34.9}},{t:this.instance_27,p:{regX:40.3,regY:41.1,scaleX:0.133,scaleY:0.133,x:132.7,y:395.9,rotation:-34.9,alpha:1}},{t:this.instance_26,p:{regX:40.6,regY:42.1,scaleX:0.12,scaleY:0.12,rotation:-35,x:160.1,y:392.5,alpha:1}},{t:this.instance_25,p:{regX:40.7,regY:40.6,scaleX:0.09,scaleY:0.09,rotation:-35,x:107.6,y:402.7,alpha:1}},{t:this.instance_24,p:{regX:40.5,regY:41.9,scaleX:0.139,scaleY:0.139,x:148,y:398.7,rotation:-35,alpha:1}},{t:this.instance_23,p:{regX:40.8,regY:42.5,scaleX:0.145,scaleY:0.145,rotation:-34.9,x:96.4,y:405.3,alpha:1}},{t:this.instance_22,p:{x:116.2,y:385.1,regX:40.7,regY:41.3,scaleX:0.113,scaleY:0.113,rotation:0.5,alpha:1}},{t:this.instance_21,p:{x:154,y:399.9,regX:40.5,regY:41.1,scaleX:0.109,scaleY:0.109,rotation:-35,alpha:1}},{t:this.instance_20,p:{regX:40.4,regY:39.7,scaleX:0.157,scaleY:0.157,x:174,y:388.3,rotation:0,alpha:1}},{t:this.instance_19,p:{regX:40.4,regY:39.7,scaleX:0.155,scaleY:0.155,rotation:0,x:113.2,y:406.3,alpha:1}},{t:this.instance_18,p:{regX:40.7,regY:39.6,scaleX:0.142,scaleY:0.142,rotation:19.2,x:100.4,y:393.8}},{t:this.instance_17,p:{regX:40.9,regY:40,scaleX:0.159,scaleY:0.159,rotation:0,x:174.2,y:403.3,alpha:1}},{t:this.instance_16,p:{regX:40.9,regY:41.3,scaleX:0.139,scaleY:0.139,rotation:-34.9,x:142,y:382.9}},{t:this.instance_15,p:{regX:40,regY:42.2,scaleX:0.094,scaleY:0.094,rotation:-34.9,x:143.1,y:396.6,alpha:1}},{t:this.instance_14,p:{regY:39.9,scaleX:0.136,scaleY:0.136,rotation:-19.7,x:140.6,y:391.4,regX:40.6}},{t:this.instance_13,p:{x:127.4,y:404.4,regX:41,regY:39.7,scaleX:0.115,scaleY:0.115,rotation:0}},{t:this.instance_12,p:{x:97.6,y:386,regY:39.6,scaleX:0.151,scaleY:0.151,regX:40.6,rotation:0}},{t:this.instance_11,p:{x:161,y:410.4,regX:40.3,regY:41.2,scaleX:0.094,scaleY:0.094,rotation:-35}},{t:this.instance_10,p:{regX:40.8,regY:41.8,scaleX:0.12,scaleY:0.12,x:134.8,y:380.8,rotation:-34.9,alpha:1}},{t:this.instance_9,p:{y:391.2,regY:40.6,scaleX:0.135,scaleY:0.135,x:146.4,regX:40.6,rotation:-35,alpha:0.281}},{t:this.instance_8,p:{x:124.3,y:381.4,regX:40.8,regY:42.5,scaleX:0.135,scaleY:0.135,rotation:-34.9,alpha:1}},{t:this.instance_7,p:{x:117.6,y:391,regX:40.6,regY:42.5,scaleX:0.156,scaleY:0.156,rotation:-34.9}},{t:this.instance_6,p:{regX:41.1,regY:41.5,scaleX:0.062,scaleY:0.062,x:161.9,y:407,rotation:-34.9,alpha:1}},{t:this.instance_5,p:{regX:41.3,rotation:-34.9,x:163,y:396.5,regY:42.5,scaleX:0.107,scaleY:0.107}},{t:this.instance_4,p:{regX:41.6,regY:42,scaleX:0.132,scaleY:0.132,rotation:-34.9,x:154.7,y:392.7}},{t:this.instance_3,p:{regX:40.5,scaleX:0.055,scaleY:0.055,rotation:-34.9,x:123.9,y:394.2,regY:42.8,alpha:1}},{t:this.instance_2,p:{regX:40.9,regY:41.8,scaleX:0.106,scaleY:0.106,x:135.2,y:386.9,rotation:-35}},{t:this.instance_1,p:{regX:41.6,rotation:0,x:129.9,y:405,regY:40.2,scaleX:0.075,scaleY:0.075}},{t:this.instance,p:{regX:40.8,regY:41.3,scaleX:0.11,scaleY:0.11,rotation:-35,x:148,y:383.2,alpha:1}}]},1).to({state:[{t:this.instance_30,p:{regX:40.9,regY:42,scaleX:0.096,scaleY:0.096,x:144.7,y:384.3,rotation:-34.9}},{t:this.instance_29,p:{regX:40.9,regY:41.6,scaleX:0.126,scaleY:0.126,x:141.8,y:374.1,rotation:-34.9}},{t:this.instance_28,p:{regX:40.9,scaleX:0.109,scaleY:0.109,x:157,y:377.1,regY:41.5,rotation:-34.9}},{t:this.instance_27,p:{regX:40.3,regY:41.1,scaleX:0.133,scaleY:0.133,x:133.5,y:385.1,rotation:-34.9,alpha:1}},{t:this.instance_26,p:{regX:40.6,regY:42.1,scaleX:0.12,scaleY:0.12,rotation:-35,x:162.8,y:380.8,alpha:1}},{t:this.instance_25,p:{regX:40.7,regY:40.6,scaleX:0.09,scaleY:0.09,rotation:-35,x:107.6,y:393.6,alpha:1}},{t:this.instance_24,p:{regX:40.5,regY:41.9,scaleX:0.139,scaleY:0.139,x:148.8,y:388.6,rotation:-35,alpha:1}},{t:this.instance_23,p:{regX:40.8,regY:42.5,scaleX:0.145,scaleY:0.145,rotation:-34.9,x:94.6,y:396.1,alpha:1}},{t:this.instance_22,p:{x:116.1,y:373.8,regX:40.7,regY:41.3,scaleX:0.113,scaleY:0.113,rotation:0.5,alpha:1}},{t:this.instance_21,p:{x:156,y:389,regX:40.5,regY:41.1,scaleX:0.109,scaleY:0.109,rotation:-35,alpha:1}},{t:this.instance_20,p:{regX:40.4,regY:39.7,scaleX:0.157,scaleY:0.157,x:177.2,y:376.8,rotation:0,alpha:1}},{t:this.instance_19,p:{regX:40.4,regY:39.7,scaleX:0.155,scaleY:0.155,rotation:0,x:113.1,y:397.2,alpha:1}},{t:this.instance_18,p:{regX:40.7,regY:39.6,scaleX:0.142,scaleY:0.142,rotation:19.2,x:99.3,y:383.1}},{t:this.instance_17,p:{regX:40.9,regY:40,scaleX:0.159,scaleY:0.159,rotation:0,x:177,y:393.8,alpha:1}},{t:this.instance_16,p:{regX:40.9,regY:41.3,scaleX:0.139,scaleY:0.139,rotation:-34.9,x:144.6,y:370}},{t:this.instance_15,p:{regX:40,regY:42.2,scaleX:0.094,scaleY:0.094,rotation:-34.9,x:140.5,y:394,alpha:1}},{t:this.instance_14,p:{regY:39.9,scaleX:0.136,scaleY:0.136,rotation:-19.7,x:141.6,y:381.2,regX:40.6}},{t:this.instance_13,p:{x:127.4,y:394.6,regX:41.5,regY:39.9,scaleX:0.095,scaleY:0.095,rotation:0}},{t:this.instance_12,p:{x:96.1,y:374.4,regY:39.6,scaleX:0.151,scaleY:0.151,regX:40.6,rotation:0}},{t:this.instance_11,p:{x:162.9,y:400.4,regX:40.3,regY:41.2,scaleX:0.094,scaleY:0.094,rotation:-35}},{t:this.instance_10,p:{regX:40.8,regY:41.8,scaleX:0.12,scaleY:0.12,x:135.4,y:369,rotation:-34.9,alpha:1}},{t:this.instance_9,p:{y:379.5,regY:40.6,scaleX:0.135,scaleY:0.135,x:149,regX:40.6,rotation:-35,alpha:0.281}},{t:this.instance_8,p:{x:124.9,y:370.2,regX:40.8,regY:42.5,scaleX:0.135,scaleY:0.135,rotation:-34.9,alpha:1}},{t:this.instance_7,p:{x:117.9,y:379.3,regX:40.6,regY:42.5,scaleX:0.156,scaleY:0.156,rotation:-34.9}},{t:this.instance_6,p:{regX:41.1,regY:41.5,scaleX:0.062,scaleY:0.062,x:164.8,y:397.1,rotation:-34.9,alpha:1}},{t:this.instance_5,p:{regX:41.3,rotation:-34.9,x:165.4,y:385.8,regY:42.5,scaleX:0.107,scaleY:0.107}},{t:this.instance_4,p:{regX:41.6,regY:42,scaleX:0.132,scaleY:0.132,rotation:-34.9,x:156.2,y:382.6}},{t:this.instance_3,p:{regX:40.5,scaleX:0.055,scaleY:0.055,rotation:-34.9,x:124.3,y:383.1,regY:42.8,alpha:1}},{t:this.instance_2,p:{regX:40.9,regY:41.8,scaleX:0.106,scaleY:0.106,x:136.6,y:376.1,rotation:-35}},{t:this.instance_1,p:{regX:42.3,rotation:0,x:130.7,y:395.2,regY:40.6,scaleX:0.062,scaleY:0.062}},{t:this.instance,p:{regX:41,regY:41.5,scaleX:0.119,scaleY:0.119,rotation:-35,x:149.9,y:371.7,alpha:1}}]},1).to({state:[{t:this.instance_32},{t:this.instance_31,p:{regX:41,regY:41.4,scaleX:0.087,scaleY:0.087,rotation:0.5,x:116.3,y:361.1}},{t:this.instance_30,p:{regX:41.6,regY:42,scaleX:0.132,scaleY:0.132,x:161.2,y:372.3,rotation:-34.9}},{t:this.instance_29,p:{regX:40.9,regY:42,scaleX:0.096,scaleY:0.096,x:144.4,y:385.8,rotation:-34.9}},{t:this.instance_28,p:{regX:41.1,scaleX:0.114,scaleY:0.114,x:140.4,y:365.2,regY:42,rotation:-34.9}},{t:this.instance_27,p:{regX:40.9,regY:41.5,scaleX:0.109,scaleY:0.109,x:161.2,y:366.1,rotation:-34.9,alpha:1}},{t:this.instance_26,p:{regX:40,regY:41.1,scaleX:0.107,scaleY:0.107,rotation:-34.9,x:141.1,y:374.5,alpha:1}},{t:this.instance_25,p:{regX:40.6,regY:42.1,scaleX:0.12,scaleY:0.12,rotation:-35,x:167.6,y:369.6,alpha:1}},{t:this.instance_24,p:{regX:41,regY:40.9,scaleX:0.075,scaleY:0.075,x:109.1,y:386,rotation:-34.9,alpha:1}},{t:this.instance_23,p:{regX:40.5,regY:41.9,scaleX:0.139,scaleY:0.139,rotation:-35,x:153.4,y:379.7,alpha:1}},{t:this.instance_22,p:{x:94.8,y:388.3,regX:40.8,regY:42.5,scaleX:0.145,scaleY:0.145,rotation:-34.9,alpha:1}},{t:this.instance_21,p:{x:117.9,y:363,regX:40.7,regY:41.3,scaleX:0.113,scaleY:0.113,rotation:0.5,alpha:1}},{t:this.instance_20,p:{regX:40.5,regY:41.1,scaleX:0.109,scaleY:0.109,x:160.3,y:378.4,rotation:-35,alpha:1}},{t:this.instance_19,p:{regX:40.4,regY:39.7,scaleX:0.157,scaleY:0.157,rotation:0,x:182.2,y:365.9,alpha:1}},{t:this.instance_18,p:{regX:40.4,regY:39.7,scaleX:0.155,scaleY:0.155,rotation:0,x:116.2,y:389}},{t:this.instance_17,p:{regX:40.7,regY:39.6,scaleX:0.142,scaleY:0.142,rotation:19.2,x:100.8,y:374.1,alpha:1}},{t:this.instance_16,p:{regX:40.9,regY:40,scaleX:0.159,scaleY:0.159,rotation:0,x:181.6,y:383.2}},{t:this.instance_15,p:{regX:40.9,regY:41.3,scaleX:0.139,scaleY:0.139,rotation:-34.9,x:147.5,y:358.9,alpha:1}},{t:this.instance_14,p:{regY:42.8,scaleX:0.124,scaleY:0.124,rotation:-34.9,x:151.7,y:370.2,regX:40}},{t:this.instance_13,p:{x:141.6,y:381.2,regX:40.6,regY:39.9,scaleX:0.136,scaleY:0.136,rotation:-19.7}},{t:this.instance_12,p:{x:131,y:387.2,regY:40.4,scaleX:0.103,scaleY:0.103,regX:41.9,rotation:0}},{t:this.instance_11,p:{x:97,y:363.5,regX:40.6,regY:39.6,scaleX:0.151,scaleY:0.151,rotation:0}},{t:this.instance_10,p:{regX:40.3,regY:41.2,scaleX:0.094,scaleY:0.094,x:166.9,y:391,rotation:-35,alpha:1}},{t:this.instance_9,p:{y:356.2,regY:41.8,scaleX:0.12,scaleY:0.12,x:137.1,regX:40.8,rotation:-34.9,alpha:1}},{t:this.instance_8,p:{x:144.9,y:371.3,regX:40.6,regY:40.6,scaleX:0.135,scaleY:0.135,rotation:-35,alpha:0.578}},{t:this.instance_7,p:{x:126.1,y:358.5,regX:40.8,regY:42.5,scaleX:0.135,scaleY:0.135,rotation:-34.9}},{t:this.instance_6,p:{regX:40.6,regY:42.5,scaleX:0.156,scaleY:0.156,x:120,y:368.1,rotation:-34.9,alpha:1}},{t:this.instance_5,p:{regX:41.1,rotation:-34.9,x:168.9,y:388.1,regY:41.5,scaleX:0.062,scaleY:0.062}},{t:this.instance_4,p:{regX:41.3,regY:42.5,scaleX:0.107,scaleY:0.107,rotation:-34.9,x:170.3,y:374.4}},{t:this.instance_3,p:{regX:40.5,scaleX:0.055,scaleY:0.055,rotation:-34.9,x:126.7,y:375.1,regY:42.8,alpha:1}},{t:this.instance_2,p:{regX:41.1,regY:42,scaleX:0.138,scaleY:0.138,x:137.1,y:373.8,rotation:-35}},{t:this.instance_1,p:{regX:42.3,rotation:0,x:133.2,y:387.5,regY:40.6,scaleX:0.062,scaleY:0.062}},{t:this.instance,p:{regX:41,regY:41.5,scaleX:0.119,scaleY:0.119,rotation:-35,x:152.8,y:361,alpha:1}}]},1).to({state:[{t:this.instance_28,p:{regX:40.7,scaleX:0.101,scaleY:0.101,x:174.4,y:362,regY:41.7,rotation:-34.9}},{t:this.instance_27,p:{regX:40.7,regY:41.1,scaleX:0.13,scaleY:0.13,x:151,y:345.9,rotation:-35,alpha:0.941}},{t:this.instance_26,p:{regX:41.6,regY:42,scaleX:0.132,scaleY:0.132,rotation:-34.9,x:179.6,y:349.8,alpha:1}},{t:this.instance_25,p:{regX:40.9,regY:42,scaleX:0.096,scaleY:0.096,rotation:-34.9,x:158,y:373.7,alpha:1}},{t:this.instance_24,p:{regX:41.1,regY:42.3,scaleX:0.126,scaleY:0.126,x:150.3,y:356.1,rotation:-34.9,alpha:1}},{t:this.instance_23,p:{regX:40.9,regY:41.5,scaleX:0.109,scaleY:0.109,rotation:-34.9,x:163.1,y:354.5,alpha:1}},{t:this.instance_22,p:{x:172.8,y:347.2,regX:40.6,regY:42.1,scaleX:0.12,scaleY:0.12,rotation:-35,alpha:1}},{t:this.instance_21,p:{x:115.1,y:380.5,regX:41,regY:40.9,scaleX:0.075,scaleY:0.075,rotation:-34.9,alpha:1}},{t:this.instance_20,p:{regX:40.5,regY:41.9,scaleX:0.139,scaleY:0.139,x:165.7,y:367.7,rotation:-35,alpha:1}},{t:this.instance_19,p:{regX:40.8,regY:42.5,scaleX:0.145,scaleY:0.145,rotation:-34.9,x:98.6,y:382.8,alpha:1}},{t:this.instance_18,p:{regX:40.7,regY:41.3,scaleX:0.113,scaleY:0.113,rotation:0.5,x:124.4,y:342.3}},{t:this.instance_17,p:{regX:40.8,regY:41.5,scaleX:0.132,scaleY:0.132,rotation:-35,x:172.9,y:355.8,alpha:1}},{t:this.instance_16,p:{regX:40.4,regY:39.7,scaleX:0.157,scaleY:0.157,rotation:0,x:194.5,y:345.6}},{t:this.instance_15,p:{regX:40.4,regY:39.7,scaleX:0.155,scaleY:0.155,rotation:0,x:125.3,y:379.5,alpha:1}},{t:this.instance_14,p:{regY:39.6,scaleX:0.142,scaleY:0.142,rotation:19.2,x:107.1,y:360.3,regX:40.7}},{t:this.instance_13,p:{x:193.2,y:367.6,regX:40.9,regY:40,scaleX:0.159,scaleY:0.159,rotation:0}},{t:this.instance_12,p:{x:155.9,y:339.5,regY:41.8,scaleX:0.165,scaleY:0.165,regX:40.7,rotation:-34.9}},{t:this.instance_11,p:{x:156.4,y:357.5,regX:40,regY:42.8,scaleX:0.124,scaleY:0.124,rotation:-34.9}},{t:this.instance_10,p:{regX:40.8,regY:40.1,scaleX:0.116,scaleY:0.116,x:141.6,y:381.2,rotation:-19.7,alpha:1}},{t:this.instance_9,p:{y:379,regY:40.4,scaleX:0.103,scaleY:0.103,x:129.2,regX:41.9,rotation:0,alpha:1}},{t:this.instance_8,p:{x:101.1,y:343.8,regX:40.6,regY:39.6,scaleX:0.151,scaleY:0.151,rotation:0,alpha:1}},{t:this.instance_7,p:{x:178.8,y:375.6,regX:40.3,regY:41.2,scaleX:0.094,scaleY:0.094,rotation:-35}},{t:this.instance_6,p:{regX:40.8,regY:41.8,scaleX:0.12,scaleY:0.12,x:144.5,y:334.5,rotation:-34.9,alpha:1}},{t:this.instance_5,p:{regX:40.8,rotation:-34.9,x:133.1,y:337,regY:42.5,scaleX:0.135,scaleY:0.135}},{t:this.instance_4,p:{regX:40.6,regY:42.5,scaleX:0.156,scaleY:0.156,rotation:-34.9,x:128.3,y:348.2}},{t:this.instance_3,p:{regX:41.1,scaleX:0.062,scaleY:0.062,rotation:-34.9,x:180.8,y:373.7,regY:41.5,alpha:1}},{t:this.instance_2,p:{regX:41.3,regY:42.5,scaleX:0.107,scaleY:0.107,x:184.6,y:356.7,rotation:-34.9}},{t:this.instance_1,p:{regX:40.5,rotation:-34.9,x:137.6,y:363.1,regY:42.8,scaleX:0.055,scaleY:0.055}},{t:this.instance,p:{regX:41,regY:41.5,scaleX:0.119,scaleY:0.119,rotation:-35,x:162.7,y:339.7,alpha:1}}]},1).to({state:[{t:this.instance_28,p:{regX:41.3,scaleX:0.107,scaleY:0.107,x:181.4,y:336.8,regY:42.5,rotation:-34.9}},{t:this.instance_27,p:{regX:40.7,regY:41.7,scaleX:0.101,scaleY:0.101,x:183.3,y:355.7,rotation:-34.9,alpha:1}},{t:this.instance_26,p:{regX:40.5,regY:41.4,scaleX:0.116,scaleY:0.116,rotation:-35,x:157.3,y:337.6,alpha:0.941}},{t:this.instance_25,p:{regX:41.6,regY:42,scaleX:0.132,scaleY:0.132,rotation:-34.9,x:186.8,y:340.3,alpha:1}},{t:this.instance_24,p:{regX:40.9,regY:42,scaleX:0.096,scaleY:0.096,x:166.7,y:370.4,rotation:-34.9,alpha:1}},{t:this.instance_23,p:{regX:41.1,regY:42.3,scaleX:0.126,scaleY:0.126,rotation:-34.9,x:164,y:352.8,alpha:1}},{t:this.instance_22,p:{x:169.8,y:348.1,regX:40.6,regY:42.1,scaleX:0.12,scaleY:0.12,rotation:-35,alpha:1}},{t:this.instance_21,p:{x:119,y:381.9,regX:41,regY:40.9,scaleX:0.075,scaleY:0.075,rotation:-34.9,alpha:1}},{t:this.instance_20,p:{regX:40.5,regY:41.9,scaleX:0.139,scaleY:0.139,x:173.3,y:364.2,rotation:-35,alpha:1}},{t:this.instance_19,p:{regX:40.8,regY:42.5,scaleX:0.145,scaleY:0.145,rotation:-34.9,x:100.2,y:383.2,alpha:1}},{t:this.instance_18,p:{regX:40.7,regY:41.3,scaleX:0.113,scaleY:0.113,rotation:0.5,x:128.6,y:333.1}},{t:this.instance_17,p:{regX:40.8,regY:41.5,scaleX:0.132,scaleY:0.132,rotation:-35,x:180.3,y:349.2,alpha:1}},{t:this.instance_16,p:{regX:40.4,regY:39.7,scaleX:0.157,scaleY:0.157,rotation:0,x:202.3,y:336.7}},{t:this.instance_15,p:{regX:40.5,regY:39.8,scaleX:0.138,scaleY:0.138,rotation:0,x:131.9,y:379.1,alpha:1}},{t:this.instance_14,p:{regY:39.6,scaleX:0.142,scaleY:0.142,rotation:19.2,x:112.8,y:356,regX:40.7}},{t:this.instance_13,p:{x:199.5,y:362.1,regX:40.9,regY:40,scaleX:0.159,scaleY:0.159,rotation:0}},{t:this.instance_12,p:{x:161.1,y:328.7,regY:41.8,scaleX:0.165,scaleY:0.165,regX:40.7,rotation:-34.9}},{t:this.instance_11,p:{x:157.3,y:347.2,regX:40,regY:42.8,scaleX:0.124,scaleY:0.124,rotation:-34.9}},{t:this.instance_10,p:{regX:41.1,regY:40.8,scaleX:0.102,scaleY:0.102,x:147.8,y:380.8,rotation:-19.7,alpha:1}},{t:this.instance_9,p:{y:333.6,regY:39.6,scaleX:0.151,scaleY:0.151,x:103.7,regX:40.6,rotation:0,alpha:1}},{t:this.instance_8,p:{x:186,y:371.2,regX:40.3,regY:41.2,scaleX:0.094,scaleY:0.094,rotation:-35,alpha:1}},{t:this.instance_7,p:{x:147.9,y:324.2,regX:40.8,regY:41.8,scaleX:0.12,scaleY:0.12,rotation:-34.9}},{t:this.instance_6,p:{regX:40.8,regY:42.5,scaleX:0.135,scaleY:0.135,x:135.2,y:326.9,rotation:-34.9,alpha:1}},{t:this.instance_5,p:{regX:40.6,rotation:-34.9,x:132,y:338.4,regY:42.5,scaleX:0.156,scaleY:0.156}},{t:this.instance_4,p:{regX:41.1,regY:41.5,scaleX:0.062,scaleY:0.062,rotation:-34.9,x:187.4,y:368.6}},{t:this.instance_3,p:{regX:41.3,scaleX:0.107,scaleY:0.107,rotation:-34.9,x:191.8,y:348.3,regY:42.5,alpha:1}},{t:this.instance_2,p:{regX:40.5,regY:42.8,scaleX:0.055,scaleY:0.055,x:144.6,y:358.8,rotation:-34.9}},{t:this.instance_1,p:{regX:41,rotation:-35,x:168.4,y:330,regY:41.5,scaleX:0.119,scaleY:0.119}},{t:this.instance,p:{regX:40.5,regY:42,scaleX:0.142,scaleY:0.142,rotation:-34.9,x:162,y:329.8,alpha:1}}]},1).to({state:[{t:this.instance_28,p:{regX:41.3,scaleX:0.107,scaleY:0.107,x:188.9,y:328.5,regY:42.5,rotation:-34.9}},{t:this.instance_27,p:{regX:40.7,regY:41.7,scaleX:0.101,scaleY:0.101,x:192.2,y:350.7,rotation:-34.9,alpha:1}},{t:this.instance_26,p:{regX:40.5,regY:41.4,scaleX:0.116,scaleY:0.116,rotation:-35,x:164.4,y:328.8,alpha:0.941}},{t:this.instance_25,p:{regX:41.6,regY:42,scaleX:0.132,scaleY:0.132,rotation:-34.9,x:194.9,y:330.8,alpha:1}},{t:this.instance_24,p:{regX:40.9,regY:42,scaleX:0.096,scaleY:0.096,x:176.3,y:367.9,rotation:-34.9,alpha:1}},{t:this.instance_23,p:{regX:41.1,regY:42.3,scaleX:0.126,scaleY:0.126,rotation:-34.9,x:179.1,y:341.1,alpha:1}},{t:this.instance_22,p:{x:171.6,y:348.2,regX:40.4,regY:42.2,scaleX:0.14,scaleY:0.14,rotation:-34.9,alpha:1}},{t:this.instance_21,p:{x:124.1,y:386,regX:41,regY:40.9,scaleX:0.075,scaleY:0.075,rotation:-34.9,alpha:1}},{t:this.instance_20,p:{regX:40.5,regY:41.9,scaleX:0.139,scaleY:0.139,x:180.4,y:362.1,rotation:-35,alpha:1}},{t:this.instance_19,p:{regX:40.8,regY:42.5,scaleX:0.145,scaleY:0.145,rotation:-34.9,x:104.2,y:388.3,alpha:1}},{t:this.instance_18,p:{regX:40.7,regY:41.3,scaleX:0.113,scaleY:0.113,rotation:0.5,x:131.5,y:322.6}},{t:this.instance_17,p:{regX:40.8,regY:41.5,scaleX:0.132,scaleY:0.132,rotation:-35,x:189.3,y:343.7,alpha:1}},{t:this.instance_16,p:{regX:40.4,regY:39.7,scaleX:0.157,scaleY:0.157,rotation:0,x:210.8,y:328.5}},{t:this.instance_15,p:{regX:40.5,regY:39.8,scaleX:0.138,scaleY:0.138,rotation:0,x:139.9,y:380.1,alpha:1}},{t:this.instance_14,p:{regY:39.6,scaleX:0.142,scaleY:0.142,rotation:19.2,x:118.8,y:350.5,regX:40.7}},{t:this.instance_13,p:{x:205.1,y:357.7,regX:41.1,regY:40.1,scaleX:0.142,scaleY:0.142,rotation:0}},{t:this.instance_12,p:{x:165.4,y:319.2,regY:41.8,scaleX:0.165,scaleY:0.165,regX:40.7,rotation:-34.9}},{t:this.instance_11,p:{x:165.8,y:340.2,regX:40,regY:42.8,scaleX:0.124,scaleY:0.124,rotation:-34.9}},{t:this.instance_10,p:{regX:41.1,regY:40.8,scaleX:0.102,scaleY:0.102,x:154.9,y:382.9,rotation:-19.7,alpha:1}},{t:this.instance_9,p:{y:323.9,regY:39.6,scaleX:0.151,scaleY:0.151,x:105.1,regX:40.6,rotation:0,alpha:1}},{t:this.instance_8,p:{x:192.3,y:366.5,regX:40.3,regY:41.2,scaleX:0.094,scaleY:0.094,rotation:-35,alpha:1}},{t:this.instance_7,p:{x:151,y:312.7,regX:40.8,regY:41.8,scaleX:0.12,scaleY:0.12,rotation:-34.9}},{t:this.instance_6,p:{regX:40.8,regY:42.5,scaleX:0.135,scaleY:0.135,x:137.6,y:315.8,rotation:-34.9,alpha:1}},{t:this.instance_5,p:{regX:40.6,rotation:-34.9,x:136.7,y:328.2,regY:42.5,scaleX:0.156,scaleY:0.156}},{t:this.instance_4,p:{regX:41.1,regY:41.5,scaleX:0.062,scaleY:0.062,rotation:-34.9,x:195,y:363.9}},{t:this.instance_3,p:{regX:41.3,scaleX:0.107,scaleY:0.107,rotation:-34.9,x:202.3,y:341.6,regY:42.5,alpha:1}},{t:this.instance_2,p:{regX:40.5,regY:42.8,scaleX:0.055,scaleY:0.055,x:153.4,y:355.6,rotation:-34.9}},{t:this.instance_1,p:{regX:41,rotation:-35,x:174,y:319.9,regY:41.5,scaleX:0.119,scaleY:0.119}},{t:this.instance,p:{regX:40.5,regY:42,scaleX:0.142,scaleY:0.142,rotation:-34.9,x:165.8,y:316.2,alpha:1}}]},1).to({state:[{t:this.instance_28,p:{regX:41.3,scaleX:0.107,scaleY:0.107,x:196.5,y:320.9,regY:42.5,rotation:-34.9}},{t:this.instance_27,p:{regX:40.7,regY:41.7,scaleX:0.101,scaleY:0.101,x:202.2,y:346.7,rotation:-34.9,alpha:1}},{t:this.instance_26,p:{regX:40.5,regY:41.4,scaleX:0.116,scaleY:0.116,rotation:-35,x:170.1,y:320.1,alpha:0.941}},{t:this.instance_25,p:{regX:41.6,regY:42,scaleX:0.132,scaleY:0.132,rotation:-34.9,x:203.7,y:322.9,alpha:1}},{t:this.instance_24,p:{regX:40.9,regY:42,scaleX:0.096,scaleY:0.096,x:187.5,y:365.1,rotation:-34.9,alpha:1}},{t:this.instance_23,p:{regX:41.1,regY:42.3,scaleX:0.126,scaleY:0.126,rotation:-34.9,x:189.2,y:335.3,alpha:1}},{t:this.instance_22,p:{x:180.6,y:344.7,regX:40.4,regY:42.2,scaleX:0.14,scaleY:0.14,rotation:-34.9,alpha:1}},{t:this.instance_21,p:{x:130.1,y:392.1,regX:41,regY:40.9,scaleX:0.075,scaleY:0.075,rotation:-34.9,alpha:1}},{t:this.instance_20,p:{regX:40.5,regY:41.9,scaleX:0.139,scaleY:0.139,x:188.4,y:359.6,rotation:-35,alpha:1}},{t:this.instance_19,p:{regX:40.8,regY:42.5,scaleX:0.145,scaleY:0.145,rotation:-34.9,x:106.4,y:394.7,alpha:1}},{t:this.instance_18,p:{regX:40.7,regY:41.3,scaleX:0.113,scaleY:0.113,rotation:0.5,x:133.7,y:313.4}},{t:this.instance_17,p:{regX:40.8,regY:41.5,scaleX:0.132,scaleY:0.132,rotation:-35,x:197.6,y:339.3,alpha:1}},{t:this.instance_16,p:{regX:40.4,regY:39.7,scaleX:0.157,scaleY:0.157,rotation:0,x:220.4,y:320}},{t:this.instance_15,p:{regX:40.5,regY:39.8,scaleX:0.138,scaleY:0.138,rotation:0,x:149.5,y:382.4,alpha:1}},{t:this.instance_14,p:{regY:39.6,scaleX:0.142,scaleY:0.142,rotation:19.2,x:124.1,y:344.8,regX:40.7}},{t:this.instance_13,p:{x:210.1,y:354.9,regX:41.1,regY:40.1,scaleX:0.142,scaleY:0.142,rotation:0}},{t:this.instance_12,p:{x:170.6,y:308.7,regY:41.8,scaleX:0.165,scaleY:0.165,regX:40.7,rotation:-34.9}},{t:this.instance_11,p:{x:174.7,y:333,regX:40,regY:42.8,scaleX:0.124,scaleY:0.124,rotation:-34.9}},{t:this.instance_10,p:{regX:41.1,regY:40.8,scaleX:0.102,scaleY:0.102,x:163,y:385.3,rotation:-19.7,alpha:1}},{t:this.instance_9,p:{y:314.2,regY:40,scaleX:0.158,scaleY:0.158,x:106.1,regX:40.9,rotation:0,alpha:1}},{t:this.instance_8,p:{x:200.1,y:361,regX:40.3,regY:41.2,scaleX:0.094,scaleY:0.094,rotation:-35,alpha:1}},{t:this.instance_7,p:{x:153.1,y:300.1,regX:40.8,regY:41.8,scaleX:0.12,scaleY:0.12,rotation:-34.9}},{t:this.instance_6,p:{regX:40.8,regY:42.5,scaleX:0.135,scaleY:0.135,x:139.6,y:305.2,rotation:-34.9,alpha:1}},{t:this.instance_5,p:{regX:40.6,rotation:-34.9,x:139.6,y:318.5,regY:42.5,scaleX:0.156,scaleY:0.156}},{t:this.instance_4,p:{regX:41.3,regY:41.8,scaleX:0.071,scaleY:0.071,rotation:-34.9,x:200.7,y:359.1}},{t:this.instance_3,p:{regX:41.3,scaleX:0.107,scaleY:0.107,rotation:-34.9,x:211.1,y:337,regY:42.5,alpha:1}},{t:this.instance_2,p:{regX:40.5,regY:42.8,scaleX:0.055,scaleY:0.055,x:162.7,y:352.5,rotation:-34.9}},{t:this.instance_1,p:{regX:41.1,rotation:-35,x:180.1,y:310.1,regY:41.5,scaleX:0.141,scaleY:0.143}},{t:this.instance,p:{regX:40.5,regY:42,scaleX:0.142,scaleY:0.142,rotation:-34.9,x:170.1,y:305.5,alpha:1}}]},1).to({state:[{t:this.instance_28,p:{regX:40.6,scaleX:0.115,scaleY:0.115,x:143.5,y:309,regY:42.6,rotation:-34.9}},{t:this.instance_27,p:{regX:41.3,regY:42.5,scaleX:0.107,scaleY:0.107,x:205.2,y:315,rotation:-34.9,alpha:1}},{t:this.instance_26,p:{regX:40.7,regY:41.7,scaleX:0.101,scaleY:0.101,rotation:-34.9,x:209.4,y:344,alpha:1}},{t:this.instance_25,p:{regX:40.5,regY:41.4,scaleX:0.116,scaleY:0.116,rotation:-35,x:175.8,y:309.5,alpha:0.941}},{t:this.instance_24,p:{regX:41.6,regY:42,scaleX:0.132,scaleY:0.132,x:212.6,y:315.3,rotation:-34.9,alpha:1}},{t:this.instance_23,p:{regX:40.9,regY:42,scaleX:0.096,scaleY:0.096,rotation:-34.9,x:198.3,y:363.8,alpha:1}},{t:this.instance_22,p:{x:197.4,y:331,regX:41.1,regY:42.3,scaleX:0.126,scaleY:0.126,rotation:-34.9,alpha:1}},{t:this.instance_21,p:{x:190.3,y:340.3,regX:40.4,regY:42.2,scaleX:0.14,scaleY:0.14,rotation:-34.9,alpha:1}},{t:this.instance_20,p:{regX:41,regY:40.9,scaleX:0.075,scaleY:0.075,x:136,y:399.5,rotation:-34.9,alpha:1}},{t:this.instance_19,p:{regX:40.5,regY:41.9,scaleX:0.139,scaleY:0.139,rotation:-35,x:196.4,y:357.3,alpha:1}},{t:this.instance_18,p:{regX:40.8,regY:42.5,scaleX:0.145,scaleY:0.145,rotation:-34.9,x:110.2,y:404.1}},{t:this.instance_17,p:{regX:40.7,regY:41.3,scaleX:0.113,scaleY:0.113,rotation:0.5,x:133.7,y:301.4,alpha:1}},{t:this.instance_16,p:{regX:40.8,regY:41.5,scaleX:0.132,scaleY:0.132,rotation:-35,x:204.5,y:336.5}},{t:this.instance_15,p:{regX:40.4,regY:39.7,scaleX:0.157,scaleY:0.157,rotation:0,x:229.6,y:312.7,alpha:1}},{t:this.instance_14,p:{regY:39.8,scaleX:0.138,scaleY:0.138,rotation:0,x:160.9,y:384.1,regX:40.5}},{t:this.instance_13,p:{x:129.7,y:338.2,regX:40.7,regY:39.6,scaleX:0.142,scaleY:0.142,rotation:19.2}},{t:this.instance_12,p:{x:212.7,y:350.6,regY:40.1,scaleX:0.142,scaleY:0.142,regX:41.1,rotation:0}},{t:this.instance_11,p:{x:175.8,y:297.1,regX:40.7,regY:41.8,scaleX:0.165,scaleY:0.165,rotation:-34.9}},{t:this.instance_10,p:{regX:40,regY:42.8,scaleX:0.124,scaleY:0.124,x:183,y:325.7,rotation:-34.9,alpha:1}},{t:this.instance_9,p:{y:388.1,regY:40.8,scaleX:0.102,scaleY:0.102,x:172.9,regX:41.1,rotation:-19.7,alpha:1}},{t:this.instance_8,p:{x:106.1,y:303.7,regX:40.9,regY:40,scaleX:0.158,scaleY:0.158,rotation:0,alpha:1}},{t:this.instance_7,p:{x:205.7,y:354.5,regX:40.3,regY:41.2,scaleX:0.094,scaleY:0.094,rotation:-35}},{t:this.instance_6,p:{regX:40.8,regY:41.8,scaleX:0.12,scaleY:0.12,x:154.3,y:288.4,rotation:-34.9,alpha:1}},{t:this.instance_5,p:{regX:40.8,rotation:-34.9,x:140.3,y:291.5,regY:42.5,scaleX:0.135,scaleY:0.135}},{t:this.instance_4,p:{regX:40.6,regY:42.5,scaleX:0.156,scaleY:0.156,rotation:-34.9,x:141,y:306.5}},{t:this.instance_3,p:{regX:41.3,scaleX:0.107,scaleY:0.107,rotation:-34.9,x:220.1,y:333.9,regY:42.5,alpha:1}},{t:this.instance_2,p:{regX:40.5,regY:42.8,scaleX:0.055,scaleY:0.055,x:173.3,y:349.1,rotation:-34.9}},{t:this.instance_1,p:{regX:41.1,rotation:-35,x:185.8,y:299.5,regY:41.5,scaleX:0.141,scaleY:0.143}},{t:this.instance,p:{regX:40.5,regY:42,scaleX:0.142,scaleY:0.142,rotation:-34.9,x:174.3,y:293.7,alpha:1}}]},1).to({state:[{t:this.instance_29,p:{regX:40.6,regY:42.1,scaleX:0.102,scaleY:0.102,x:155.2,y:276.6,rotation:-35}},{t:this.instance_28,p:{regX:40.6,scaleX:0.115,scaleY:0.115,x:146.4,y:297.7,regY:42.6,rotation:-34.9}},{t:this.instance_27,p:{regX:41.3,regY:42.5,scaleX:0.107,scaleY:0.107,x:212.3,y:310.6,rotation:-34.9,alpha:1}},{t:this.instance_26,p:{regX:40.7,regY:41.7,scaleX:0.101,scaleY:0.101,rotation:-34.9,x:214.9,y:342.4,alpha:1}},{t:this.instance_25,p:{regX:40.5,regY:41.4,scaleX:0.116,scaleY:0.116,rotation:-35,x:181.6,y:300.7,alpha:0.941}},{t:this.instance_24,p:{regX:41.6,regY:42,scaleX:0.132,scaleY:0.132,x:221.5,y:309.1,rotation:-34.9,alpha:1}},{t:this.instance_23,p:{regX:40.9,regY:42,scaleX:0.096,scaleY:0.096,rotation:-34.9,x:208.1,y:360.9,alpha:1}},{t:this.instance_22,p:{x:205.6,y:327.2,regX:41.1,regY:42.3,scaleX:0.126,scaleY:0.126,rotation:-34.9,alpha:1}},{t:this.instance_21,p:{x:200.3,y:337.7,regX:40.4,regY:42.2,scaleX:0.14,scaleY:0.14,rotation:-34.9,alpha:1}},{t:this.instance_20,p:{regX:41,regY:40.9,scaleX:0.075,scaleY:0.075,x:145.2,y:406.9,rotation:-34.9,alpha:1}},{t:this.instance_19,p:{regX:40.5,regY:41.9,scaleX:0.139,scaleY:0.139,rotation:-35,x:201.9,y:354.8,alpha:1}},{t:this.instance_18,p:{regX:40.8,regY:42.5,scaleX:0.145,scaleY:0.145,rotation:-34.9,x:112.6,y:413.5}},{t:this.instance_17,p:{regX:40.7,regY:41.3,scaleX:0.113,scaleY:0.113,rotation:0.5,x:133.7,y:289.2,alpha:1}},{t:this.instance_16,p:{regX:40.8,regY:41.5,scaleX:0.132,scaleY:0.132,rotation:-35,x:209.3,y:334.3}},{t:this.instance_15,p:{regX:40.4,regY:39.7,scaleX:0.157,scaleY:0.157,rotation:0,x:240.2,y:307.6,alpha:1}},{t:this.instance_14,p:{regY:39.8,scaleX:0.138,scaleY:0.138,rotation:0,x:170.6,y:386.4,regX:40.5}},{t:this.instance_13,p:{x:134.1,y:329.8,regX:40.7,regY:39.6,scaleX:0.142,scaleY:0.142,rotation:19.2}},{t:this.instance_12,p:{x:212,y:346.6,regY:40.1,scaleX:0.142,scaleY:0.142,regX:41.1,rotation:0}},{t:this.instance_11,p:{x:178.4,y:285.8,regX:40.7,regY:41.8,scaleX:0.165,scaleY:0.165,rotation:-34.9}},{t:this.instance_10,p:{regX:40,regY:42.8,scaleX:0.124,scaleY:0.124,x:192.3,y:317.2,rotation:-34.9,alpha:1}},{t:this.instance_9,p:{y:389.3,regY:40.8,scaleX:0.102,scaleY:0.102,x:181.8,regX:41.1,rotation:-19.7,alpha:1}},{t:this.instance_8,p:{x:104.4,y:291.6,regX:40.9,regY:40,scaleX:0.158,scaleY:0.158,rotation:0,alpha:1}},{t:this.instance_7,p:{x:207.2,y:347.9,regX:40.3,regY:41.2,scaleX:0.094,scaleY:0.094,rotation:-35}},{t:this.instance_6,p:{regX:40.8,regY:41.8,scaleX:0.12,scaleY:0.12,x:153,y:275.9,rotation:-34.9,alpha:1}},{t:this.instance_5,p:{regX:40.8,rotation:-34.9,x:139.3,y:281,regY:42.9,scaleX:0.148,scaleY:0.148}},{t:this.instance_4,p:{regX:40.6,regY:42.5,scaleX:0.156,scaleY:0.156,rotation:-34.9,x:141.5,y:293.5}},{t:this.instance_3,p:{regX:41.3,scaleX:0.107,scaleY:0.107,rotation:-34.9,x:228,y:333.3,regY:42.5,alpha:1}},{t:this.instance_2,p:{regX:40.5,regY:42.8,scaleX:0.055,scaleY:0.055,x:183.6,y:345.3,rotation:-34.9}},{t:this.instance_1,p:{regX:41.1,rotation:-35,x:191.6,y:288.1,regY:41.5,scaleX:0.141,scaleY:0.143}},{t:this.instance,p:{regX:40.5,regY:42,scaleX:0.142,scaleY:0.142,rotation:-34.9,x:175.8,y:281.9,alpha:1}}]},1).to({state:[{t:this.instance_28,p:{regX:41.1,scaleX:0.142,scaleY:0.142,x:209.3,y:342.7,regY:40.1,rotation:0}},{t:this.instance_27,p:{regX:40.6,regY:42.1,scaleX:0.102,scaleY:0.102,x:154.4,y:264.9,rotation:-35,alpha:1}},{t:this.instance_26,p:{regX:40.6,regY:43,scaleX:0.125,scaleY:0.125,rotation:-34.9,x:146.1,y:285.6,alpha:1}},{t:this.instance_25,p:{regX:41.3,regY:42.5,scaleX:0.107,scaleY:0.107,rotation:-34.9,x:217.9,y:309.4,alpha:1}},{t:this.instance_24,p:{regX:40.6,regY:42.1,scaleX:0.116,scaleY:0.116,x:218.7,y:341.9,rotation:-34.9,alpha:1}},{t:this.instance_23,p:{regX:40.5,regY:41.4,scaleX:0.116,scaleY:0.116,rotation:-35,x:186.2,y:291.7,alpha:0.941}},{t:this.instance_22,p:{x:230.6,y:305,regX:41.6,regY:42,scaleX:0.132,scaleY:0.132,rotation:-34.9,alpha:1}},{t:this.instance_21,p:{x:217.3,y:358.4,regX:40.9,regY:42,scaleX:0.096,scaleY:0.096,rotation:-34.9,alpha:1}},{t:this.instance_20,p:{regX:41.1,regY:42.5,scaleX:0.111,scaleY:0.111,x:212.1,y:326.4,rotation:-34.9,alpha:1}},{t:this.instance_19,p:{regX:40.4,regY:42.2,scaleX:0.14,scaleY:0.14,rotation:-34.9,x:207.9,y:335.4,alpha:1}},{t:this.instance_18,p:{regX:41,regY:40.9,scaleX:0.075,scaleY:0.075,rotation:-34.9,x:152.9,y:412.4}},{t:this.instance_17,p:{regX:40.5,regY:41.9,scaleX:0.139,scaleY:0.139,rotation:-35,x:206,y:350.3,alpha:1}},{t:this.instance_16,p:{regX:40.8,regY:42.5,scaleX:0.145,scaleY:0.145,rotation:-34.9,x:119.4,y:424.5}},{t:this.instance_15,p:{regX:40.7,regY:41.3,scaleX:0.113,scaleY:0.113,rotation:0.5,x:133.4,y:277.5,alpha:1}},{t:this.instance_14,p:{regY:41.5,scaleX:0.132,scaleY:0.132,rotation:-35,x:213.6,y:333.4,regX:40.8}},{t:this.instance_13,p:{x:250.4,y:303.9,regX:40.4,regY:39.7,scaleX:0.157,scaleY:0.157,rotation:0}},{t:this.instance_12,p:{x:181.1,y:386.7,regY:39.8,scaleX:0.153,scaleY:0.153,regX:40.8,rotation:0}},{t:this.instance_11,p:{x:138.4,y:319.2,regX:40.7,regY:39.6,scaleX:0.142,scaleY:0.142,rotation:19.2}},{t:this.instance_10,p:{regX:40.7,regY:41.8,scaleX:0.165,scaleY:0.165,x:181.4,y:274.6,rotation:-34.9,alpha:1}},{t:this.instance_9,p:{y:311,regY:42.8,scaleX:0.124,scaleY:0.124,x:200.4,regX:40,rotation:-34.9,alpha:1}},{t:this.instance_8,p:{x:191.1,y:389.5,regX:41.1,regY:40.8,scaleX:0.102,scaleY:0.102,rotation:-19.7,alpha:1}},{t:this.instance_7,p:{x:102.3,y:279.9,regX:41,regY:40.1,scaleX:0.175,scaleY:0.175,rotation:0}},{t:this.instance_6,p:{regX:40.8,regY:41.8,scaleX:0.12,scaleY:0.12,x:151.5,y:264.1,rotation:-34.9,alpha:1}},{t:this.instance_5,p:{regX:40.8,rotation:-34.9,x:136.8,y:268.7,regY:42.9,scaleX:0.148,scaleY:0.148}},{t:this.instance_4,p:{regX:40.6,regY:42.5,scaleX:0.156,scaleY:0.156,rotation:-34.9,x:140.9,y:282.1}},{t:this.instance_3,p:{regX:41.3,scaleX:0.107,scaleY:0.107,rotation:-34.9,x:233.3,y:334.8,regY:42.5,alpha:1}},{t:this.instance_2,p:{regX:40.5,regY:42.8,scaleX:0.055,scaleY:0.055,x:194.7,y:341.2,rotation:-34.9}},{t:this.instance_1,p:{regX:41.1,rotation:-35,x:197.3,y:279.6,regY:41.5,scaleX:0.141,scaleY:0.143}},{t:this.instance,p:{regX:40.5,regY:42,scaleX:0.142,scaleY:0.142,rotation:-34.9,x:178.8,y:271.4,alpha:1}}]},1).to({state:[{t:this.instance_31,p:{regX:43.3,regY:33.8,scaleX:0.095,scaleY:0.095,rotation:0,x:205,y:331.7}},{t:this.instance_30,p:{regX:41.1,regY:40.1,scaleX:0.142,scaleY:0.142,x:205.1,y:336.9,rotation:0}},{t:this.instance_29,p:{regX:40.6,regY:42.1,scaleX:0.102,scaleY:0.102,x:151.3,y:254.6,rotation:-35}},{t:this.instance_28,p:{regX:40.6,scaleX:0.125,scaleY:0.125,x:144.6,y:274.2,regY:43,rotation:-34.9}},{t:this.instance_27,p:{regX:41.3,regY:42.5,scaleX:0.107,scaleY:0.107,x:221.7,y:310.9,rotation:-34.9,alpha:1}},{t:this.instance_26,p:{regX:40.6,regY:42.1,scaleX:0.116,scaleY:0.116,rotation:-34.9,x:219,y:341.8,alpha:1}},{t:this.instance_25,p:{regX:40.5,regY:41.4,scaleX:0.116,scaleY:0.116,rotation:-35,x:190.4,y:284.9,alpha:0.941}},{t:this.instance_24,p:{regX:41.6,regY:42,scaleX:0.132,scaleY:0.132,x:238.3,y:303.4,rotation:-34.9,alpha:1}},{t:this.instance_23,p:{regX:40.9,regY:42,scaleX:0.096,scaleY:0.096,rotation:-34.9,x:223.9,y:354.2,alpha:1}},{t:this.instance_22,p:{x:215.6,y:326.6,regX:41.1,regY:42.5,scaleX:0.111,scaleY:0.111,rotation:-34.9,alpha:1}},{t:this.instance_21,p:{x:212.9,y:334.2,regX:40.4,regY:42.2,scaleX:0.14,scaleY:0.14,rotation:-34.9,alpha:1}},{t:this.instance_20,p:{regX:41,regY:41.5,scaleX:0.091,scaleY:0.091,x:162.5,y:416.3,rotation:-34.9,alpha:1}},{t:this.instance_19,p:{regX:40.5,regY:41.9,scaleX:0.139,scaleY:0.139,rotation:-35,x:207.4,y:344.5,alpha:1}},{t:this.instance_18,p:{regX:40.8,regY:42.5,scaleX:0.145,scaleY:0.145,rotation:-34.9,x:124,y:433}},{t:this.instance_17,p:{regX:40.7,regY:41.3,scaleX:0.113,scaleY:0.113,rotation:0.5,x:130.2,y:266.1,alpha:1}},{t:this.instance_16,p:{regX:40.8,regY:41.5,scaleX:0.132,scaleY:0.132,rotation:-35,x:215.9,y:335.1}},{t:this.instance_15,p:{regX:40.4,regY:39.7,scaleX:0.157,scaleY:0.157,rotation:0,x:260.5,y:302.4,alpha:1}},{t:this.instance_14,p:{regY:39.8,scaleX:0.153,scaleY:0.153,rotation:0,x:191.8,y:385.9,regX:40.8}},{t:this.instance_13,p:{x:140.6,y:308,regX:41.1,regY:39.8,scaleX:0.154,scaleY:0.154,rotation:19.2}},{t:this.instance_12,p:{x:184.3,y:264.7,regY:41.8,scaleX:0.165,scaleY:0.165,regX:40.7,rotation:-34.9}},{t:this.instance_11,p:{x:208.8,y:306.2,regX:40,regY:42.8,scaleX:0.124,scaleY:0.124,rotation:-34.9}},{t:this.instance_10,p:{regX:41.1,regY:40.8,scaleX:0.102,scaleY:0.102,x:200.8,y:388.4,rotation:-19.7,alpha:1}},{t:this.instance_9,p:{y:268.5,regY:40.1,scaleX:0.175,scaleY:0.175,x:99,regX:41,rotation:0,alpha:1}},{t:this.instance_8,p:{x:148.4,y:253.5,regX:40.8,regY:41.8,scaleX:0.12,scaleY:0.12,rotation:-34.9,alpha:1}},{t:this.instance_7,p:{x:133.5,y:257.3,regX:40.8,regY:42.9,scaleX:0.148,scaleY:0.148,rotation:-34.9}},{t:this.instance_6,p:{regX:40.6,regY:42.5,scaleX:0.156,scaleY:0.156,x:139.1,y:270.7,rotation:-34.9,alpha:1}},{t:this.instance_5,p:{regX:41.3,rotation:-34.9,x:236.9,y:335.6,regY:42.5,scaleX:0.107,scaleY:0.107}},{t:this.instance_4,p:{regX:40.5,regY:42.8,scaleX:0.055,scaleY:0.055,rotation:-34.9,x:194.7,y:341.2}},{t:this.instance_3,p:{regX:41.1,scaleX:0.141,scaleY:0.143,rotation:-35,x:202.6,y:272.8,regY:41.5,alpha:1}},{t:this.instance_2,p:{regX:40.5,regY:42,scaleX:0.142,scaleY:0.142,x:180.4,y:261.5,rotation:-34.9}},{t:this.instance_1,p:{regX:43.6,rotation:0,x:205.2,y:336.2,regY:34.2,scaleX:0.075,scaleY:0.075}},{t:this.instance,p:{regX:40.6,regY:41.9,scaleX:0.099,scaleY:0.099,rotation:-35,x:213.3,y:333.9,alpha:1}}]},1).to({state:[{t:this.instance_30,p:{regX:43.3,regY:33.8,scaleX:0.095,scaleY:0.095,x:201.6,y:323.7,rotation:0}},{t:this.instance_29,p:{regX:41.4,regY:40.1,scaleX:0.158,scaleY:0.158,x:200.1,y:331.5,rotation:0}},{t:this.instance_28,p:{regX:40.6,scaleX:0.102,scaleY:0.102,x:147.3,y:244.3,regY:42.1,rotation:-35}},{t:this.instance_27,p:{regX:40.6,regY:43,scaleX:0.125,scaleY:0.125,x:142.4,y:261.8,rotation:-34.9,alpha:1}},{t:this.instance_26,p:{regX:41.3,regY:42.5,scaleX:0.107,scaleY:0.107,rotation:-34.9,x:224.8,y:314.3,alpha:1}},{t:this.instance_25,p:{regX:40.5,regY:42.4,scaleX:0.13,scaleY:0.13,rotation:-34.9,x:220.3,y:334.6,alpha:1}},{t:this.instance_24,p:{regX:40.5,regY:41.4,scaleX:0.116,scaleY:0.116,x:195.4,y:278.6,rotation:-35,alpha:0.941}},{t:this.instance_23,p:{regX:41.6,regY:42,scaleX:0.132,scaleY:0.132,rotation:-34.9,x:245.1,y:304.3,alpha:1}},{t:this.instance_22,p:{x:227.9,y:350.2,regX:40.9,regY:42,scaleX:0.096,scaleY:0.096,rotation:-34.9,alpha:1}},{t:this.instance_21,p:{x:217.2,y:326.7,regX:41.1,regY:42.5,scaleX:0.111,scaleY:0.111,rotation:-34.9,alpha:1}},{t:this.instance_20,p:{regX:40.4,regY:42.2,scaleX:0.14,scaleY:0.14,x:206,y:338,rotation:-34.9,alpha:1}},{t:this.instance_19,p:{regX:41,regY:41.5,scaleX:0.091,scaleY:0.091,rotation:-34.9,x:171.1,y:418.2,alpha:1}},{t:this.instance_18,p:{regX:40.8,regY:42.5,scaleX:0.145,scaleY:0.145,rotation:-34.9,x:131.1,y:440.8}},{t:this.instance_17,p:{regX:40.7,regY:41.3,scaleX:0.113,scaleY:0.113,rotation:0.5,x:126.4,y:254.7,alpha:1}},{t:this.instance_16,p:{regX:40.8,regY:41.5,scaleX:0.132,scaleY:0.132,rotation:-35,x:215.9,y:335.1}},{t:this.instance_15,p:{regX:40.4,regY:39.7,scaleX:0.157,scaleY:0.157,rotation:0,x:268.8,y:302.5,alpha:1}},{t:this.instance_14,p:{regY:39.8,scaleX:0.153,scaleY:0.153,rotation:0,x:202.1,y:383.1,regX:40.8}},{t:this.instance_13,p:{x:140.6,y:308,regX:41.1,regY:39.8,scaleX:0.154,scaleY:0.154,rotation:19.2}},{t:this.instance_12,p:{x:186.5,y:257.4,regY:41.8,scaleX:0.165,scaleY:0.165,regX:40.7,rotation:-34.9}},{t:this.instance_11,p:{x:215.1,y:304.6,regX:40,regY:42.8,scaleX:0.124,scaleY:0.124,rotation:-34.9}},{t:this.instance_10,p:{regX:41.1,regY:40.8,scaleX:0.102,scaleY:0.102,x:210.4,y:385.7,rotation:-19.7,alpha:1}},{t:this.instance_9,p:{y:256.7,regY:40.1,scaleX:0.175,scaleY:0.175,x:94.7,regX:41,rotation:0,alpha:1}},{t:this.instance_8,p:{x:144.2,y:244.2,regX:40.8,regY:41.8,scaleX:0.12,scaleY:0.12,rotation:-34.9,alpha:1}},{t:this.instance_7,p:{x:129.3,y:246.7,regX:40.8,regY:42.9,scaleX:0.148,scaleY:0.148,rotation:-34.9}},{t:this.instance_6,p:{regX:40.6,regY:42.5,scaleX:0.156,scaleY:0.156,x:135.5,y:259.1,rotation:-34.9,alpha:1}},{t:this.instance_5,p:{regX:41.3,rotation:-34.9,x:238.6,y:338.8,regY:42.5,scaleX:0.107,scaleY:0.107}},{t:this.instance_4,p:{regX:41.1,regY:41.5,scaleX:0.141,scaleY:0.143,rotation:-35,x:208.3,y:267.5}},{t:this.instance_3,p:{regX:40.5,scaleX:0.142,scaleY:0.142,rotation:-34.9,x:182.1,y:253.2,regY:42,alpha:1}},{t:this.instance_2,p:{regX:40.6,regY:41.9,scaleX:0.099,scaleY:0.099,x:218,y:340.8,rotation:-35}},{t:this.instance_1,p:{regX:40.5,rotation:-35,x:209.7,y:333,regY:41.9,scaleX:0.139,scaleY:0.139}},{t:this.instance,p:{regX:40.8,regY:41.6,scaleX:0.056,scaleY:0.056,rotation:-35,x:215.4,y:333.5,alpha:1}}]},1).to({state:[{t:this.instance_29,p:{regX:43.3,regY:33.8,scaleX:0.095,scaleY:0.095,x:198.4,y:317.1,rotation:0}},{t:this.instance_28,p:{regX:41.4,scaleX:0.158,scaleY:0.158,x:195.7,y:326.2,regY:40.1,rotation:0}},{t:this.instance_27,p:{regX:40.6,regY:42.1,scaleX:0.102,scaleY:0.102,x:142.2,y:236.8,rotation:-35,alpha:1}},{t:this.instance_26,p:{regX:40.6,regY:43,scaleX:0.125,scaleY:0.125,rotation:-34.9,x:139.4,y:250.6,alpha:1}},{t:this.instance_25,p:{regX:41.3,regY:42.5,scaleX:0.107,scaleY:0.107,rotation:-34.9,x:226,y:317.8,alpha:1}},{t:this.instance_24,p:{regX:40.5,regY:42.4,scaleX:0.13,scaleY:0.13,x:220.3,y:334.6,rotation:-34.9,alpha:1}},{t:this.instance_23,p:{regX:40.5,regY:41.4,scaleX:0.116,scaleY:0.116,rotation:-35,x:200.3,y:274,alpha:0.941}},{t:this.instance_22,p:{x:251.4,y:306,regX:41.6,regY:42,scaleX:0.132,scaleY:0.132,rotation:-34.9,alpha:1}},{t:this.instance_21,p:{x:230.3,y:345.3,regX:40.9,regY:42,scaleX:0.096,scaleY:0.096,rotation:-34.9,alpha:1}},{t:this.instance_20,p:{regX:41.1,regY:42.5,scaleX:0.111,scaleY:0.111,x:216.4,y:328.5,rotation:-34.9,alpha:1}},{t:this.instance_19,p:{regX:40.4,regY:42.2,scaleX:0.14,scaleY:0.14,rotation:-34.9,x:202.2,y:331.1,alpha:1}},{t:this.instance_18,p:{regX:41,regY:41.5,scaleX:0.091,scaleY:0.091,rotation:-34.9,x:171.1,y:418.2}},{t:this.instance_17,p:{regX:40.8,regY:42.5,scaleX:0.145,scaleY:0.145,rotation:-34.9,x:131.1,y:440.8,alpha:1}},{t:this.instance_16,p:{regX:40.7,regY:41.3,scaleX:0.113,scaleY:0.113,rotation:0.5,x:122,y:243.8}},{t:this.instance_15,p:{regX:40.4,regY:39.7,scaleX:0.157,scaleY:0.157,rotation:0,x:277.8,y:303,alpha:1}},{t:this.instance_14,p:{regY:39.8,scaleX:0.153,scaleY:0.153,rotation:0,x:202.1,y:383.1,regX:40.8}},{t:this.instance_13,p:{x:141.2,y:284.6,regX:41.1,regY:39.8,scaleX:0.154,scaleY:0.154,rotation:19.2}},{t:this.instance_12,p:{x:188.2,y:249.9,regY:41.8,scaleX:0.165,scaleY:0.165,regX:40.7,rotation:-34.9}},{t:this.instance_11,p:{x:220.2,y:304.4,regX:40,regY:43.8,scaleX:0.13,scaleY:0.13,rotation:-34.9}},{t:this.instance_10,p:{regX:41.1,regY:40.8,scaleX:0.102,scaleY:0.102,x:210.4,y:385.7,rotation:-19.7,alpha:1}},{t:this.instance_9,p:{y:244.7,regY:40.1,scaleX:0.175,scaleY:0.175,x:90.7,regX:41,rotation:0,alpha:1}},{t:this.instance_8,p:{x:139.7,y:235.3,regX:40.8,regY:41.8,scaleX:0.12,scaleY:0.12,rotation:-34.9,alpha:1}},{t:this.instance_7,p:{x:123.7,y:237.2,regX:40.8,regY:42.9,scaleX:0.148,scaleY:0.148,rotation:-34.9}},{t:this.instance_6,p:{regX:40.6,regY:42.5,scaleX:0.156,scaleY:0.156,x:131.3,y:248.6,rotation:-34.9,alpha:1}},{t:this.instance_5,p:{regX:41.3,rotation:-34.9,x:238.6,y:340.3,regY:42.5,scaleX:0.107,scaleY:0.107}},{t:this.instance_4,p:{regX:41.1,regY:41.5,scaleX:0.141,scaleY:0.143,rotation:-35,x:214,y:264}},{t:this.instance_3,p:{regX:40.5,scaleX:0.142,scaleY:0.142,rotation:-34.9,x:182.8,y:246,regY:42,alpha:1}},{t:this.instance_2,p:{regX:40.6,regY:42.5,scaleX:0.12,scaleY:0.12,x:213.3,y:339,rotation:-34.9}},{t:this.instance_1,p:{regX:40.5,rotation:-35,x:206.8,y:332.3,regY:41.9,scaleX:0.139,scaleY:0.139}},{t:this.instance,p:{regX:40.8,regY:41.6,scaleX:0.056,scaleY:0.056,rotation:-35,x:223.2,y:330.6,alpha:1}}]},1).to({state:[{t:this.instance_29,p:{regX:43.3,regY:33.8,scaleX:0.095,scaleY:0.095,x:194.9,y:309.4,rotation:0}},{t:this.instance_28,p:{regX:41.4,scaleX:0.158,scaleY:0.158,x:191.2,y:320.2,regY:40.1,rotation:0}},{t:this.instance_27,p:{regX:40.6,regY:42.1,scaleX:0.102,scaleY:0.102,x:137.3,y:228.6,rotation:-35,alpha:1}},{t:this.instance_26,p:{regX:40.6,regY:43,scaleX:0.125,scaleY:0.125,rotation:-34.9,x:136.3,y:239.9,alpha:1}},{t:this.instance_25,p:{regX:41.3,regY:42.5,scaleX:0.107,scaleY:0.107,rotation:-34.9,x:225.7,y:321.9,alpha:1}},{t:this.instance_24,p:{regX:40.5,regY:42.4,scaleX:0.13,scaleY:0.13,x:219,y:334.3,rotation:-34.9,alpha:1}},{t:this.instance_23,p:{regX:40.5,regY:41.4,scaleX:0.116,scaleY:0.116,rotation:-35,x:204.9,y:270.7,alpha:0.941}},{t:this.instance_22,p:{x:256.4,y:308.4,regX:41.6,regY:42,scaleX:0.132,scaleY:0.132,rotation:-34.9,alpha:1}},{t:this.instance_21,p:{x:229.4,y:340.7,regX:40.9,regY:42,scaleX:0.096,scaleY:0.096,rotation:-34.9,alpha:1}},{t:this.instance_20,p:{regX:41.1,regY:42.5,scaleX:0.111,scaleY:0.111,x:214.7,y:330.6,rotation:-34.9,alpha:1}},{t:this.instance_19,p:{regX:40.4,regY:42.2,scaleX:0.14,scaleY:0.14,rotation:-34.9,x:201.1,y:325.1,alpha:1}},{t:this.instance_18,p:{regX:41,regY:41.5,scaleX:0.091,scaleY:0.091,rotation:-34.9,x:171.1,y:418.2}},{t:this.instance_17,p:{regX:40.8,regY:42.5,scaleX:0.145,scaleY:0.145,rotation:-34.9,x:131.1,y:440.8,alpha:1}},{t:this.instance_16,p:{regX:40.7,regY:41.3,scaleX:0.113,scaleY:0.113,rotation:0.5,x:118,y:234}},{t:this.instance_15,p:{regX:40.6,regY:39.8,scaleX:0.18,scaleY:0.18,rotation:0,x:285.6,y:304.4,alpha:1}},{t:this.instance_14,p:{regY:39.8,scaleX:0.153,scaleY:0.153,rotation:0,x:202.1,y:383.1,regX:40.8}},{t:this.instance_13,p:{x:139.4,y:272.7,regX:41.1,regY:39.8,scaleX:0.154,scaleY:0.154,rotation:19.2}},{t:this.instance_12,p:{x:191.1,y:243.3,regY:41.8,scaleX:0.165,scaleY:0.165,regX:40.7,rotation:-34.9}},{t:this.instance_11,p:{x:224.2,y:305.8,regX:40,regY:43.8,scaleX:0.13,scaleY:0.13,rotation:-34.9}},{t:this.instance_10,p:{regX:41.1,regY:40.8,scaleX:0.102,scaleY:0.102,x:210.4,y:385.7,rotation:-19.7,alpha:1}},{t:this.instance_9,p:{y:233.8,regY:40.1,scaleX:0.175,scaleY:0.175,x:86.3,regX:41,rotation:0,alpha:1}},{t:this.instance_8,p:{x:135,y:228,regX:40.8,regY:41.8,scaleX:0.12,scaleY:0.12,rotation:-34.9,alpha:1}},{t:this.instance_7,p:{x:118.5,y:228.3,regX:40.8,regY:42.9,scaleX:0.148,scaleY:0.148,rotation:-34.9}},{t:this.instance_6,p:{regX:40.6,regY:42.5,scaleX:0.156,scaleY:0.156,x:127,y:238.8,rotation:-34.9,alpha:1}},{t:this.instance_5,p:{regX:41.3,rotation:-34.9,x:237.2,y:342.2,regY:42.5,scaleX:0.107,scaleY:0.107}},{t:this.instance_4,p:{regX:41.1,regY:41.5,scaleX:0.141,scaleY:0.143,rotation:-35,x:219.8,y:262}},{t:this.instance_3,p:{regX:40.5,scaleX:0.142,scaleY:0.142,rotation:-34.9,x:183.8,y:238.6,regY:42,alpha:1}},{t:this.instance_2,p:{regX:40.6,regY:42.5,scaleX:0.12,scaleY:0.12,x:209.8,y:337.3,rotation:-34.9}},{t:this.instance_1,p:{regX:40.5,rotation:-35,x:202.9,y:331.1,regY:41.9,scaleX:0.139,scaleY:0.139}},{t:this.instance,p:{regX:40.8,regY:41.6,scaleX:0.056,scaleY:0.056,rotation:-35,x:230.4,y:328.9,alpha:1}}]},1).to({state:[{t:this.instance_29,p:{regX:43.3,regY:33.8,scaleX:0.095,scaleY:0.095,x:193.1,y:302.8,rotation:0}},{t:this.instance_28,p:{regX:41.4,scaleX:0.158,scaleY:0.158,x:188,y:313.7,regY:40.1,rotation:0}},{t:this.instance_27,p:{regX:40.6,regY:42.1,scaleX:0.102,scaleY:0.102,x:133,y:221.5,rotation:-35,alpha:1}},{t:this.instance_26,p:{regX:40.6,regY:43.1,scaleX:0.16,scaleY:0.16,rotation:-34.9,x:133.1,y:230.1,alpha:1}},{t:this.instance_25,p:{regX:41.5,regY:42.6,scaleX:0.12,scaleY:0.12,rotation:-34.9,x:224.4,y:326,alpha:1}},{t:this.instance_24,p:{regX:40.5,regY:42.4,scaleX:0.13,scaleY:0.13,x:217.7,y:334.3,rotation:-34.9,alpha:1}},{t:this.instance_23,p:{regX:40.5,regY:41.4,scaleX:0.116,scaleY:0.116,rotation:-35,x:209.4,y:269.7,alpha:0.941}},{t:this.instance_22,p:{x:260.9,y:310.6,regX:42,regY:43.3,scaleX:0.16,scaleY:0.16,rotation:-34.9,alpha:1}},{t:this.instance_21,p:{x:227.2,y:336.9,regX:40.9,regY:42,scaleX:0.096,scaleY:0.096,rotation:-34.9,alpha:1}},{t:this.instance_20,p:{regX:41.1,regY:42.5,scaleX:0.111,scaleY:0.111,x:211,y:330.5,rotation:-34.9,alpha:1}},{t:this.instance_19,p:{regX:40.4,regY:42.2,scaleX:0.14,scaleY:0.14,rotation:-34.9,x:197.1,y:319.1,alpha:1}},{t:this.instance_18,p:{regX:41,regY:41.5,scaleX:0.091,scaleY:0.091,rotation:-34.9,x:171.1,y:418.2}},{t:this.instance_17,p:{regX:40.8,regY:42.5,scaleX:0.145,scaleY:0.145,rotation:-34.9,x:131.1,y:440.8,alpha:1}},{t:this.instance_16,p:{regX:40.7,regY:41.3,scaleX:0.113,scaleY:0.113,rotation:0.5,x:112.5,y:226.4}},{t:this.instance_15,p:{regX:40.6,regY:39.8,scaleX:0.18,scaleY:0.18,rotation:0,x:293.1,y:305.9,alpha:1}},{t:this.instance_14,p:{regY:39.8,scaleX:0.153,scaleY:0.153,rotation:0,x:202.1,y:383.1,regX:40.8}},{t:this.instance_13,p:{x:138,y:261,regX:41.1,regY:39.9,scaleX:0.18,scaleY:0.18,rotation:19.1}},{t:this.instance_12,p:{x:192.1,y:236.5,regY:41.8,scaleX:0.165,scaleY:0.165,regX:40.7,rotation:-34.9}},{t:this.instance_11,p:{x:227.2,y:307.9,regX:40,regY:43.8,scaleX:0.13,scaleY:0.13,rotation:-34.9}},{t:this.instance_10,p:{regX:41.1,regY:40.8,scaleX:0.102,scaleY:0.102,x:210.4,y:385.7,rotation:-19.7,alpha:1}},{t:this.instance_9,p:{y:223,regY:40.1,scaleX:0.175,scaleY:0.175,x:81.7,regX:41,rotation:0,alpha:1}},{t:this.instance_8,p:{x:129.8,y:220.9,regX:40.8,regY:41.8,scaleX:0.12,scaleY:0.12,rotation:-34.9,alpha:1}},{t:this.instance_7,p:{x:113,y:219.9,regX:40.8,regY:42.9,scaleX:0.148,scaleY:0.148,rotation:-34.9}},{t:this.instance_6,p:{regX:40.6,regY:42.5,scaleX:0.156,scaleY:0.156,x:122.4,y:229.6,rotation:-34.9,alpha:1}},{t:this.instance_5,p:{regX:41.1,rotation:-34.9,x:233.8,y:344,regY:42.6,scaleX:0.1,scaleY:0.1}},{t:this.instance_4,p:{regX:41.1,regY:41.5,scaleX:0.141,scaleY:0.143,rotation:-35,x:224.6,y:260.7}},{t:this.instance_3,p:{regX:40.5,scaleX:0.142,scaleY:0.142,rotation:-34.9,x:184.8,y:231.9,regY:42,alpha:1}},{t:this.instance_2,p:{regX:40.7,regY:42.4,scaleX:0.1,scaleY:0.1,x:204.7,y:335.3,rotation:-34.8}},{t:this.instance_1,p:{regX:40.5,rotation:-35,x:197.9,y:329.1,regY:41.9,scaleX:0.139,scaleY:0.139}},{t:this.instance,p:{regX:40.7,regY:43,scaleX:0.075,scaleY:0.075,rotation:-34.8,x:236,y:327.6,alpha:1}}]},1).to({state:[{t:this.instance_28,p:{regX:43.3,scaleX:0.095,scaleY:0.095,x:191.4,y:295.6,regY:33.8,rotation:0}},{t:this.instance_27,p:{regX:41.4,regY:40.1,scaleX:0.158,scaleY:0.158,x:185,y:306.4,rotation:0,alpha:1}},{t:this.instance_26,p:{regX:40.6,regY:43.1,scaleX:0.16,scaleY:0.16,rotation:-34.9,x:129.8,y:221.4,alpha:1}},{t:this.instance_25,p:{regX:41.5,regY:42.6,scaleX:0.12,scaleY:0.12,rotation:-34.9,x:221.7,y:328.5,alpha:1}},{t:this.instance_24,p:{regX:40.5,regY:42.4,scaleX:0.13,scaleY:0.13,x:214.7,y:333.8,rotation:-34.9,alpha:1}},{t:this.instance_23,p:{regX:40.5,regY:41.4,scaleX:0.116,scaleY:0.116,rotation:-35,x:214.7,y:268.7,alpha:0.941}},{t:this.instance_22,p:{x:263.9,y:313.6,regX:42,regY:43.3,scaleX:0.16,scaleY:0.16,rotation:-34.9,alpha:1}},{t:this.instance_21,p:{x:224.5,y:332.5,regX:40.9,regY:42,scaleX:0.096,scaleY:0.096,rotation:-34.9,alpha:1}},{t:this.instance_20,p:{regX:41.1,regY:42.5,scaleX:0.111,scaleY:0.111,x:207.5,y:330.5,rotation:-34.9,alpha:1}},{t:this.instance_19,p:{regX:40.4,regY:42.2,scaleX:0.14,scaleY:0.14,rotation:-34.9,x:194.1,y:311.9,alpha:1}},{t:this.instance_18,p:{regX:41,regY:41.5,scaleX:0.091,scaleY:0.091,rotation:-34.9,x:171.1,y:418.2}},{t:this.instance_17,p:{regX:40.8,regY:42.5,scaleX:0.145,scaleY:0.145,rotation:-34.9,x:131.1,y:440.8,alpha:1}},{t:this.instance_16,p:{regX:40.7,regY:41.3,scaleX:0.113,scaleY:0.113,rotation:0.5,x:108,y:217.6}},{t:this.instance_15,p:{regX:40.6,regY:39.8,scaleX:0.18,scaleY:0.18,rotation:0,x:299.1,y:308.7,alpha:1}},{t:this.instance_14,p:{regY:39.8,scaleX:0.153,scaleY:0.153,rotation:0,x:202.1,y:383.1,regX:40.8}},{t:this.instance_13,p:{x:135.5,y:250.2,regX:41.1,regY:39.9,scaleX:0.18,scaleY:0.18,rotation:19.1}},{t:this.instance_12,p:{x:197.1,y:231.3,regY:41.8,scaleX:0.165,scaleY:0.165,regX:40.7,rotation:-34.9}},{t:this.instance_11,p:{x:229.4,y:309.7,regX:40,regY:43.8,scaleX:0.13,scaleY:0.13,rotation:-34.9}},{t:this.instance_10,p:{regX:41.1,regY:40.8,scaleX:0.102,scaleY:0.102,x:210.4,y:385.7,rotation:-19.7,alpha:1}},{t:this.instance_9,p:{y:213,regY:40.1,scaleX:0.175,scaleY:0.175,x:76.9,regX:41,rotation:0,alpha:1}},{t:this.instance_8,p:{x:126.3,y:213.9,regX:40.8,regY:41.8,scaleX:0.12,scaleY:0.12,rotation:-34.9,alpha:1}},{t:this.instance_7,p:{x:107.5,y:213.3,regX:40.8,regY:42.9,scaleX:0.148,scaleY:0.148,rotation:-34.9}},{t:this.instance_6,p:{regX:40.5,regY:42.7,scaleX:0.16,scaleY:0.16,x:117.9,y:221.3,rotation:-34.9,alpha:1}},{t:this.instance_5,p:{regX:41.1,rotation:-34.9,x:229.9,y:345,regY:42.6,scaleX:0.1,scaleY:0.1}},{t:this.instance_4,p:{regX:41.1,regY:41.5,scaleX:0.141,scaleY:0.143,rotation:-35,x:230.6,y:261}},{t:this.instance_3,p:{regX:40.5,scaleX:0.142,scaleY:0.142,rotation:-34.9,x:187.3,y:226.6,regY:42,alpha:1}},{t:this.instance_2,p:{regX:40.7,regY:42.4,scaleX:0.1,scaleY:0.1,x:199.7,y:332.8,rotation:-34.8}},{t:this.instance_1,p:{regX:40.5,rotation:-35,x:193.2,y:326.6,regY:41.9,scaleX:0.139,scaleY:0.139}},{t:this.instance,p:{regX:40.7,regY:43,scaleX:0.075,scaleY:0.075,rotation:-34.8,x:240.3,y:326.3,alpha:1}}]},1).to({state:[{t:this.instance_28,p:{regX:43.3,scaleX:0.095,scaleY:0.095,x:189.5,y:288.2,regY:33.8,rotation:0}},{t:this.instance_27,p:{regX:41.4,regY:40.1,scaleX:0.158,scaleY:0.158,x:182.5,y:300.1,rotation:0,alpha:1}},{t:this.instance_26,p:{regX:40.6,regY:43.1,scaleX:0.16,scaleY:0.16,rotation:-34.9,x:126.3,y:212.1,alpha:1}},{t:this.instance_25,p:{regX:41.5,regY:42.6,scaleX:0.12,scaleY:0.12,rotation:-34.9,x:221.7,y:328.5,alpha:1}},{t:this.instance_24,p:{regX:40.5,regY:42.4,scaleX:0.13,scaleY:0.13,x:211.6,y:333.4,rotation:-34.9,alpha:1}},{t:this.instance_23,p:{regX:40.5,regY:41.4,scaleX:0.116,scaleY:0.116,rotation:-35,x:220.5,y:268.3,alpha:0.941}},{t:this.instance_22,p:{x:266.4,y:316.5,regX:42,regY:43.3,scaleX:0.16,scaleY:0.16,rotation:-34.9,alpha:1}},{t:this.instance_21,p:{x:218,y:332,regX:41.1,regY:43,scaleX:0.047,scaleY:0.047,rotation:-34.9,alpha:1}},{t:this.instance_20,p:{regX:41.1,regY:42.5,scaleX:0.111,scaleY:0.111,x:203.4,y:331.5,rotation:-34.9,alpha:1}},{t:this.instance_19,p:{regX:40.4,regY:42.2,scaleX:0.14,scaleY:0.14,rotation:-34.9,x:191.2,y:306.4,alpha:1}},{t:this.instance_18,p:{regX:41,regY:41.5,scaleX:0.091,scaleY:0.091,rotation:-34.9,x:171.1,y:418.2}},{t:this.instance_17,p:{regX:40.8,regY:42.5,scaleX:0.145,scaleY:0.145,rotation:-34.9,x:131.1,y:440.8,alpha:1}},{t:this.instance_16,p:{regX:40.7,regY:41.3,scaleX:0.113,scaleY:0.113,rotation:0.5,x:102.9,y:209.1}},{t:this.instance_15,p:{regX:40.6,regY:39.8,scaleX:0.18,scaleY:0.18,rotation:0,x:305.1,y:310.8,alpha:1}},{t:this.instance_14,p:{regY:39.8,scaleX:0.153,scaleY:0.153,rotation:0,x:251.7,y:354.9,regX:40.8}},{t:this.instance_13,p:{x:132.9,y:238.8,regX:41.3,regY:40.1,scaleX:0.16,scaleY:0.16,rotation:19}},{t:this.instance_12,p:{x:201.3,y:224.4,regY:41.8,scaleX:0.165,scaleY:0.165,regX:40.7,rotation:-34.9}},{t:this.instance_11,p:{x:230.9,y:313.1,regX:40,regY:43.8,scaleX:0.13,scaleY:0.13,rotation:-34.9}},{t:this.instance_10,p:{regX:41.1,regY:40.8,scaleX:0.102,scaleY:0.102,x:247.6,y:354.6,rotation:-19.7,alpha:1}},{t:this.instance_9,p:{y:203.5,regY:40.1,scaleX:0.175,scaleY:0.175,x:71.4,regX:41,rotation:0,alpha:1}},{t:this.instance_8,p:{x:122.6,y:208.9,regX:40.8,regY:41.8,scaleX:0.12,scaleY:0.12,rotation:-34.9,alpha:1}},{t:this.instance_7,p:{x:102.3,y:207,regX:40.8,regY:42.9,scaleX:0.148,scaleY:0.148,rotation:-34.9}},{t:this.instance_6,p:{regX:40.5,regY:42.7,scaleX:0.16,scaleY:0.16,x:114.2,y:212.8,rotation:-34.9,alpha:1}},{t:this.instance_5,p:{regX:41.1,rotation:-34.9,x:224.9,y:346.3,regY:42.6,scaleX:0.1,scaleY:0.1}},{t:this.instance_4,p:{regX:41.1,regY:41.5,scaleX:0.141,scaleY:0.143,rotation:-35,x:236.6,y:262.6}},{t:this.instance_3,p:{regX:40.5,scaleX:0.142,scaleY:0.142,rotation:-34.9,x:190.1,y:218.6,regY:42,alpha:1}},{t:this.instance_2,p:{regX:40.7,regY:42.4,scaleX:0.1,scaleY:0.1,x:195.5,y:329.7,rotation:-34.8}},{t:this.instance_1,p:{regX:40.5,rotation:-35,x:189.4,y:323,regY:41.9,scaleX:0.139,scaleY:0.139}},{t:this.instance,p:{regX:40.7,regY:43,scaleX:0.075,scaleY:0.075,rotation:-34.8,x:242.7,y:325.3,alpha:1}}]},1).to({state:[{t:this.instance_28,p:{regX:43.3,scaleX:0.095,scaleY:0.095,x:188.9,y:280.9,regY:33.8,rotation:0}},{t:this.instance_27,p:{regX:41.4,regY:40.1,scaleX:0.158,scaleY:0.158,x:181.7,y:293.1,rotation:0,alpha:1}},{t:this.instance_26,p:{regX:40.6,regY:43.1,scaleX:0.16,scaleY:0.16,rotation:-34.9,x:123.3,y:203.2,alpha:1}},{t:this.instance_25,p:{regX:41.5,regY:42.6,scaleX:0.12,scaleY:0.12,rotation:-34.9,x:217,y:325.8,alpha:1}},{t:this.instance_24,p:{regX:40.5,regY:42.4,scaleX:0.13,scaleY:0.13,x:208.2,y:332.5,rotation:-34.9,alpha:1}},{t:this.instance_23,p:{regX:40.5,regY:41.4,scaleX:0.116,scaleY:0.116,rotation:-35,x:226.3,y:268.6,alpha:0.941}},{t:this.instance_22,p:{x:267.1,y:318.9,regX:42,regY:43.3,scaleX:0.16,scaleY:0.16,rotation:-34.9,alpha:1}},{t:this.instance_21,p:{x:214.9,y:335,regX:41.1,regY:43,scaleX:0.047,scaleY:0.047,rotation:-34.9,alpha:1}},{t:this.instance_20,p:{regX:41.1,regY:42.5,scaleX:0.111,scaleY:0.111,x:199.7,y:330.4,rotation:-34.9,alpha:1}},{t:this.instance_19,p:{regX:40.4,regY:42.2,scaleX:0.14,scaleY:0.14,rotation:-34.9,x:189.3,y:299.9,alpha:1}},{t:this.instance_18,p:{regX:41.3,regY:41.6,scaleX:0.1,scaleY:0.1,rotation:-34.9,x:229.8,y:410.6}},{t:this.instance_17,p:{regX:41,regY:42.8,scaleX:0.15,scaleY:0.15,rotation:-34.9,x:179.8,y:467.2,alpha:1}},{t:this.instance_16,p:{regX:40.7,regY:41.3,scaleX:0.113,scaleY:0.113,rotation:0.5,x:97.9,y:201.5}},{t:this.instance_15,p:{regX:40.6,regY:39.8,scaleX:0.18,scaleY:0.18,rotation:0,x:309.6,y:312.9,alpha:1}},{t:this.instance_14,p:{regY:39.8,scaleX:0.153,scaleY:0.153,rotation:0,x:259.4,y:346.1,regX:40.8}},{t:this.instance_13,p:{x:131.3,y:227.6,regX:41.3,regY:40.1,scaleX:0.16,scaleY:0.16,rotation:19}},{t:this.instance_12,p:{x:207.6,y:218,regY:42.1,scaleX:0.12,scaleY:0.12,regX:40.8,rotation:-34.9}},{t:this.instance_11,p:{x:230.6,y:315.7,regX:40,regY:43.8,scaleX:0.13,scaleY:0.13,rotation:-34.9}},{t:this.instance_10,p:{regX:41.1,regY:40.8,scaleX:0.102,scaleY:0.102,x:255.3,y:345.7,rotation:-19.7,alpha:1}},{t:this.instance_9,p:{y:195.2,regY:40.1,scaleX:0.175,scaleY:0.175,x:65.9,regX:41,rotation:0,alpha:1}},{t:this.instance_8,p:{x:119.1,y:204,regX:40.8,regY:41.8,scaleX:0.12,scaleY:0.12,rotation:-34.9,alpha:1}},{t:this.instance_7,p:{x:96.8,y:202,regX:40.8,regY:42.9,scaleX:0.148,scaleY:0.148,rotation:-34.9}},{t:this.instance_6,p:{regX:40.5,regY:42.7,scaleX:0.16,scaleY:0.16,x:109,y:204.9,rotation:-34.9,alpha:1}},{t:this.instance_5,p:{regX:41.1,rotation:-34.9,x:220.4,y:346.3,regY:42.6,scaleX:0.1,scaleY:0.1}},{t:this.instance_4,p:{regX:41.1,regY:41.5,scaleX:0.141,scaleY:0.143,rotation:-35,x:241.9,y:264.2}},{t:this.instance_3,p:{regX:40.5,scaleX:0.142,scaleY:0.142,rotation:-34.9,x:193,y:210.9,regY:42,alpha:1}},{t:this.instance_2,p:{regX:40.7,regY:42.4,scaleX:0.1,scaleY:0.1,x:191.7,y:326.4,rotation:-34.8}},{t:this.instance_1,p:{regX:40.5,rotation:-35,x:186.7,y:319.5,regY:41.9,scaleX:0.139,scaleY:0.139}},{t:this.instance,p:{regX:40.7,regY:43,scaleX:0.075,scaleY:0.075,rotation:-34.8,x:245.4,y:324.7,alpha:1}}]},1).to({state:[{t:this.instance_28,p:{regX:43.3,scaleX:0.095,scaleY:0.095,x:188.4,y:272.9,regY:33.8,rotation:0}},{t:this.instance_27,p:{regX:41.4,regY:40.1,scaleX:0.158,scaleY:0.158,x:180.3,y:285.5,rotation:0,alpha:1}},{t:this.instance_26,p:{regX:40.6,regY:43.1,scaleX:0.16,scaleY:0.16,rotation:-34.9,x:121.2,y:193.7,alpha:1}},{t:this.instance_25,p:{regX:41.7,regY:42.9,scaleX:0.11,scaleY:0.11,rotation:-34.8,x:214,y:322.8,alpha:1}},{t:this.instance_24,p:{regX:40.5,regY:42.4,scaleX:0.13,scaleY:0.13,x:205.9,y:331.4,rotation:-34.9,alpha:1}},{t:this.instance_23,p:{regX:40.5,regY:41.4,scaleX:0.116,scaleY:0.116,rotation:-35,x:231.9,y:268.6,alpha:0.941}},{t:this.instance_22,p:{x:267.1,y:321.5,regX:41.9,regY:43.8,scaleX:0.15,scaleY:0.15,rotation:-34.8,alpha:1}},{t:this.instance_21,p:{x:211.1,y:337.4,regX:41.1,regY:43,scaleX:0.047,scaleY:0.047,rotation:-34.9,alpha:1}},{t:this.instance_20,p:{regX:41.1,regY:42.5,scaleX:0.111,scaleY:0.111,x:195.7,y:329.9,rotation:-34.9,alpha:1}},{t:this.instance_19,p:{regX:40.4,regY:42.2,scaleX:0.14,scaleY:0.14,rotation:-34.9,x:187.6,y:293.3,alpha:1}},{t:this.instance_18,p:{regX:41.6,regY:41.9,scaleX:0.1,scaleY:0.1,rotation:-34.9,x:239.3,y:406.2}},{t:this.instance_17,p:{regX:41,regY:42.8,scaleX:0.15,scaleY:0.15,rotation:-34.9,x:188.4,y:470.1,alpha:1}},{t:this.instance_16,p:{regX:40.7,regY:41.3,scaleX:0.113,scaleY:0.113,rotation:0.5,x:93.8,y:194.2}},{t:this.instance_15,p:{regX:40.6,regY:39.8,scaleX:0.18,scaleY:0.18,rotation:0,x:313.6,y:315.5,alpha:1}},{t:this.instance_14,p:{regY:39.8,scaleX:0.153,scaleY:0.153,rotation:0,x:266.1,y:338.7,regX:40.8}},{t:this.instance_13,p:{x:128.7,y:216.5,regX:41.3,regY:40.1,scaleX:0.16,scaleY:0.16,rotation:19}},{t:this.instance_12,p:{x:212.6,y:211.3,regY:42.1,scaleX:0.12,scaleY:0.12,regX:40.8,rotation:-34.9}},{t:this.instance_11,p:{x:230.6,y:318.3,regX:40,regY:43.8,scaleX:0.13,scaleY:0.13,rotation:-34.9}},{t:this.instance_10,p:{regX:41.1,regY:40.8,scaleX:0.102,scaleY:0.102,x:261.1,y:336.1,rotation:-19.7,alpha:1}},{t:this.instance_9,p:{y:187.9,regY:40.1,scaleX:0.175,scaleY:0.175,x:60.4,regX:41,rotation:0,alpha:1}},{t:this.instance_8,p:{x:115.5,y:198.5,regX:40.8,regY:41.8,scaleX:0.12,scaleY:0.12,rotation:-34.9,alpha:1}},{t:this.instance_7,p:{x:92.1,y:198.4,regX:40.8,regY:42.9,scaleX:0.148,scaleY:0.148,rotation:-34.9}},{t:this.instance_6,p:{regX:40.5,regY:42.7,scaleX:0.16,scaleY:0.16,x:104.2,y:199,rotation:-34.9,alpha:1}},{t:this.instance_5,p:{regX:41.1,rotation:-34.9,x:215.2,y:347.7,regY:42.6,scaleX:0.1,scaleY:0.1}},{t:this.instance_4,p:{regX:41.1,regY:41.5,scaleX:0.141,scaleY:0.143,rotation:-35,x:247.8,y:265.2}},{t:this.instance_3,p:{regX:40.5,scaleX:0.142,scaleY:0.142,rotation:-34.9,x:197,y:203.6,regY:42,alpha:1}},{t:this.instance_2,p:{regX:40.7,regY:42.4,scaleX:0.1,scaleY:0.1,x:188.6,y:322.7,rotation:-34.8}},{t:this.instance_1,p:{regX:40.5,rotation:-35,x:183.4,y:315.3,regY:41.9,scaleX:0.139,scaleY:0.139}},{t:this.instance,p:{regX:40.7,regY:43,scaleX:0.075,scaleY:0.075,rotation:-34.8,x:245.4,y:324.2,alpha:1}}]},1).to({state:[{t:this.instance_28,p:{regX:43.3,scaleX:0.095,scaleY:0.095,x:188.6,y:265.8,regY:33.8,rotation:0}},{t:this.instance_27,p:{regX:41.4,regY:40.1,scaleX:0.158,scaleY:0.158,x:179.8,y:278.4,rotation:0,alpha:1}},{t:this.instance_26,p:{regX:40.6,regY:43.1,scaleX:0.16,scaleY:0.16,rotation:-34.9,x:118.8,y:185.7,alpha:1}},{t:this.instance_25,p:{regX:41.7,regY:42.9,scaleX:0.11,scaleY:0.11,rotation:-34.8,x:211,y:319.9,alpha:1}},{t:this.instance_24,p:{regX:40.5,regY:42.4,scaleX:0.13,scaleY:0.13,x:202.4,y:330.4,rotation:-34.9,alpha:1}},{t:this.instance_23,p:{regX:40.5,regY:41.4,scaleX:0.116,scaleY:0.116,rotation:-35,x:237.1,y:269.2,alpha:0.941}},{t:this.instance_22,p:{x:266.8,y:324.4,regX:41.9,regY:43.8,scaleX:0.15,scaleY:0.15,rotation:-34.8,alpha:1}},{t:this.instance_21,p:{x:208.3,y:338.7,regX:41.1,regY:43,scaleX:0.047,scaleY:0.047,rotation:-34.9,alpha:1}},{t:this.instance_20,p:{regX:41.1,regY:42.5,scaleX:0.111,scaleY:0.111,x:193.7,y:327.2,rotation:-34.9,alpha:1}},{t:this.instance_19,p:{regX:40.4,regY:42.2,scaleX:0.14,scaleY:0.14,rotation:-34.9,x:186.1,y:286,alpha:1}},{t:this.instance_18,p:{regX:41.3,regY:43,scaleX:0.12,scaleY:0.12,rotation:-34.8,x:249.5,y:400.1}},{t:this.instance_17,p:{regX:41,regY:42.8,scaleX:0.15,scaleY:0.15,rotation:-34.9,x:197.6,y:472.9,alpha:1}},{t:this.instance_16,p:{regX:40.7,regY:41.3,scaleX:0.113,scaleY:0.113,rotation:0.5,x:89.3,y:188.5}},{t:this.instance_15,p:{regX:40.6,regY:39.8,scaleX:0.18,scaleY:0.18,rotation:0,x:316.9,y:318.4,alpha:1}},{t:this.instance_14,p:{regY:39.8,scaleX:0.153,scaleY:0.153,rotation:0,x:271.9,y:329,regX:40.8}},{t:this.instance_13,p:{x:126.9,y:206,regX:41.3,regY:40.1,scaleX:0.16,scaleY:0.16,rotation:19}},{t:this.instance_12,p:{x:218,y:203.8,regY:42.6,scaleX:0.11,scaleY:0.11,regX:41.4,rotation:-34.8}},{t:this.instance_11,p:{x:229.4,y:320.3,regX:40,regY:43.8,scaleX:0.13,scaleY:0.13,rotation:-34.9}},{t:this.instance_10,p:{regX:41.1,regY:40.8,scaleX:0.102,scaleY:0.102,x:266.3,y:325.4,rotation:-19.7,alpha:1}},{t:this.instance_9,p:{y:180.2,regY:40.1,scaleX:0.175,scaleY:0.175,x:54.4,regX:41,rotation:0,alpha:1}},{t:this.instance_8,p:{x:113,y:194.7,regX:40.8,regY:41.8,scaleX:0.12,scaleY:0.12,rotation:-34.9,alpha:1}},{t:this.instance_7,p:{x:88.5,y:192.8,regX:40.8,regY:42.9,scaleX:0.148,scaleY:0.148,rotation:-34.9}},{t:this.instance_6,p:{regX:40.5,regY:42.7,scaleX:0.16,scaleY:0.16,x:100.9,y:192,rotation:-34.9,alpha:1}},{t:this.instance_5,p:{regX:41.1,rotation:-34.9,x:212.1,y:348.6,regY:42.6,scaleX:0.1,scaleY:0.1}},{t:this.instance_4,p:{regX:41.1,regY:41.5,scaleX:0.141,scaleY:0.143,rotation:-35,x:252.8,y:266.8}},{t:this.instance_3,p:{regX:40.5,scaleX:0.142,scaleY:0.142,rotation:-34.9,x:200.3,y:194.8,regY:42,alpha:1}},{t:this.instance_2,p:{regX:40.7,regY:42.4,scaleX:0.1,scaleY:0.1,x:185.3,y:318.7,rotation:-34.8}},{t:this.instance_1,p:{regX:40.5,rotation:-35,x:181,y:310.6,regY:41.9,scaleX:0.139,scaleY:0.139}},{t:this.instance,p:{regX:40.7,regY:43,scaleX:0.075,scaleY:0.075,rotation:-34.8,x:246.4,y:323.3,alpha:1}}]},1).to({state:[{t:this.instance_28,p:{regX:43.3,scaleX:0.095,scaleY:0.095,x:188.2,y:258.6,regY:33.8,rotation:0}},{t:this.instance_27,p:{regX:41.4,regY:40.1,scaleX:0.158,scaleY:0.158,x:178.8,y:270.1,rotation:0,alpha:1}},{t:this.instance_26,p:{regX:40.6,regY:43.1,scaleX:0.16,scaleY:0.16,rotation:-34.9,x:116.9,y:179.1,alpha:1}},{t:this.instance_25,p:{regX:41.7,regY:42.9,scaleX:0.11,scaleY:0.11,rotation:-34.8,x:208.5,y:316.5,alpha:1}},{t:this.instance_24,p:{regX:40.5,regY:42.4,scaleX:0.13,scaleY:0.13,x:199.8,y:327.7,rotation:-34.9,alpha:1}},{t:this.instance_23,p:{regX:40.5,regY:41.4,scaleX:0.116,scaleY:0.116,rotation:-35,x:242.8,y:270.5,alpha:0.941}},{t:this.instance_22,p:{x:266.2,y:327,regX:41.9,regY:43.8,scaleX:0.15,scaleY:0.15,rotation:-34.8,alpha:1}},{t:this.instance_21,p:{x:204.9,y:340,regX:41.1,regY:43,scaleX:0.047,scaleY:0.047,rotation:-34.9,alpha:1}},{t:this.instance_20,p:{regX:41.1,regY:42.5,scaleX:0.111,scaleY:0.111,x:190.6,y:325.3,rotation:-34.9,alpha:1}},{t:this.instance_19,p:{regX:40.4,regY:42.2,scaleX:0.14,scaleY:0.14,rotation:-34.9,x:185,y:278.8,alpha:1}},{t:this.instance_18,p:{regX:41.3,regY:43,scaleX:0.12,scaleY:0.12,rotation:-34.8,x:258.7,y:393.7}},{t:this.instance_17,p:{regX:41,regY:42.8,scaleX:0.15,scaleY:0.15,rotation:-34.9,x:205.3,y:474.4,alpha:1}},{t:this.instance_16,p:{regX:40.7,regY:41.3,scaleX:0.113,scaleY:0.113,rotation:0.5,x:85.3,y:182.3}},{t:this.instance_15,p:{regX:40.6,regY:39.8,scaleX:0.18,scaleY:0.18,rotation:0,x:319,y:320.7,alpha:1}},{t:this.instance_14,p:{regY:39.8,scaleX:0.153,scaleY:0.153,rotation:0,x:276.9,y:319.6,regX:40.8}},{t:this.instance_13,p:{x:125,y:195.2,regX:41.3,regY:40.1,scaleX:0.16,scaleY:0.16,rotation:19}},{t:this.instance_12,p:{x:223.4,y:196.3,regY:42.6,scaleX:0.11,scaleY:0.11,regX:41.4,rotation:-34.8}},{t:this.instance_11,p:{x:228.9,y:322.4,regX:40,regY:43.8,scaleX:0.13,scaleY:0.13,rotation:-34.9}},{t:this.instance_10,p:{regX:40.9,regY:40.6,scaleX:0.12,scaleY:0.12,x:271,y:315.4,rotation:-19.6,alpha:1}},{t:this.instance_9,p:{y:173.4,regY:40.1,scaleX:0.175,scaleY:0.175,x:49.2,regX:41,rotation:0,alpha:1}},{t:this.instance_8,p:{x:111.1,y:190.3,regX:40.8,regY:41.8,scaleX:0.12,scaleY:0.12,rotation:-34.9,alpha:1}},{t:this.instance_7,p:{x:85.4,y:189.5,regX:40.8,regY:42.9,scaleX:0.148,scaleY:0.148,rotation:-34.9}},{t:this.instance_6,p:{regX:40.5,regY:42.7,scaleX:0.16,scaleY:0.16,x:97.9,y:185.6,rotation:-34.9,alpha:1}},{t:this.instance_5,p:{regX:41.1,rotation:-34.9,x:208.1,y:348.9,regY:42.6,scaleX:0.1,scaleY:0.1}},{t:this.instance_4,p:{regX:41.1,regY:41.5,scaleX:0.141,scaleY:0.143,rotation:-35,x:257.5,y:268.1}},{t:this.instance_3,p:{regX:40.5,scaleX:0.142,scaleY:0.142,rotation:-34.9,x:203.5,y:186.1,regY:42,alpha:1}},{t:this.instance_2,p:{regX:40.7,regY:42.4,scaleX:0.1,scaleY:0.1,x:183,y:313.8,rotation:-34.8}},{t:this.instance_1,p:{regX:40.5,rotation:-35,x:179.3,y:305.3,regY:41.9,scaleX:0.139,scaleY:0.139}},{t:this.instance,p:{regX:40.7,regY:43,scaleX:0.075,scaleY:0.075,rotation:-34.8,x:246.4,y:323.3,alpha:1}}]},1).to({state:[{t:this.instance_28,p:{regX:43.3,scaleX:0.095,scaleY:0.095,x:187.4,y:250.5,regY:33.8,rotation:0}},{t:this.instance_27,p:{regX:41.4,regY:40.1,scaleX:0.158,scaleY:0.158,x:177.7,y:262.1,rotation:0,alpha:1}},{t:this.instance_26,p:{regX:40.6,regY:43.1,scaleX:0.16,scaleY:0.16,rotation:-34.9,x:114.7,y:170.2,alpha:1}},{t:this.instance_25,p:{regX:41.7,regY:42.9,scaleX:0.11,scaleY:0.11,rotation:-34.8,x:205.9,y:312,alpha:1}},{t:this.instance_24,p:{regX:40.5,regY:42.4,scaleX:0.13,scaleY:0.13,x:197.1,y:325.3,rotation:-34.9,alpha:1}},{t:this.instance_23,p:{regX:40.5,regY:41.4,scaleX:0.116,scaleY:0.116,rotation:-35,x:247.1,y:270.9,alpha:0.941}},{t:this.instance_22,p:{x:266.1,y:328.5,regX:41.9,regY:43.8,scaleX:0.15,scaleY:0.15,rotation:-34.8,alpha:1}},{t:this.instance_21,p:{x:202.4,y:340.3,regX:41.1,regY:43,scaleX:0.047,scaleY:0.047,rotation:-34.9,alpha:1}},{t:this.instance_20,p:{regX:41.1,regY:42.5,scaleX:0.111,scaleY:0.111,x:188.2,y:322.9,rotation:-34.9,alpha:1}},{t:this.instance_19,p:{regX:40.4,regY:42.2,scaleX:0.14,scaleY:0.14,rotation:-34.9,x:184.1,y:271.7,alpha:1}},{t:this.instance_18,p:{regX:41.3,regY:43,scaleX:0.12,scaleY:0.12,rotation:-34.8,x:267,y:385.8}},{t:this.instance_17,p:{regX:41.3,regY:43.6,scaleX:0.16,scaleY:0.16,rotation:-34.8,x:213.8,y:476.3,alpha:1}},{t:this.instance_16,p:{regX:40.7,regY:41.3,scaleX:0.113,scaleY:0.113,rotation:0.5,x:83.2,y:177.7}},{t:this.instance_15,p:{regX:40.6,regY:39.8,scaleX:0.18,scaleY:0.18,rotation:0,x:321.8,y:323,alpha:1}},{t:this.instance_14,p:{regY:39.8,scaleX:0.153,scaleY:0.153,rotation:0,x:281.4,y:310.9,regX:40.8}},{t:this.instance_13,p:{x:123.7,y:184.3,regX:41.3,regY:40.1,scaleX:0.16,scaleY:0.16,rotation:19}},{t:this.instance_12,p:{x:228.9,y:188.5,regY:42.6,scaleX:0.11,scaleY:0.11,regX:41.4,rotation:-34.8}},{t:this.instance_11,p:{x:227.8,y:324.3,regX:40,regY:43.8,scaleX:0.13,scaleY:0.13,rotation:-34.9}},{t:this.instance_10,p:{regX:40.9,regY:40.6,scaleX:0.12,scaleY:0.12,x:274.2,y:304.3,rotation:-19.6,alpha:1}},{t:this.instance_9,p:{y:167,regY:40.1,scaleX:0.175,scaleY:0.175,x:43.5,regX:41,rotation:0,alpha:1}},{t:this.instance_8,p:{x:109.1,y:186.5,regX:40.8,regY:41.8,scaleX:0.12,scaleY:0.12,rotation:-34.9,alpha:1}},{t:this.instance_7,p:{x:83,y:185,regX:40.8,regY:42.9,scaleX:0.148,scaleY:0.148,rotation:-34.9}},{t:this.instance_6,p:{regX:40.5,regY:42.7,scaleX:0.16,scaleY:0.16,x:95.2,y:179.6,rotation:-34.9,alpha:1}},{t:this.instance_5,p:{regX:41.1,rotation:-34.9,x:204.1,y:348,regY:42.6,scaleX:0.1,scaleY:0.1}},{t:this.instance_4,p:{regX:41.1,regY:41.5,scaleX:0.141,scaleY:0.143,rotation:-35,x:262.6,y:269.7}},{t:this.instance_3,p:{regX:40.1,scaleX:0.15,scaleY:0.15,rotation:-34.9,x:206.5,y:178.1,regY:42.3,alpha:1}},{t:this.instance_2,p:{regX:40.7,regY:42.4,scaleX:0.1,scaleY:0.1,x:181.1,y:308.7,rotation:-34.8}},{t:this.instance_1,p:{regX:40.5,rotation:-35,x:177.3,y:299.5,regY:41.9,scaleX:0.139,scaleY:0.139}},{t:this.instance,p:{regX:40.7,regY:43,scaleX:0.075,scaleY:0.075,rotation:-34.8,x:246.4,y:322.7,alpha:1}}]},1).to({state:[{t:this.instance_28,p:{regX:43.3,scaleX:0.095,scaleY:0.095,x:186.1,y:235.7,regY:33.8,rotation:0}},{t:this.instance_27,p:{regX:41.4,regY:40.1,scaleX:0.158,scaleY:0.158,x:175.5,y:246.3,rotation:0,alpha:1}},{t:this.instance_26,p:{regX:40.6,regY:43.1,scaleX:0.16,scaleY:0.16,rotation:-34.9,x:111.5,y:154.3,alpha:1}},{t:this.instance_25,p:{regX:41.7,regY:42.9,scaleX:0.11,scaleY:0.11,rotation:-34.8,x:200.9,y:302.7,alpha:1}},{t:this.instance_24,p:{regX:40.6,regY:43.1,scaleX:0.14,scaleY:0.14,x:194,y:318.2,rotation:-34.9,alpha:1}},{t:this.instance_23,p:{regX:40.6,regY:41.5,scaleX:0.13,scaleY:0.13,rotation:-34.9,x:256,y:270.3,alpha:0.941}},{t:this.instance_22,p:{x:264,y:332.4,regX:41.9,regY:43.8,scaleX:0.15,scaleY:0.15,rotation:-34.8,alpha:1}},{t:this.instance_21,p:{x:197.2,y:339.8,regX:41.1,regY:43,scaleX:0.047,scaleY:0.047,rotation:-34.9,alpha:1}},{t:this.instance_20,p:{regX:41.1,regY:42.5,scaleX:0.111,scaleY:0.111,x:184.4,y:315.1,rotation:-34.9,alpha:1}},{t:this.instance_19,p:{regX:40.4,regY:42.2,scaleX:0.14,scaleY:0.14,rotation:-34.9,x:181.1,y:256.5,alpha:1}},{t:this.instance_18,p:{regX:41.3,regY:43,scaleX:0.12,scaleY:0.12,rotation:-34.8,x:283.2,y:369.1}},{t:this.instance_17,p:{regX:41.3,regY:43.6,scaleX:0.16,scaleY:0.16,rotation:-34.8,x:229.6,y:477.5,alpha:1}},{t:this.instance_16,p:{regX:40.7,regY:41.3,scaleX:0.113,scaleY:0.113,rotation:0.5,x:77.5,y:167.1}},{t:this.instance_15,p:{regX:40.6,regY:39.8,scaleX:0.18,scaleY:0.18,rotation:0,x:325.2,y:325.7,alpha:1}},{t:this.instance_14,p:{regY:39.8,scaleX:0.153,scaleY:0.153,rotation:0,x:288.7,y:291.2,regX:40.8}},{t:this.instance_13,p:{x:121.6,y:163,regX:41.4,regY:40.6,scaleX:0.17,scaleY:0.17,rotation:19}},{t:this.instance_12,p:{x:239.6,y:173.4,regY:42.6,scaleX:0.11,scaleY:0.11,regX:41.4,rotation:-34.8}},{t:this.instance_11,p:{x:225.5,y:326.2,regX:40.1,regY:44.3,scaleX:0.13,scaleY:0.13,rotation:-34.8}},{t:this.instance_10,p:{regX:40.9,regY:40.6,scaleX:0.12,scaleY:0.12,x:279.8,y:282.3,rotation:-19.6,alpha:1}},{t:this.instance_9,p:{y:152.8,regY:40.1,scaleX:0.175,scaleY:0.175,x:32,regX:41,rotation:0,alpha:1}},{t:this.instance_8,p:{x:106.2,y:178.1,regX:40.8,regY:41.8,scaleX:0.12,scaleY:0.12,rotation:-34.9,alpha:1}},{t:this.instance_7,p:{x:79.3,y:177.5,regX:40.6,regY:43.6,scaleX:0.16,scaleY:0.16,rotation:-34.9}},{t:this.instance_6,p:{regX:40.5,regY:43.1,scaleX:0.18,scaleY:0.18,x:91.4,y:168.3,rotation:-34.8,alpha:1}},{t:this.instance_5,p:{regX:41.1,rotation:-34.9,x:198.2,y:345.4,regY:42.6,scaleX:0.1,scaleY:0.1}},{t:this.instance_4,p:{regX:41.1,regY:41.5,scaleX:0.15,scaleY:0.152,rotation:-34.9,x:271.5,y:271.4}},{t:this.instance_3,p:{regX:40.1,scaleX:0.15,scaleY:0.15,rotation:-34.9,x:213.2,y:160.5,regY:42.3,alpha:1}},{t:this.instance_2,p:{regX:40.7,regY:42.4,scaleX:0.1,scaleY:0.1,x:177.4,y:298,rotation:-34.8}},{t:this.instance_1,p:{regX:40.5,rotation:-35,x:173.9,y:287.4,regY:41.9,scaleX:0.139,scaleY:0.139}},{t:this.instance,p:{regX:40.7,regY:43,scaleX:0.075,scaleY:0.075,rotation:-34.8,x:246.1,y:320.6,alpha:1}}]},1).to({state:[{t:this.instance_27,p:{regX:43.3,regY:33.8,scaleX:0.095,scaleY:0.095,x:185,y:228.1,rotation:0,alpha:1}},{t:this.instance_26,p:{regX:41.4,regY:40.1,scaleX:0.158,scaleY:0.158,rotation:0,x:175.1,y:238.5,alpha:1}},{t:this.instance_25,p:{regX:40.6,regY:43.1,scaleX:0.16,scaleY:0.16,rotation:-34.9,x:110.3,y:146.2,alpha:1}},{t:this.instance_24,p:{regX:41.7,regY:42.9,scaleX:0.11,scaleY:0.11,x:198.7,y:297.1,rotation:-34.8,alpha:1}},{t:this.instance_23,p:{regX:40.6,regY:43.1,scaleX:0.14,scaleY:0.14,rotation:-34.9,x:191.9,y:314.7,alpha:1}},{t:this.instance_22,p:{x:260.4,y:268.9,regX:40.6,regY:41.5,scaleX:0.13,scaleY:0.13,rotation:-34.9,alpha:0.941}},{t:this.instance_21,p:{x:263.4,y:333.3,regX:41.9,regY:43.8,scaleX:0.15,scaleY:0.15,rotation:-34.8,alpha:1}},{t:this.instance_20,p:{regX:41.1,regY:43,scaleX:0.047,scaleY:0.047,x:195.3,y:338.6,rotation:-34.9,alpha:1}},{t:this.instance_19,p:{regX:41.1,regY:42.5,scaleX:0.111,scaleY:0.111,rotation:-34.9,x:182,y:311.4,alpha:1}},{t:this.instance_18,p:{regX:40.4,regY:42.2,scaleX:0.14,scaleY:0.14,rotation:-34.9,x:180.2,y:249.6}},{t:this.instance_17,p:{regX:41.3,regY:43,scaleX:0.12,scaleY:0.12,rotation:-34.8,x:290.7,y:359.7,alpha:1}},{t:this.instance_16,p:{regX:41.6,regY:42,scaleX:0.13,scaleY:0.13,rotation:0.5,x:76,y:161.9}},{t:this.instance_15,p:{regX:40.6,regY:39.8,scaleX:0.18,scaleY:0.18,rotation:0,x:327.6,y:326.9,alpha:1}},{t:this.instance_14,p:{regY:40,scaleX:0.16,scaleY:0.16,rotation:0,x:291.2,y:281.5,regX:40.6}},{t:this.instance_13,p:{x:120,y:152.5,regX:41.4,regY:40.6,scaleX:0.17,scaleY:0.17,rotation:19}},{t:this.instance_12,p:{x:244.7,y:165.5,regY:42.6,scaleX:0.11,scaleY:0.11,regX:41.4,rotation:-34.8}},{t:this.instance_11,p:{x:225.2,y:326.5,regX:40.1,regY:44.3,scaleX:0.13,scaleY:0.13,rotation:-34.8}},{t:this.instance_10,p:{regX:40.9,regY:40.6,scaleX:0.12,scaleY:0.12,x:282.2,y:270.9,rotation:-19.6,alpha:1}},{t:this.instance_9,p:{y:146.6,regY:40.3,scaleX:0.19,scaleY:0.19,x:27.6,regX:41.1,rotation:0,alpha:1}},{t:this.instance_8,p:{x:105.3,y:173.6,regX:40.8,regY:41.8,scaleX:0.12,scaleY:0.12,rotation:-34.9,alpha:1}},{t:this.instance_7,p:{x:78.2,y:174.1,regX:40.6,regY:43.6,scaleX:0.16,scaleY:0.16,rotation:-34.9}},{t:this.instance_6,p:{regX:40.5,regY:43.1,scaleX:0.18,scaleY:0.18,x:89.3,y:161.9,rotation:-34.8,alpha:1}},{t:this.instance_5,p:{regX:41.8,rotation:-34.8,x:195.4,y:343.7,regY:43.6,scaleX:0.11,scaleY:0.11}},{t:this.instance_4,p:{regX:41.1,regY:41.5,scaleX:0.15,scaleY:0.152,rotation:-34.9,x:275.6,y:271.8}},{t:this.instance_3,p:{regX:39.8,scaleX:0.16,scaleY:0.16,rotation:-34.8,x:216.3,y:151.7,regY:42.6,alpha:1}},{t:this.instance_2,p:{regX:40.8,regY:43.1,scaleX:0.1,scaleY:0.1,x:175.3,y:291.6,rotation:-34.8}},{t:this.instance_1,p:{regX:40.5,rotation:-35,x:172.5,y:281.1,regY:41.9,scaleX:0.139,scaleY:0.139}},{t:this.instance,p:{regX:40.7,regY:43,scaleX:0.075,scaleY:0.075,rotation:-34.8,x:246.1,y:320,alpha:1}}]},1).to({state:[{t:this.instance_27,p:{regX:43.3,regY:33.8,scaleX:0.095,scaleY:0.095,x:184.4,y:220.3,rotation:0,alpha:1}},{t:this.instance_26,p:{regX:41.4,regY:40.1,scaleX:0.158,scaleY:0.158,rotation:0,x:173.3,y:231.3,alpha:1}},{t:this.instance_25,p:{regX:40.6,regY:43.1,scaleX:0.16,scaleY:0.16,rotation:-34.9,x:109.4,y:137.8,alpha:1}},{t:this.instance_24,p:{regX:41.7,regY:42.9,scaleX:0.11,scaleY:0.11,x:196.3,y:291.4,rotation:-34.8,alpha:1}},{t:this.instance_23,p:{regX:40.6,regY:43.1,scaleX:0.14,scaleY:0.14,rotation:-34.9,x:191,y:309.3,alpha:1}},{t:this.instance_22,p:{x:264.5,y:267.5,regX:40.6,regY:41.5,scaleX:0.13,scaleY:0.13,rotation:-34.9,alpha:0.941}},{t:this.instance_21,p:{x:262.4,y:334.3,regX:41.9,regY:43.8,scaleX:0.15,scaleY:0.15,rotation:-34.8,alpha:1}},{t:this.instance_20,p:{regX:41.9,regY:45.3,scaleX:0.05,scaleY:0.05,x:192.9,y:336.6,rotation:-34.8,alpha:1}},{t:this.instance_19,p:{regX:41.1,regY:42.5,scaleX:0.111,scaleY:0.111,rotation:-34.9,x:180.5,y:306,alpha:1}},{t:this.instance_18,p:{regX:40.4,regY:42.2,scaleX:0.14,scaleY:0.14,rotation:-34.9,x:178.7,y:241.8}},{t:this.instance_17,p:{regX:41.3,regY:43,scaleX:0.12,scaleY:0.12,rotation:-34.8,x:290.7,y:359.7,alpha:1}},{t:this.instance_16,p:{regX:41.6,regY:42,scaleX:0.13,scaleY:0.13,rotation:0.5,x:74.2,y:156.2}},{t:this.instance_15,p:{regX:40.6,regY:39.8,scaleX:0.18,scaleY:0.18,rotation:0,x:327.6,y:326.9,alpha:1}},{t:this.instance_14,p:{regY:40,scaleX:0.16,scaleY:0.16,rotation:0,x:294,y:271.4,regX:40.6}},{t:this.instance_13,p:{x:120,y:141.7,regX:41.4,regY:40.6,scaleX:0.17,scaleY:0.17,rotation:19}},{t:this.instance_12,p:{x:249.5,y:157.7,regY:42.6,scaleX:0.11,scaleY:0.11,regX:41.4,rotation:-34.8}},{t:this.instance_11,p:{x:223.8,y:326.1,regX:40.1,regY:44.9,scaleX:0.13,scaleY:0.13,rotation:-34.8}},{t:this.instance_10,p:{regX:40.9,regY:40.6,scaleX:0.12,scaleY:0.12,x:283.4,y:259.7,rotation:-19.6,alpha:1}},{t:this.instance_9,p:{y:139.6,regY:40.3,scaleX:0.19,scaleY:0.19,x:22.8,regX:41.1,rotation:0,alpha:1}},{t:this.instance_8,p:{x:103.8,y:169.4,regX:41.1,regY:42.2,scaleX:0.13,scaleY:0.13,rotation:-34.9,alpha:1}},{t:this.instance_7,p:{x:77.6,y:169.9,regX:40.6,regY:43.6,scaleX:0.16,scaleY:0.16,rotation:-34.9}},{t:this.instance_6,p:{regX:40.5,regY:43.1,scaleX:0.18,scaleY:0.18,x:87.2,y:155.3,rotation:-34.8,alpha:1}},{t:this.instance_5,p:{regX:41.8,rotation:-34.8,x:192.8,y:341.1,regY:43.8,scaleX:0.12,scaleY:0.12}},{t:this.instance_4,p:{regX:41.1,regY:41.5,scaleX:0.15,scaleY:0.152,rotation:-34.9,x:279.3,y:270.9}},{t:this.instance_3,p:{regX:39.8,scaleX:0.16,scaleY:0.16,rotation:-34.8,x:219,y:142.7,regY:42.6,alpha:1}},{t:this.instance_2,p:{regX:41.2,regY:43.6,scaleX:0.11,scaleY:0.11,x:173.4,y:285.1,rotation:-34.8}},{t:this.instance_1,p:{regX:40.5,rotation:-35,x:171,y:274.8,regY:41.9,scaleX:0.139,scaleY:0.139}},{t:this.instance,p:{regX:40.6,regY:43.6,scaleX:0.08,scaleY:0.08,rotation:-34.8,x:245.9,y:317.4,alpha:1}}]},1).to({state:[{t:this.instance_25,p:{regX:43.3,regY:33.8,scaleX:0.095,scaleY:0.095,rotation:0,x:183.6,y:212.4,alpha:1}},{t:this.instance_24,p:{regX:41.4,regY:40.1,scaleX:0.158,scaleY:0.158,x:171.6,y:223,rotation:0,alpha:1}},{t:this.instance_23,p:{regX:40.6,regY:43.1,scaleX:0.16,scaleY:0.16,rotation:-34.9,x:107.2,y:128.7,alpha:1}},{t:this.instance_22,p:{x:194.4,y:285.6,regX:41.7,regY:42.9,scaleX:0.11,scaleY:0.11,rotation:-34.8,alpha:1}},{t:this.instance_21,p:{x:188.9,y:304.8,regX:40.6,regY:43.6,scaleX:0.08,scaleY:0.08,rotation:-34.8,alpha:1}},{t:this.instance_20,p:{regX:40.6,regY:41.5,scaleX:0.13,scaleY:0.13,x:267.1,y:265.3,rotation:-34.9,alpha:0.941}},{t:this.instance_19,p:{regX:41.9,regY:45.1,scaleX:0.08,scaleY:0.08,rotation:-34.8,x:261.8,y:334.1,alpha:1}},{t:this.instance_18,p:{regX:41.9,regY:45.3,scaleX:0.05,scaleY:0.05,rotation:-34.8,x:190.9,y:333.6}},{t:this.instance_17,p:{regX:41.1,regY:42.5,scaleX:0.111,scaleY:0.111,rotation:-34.9,x:178.6,y:300.6,alpha:1}},{t:this.instance_16,p:{regX:40.4,regY:42.2,scaleX:0.14,scaleY:0.14,rotation:-34.9,x:176.6,y:234}},{t:this.instance_15,p:{regX:41.6,regY:42,scaleX:0.13,scaleY:0.13,rotation:0.5,x:72.8,y:150.4,alpha:1}},{t:this.instance_14,p:{regY:39.8,scaleX:0.18,scaleY:0.18,rotation:0,x:331.8,y:326.9,regX:40.6}},{t:this.instance_13,p:{x:296.8,y:261.6,regX:40.6,regY:40,scaleX:0.16,scaleY:0.16,rotation:0}},{t:this.instance_12,p:{x:118.3,y:131,regY:40.6,scaleX:0.17,scaleY:0.17,regX:41.4,rotation:19}},{t:this.instance_11,p:{x:254.2,y:149.8,regX:41.1,regY:43.3,scaleX:0.12,scaleY:0.12,rotation:-34.8}},{t:this.instance_10,p:{regX:40.1,regY:44.9,scaleX:0.13,scaleY:0.13,x:222.6,y:325.5,rotation:-34.8,alpha:1}},{t:this.instance_9,p:{y:248.6,regY:40.6,scaleX:0.12,scaleY:0.12,x:284.5,regX:40.9,rotation:-19.6,alpha:1}},{t:this.instance_8,p:{x:18.3,y:132.8,regX:41.1,regY:40.3,scaleX:0.19,scaleY:0.19,rotation:0,alpha:1}},{t:this.instance_7,p:{x:102.5,y:164.1,regX:41.1,regY:42.2,scaleX:0.13,scaleY:0.13,rotation:-34.9}},{t:this.instance_6,p:{regX:40.6,regY:43.6,scaleX:0.16,scaleY:0.16,x:75.9,y:165.5,rotation:-34.9,alpha:1}},{t:this.instance_5,p:{regX:40.5,rotation:-34.8,x:86.1,y:149.2,regY:43.1,scaleX:0.18,scaleY:0.18}},{t:this.instance_4,p:{regX:41.8,regY:43.8,scaleX:0.12,scaleY:0.12,rotation:-34.8,x:190.6,y:338.3}},{t:this.instance_3,p:{regX:39.8,scaleX:0.16,scaleY:0.16,rotation:-34.8,x:221.8,y:134.6,regY:42.6,alpha:1}},{t:this.instance_2,p:{regX:41.2,regY:43.6,scaleX:0.11,scaleY:0.11,x:171.9,y:278.5,rotation:-34.8}},{t:this.instance_1,p:{regX:40.5,rotation:-35,x:169.3,y:267.7,regY:41.9,scaleX:0.139,scaleY:0.139}},{t:this.instance,p:{regX:40.6,regY:43.6,scaleX:0.08,scaleY:0.08,rotation:-34.8,x:245.9,y:315.2,alpha:1}}]},1).to({state:[{t:this.instance_26,p:{regX:43.3,regY:33.8,scaleX:0.095,scaleY:0.095,rotation:0,x:182.3,y:204.9,alpha:1}},{t:this.instance_25,p:{regX:41.4,regY:40.1,scaleX:0.158,scaleY:0.158,rotation:0,x:170.5,y:215.5,alpha:1}},{t:this.instance_24,p:{regX:40.6,regY:43.1,scaleX:0.16,scaleY:0.16,x:105.8,y:120.3,rotation:-34.9,alpha:1}},{t:this.instance_23,p:{regX:41.7,regY:42.9,scaleX:0.11,scaleY:0.11,rotation:-34.8,x:192,y:279.2,alpha:1}},{t:this.instance_22,p:{x:187.6,y:299.5,regX:40.6,regY:43.6,scaleX:0.08,scaleY:0.08,rotation:-34.8,alpha:1}},{t:this.instance_21,p:{x:271.7,y:262.8,regX:40.6,regY:41.5,scaleX:0.13,scaleY:0.13,rotation:-34.9,alpha:0.941}},{t:this.instance_20,p:{regX:41.9,regY:45.1,scaleX:0.08,scaleY:0.08,x:261.2,y:334.1,rotation:-34.8,alpha:1}},{t:this.instance_19,p:{regX:41.9,regY:45.3,scaleX:0.05,scaleY:0.05,rotation:-34.8,x:188.7,y:331.4,alpha:1}},{t:this.instance_18,p:{regX:41.4,regY:42.5,scaleX:0.13,scaleY:0.13,rotation:-34.9,x:176.8,y:295.3}},{t:this.instance_17,p:{regX:40.4,regY:42.2,scaleX:0.14,scaleY:0.14,rotation:-34.9,x:175.3,y:226.1,alpha:1}},{t:this.instance_16,p:{regX:41.6,regY:42,scaleX:0.13,scaleY:0.13,rotation:0.5,x:70.4,y:144.3}},{t:this.instance_15,p:{regX:40.6,regY:39.8,scaleX:0.18,scaleY:0.18,rotation:0,x:333.8,y:326.9,alpha:1}},{t:this.instance_14,p:{regY:40.6,scaleX:0.17,scaleY:0.17,rotation:0,x:298.8,y:251.1,regX:41.2}},{t:this.instance_13,p:{x:117.4,y:120.8,regX:41.4,regY:40.6,scaleX:0.17,scaleY:0.17,rotation:19}},{t:this.instance_12,p:{x:258.4,y:141.9,regY:43.3,scaleX:0.12,scaleY:0.12,regX:41.1,rotation:-34.8}},{t:this.instance_11,p:{x:222,y:323.5,regX:40.1,regY:44.9,scaleX:0.13,scaleY:0.13,rotation:-34.8}},{t:this.instance_10,p:{regX:40.9,regY:40.6,scaleX:0.12,scaleY:0.12,x:284.3,y:236.2,rotation:-19.6,alpha:1}},{t:this.instance_9,p:{y:126.2,regY:40.3,scaleX:0.19,scaleY:0.19,x:13.2,regX:41.1,rotation:0,alpha:1}},{t:this.instance_8,p:{x:100.8,y:159.2,regX:41.1,regY:42.2,scaleX:0.13,scaleY:0.13,rotation:-34.9,alpha:1}},{t:this.instance_7,p:{x:74.8,y:160.8,regX:40.6,regY:43.6,scaleX:0.16,scaleY:0.16,rotation:-34.9}},{t:this.instance_6,p:{regX:40.5,regY:43.1,scaleX:0.18,scaleY:0.18,x:83.7,y:142.2,rotation:-34.8,alpha:1}},{t:this.instance_5,p:{regX:41.8,rotation:-34.8,x:187.6,y:334.7,regY:43.8,scaleX:0.12,scaleY:0.12}},{t:this.instance_4,p:{regX:39.8,regY:42.6,scaleX:0.16,scaleY:0.16,rotation:-34.8,x:224.4,y:125}},{t:this.instance_3,p:{regX:41.2,scaleX:0.11,scaleY:0.11,rotation:-34.8,x:170,y:272.8,regY:43.6,alpha:1}},{t:this.instance_2,p:{regX:40.5,regY:41.9,scaleX:0.139,scaleY:0.139,x:167.8,y:261.2,rotation:-35}},{t:this.instance_1,p:{regX:40.6,rotation:-34.8,x:245.9,y:311.4,regY:43.6,scaleX:0.08,scaleY:0.08}},{t:this.instance,p:{regX:41.1,regY:41.2,scaleX:0.08,scaleY:0.08,rotation:-19.5,x:286.5,y:238.2,alpha:1}}]},1).to({state:[{t:this.instance_25,p:{regX:43.8,regY:34.4,scaleX:0.08,scaleY:0.08,rotation:0,x:180.4,y:199,alpha:1}},{t:this.instance_24,p:{regX:41.3,regY:40.3,scaleX:0.16,scaleY:0.16,x:169.2,y:207.6,rotation:0,alpha:1}},{t:this.instance_23,p:{regX:40.6,regY:43.1,scaleX:0.16,scaleY:0.16,rotation:-34.9,x:103.8,y:112,alpha:1}},{t:this.instance_22,p:{x:190,y:273.7,regX:41.7,regY:42.9,scaleX:0.11,scaleY:0.11,rotation:-34.8,alpha:1}},{t:this.instance_21,p:{x:185.8,y:294,regX:40.6,regY:43.6,scaleX:0.08,scaleY:0.08,rotation:-34.8,alpha:1}},{t:this.instance_20,p:{regX:40.6,regY:41.5,scaleX:0.13,scaleY:0.13,x:274.8,y:259.2,rotation:-34.9,alpha:0.941}},{t:this.instance_19,p:{regX:41.9,regY:45.1,scaleX:0.08,scaleY:0.08,rotation:-34.8,x:260.6,y:333.5,alpha:1}},{t:this.instance_18,p:{regX:41.9,regY:45.3,scaleX:0.05,scaleY:0.05,rotation:-34.8,x:186.3,y:327}},{t:this.instance_17,p:{regX:41.4,regY:42.5,scaleX:0.13,scaleY:0.13,rotation:-34.9,x:175.2,y:289.9,alpha:1}},{t:this.instance_16,p:{regX:40.4,regY:42.2,scaleX:0.14,scaleY:0.14,rotation:-34.9,x:173.3,y:218.9}},{t:this.instance_15,p:{regX:41.6,regY:42,scaleX:0.13,scaleY:0.13,rotation:0.5,x:68.3,y:137.7,alpha:1}},{t:this.instance_14,p:{regY:39.8,scaleX:0.18,scaleY:0.18,rotation:0,x:336.5,y:325.6,regX:40.6}},{t:this.instance_13,p:{x:300.1,y:241.1,regX:41.2,regY:40.6,scaleX:0.17,scaleY:0.17,rotation:0}},{t:this.instance_12,p:{x:116.8,y:111,regY:40.6,scaleX:0.17,scaleY:0.17,regX:41.4,rotation:19}},{t:this.instance_11,p:{x:262.5,y:133.2,regX:41.1,regY:43.3,scaleX:0.12,scaleY:0.12,rotation:-34.8}},{t:this.instance_10,p:{regX:40.1,regY:44.9,scaleX:0.13,scaleY:0.13,x:220.8,y:322,rotation:-34.8,alpha:1}},{t:this.instance_9,p:{y:119.5,regY:40.3,scaleX:0.19,scaleY:0.19,x:9.3,regX:41.1,rotation:0,alpha:1}},{t:this.instance_8,p:{x:99.2,y:153.6,regX:41.1,regY:42.2,scaleX:0.13,scaleY:0.13,rotation:-34.9,alpha:1}},{t:this.instance_7,p:{x:72.5,y:155.5,regX:40.6,regY:43.6,scaleX:0.16,scaleY:0.16,rotation:-34.9}},{t:this.instance_6,p:{regX:40.5,regY:43.1,scaleX:0.18,scaleY:0.18,x:81.9,y:135,rotation:-34.8,alpha:1}},{t:this.instance_5,p:{regX:42.4,rotation:-34.8,x:185.8,y:331.4,regY:44.4,scaleX:0.09,scaleY:0.09}},{t:this.instance_4,p:{regX:39.8,regY:42.6,scaleX:0.16,scaleY:0.16,rotation:-34.8,x:226,y:116.6}},{t:this.instance_3,p:{regX:41.2,scaleX:0.11,scaleY:0.11,rotation:-34.8,x:168.1,y:266.4,regY:43.6,alpha:1}},{t:this.instance_2,p:{regX:40.5,regY:41.9,scaleX:0.139,scaleY:0.139,x:166.3,y:253.9,rotation:-35}},{t:this.instance_1,p:{regX:40.6,rotation:-34.8,x:245.8,y:308.1,regY:43.6,scaleX:0.08,scaleY:0.08}},{t:this.instance,p:{regX:41.1,regY:41.2,scaleX:0.08,scaleY:0.08,rotation:-19.5,x:286.5,y:227,alpha:1}}]},1).to({state:[{t:this.instance_25,p:{regX:43.8,regY:34.4,scaleX:0.08,scaleY:0.08,rotation:0,x:179.8,y:189.7,alpha:1}},{t:this.instance_24,p:{regX:41.3,regY:40.3,scaleX:0.16,scaleY:0.16,x:168.1,y:199.9,rotation:0,alpha:1}},{t:this.instance_23,p:{regX:40.6,regY:43.1,scaleX:0.16,scaleY:0.16,rotation:-34.9,x:103.8,y:101,alpha:1}},{t:this.instance_22,p:{x:188.9,y:266,regX:41.7,regY:42.9,scaleX:0.11,scaleY:0.11,rotation:-34.8,alpha:1}},{t:this.instance_21,p:{x:184.7,y:288.5,regX:40.6,regY:43.6,scaleX:0.08,scaleY:0.08,rotation:-34.8,alpha:1}},{t:this.instance_20,p:{regX:40.6,regY:41.5,scaleX:0.13,scaleY:0.13,x:278.7,y:254.2,rotation:-34.9,alpha:0.941}},{t:this.instance_19,p:{regX:41.9,regY:45.1,scaleX:0.08,scaleY:0.08,rotation:-34.8,x:260.1,y:332,alpha:1}},{t:this.instance_18,p:{regX:41.9,regY:45.3,scaleX:0.05,scaleY:0.05,rotation:-34.8,x:184.5,y:323.2}},{t:this.instance_17,p:{regX:41.4,regY:42.5,scaleX:0.13,scaleY:0.13,rotation:-34.9,x:174.6,y:284.4,alpha:1}},{t:this.instance_16,p:{regX:40.4,regY:42.2,scaleX:0.14,scaleY:0.14,rotation:-34.9,x:172.2,y:210.6}},{t:this.instance_15,p:{regX:41.6,regY:42,scaleX:0.13,scaleY:0.13,rotation:0.5,x:68.3,y:130.6,alpha:1}},{t:this.instance_14,p:{regY:39.8,scaleX:0.18,scaleY:0.18,rotation:0,x:340.3,y:324.5,regX:40.6}},{t:this.instance_13,p:{x:302.4,y:231.1,regX:41.2,regY:40.6,scaleX:0.17,scaleY:0.17,rotation:0}},{t:this.instance_12,p:{x:116.8,y:100,regY:40.6,scaleX:0.17,scaleY:0.17,regX:41.4,rotation:19}},{t:this.instance_11,p:{x:266.4,y:124.9,regX:41.1,regY:43.3,scaleX:0.12,scaleY:0.12,rotation:-34.8}},{t:this.instance_10,p:{regX:40.1,regY:44.9,scaleX:0.13,scaleY:0.13,x:220.4,y:319.3,rotation:-34.8,alpha:1}},{t:this.instance_9,p:{y:111.1,regY:40.3,scaleX:0.19,scaleY:0.19,x:4.3,regX:41.1,rotation:0,alpha:1}},{t:this.instance_8,p:{x:98.1,y:147.6,regX:41.1,regY:42.2,scaleX:0.13,scaleY:0.13,rotation:-34.9,alpha:1}},{t:this.instance_7,p:{x:72.5,y:149.5,regX:40.6,regY:43.6,scaleX:0.16,scaleY:0.16,rotation:-34.9}},{t:this.instance_6,p:{regX:40.5,regY:43.1,scaleX:0.18,scaleY:0.18,x:81.9,y:127.8,rotation:-34.8,alpha:1}},{t:this.instance_5,p:{regX:42.4,rotation:-34.8,x:183.1,y:327,regY:44.4,scaleX:0.09,scaleY:0.09}},{t:this.instance_4,p:{regX:39.8,regY:42.6,scaleX:0.16,scaleY:0.16,rotation:-34.8,x:229.3,y:107.8}},{t:this.instance_3,p:{regX:41.2,scaleX:0.11,scaleY:0.11,rotation:-34.8,x:167.6,y:259.2,regY:43.6,alpha:1}},{t:this.instance_2,p:{regX:40.5,regY:41.9,scaleX:0.139,scaleY:0.139,x:165.2,y:247.8,rotation:-35}},{t:this.instance_1,p:{regX:40.6,rotation:-34.8,x:245.9,y:304.2,regY:43.6,scaleX:0.08,scaleY:0.08}},{t:this.instance,p:{regX:41.1,regY:41.2,scaleX:0.08,scaleY:0.08,rotation:-19.5,x:286.5,y:214.4,alpha:1}}]},1).to({state:[{t:this.instance_24,p:{regX:43.8,regY:34.4,scaleX:0.08,scaleY:0.08,x:178.5,y:183.6,rotation:0,alpha:1}},{t:this.instance_23,p:{regX:41.5,regY:40.6,scaleX:0.17,scaleY:0.17,rotation:0,x:166.3,y:192,alpha:1}},{t:this.instance_22,p:{x:186.8,y:259.9,regX:41.7,regY:42.9,scaleX:0.11,scaleY:0.11,rotation:-34.8,alpha:1}},{t:this.instance_21,p:{x:182.9,y:282.4,regX:40.6,regY:43.6,scaleX:0.08,scaleY:0.08,rotation:-34.8,alpha:1}},{t:this.instance_20,p:{regX:40.6,regY:41.5,scaleX:0.13,scaleY:0.13,x:280.9,y:251.7,rotation:-34.9,alpha:0.941}},{t:this.instance_19,p:{regX:42.1,regY:45.6,scaleX:0.09,scaleY:0.09,rotation:-34.8,x:259.4,y:330.4,alpha:1}},{t:this.instance_18,p:{regX:44.1,regY:50.1,scaleX:0.05,scaleY:0.05,rotation:-34.8,x:182.7,y:319.3}},{t:this.instance_17,p:{regX:41.4,regY:42.5,scaleX:0.13,scaleY:0.13,rotation:-34.9,x:172.2,y:278,alpha:1}},{t:this.instance_16,p:{regX:40.4,regY:42.2,scaleX:0.14,scaleY:0.14,rotation:-34.9,x:170.3,y:203.7}},{t:this.instance_15,p:{regX:41.6,regY:42,scaleX:0.13,scaleY:0.13,rotation:0.5,x:64.9,y:124.5,alpha:1}},{t:this.instance_14,p:{regY:39.8,scaleX:0.18,scaleY:0.18,rotation:0,x:340,y:322.9,regX:40.6}},{t:this.instance_13,p:{x:304,y:222.8,regX:41.3,regY:40.4,scaleX:0.12,scaleY:0.12,rotation:0}},{t:this.instance_12,p:{x:114.7,y:90.7,regY:40.6,scaleX:0.17,scaleY:0.17,regX:41.4,rotation:19}},{t:this.instance_11,p:{x:270.3,y:116.2,regX:41.1,regY:43.6,scaleX:0.13,scaleY:0.13,rotation:-34.8}},{t:this.instance_10,p:{regX:40.1,regY:44.9,scaleX:0.13,scaleY:0.13,x:219.6,y:315.6,rotation:-34.8,alpha:1}},{t:this.instance_9,p:{y:105.8,regY:40.3,scaleX:0.19,scaleY:0.19,x:1.6,regX:41.1,rotation:0,alpha:1}},{t:this.instance_8,p:{x:96.2,y:142.5,regX:41.1,regY:42.2,scaleX:0.13,scaleY:0.13,rotation:-34.9,alpha:1}},{t:this.instance_7,p:{x:70.9,y:145.3,regX:40.6,regY:43.6,scaleX:0.16,scaleY:0.16,rotation:-34.9}},{t:this.instance_6,p:{regX:40.5,regY:43.3,scaleX:0.19,scaleY:0.19,x:78.5,y:121.5,rotation:-34.8,alpha:1}},{t:this.instance_5,p:{regX:42.2,rotation:-34.8,x:181.5,y:322.6,regY:44.6,scaleX:0.1,scaleY:0.1}},{t:this.instance_4,p:{regX:39.8,regY:42.6,scaleX:0.16,scaleY:0.16,rotation:-34.8,x:231.1,y:99.3}},{t:this.instance_3,p:{regX:41.2,scaleX:0.11,scaleY:0.11,rotation:-34.8,x:165.2,y:252.2,regY:43.6,alpha:1}},{t:this.instance_2,p:{regX:40.5,regY:41.9,scaleX:0.139,scaleY:0.139,x:163.6,y:240.5,rotation:-35}},{t:this.instance_1,p:{regX:40.6,rotation:-34.8,x:246.3,y:300,regY:43.6,scaleX:0.08,scaleY:0.08}},{t:this.instance,p:{regX:40.7,regY:41.6,scaleX:0.09,scaleY:0.09,rotation:-19.5,x:287.6,y:204.6,alpha:1}}]},1).to({state:[{t:this.instance_22,p:{x:177.2,y:176.4,regX:43.8,regY:34.4,scaleX:0.08,scaleY:0.08,rotation:0,alpha:1}},{t:this.instance_21,p:{x:165,y:183.9,regX:41.5,regY:40.6,scaleX:0.17,scaleY:0.17,rotation:0,alpha:1}},{t:this.instance_20,p:{regX:41.7,regY:42.9,scaleX:0.11,scaleY:0.11,x:184.7,y:253.6,rotation:-34.8,alpha:1}},{t:this.instance_19,p:{regX:40.6,regY:41.5,scaleX:0.13,scaleY:0.13,rotation:-34.9,x:283.5,y:247.4,alpha:0.941}},{t:this.instance_18,p:{regX:42.1,regY:45.6,scaleX:0.09,scaleY:0.09,rotation:-34.8,x:259.4,y:328.2}},{t:this.instance_17,p:{regX:44.6,regY:51.8,scaleX:0.05,scaleY:0.05,rotation:-34.8,x:180.8,y:314.5,alpha:1}},{t:this.instance_16,p:{regX:41.4,regY:42.5,scaleX:0.13,scaleY:0.13,rotation:-34.9,x:171.1,y:271.9}},{t:this.instance_15,p:{regX:40.5,regY:42.4,scaleX:0.15,scaleY:0.15,rotation:-34.9,x:168.7,y:195.9,alpha:1}},{t:this.instance_14,p:{regY:42,scaleX:0.13,scaleY:0.13,rotation:0.5,x:63.4,y:117.5,regX:41.6}},{t:this.instance_13,p:{x:341.6,y:320,regX:40.6,regY:39.8,scaleX:0.18,scaleY:0.18,rotation:0}},{t:this.instance_12,p:{x:304.4,y:212.1,regY:40.4,scaleX:0.12,scaleY:0.12,regX:41.3,rotation:0}},{t:this.instance_11,p:{x:114.3,y:81,regX:41.6,regY:40.8,scaleX:0.19,scaleY:0.19,rotation:19}},{t:this.instance_10,p:{regX:41.1,regY:43.6,scaleX:0.13,scaleY:0.13,x:273.6,y:107.5,rotation:-34.8,alpha:1}},{t:this.instance_9,p:{y:312.1,regY:45,scaleX:0.14,scaleY:0.14,x:218.5,regX:40.2,rotation:-34.8,alpha:1}},{t:this.instance_8,p:{x:94.8,y:137.5,regX:41.1,regY:43,scaleX:0.11,scaleY:0.11,rotation:-34.8,alpha:1}},{t:this.instance_7,p:{x:69.2,y:139.6,regX:40.6,regY:43.7,scaleX:0.17,scaleY:0.17,rotation:-34.8}},{t:this.instance_6,p:{regX:40.5,regY:43.3,scaleX:0.19,scaleY:0.19,x:76.7,y:114.5,rotation:-34.8,alpha:1}},{t:this.instance_5,p:{regX:42.2,rotation:-34.8,x:179.7,y:318.4,regY:44.6,scaleX:0.1,scaleY:0.1}},{t:this.instance_4,p:{regX:39.9,regY:42.8,scaleX:0.17,scaleY:0.17,rotation:-34.8,x:232.7,y:89.9}},{t:this.instance_3,p:{regX:41.2,scaleX:0.11,scaleY:0.11,rotation:-34.8,x:163.7,y:245.8,regY:43.6,alpha:1}},{t:this.instance_2,p:{regX:40.5,regY:41.9,scaleX:0.139,scaleY:0.139,x:162.3,y:233.5,rotation:-35}},{t:this.instance_1,p:{regX:40.6,rotation:-34.8,x:245.7,y:295.7,regY:43.9,scaleX:0.09,scaleY:0.09}},{t:this.instance,p:{regX:40.7,regY:41.6,scaleX:0.09,scaleY:0.09,rotation:-19.5,x:288,y:193.7,alpha:1}}]},1).to({state:[{t:this.instance_22,p:{x:175.1,y:168.4,regX:43.8,regY:34.4,scaleX:0.08,scaleY:0.08,rotation:0,alpha:1}},{t:this.instance_21,p:{x:163.9,y:176.6,regX:41.5,regY:40.6,scaleX:0.17,scaleY:0.17,rotation:0,alpha:1}},{t:this.instance_20,p:{regX:41.7,regY:42.9,scaleX:0.11,scaleY:0.11,x:183.1,y:246.4,rotation:-34.8,alpha:1}},{t:this.instance_19,p:{regX:40.4,regY:41.6,scaleX:0.14,scaleY:0.14,rotation:-34.8,x:285.9,y:243.3,alpha:0.941}},{t:this.instance_18,p:{regX:42.1,regY:45.6,scaleX:0.09,scaleY:0.09,rotation:-34.8,x:258.6,y:325.5}},{t:this.instance_17,p:{regX:46,regY:52.6,scaleX:0.05,scaleY:0.05,rotation:-34.8,x:179.1,y:309.2,alpha:1}},{t:this.instance_16,p:{regX:41.4,regY:42.5,scaleX:0.13,scaleY:0.13,rotation:-34.9,x:169.3,y:265.7}},{t:this.instance_15,p:{regX:40.5,regY:42.4,scaleX:0.15,scaleY:0.15,rotation:-34.9,x:167.1,y:187.5,alpha:1}},{t:this.instance_14,p:{regY:42,scaleX:0.13,scaleY:0.13,rotation:0.5,x:61.5,y:110.7,regX:41.6}},{t:this.instance_13,p:{x:343.5,y:317,regX:40.6,regY:39.8,scaleX:0.18,scaleY:0.18,rotation:0}},{t:this.instance_12,p:{x:306,y:203.5,regY:40.4,scaleX:0.12,scaleY:0.12,regX:41.3,rotation:0}},{t:this.instance_11,p:{x:113.5,y:71.6,regX:41.6,regY:40.8,scaleX:0.19,scaleY:0.19,rotation:19}},{t:this.instance_10,p:{regX:41.1,regY:43.6,scaleX:0.13,scaleY:0.13,x:273.6,y:107.5,rotation:-34.8,alpha:1}},{t:this.instance_9,p:{y:308.3,regY:45,scaleX:0.14,scaleY:0.14,x:217.4,regX:40.2,rotation:-34.8,alpha:1}},{t:this.instance_8,p:{x:92.9,y:130.8,regX:41.1,regY:43,scaleX:0.11,scaleY:0.11,rotation:-34.8,alpha:1}},{t:this.instance_7,p:{x:67.6,y:133.6,regX:40.6,regY:43.7,scaleX:0.17,scaleY:0.17,rotation:-34.8}},{t:this.instance_6,p:{regX:40.5,regY:43.3,scaleX:0.19,scaleY:0.19,x:75.1,y:107.2,rotation:-34.8,alpha:1}},{t:this.instance_5,p:{regX:42.2,rotation:-34.8,x:176.8,y:313,regY:44.6,scaleX:0.1,scaleY:0.1}},{t:this.instance_4,p:{regX:39.9,regY:42.8,scaleX:0.17,scaleY:0.17,rotation:-34.8,x:234.5,y:81.1}},{t:this.instance_3,p:{regX:41.2,scaleX:0.11,scaleY:0.11,rotation:-34.8,x:163.2,y:238.8,regY:43.6,alpha:1}},{t:this.instance_2,p:{regX:40.5,regY:41.9,scaleX:0.139,scaleY:0.139,x:161,y:226.8,rotation:-35}},{t:this.instance_1,p:{regX:40.6,rotation:-34.8,x:245.4,y:290.3,regY:43.9,scaleX:0.09,scaleY:0.09}},{t:this.instance,p:{regX:41,regY:41.6,scaleX:0.1,scaleY:0.1,rotation:-19.5,x:288.3,y:182.4,alpha:1}}]},1).to({state:[{t:this.instance_20,p:{regX:43.8,regY:34.4,scaleX:0.08,scaleY:0.08,x:173.7,y:160.3,rotation:0,alpha:1}},{t:this.instance_19,p:{regX:41.5,regY:40.6,scaleX:0.17,scaleY:0.17,rotation:0,x:161.7,y:169.4,alpha:1}},{t:this.instance_18,p:{regX:41.7,regY:42.9,scaleX:0.11,scaleY:0.11,rotation:-34.8,x:181.7,y:239.9}},{t:this.instance_17,p:{regX:40.4,regY:41.6,scaleX:0.14,scaleY:0.14,rotation:-34.8,x:288.3,y:237.6,alpha:0.941}},{t:this.instance_16,p:{regX:42.1,regY:45.6,scaleX:0.09,scaleY:0.09,rotation:-34.8,x:257.5,y:322.8}},{t:this.instance_15,p:{regX:45.6,regY:53.9,scaleX:0.08,scaleY:0.08,rotation:-34.8,x:177.8,y:304.3,alpha:1}},{t:this.instance_14,p:{regY:42.5,scaleX:0.13,scaleY:0.13,rotation:-34.9,x:168.7,y:259.2,regX:41.4}},{t:this.instance_13,p:{x:165.7,y:180,regX:40.5,regY:42.4,scaleX:0.15,scaleY:0.15,rotation:-34.9}},{t:this.instance_12,p:{x:60.1,y:103.7,regY:42,scaleX:0.13,scaleY:0.13,regX:41.6,rotation:0.5}},{t:this.instance_11,p:{x:345.6,y:314.4,regX:40.6,regY:39.8,scaleX:0.18,scaleY:0.18,rotation:0}},{t:this.instance_10,p:{regX:41.3,regY:40.4,scaleX:0.12,scaleY:0.12,x:306.3,y:192.8,rotation:0,alpha:1}},{t:this.instance_9,p:{y:62.5,regY:40.8,scaleX:0.19,scaleY:0.19,x:112.9,regX:41.6,rotation:19,alpha:1}},{t:this.instance_8,p:{x:216.6,y:304.6,regX:40.2,regY:45,scaleX:0.14,scaleY:0.14,rotation:-34.8,alpha:1}},{t:this.instance_7,p:{x:91.6,y:124.8,regX:41.1,regY:43,scaleX:0.11,scaleY:0.11,rotation:-34.8}},{t:this.instance_6,p:{regX:40.6,regY:43.7,scaleX:0.17,scaleY:0.17,x:65.9,y:127.2,rotation:-34.8,alpha:1}},{t:this.instance_5,p:{regX:40.5,rotation:-34.8,x:74.3,y:99.6,regY:43.3,scaleX:0.19,scaleY:0.19}},{t:this.instance_4,p:{regX:42.2,regY:44.6,scaleX:0.1,scaleY:0.1,rotation:-34.8,x:174.6,y:307.7}},{t:this.instance_3,p:{regX:39.9,scaleX:0.17,scaleY:0.17,rotation:-34.8,x:235.8,y:71.4,regY:42.8,alpha:1}},{t:this.instance_2,p:{regX:41.2,regY:43.6,scaleX:0.11,scaleY:0.11,x:160.5,y:231,rotation:-34.8}},{t:this.instance_1,p:{regX:40.6,rotation:-34.8,x:245.7,y:284.9,regY:43.9,scaleX:0.09,scaleY:0.09}},{t:this.instance,p:{regX:41,regY:41.6,scaleX:0.1,scaleY:0.1,rotation:-19.5,x:287.8,y:171.7,alpha:1}}]},1).to({state:[{t:this.instance_17,p:{regX:43.8,regY:34.4,scaleX:0.08,scaleY:0.08,rotation:0,x:172.1,y:152.5,alpha:1}},{t:this.instance_16,p:{regX:41.5,regY:40.6,scaleX:0.17,scaleY:0.17,rotation:0,x:160.1,y:161}},{t:this.instance_15,p:{regX:40.4,regY:41.6,scaleX:0.14,scaleY:0.14,rotation:-34.8,x:290.2,y:233.6,alpha:0.941}},{t:this.instance_14,p:{regY:45.6,scaleX:0.09,scaleY:0.09,rotation:-34.8,x:258,y:318.8,regX:42.1}},{t:this.instance_13,p:{x:176.4,y:299.2,regX:45.6,regY:53.9,scaleX:0.08,scaleY:0.08,rotation:-34.8}},{t:this.instance_12,p:{x:167.4,y:253.3,regY:42.5,scaleX:0.13,scaleY:0.13,regX:41.4,rotation:-34.9}},{t:this.instance_11,p:{x:164.1,y:172.2,regX:40.5,regY:42.4,scaleX:0.15,scaleY:0.15,rotation:-34.9}},{t:this.instance_10,p:{regX:41.6,regY:41.9,scaleX:0.14,scaleY:0.14,x:59,y:96.2,rotation:0.3,alpha:1}},{t:this.instance_9,p:{y:311.1,regY:39.8,scaleX:0.18,scaleY:0.18,x:346.4,regX:40.6,rotation:0,alpha:1}},{t:this.instance_8,p:{x:306.9,y:183.6,regX:41.6,regY:40.4,scaleX:0.13,scaleY:0.13,rotation:0,alpha:1}},{t:this.instance_7,p:{x:110.8,y:51.2,regX:41.6,regY:40.8,scaleX:0.19,scaleY:0.19,rotation:19}},{t:this.instance_6,p:{regX:40.2,regY:45,scaleX:0.14,scaleY:0.14,x:216,y:299.7,rotation:-34.8,alpha:1}},{t:this.instance_5,p:{regX:40.6,rotation:-34.8,x:65.1,y:121.2,regY:43.7,scaleX:0.17,scaleY:0.17}},{t:this.instance_4,p:{regX:40.5,regY:43.3,scaleX:0.19,scaleY:0.19,rotation:-34.8,x:71.6,y:91.6}},{t:this.instance_3,p:{regX:42.2,scaleX:0.1,scaleY:0.1,rotation:-34.8,x:173,y:302.5,regY:44.6,alpha:1}},{t:this.instance_2,p:{regX:39.9,regY:42.8,scaleX:0.17,scaleY:0.17,x:237.2,y:63.6,rotation:-34.8}},{t:this.instance_1,p:{regX:41.2,rotation:-34.8,x:159.9,y:224.3,regY:43.6,scaleX:0.11,scaleY:0.11}},{t:this.instance,p:{regX:41.3,regY:41.6,scaleX:0.11,scaleY:0.11,rotation:-19.5,x:287.8,y:160.7,alpha:1}}]},1).to({state:[{t:this.instance_17,p:{regX:43.8,regY:34.4,scaleX:0.08,scaleY:0.08,rotation:0,x:170.3,y:143.9,alpha:1}},{t:this.instance_16,p:{regX:41.5,regY:40.6,scaleX:0.17,scaleY:0.17,rotation:0,x:157.1,y:152.4}},{t:this.instance_15,p:{regX:40.4,regY:41.6,scaleX:0.14,scaleY:0.14,rotation:-34.8,x:291.3,y:227.9,alpha:0.941}},{t:this.instance_14,p:{regY:45.6,scaleX:0.09,scaleY:0.09,rotation:-34.8,x:257,y:315.3,regX:42.1}},{t:this.instance_13,p:{x:175.4,y:293.6,regX:45.6,regY:53.9,scaleX:0.08,scaleY:0.08,rotation:-34.8}},{t:this.instance_12,p:{x:166.3,y:246.1,regY:42.5,scaleX:0.13,scaleY:0.13,regX:41.4,rotation:-34.9}},{t:this.instance_11,p:{x:162,y:165.2,regX:40.5,regY:42.4,scaleX:0.15,scaleY:0.15,rotation:-34.9}},{t:this.instance_10,p:{regX:41.6,regY:41.9,scaleX:0.14,scaleY:0.14,x:57.4,y:88.7,rotation:0.3,alpha:1}},{t:this.instance_9,p:{y:306.8,regY:39.8,scaleX:0.18,scaleY:0.18,x:347.5,regX:40.6,rotation:0,alpha:1}},{t:this.instance_8,p:{x:307.7,y:174.5,regX:41.6,regY:40.4,scaleX:0.13,scaleY:0.13,rotation:0,alpha:1}},{t:this.instance_7,p:{x:110.3,y:42.4,regX:41.6,regY:40.8,scaleX:0.19,scaleY:0.19,rotation:19}},{t:this.instance_6,p:{regX:40.2,regY:45,scaleX:0.14,scaleY:0.14,x:215.5,y:295.4,rotation:-34.8,alpha:1}},{t:this.instance_5,p:{regX:40.6,rotation:-34.8,x:64,y:114.5,regY:43.7,scaleX:0.17,scaleY:0.17}},{t:this.instance_4,p:{regX:40.5,regY:43.3,scaleX:0.19,scaleY:0.19,rotation:-34.8,x:69.9,y:83.5}},{t:this.instance_3,p:{regX:42.2,scaleX:0.1,scaleY:0.1,rotation:-34.8,x:171.6,y:296.9,regY:44.6,alpha:1}},{t:this.instance_2,p:{regX:39.9,regY:42.8,scaleX:0.17,scaleY:0.17,x:238,y:54.5,rotation:-34.8}},{t:this.instance_1,p:{regX:41.2,rotation:-34.8,x:158.9,y:217.3,regY:43.6,scaleX:0.11,scaleY:0.11}},{t:this.instance,p:{regX:41.3,regY:41.6,scaleX:0.11,scaleY:0.11,rotation:-19.5,x:287.8,y:149.6,alpha:1}}]},1).to({state:[{t:this.instance_15,p:{regX:43.8,regY:34.4,scaleX:0.08,scaleY:0.08,rotation:0,x:168.9,y:136.1,alpha:1}},{t:this.instance_14,p:{regY:40.6,scaleX:0.17,scaleY:0.17,rotation:0,x:157.1,y:144.6,regX:41.5}},{t:this.instance_13,p:{x:173.5,y:287.1,regX:45.6,regY:53.9,scaleX:0.08,scaleY:0.08,rotation:-34.8}},{t:this.instance_12,p:{x:164.2,y:239.4,regY:42.5,scaleX:0.13,scaleY:0.13,regX:41.4,rotation:-34.9}},{t:this.instance_11,p:{x:159.6,y:156.6,regX:40.5,regY:42.4,scaleX:0.15,scaleY:0.15,rotation:-34.9}},{t:this.instance_10,p:{regX:41.6,regY:41.9,scaleX:0.14,scaleY:0.14,x:55.3,y:80.9,rotation:0.3,alpha:1}},{t:this.instance_9,p:{y:303.5,regY:39.8,scaleX:0.18,scaleY:0.18,x:348.5,regX:40.6,rotation:0,alpha:1}},{t:this.instance_8,p:{x:308.2,y:164.3,regX:41.6,regY:40.4,scaleX:0.13,scaleY:0.13,rotation:0,alpha:1}},{t:this.instance_7,p:{x:108.7,y:33,regX:41.6,regY:40.8,scaleX:0.19,scaleY:0.19,rotation:19}},{t:this.instance_6,p:{regX:40.2,regY:45,scaleX:0.14,scaleY:0.14,x:214.1,y:289.2,rotation:-34.8,alpha:1}},{t:this.instance_5,p:{regX:40.6,rotation:-34.8,x:63.2,y:108.3,regY:43.7,scaleX:0.17,scaleY:0.17}},{t:this.instance_4,p:{regX:40.5,regY:43.3,scaleX:0.19,scaleY:0.19,rotation:-34.8,x:68.6,y:76.5}},{t:this.instance_3,p:{regX:42.2,scaleX:0.1,scaleY:0.1,rotation:-34.8,x:169.7,y:291.2,regY:44.6,alpha:1}},{t:this.instance_2,p:{regX:39.9,regY:43,scaleX:0.18,scaleY:0.18,x:239,y:45.6,rotation:-34.8}},{t:this.instance_1,p:{regX:41.1,rotation:-34.8,x:157,y:209.8,regY:43.9,scaleX:0.12,scaleY:0.12}},{t:this.instance,p:{regX:41.3,regY:41.6,scaleX:0.11,scaleY:0.11,rotation:-19.5,x:288.4,y:139.4,alpha:1}}]},1).to({state:[{t:this.instance_10,p:{regX:41.4,regY:42.5,scaleX:0.13,scaleY:0.13,x:163.2,y:232.2,rotation:-34.9,alpha:1}},{t:this.instance_9,p:{y:148.5,regY:42.4,scaleX:0.15,scaleY:0.15,x:158.4,regX:40.5,rotation:-34.9,alpha:1}},{t:this.instance_8,p:{x:54.8,y:74.4,regX:41.6,regY:41.9,scaleX:0.14,scaleY:0.14,rotation:0.3,alpha:1}},{t:this.instance_7,p:{x:348.3,y:299.2,regX:40.6,regY:39.8,scaleX:0.18,scaleY:0.18,rotation:0}},{t:this.instance_6,p:{regX:41.6,regY:40.4,scaleX:0.13,scaleY:0.13,x:309.2,y:155.4,rotation:0,alpha:1}},{t:this.instance_5,p:{regX:41.6,rotation:19,x:108.9,y:23.4,regY:40.8,scaleX:0.19,scaleY:0.19}},{t:this.instance_4,p:{regX:40.6,regY:43.7,scaleX:0.17,scaleY:0.17,rotation:-34.8,x:61.5,y:101.8}},{t:this.instance_3,p:{regX:40.5,scaleX:0.19,scaleY:0.19,rotation:-34.8,x:67.8,y:68.4,regY:43.3,alpha:1}},{t:this.instance_2,p:{regX:42.2,regY:44.6,scaleX:0.1,scaleY:0.1,x:168.8,y:284.3,rotation:-34.8}},{t:this.instance_1,p:{regX:39.9,rotation:-34.8,x:240.9,y:36.5,regY:43,scaleX:0.18,scaleY:0.18}},{t:this.instance,p:{regX:41.1,regY:43.9,scaleX:0.12,scaleY:0.12,rotation:-34.8,x:155.8,y:201.7,alpha:1}}]},1).to({state:[{t:this.instance_9,p:{y:225.9,regY:42.5,scaleX:0.13,scaleY:0.13,x:162.5,regX:41.4,rotation:-34.9,alpha:1}},{t:this.instance_8,p:{x:156.1,y:140.9,regX:40.5,regY:42.4,scaleX:0.15,scaleY:0.15,rotation:-34.9,alpha:1}},{t:this.instance_7,p:{x:54,y:66.6,regX:41.9,regY:42.1,scaleX:0.15,scaleY:0.15,rotation:0.3}},{t:this.instance_6,p:{regX:40.6,regY:39.8,scaleX:0.18,scaleY:0.18,x:350.9,y:295.2,rotation:0,alpha:1}},{t:this.instance_5,p:{regX:41.6,rotation:0,x:308.6,y:145.5,regY:40.4,scaleX:0.13,scaleY:0.13}},{t:this.instance_4,p:{regX:41.6,regY:40.8,scaleX:0.19,scaleY:0.19,rotation:19,x:108.4,y:15.3}},{t:this.instance_3,p:{regX:40.6,scaleX:0.17,scaleY:0.17,rotation:-34.8,x:61.5,y:95.2,regY:43.7,alpha:1}},{t:this.instance_2,p:{regX:40.5,regY:43.3,scaleX:0.19,scaleY:0.19,x:66.8,y:61,rotation:-34.8}},{t:this.instance_1,p:{regX:39.7,rotation:-34.8,x:241.2,y:28.4,regY:43.5,scaleX:0.15,scaleY:0.15}},{t:this.instance,p:{regX:41.1,regY:43.9,scaleX:0.12,scaleY:0.12,rotation:-34.8,x:155.3,y:194.9,alpha:1}}]},1).to({state:[{t:this.instance_7,p:{x:161.2,y:218.5,regX:41.3,regY:42.7,scaleX:0.14,scaleY:0.14,rotation:-34.8}},{t:this.instance_6,p:{regX:40.5,regY:42.4,scaleX:0.15,scaleY:0.15,x:154.1,y:132.8,rotation:-34.9,alpha:1}},{t:this.instance_5,p:{regX:41.9,rotation:0.3,x:52.3,y:58.7,regY:42.1,scaleX:0.15,scaleY:0.15}},{t:this.instance_4,p:{regX:41.6,regY:40.4,scaleX:0.13,scaleY:0.13,rotation:0,x:308.9,y:136.3}},{t:this.instance_3,p:{regX:41.6,scaleX:0.19,scaleY:0.19,rotation:19,x:108.2,y:5.9,regY:40.8,alpha:1}},{t:this.instance_2,p:{regX:40.6,regY:43.7,scaleX:0.17,scaleY:0.17,x:59.8,y:87.8,rotation:-34.8}},{t:this.instance_1,p:{regX:40.5,rotation:-34.8,x:66.6,y:52.3,regY:43.3,scaleX:0.19,scaleY:0.19}},{t:this.instance,p:{regX:41.1,regY:43.9,scaleX:0.12,scaleY:0.12,rotation:-34.8,x:153.5,y:187,alpha:1}}]},1).to({state:[{t:this.instance_3,p:{regX:41.3,scaleX:0.14,scaleY:0.14,rotation:-34.8,x:160.2,y:212,regY:42.7,alpha:1}},{t:this.instance_2,p:{regX:40.5,regY:42.4,scaleX:0.15,scaleY:0.15,x:153,y:125.7,rotation:-34.9}},{t:this.instance_1,p:{regX:41.6,rotation:0,x:309.4,y:127.8,regY:40.4,scaleX:0.13,scaleY:0.13}},{t:this.instance,p:{regX:40.5,regY:43.3,scaleX:0.19,scaleY:0.19,rotation:-34.8,x:64.8,y:45,alpha:1}}]},1).to({state:[{t:this.instance_1,p:{regX:41.3,rotation:-34.8,x:157.3,y:204.4,regY:42.7,scaleX:0.14,scaleY:0.14}},{t:this.instance,p:{regX:40.5,regY:43.3,scaleX:0.19,scaleY:0.19,rotation:-34.8,x:64.4,y:36.5,alpha:1}}]},1).to({state:[]},1).wait(1));

	// fondo paraguia
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(7,7,7,0)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},126).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.BRILLOS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.BRILLO_ANIMADO();
	this.instance.parent = this;
	this.instance.setTransform(9.1,0.5,0.661,0.999,0,0,0,59,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.BRILLOS, new cjs.Rectangle(-29.9,8.4,78,802.6), null);


(lib.Boton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.boton();
	this.instance.parent = this;
	this.instance.setTransform(150,300,1,1,0,0,0,150,300);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.boton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Boton, new cjs.Rectangle(0,0,300,600), null);


(lib.BRILLOS_ANIMADOS_PARPADEO = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.BRILLOS();
	this.instance.parent = this;
	this.instance.setTransform(344.5,33.2,8.812,0.988,0,-12.6,-4.1,9.2,8.6);
	this.instance.alpha = 0.281;

	this.instance_1 = new lib.BRILLOS();
	this.instance_1.parent = this;
	this.instance_1.setTransform(342.9,33.3,3.933,0.998,0,16,5.3,9.1,8.5);
	this.instance_1.alpha = 0.238;

	this.instance_2 = new lib.BRILLOS();
	this.instance_2.parent = this;
	this.instance_2.setTransform(343,33.2,2.909,1.018,0,-21.2,-7.2,9.1,8.4);
	this.instance_2.alpha = 0.289;

	this.instance_3 = new lib.BRILLOS();
	this.instance_3.parent = this;
	this.instance_3.setTransform(342.9,33.2,2.951,0.977,0,7,2.3,9.1,8.4);
	this.instance_3.alpha = 0.191;

	this.instance_4 = new lib.BRILLOS();
	this.instance_4.parent = this;
	this.instance_4.setTransform(342.3,33.2,1.705,0.972,0,0,0,8.9,8.3);
	this.instance_4.alpha = 0.43;

	this.instance_5 = new lib.BRILLOS();
	this.instance_5.parent = this;
	this.instance_5.setTransform(354,26.8,5.196,1,-7.2,0,0,9.2,8.4);
	this.instance_5.alpha = 0.281;

	this.instance_6 = new lib.BRILLOS();
	this.instance_6.parent = this;
	this.instance_6.setTransform(353.2,27,2.327,1,9.3,0,0,9.1,8.4);
	this.instance_6.alpha = 0.238;

	this.instance_7 = new lib.BRILLOS();
	this.instance_7.parent = this;
	this.instance_7.setTransform(353,26.9,1.734,1,-12.5,0,0,9,8.3);
	this.instance_7.alpha = 0.289;

	this.instance_8 = new lib.BRILLOS();
	this.instance_8.parent = this;
	this.instance_8.setTransform(353,27,1.733,1,4,0,0,9,8.3);
	this.instance_8.alpha = 0.191;

	this.instance_9 = new lib.BRILLOS();
	this.instance_9.parent = this;
	this.instance_9.setTransform(352.7,26.9,1,1,0,0,0,8.8,8.2);
	this.instance_9.alpha = 0.43;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BRILLOS_ANIMADOS_PARPADEO, new cjs.Rectangle(-30.6,1.4,889,847.2), null);


(lib.BRILLOS_ANIMADOS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.BRILLOS_ANIMADOS_PARPADEO();
	this.instance.parent = this;
	this.instance.setTransform(390.9,247.8,1,1,0,0,0,390.9,247.8);
	this.instance.alpha = 0.371;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.398},6).wait(5).to({alpha:0.359},12).to({alpha:0.371},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.6,1.4,889,847.2);


// stage content:
(lib._300X600_O2_MORENA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{fin:83});

	// timeline functions:
	this.frame_0 = function() {
		_stage=this;
		var boton = new lib.Boton();
		_stage.addChild(boton);
		boton.x=0;
		boton.y=0;
		boton.cursor="pointer"
		boton.addEventListener("click", fl_MouseClickHandler.bind(this));
		//la variable clickTag la coge del index.html
		function fl_MouseClickHandler()
		{
			//_stage.gotoAndPlay("fin");
			console.log("CLICKTAG I");
			javascript:window.open(clickTag)
			
		}
		this.veces=0;
	}
	this.frame_2 = function() {
		var morena=this.morena;
		morena.gotoAndPlay("in")
	}
	this.frame_29 = function() {
		//this.stop();
		var _stage = this;
		var clip;
		var explosion=1;
		var numeroEfectos=16
		/////////////////////////
		// en moviles, page_canvas.width no funciona....
		var page_canvas = document.getElementsByTagName("canvas")[0];
		stageWidth = page_canvas.width;
		stageHeight = page_canvas.height;
		stageWidth=300
		stageHeight=600;
		var contadorBurbujas=0
		var arrayChivato=["unica","unica","unica","unica","unica","unica","unica","unica","unica","unica","unica","unica","unica","unica","unica","unica"]
		var arrayBurbujasCiclo=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
		var arrayRadios=[200,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
		var arrayCirculosx=[10, 12, 27,39,44,48,60,67,70, 80, 86,88,101,110,116,120]
		var arrayCirculosy=[450, 425, 440,449,421,425,423,430,460, 420,450,421,420,456,410,428]
		var arrayEscalasIniciales=[0.1,0.2,0.2,0.1,0.1,0.1,0.1,0.1,0.2,0.23,0.2,0.2,0.1,0.17,0.2,0.1]
		var arrayEscalasFinales=[0.1,0.1,0.1,0.1,0.1,0.1,0.1,0.1,0.2,0.2,0.1,0.1,0.2,0.1,0.15,0.2,0.1]
		var arrayCantidadesDistancia=[1,1,1,1,1,1,1,1,1,1, 1,1,1,1,1,1]
		var arrayVariacionesCantidadDistancia=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
		var arrayVelocidadesIniciales=[500,500,500,500,500,300,100,300,100,100,100,100,200,140,100,100]
		var arrayVelocidadesFinales=[1250,1540,1000,1625, 1830,1960,1000,1000,1300,1400,1300,1100,1900,1000,1340,1560]
		var arrayVariacionesVelocidadInicial=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
		var arrayVariacionesVelocidadFinal=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
		var arrayVariacionesEscala=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
		var arrayLimitesFinIzda=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
		var arrayLimitesFinDcha=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
		var arrayTipos=[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]
		var arrayTweens=["quadIn", "quadIn","quadIn","quadIn","quadIn","quadIn","quadIn","quadIn", "quadIn","quadIn","quadIn","quadIn","quadIn","quadIn","quadIn","quadIn"]
		var arrayFinY=[200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200]
		var arrayWaits=[100, 100,100,100,100,100,100,100, 100,100,100,100,100,100,100,100]
		var arrayAlphasInicio=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
		var arrayAlphasFinal=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
		var arrayTiposBurbuja=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
		var arrayMascaras=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
		//var pathData0= [143,498,145,464,146,431,146,398,146,365,146,331,148,298,152,265,154,232,157,198,159,165]
		//var pathDelta0= [3,33,15,64,16,97,12,130,12,163,13,196,11,230]//4250 milisegundos;
		var pathDelta0=[9,17,-15,44,-20,74,-22,111,-14,151,-5,205,2,261,-1,318,-16,359,-40,411,-67,468,-78,524,-80,567]
		var pathDelta1= [18,38,21,69,19,103,5,134,0,168,-2,198,-1,227,1,253,-5,281,-14,306,-17,335,-10,379,3,415,11,446,11,478,7,512,-4,545];//5540 milisegundos
		var pathDelta2= [-3,21,-4,45,1,75,10,98,20,127,26,147,29,174,30,209,27,228,23,251,17,269,8,289,4,312,3,340,1,363,-2,385,-12,408,-22,431,-31,451,-39,480,-44,508,-51,540,-56,569];//7040 milisegundos
		var pathDelta3= [2,24,6,50,9,83,11,113,12,137,12,162,12,189,11,220,10,247,9,273,6,297,0,321,-11,351,-22,383,-34,414,-57,467,-77,509,-93,539,-103,557];//6625 milisegundos
		var pathDelta4= [-1,66,4,150,6,223,4,300,-5,352,-15,433,-25,515];//5830 milisegundos
		var pathDelta5= [11,39,25,77,35,112,41,158,41,211,38,259,15,336,-18,424,-51,510]//5960 milisegundos
		var pathDelta6= [2,24,5,47,12,79,20,106,28,132,36,160,47,192,55,220,65,246,73,278,80,311,85,337,89,370,91,410,95,459,96,506,95,547]//5000 milisegundos
		var pathDelta7= [0,36,0,71,0,107,-2,151,-4,186,-7,224,-12,268,-19,314,-26,357,-32,407,-39,467,-40,508,-42,538];//6625 milisegundos
		var pathDelta8= [7,24,16,48,23,70,32,94,41,119,46,142,50,165,54,187,56,213,56,241,56,269,52,309,38,352,17,409,-7,468,-30,519,-43,551];//5540 milisegundos
		var pathDelta9= [9,29,20,57,35,93,43,123,48,161,48,209,42,251,31,286,16,323,-1,381,-11,435,-12,480,-12,527]//5960 milisegundos
		var pathDelta10= [17,49,39,106,48,152,50,210,53,261,62,323,85,402,103,471,106,516]//4250 milisegundos;
		var pathDelta11= [-2,22,-3,50,-7,82,-14,121,-25,163,-44,219,-64,282,-80,345,-92,417,-104,505,-110,545];//7040 milisegundos
		var pathDelta12=[2,40,2,99,1,154,-5,200,-13,260,-14,331,-13,405,-12,491,-12,549]
		var pathDelta13=[0,31,-8,61,-18,88,-30,114,-46,142,-62,173,-79,201,-95,227,-108,251,-116,277,-120,307,-120,355,-104,422,-77,486,-59,528]
		var pathDelta14=[1,28,7,59,16,93,37,142,60,189,84,234,107,288,124,334,137,377,145,422,154,478,157,533,156,563]
		var pathDelta15=[-9,24,-24,66,-43,115,-64,158,-85,203,-106,259,-126,315,-147,371,-167,432,-176,487,-182,536]
		var suma=0;
		for (var f=0;f<arrayTipos.length;f++)
		{
			//console.log("LA POSICIÓN "+f+" es "+arrayTipos[f]);
			if(arrayTipos[f]==3)
				{
					eval("var pathData"+f+"=[]");
				}
		}
		
		
		for(var f=0;f<numeroEfectos;f++)
		{
			var dato=arrayBurbujasCiclo[f]
			var suma=suma+dato
			
		}
		var totalBurbujas=suma;
		//console.log("TOTAL BURBUJAS "+totalBurbujas)
		var sumaBurbujasEnmascaradas=0
		var valorMascaras=0;
		for(var f=0;f<arrayMascaras.length;f++)
		{
			
			var v=arrayMascaras[f]
			if(v==1)
				{
					sumaBurbujasEnmascaradas+=arrayBurbujasCiclo[f]
				}
		}
		//console.log("TOTAL MASCARAS "+sumaBurbujasEnmascaradas)
		var contadorMascara=0;
		///////////////////////
		//
		///////////////////////////
		var txt1=this.txt1;
		var txt2=this.txt2;
		var txt3=this.txt3;
		///////////////////////
		for(f=0;f<numeroEfectos;f++)
		{
			eval("var orden"+f+"=0");
			eval("var radio"+f+"=arrayRadios["+f+"]");
			if(eval("radio"+f+"==undefined"))
				{
					eval("var radio"+f+"=0");
				}
			eval("var circulox"+f+"=arrayCirculosx["+f+"]")
			if(eval("circulox"+f+"==undefined"))
				{
					eval("var circulox"+f+"=stageWidth/2");
				}
			eval("var circuloy"+f+"=arrayCirculosy["+f+"]")
			if(eval("circuloy"+f+"==undefined"))
				{
					eval("var circuloy"+f+"=stageHeight/2");
				}
			eval("var totalburbujasciclo"+f+"=arrayBurbujasCiclo["+f+"]");
				if(eval("totalburbujasciclo"+f+"==undefined"))
					{
						eval("var totalburbujasciclo"+f+"=1")
					}
			eval("var escalaInicial"+f+"=arrayEscalasIniciales["+f+"]");
				if(eval("escalaInicial"+f+"==undefined"))
					{
						eval("var escalaInicial"+f+"=0.1");
					}
			eval("var escalaFinal"+f+"=arrayEscalasFinales["+f+"]");
				if(eval("escalaFinal"+f+"==undefined"))
					{
						eval("var escalaFinal"+f+"=0.3");
					}
			eval("var cantidadDistancia"+f+"=arrayCantidadesDistancia["+f+"]");
				if(eval("cantidadDistancia"+f+"==undefined"))
					{
						eval("var cantidadDistancia"+f+"=0");
					}
			eval("var velocidadInicial"+f+"=arrayVelocidadesIniciales["+f+"]");
				if(eval("velocidadInicial"+f+"==undefined"))
					{
						eval("var velocidadInicial"+f+"=1000")
					}
			eval("var velocidadFinal"+f+"=arrayVelocidadesFinales["+f+"]");
					if(eval("velocidadFinal"+f+"==undefined"))
					{
						eval("var velocidadFinal"+f+"=5000")
					}
			eval("var variacionVInicial"+f+"=arrayVariacionesVelocidadInicial["+f+"]");
					if(eval("variacionVInicial"+f+"==undefined"))
					{
						eval("var variacionVInicial"+f+"=0")
					}
			eval("var variacionVFinal"+f+"=arrayVariacionesVelocidadFinal["+f+"]");
					if(eval("variacionVFinal"+f+"==undefined"))
					{
						eval("var variacionVFinal"+f+"=0")
					}
			eval("var variacionCantidadDistancia"+f+"=arrayVariacionesCantidadDistancia["+f+"]");
					if(eval("variacionCantidadDistancia"+f+"==undefined"))
					{
						eval("var variacionCantidadDistancia"+f+"=0")
					}
			eval("var variacionEscala"+f+"=arrayVariacionesEscala["+f+"]");
					if(eval("variacionEscala"+f+"==undefined"))
					{
						eval("var variacionEscala"+f+"=1")
					}
			eval("var limiteFinIzda"+f+"=arrayLimitesFinIzda["+f+"]");
					if(eval("limiteFinIzda"+f+"==undefined"))
					{
						eval("var limiteFinIzda"+f+"=stageWidth/2")
					}
			eval("var limiteFinDcha"+f+"=arrayLimitesFinDcha["+f+"]");
					if(eval("limiteFinDcha"+f+"==undefined"))
					{
						eval("var limiteFinDcha"+f+"=stageWidth/2")
					}
			eval("var tipo"+f+"=arrayTipos["+f+"]");
					if(eval("tipo"+f+"==undefined"))
					{
						eval("var tipo"+f+"=2")
					}
			eval("var tween"+f+"=arrayTweens["+f+"]");
					if(eval("tween"+f+"==undefined"))
					{
						eval("var tween"+f+"='quadIn'")
					}
			eval("var limiteFinY"+f+"=arrayFinY["+f+"]");
					if(eval("limiteFinY"+f+"==undefined"))
					{
						eval("var limiteFinY"+f+"=0")
					}
			eval("var wait"+f+"=arrayWaits["+f+"]");
					if(eval("wait"+f+"==undefined"))
					{
						eval("var wait"+f+"=100")
					}
			eval("var alphaInicial"+f+"=arrayAlphasInicio["+f+"]");
					if(eval("alphaInicial"+f+"==undefined"))
					{
						eval("var alphaInicial"+f+"=1")
					}
			eval("var alphaFinal"+f+"=arrayAlphasFinal["+f+"]");
					if(eval("alphaFinal"+f+"==undefined"))
					{
						eval("var alphaFinal"+f+"=1")
					}
			eval("var tipoBurbuja"+f+"=arrayTiposBurbuja["+f+"]");
					if(eval("tipoBurbuja"+f+"==undefined"))
					{
						eval("var tipoBurbuja"+f+"=2")
					}
			eval("var mascaraSiNo"+f+"=arrayMascaras["+f+"]");
					if(eval("mascaraSiNo"+f+"==undefined"))
					{
						eval("var mascaraSiNo"+f+"=0")
					}
		}
		queueFileLoad()
		function queueFileLoad(event)
		{
			//SIMPLEMENTE ESPERAMOS A QUE SE TERMINE la carga de datos
			createjs.MotionGuidePlugin.install();
			//lanzarBurbujaInicial()
			//createjs.Ticker.addEventListener("tick", crearCosas)
			crearCosas()
		}
		
		function aleatorio(a,b) {
		         return Math.round(Math.random()*(b-a)+parseInt(a));
		}
		function puntoEnCirculo(px,py,radio,circulox,circuloy)
		{
			var dato1=Math.pow(circulox-px,2)
			var dato2=Math.pow((circuloy-py),2)
			var dato3=Math.sqrt(dato1+dato2)
			if(dato3<radio)
				{
					return true
				}
				else
				{
					return false
				}
		}
		function ponerBurbujasAccesorias()
		{
			var burbujasAccesorias=new lib.Accesorias()
			_stage.addChild(burbujasAccesorias);
			burbujasAccesorias.x=0
			burbujasAccesorias.y=0
		}
		function lanzarBurbujaInicial()
		{
			var clip = new lib.Cosa();
			_stage.addChild(clip);
			clip.name = "inicial";
			var escalaInicial=1.4
			clip.scaleX=clip.scaleY=escalaInicial
			var px=aleatorio(100,200)
			var py=stageHeight+100
			clip.x=px
			clip.y=py;
			////https://www.createjs.com/demos/tweenjs/tween_sparktable
			var tween="quadIn"
			createjs.Tween.get(clip)
			.to({rotation:90, guide: {path: [px, py, px+aleatorio(-100,100), py-100, stageWidth/2,stageHeight/2]}}, 5000,eval("createjs.Ease."+tween)).call(completarInicio, [clip, 0], this)
		}
		
		function completarInicio(clip)
		{
			//console.log("ENTRO EN COMPLETAR "+clip);
			_stage.removeChild(clip)
			//comienzo la explosion
			//createjs.Ticker.addEventListener("tick", crearCosas)
			crearCosas()
		}
		var normal;
		function ponerBase()
		{
				////////////
			//pongo primero en la parte inferior, el texto que debe verse normal. y solo se pone una vez
			normal=new lib.Normal()
			_stage.addChild(normal)
			normal.x=0;
			normal.y=0;
			normal.alpha=1
			/////////////////////////////////////////////////////////
		}
		function quitarBase()
		{
			_stage.removeChild(normal)
			normal.x=0;
			normal.y=0;
			normal.alpha=0
			/////////////////////////////////////////////////////////
		}
		function crearCosas(event)
		{
			
			ponerBase();
			ponerBurbujasAccesorias();
				for(var a=0;a<numeroEfectos;a++)
				{
				eval("radio=radio"+a);
				eval("circulox=circulox"+a);
				eval("circuloy=circuloy"+a);
				eval("totalburbujasciclo=totalburbujasciclo"+a);
				eval("orden=orden"+a);
				eval("escalaInicial=escalaInicial"+a);
				eval("escalaFinal=escalaFinal"+a);
				eval("cantidadDistancia=cantidadDistancia"+a);
				eval("velocidadInicial=velocidadInicial"+a)
				eval("velocidadFinal=velocidadFinal"+a)
				eval("variacionVInicial=variacionVInicial"+a)
				eval("variacionVFinal=variacionVFinal"+a)
				eval("variacionCantidadDistancia=variacionCantidadDistancia"+a)
				eval("variacionEscala=variacionEscala"+a)
				eval("limiteFinIzda=limiteFinIzda"+a)
				eval("limiteFinDcha=limiteFinDcha"+a)
				eval("tipo=tipo"+a);
				eval("tween=tween"+a);
				eval("limiteFinY=limiteFinY"+a);
				eval("wait=wait"+a);
				eval("alphaInicial=alphaInicial"+a);
				eval("alphaFinal=alphaFinal"+a);
				eval("tipoBurbuja=tipoBurbuja"+a);
				eval("mascaraSiNo=mascaraSiNo"+a);
				//console.log("VARIACION CANTIDAD DISTANCIA "+variacionCantidadDistancia)
				//console.log("CANTIDAD DISTANCIA "+cantidadDistancia)
				if(tipo==3)
				{
					eval("pathDelta=pathDelta"+a)
					eval("pathData=pathData"+a)
					//console.log("PATH DELTA "+pathDelta)
					//console.log("CIRCULO X "+circulox)
					var primerax=circulox;
					var primeray=circuloy;
					//console.log("PRIMERA X "+circulox)
					//console.log("PRIMERA Y "+circuloy);
					//pathData.push(primerax)
					//pathData.push(primeray)
					for(var n=0;n<pathDelta.length;n+=2)
					{
							pathData.push(primerax-pathDelta[n]);
							pathData.push(primeray-pathDelta[n+1]);
					}
					
					//console.log("PATH DATA "+pathData);
				}
				
				
				
				for(var f=0;f<totalburbujasciclo;f++)
				{
						//txt1.text="A "+a+" F "+f;
						dx=aleatorio(-radio,radio)
						dy=aleatorio(-radio,radio)
					
						px=circulox+dx
						py=circuloy+dy
						cantidadDistancia=aleatorio(cantidadDistancia-variacionCantidadDistancia, cantidadDistancia+variacionCantidadDistancia);
					
						if(puntoEnCirculo(px,py,radio, circulox, circuloy))
						{
									
								if(px<=circulox && py<=circuloy)
								{
									///punto en cuadrante 1, superior izquierdo
									var incrementox=aleatorio(-1*cantidadDistancia,1);
									var incrementoy=aleatorio(-1*cantidadDistancia,1);
								}else if(px>=circulox && py<=circuloy)
								{
									//punto en cuadrante 2, superior derecho
									var incrementox=aleatorio(1,cantidadDistancia);
									var incrementoy=aleatorio(-1*cantidadDistancia,1);
								}else if(px<=circulox && py>=circuloy)
								{
									//punto en cuadrante 3, inferior izquierdo
									var incrementox=aleatorio(-1*cantidadDistancia,1);
									var incrementoy=aleatorio(1,cantidadDistancia);
								}else if(px>=circulox && py>=circuloy)
								{
									//punto en cuadrante 4, inferior derecho
									var incrementox=aleatorio(1,cantidadDistancia);
									var incrementoy=aleatorio(1,cantidadDistancia);
								}else
								{
									//punto 0, 0
									var incrementox=aleatorio(-1*cantidadDistancia,cantidadDistancia);
									var incrementoy=aleatorio(-1*cantidadDistancia,cantidadDistancia);
								}
								
						}
						else
						{
								px=circulox
								py=circuloy
								//incrementox=0
								incrementoy=0
						}
									///////////////////////////////////////////////
								// EVALUAMOS SI CADA BURBUJA VA A TENER MÁSCARA O NO
								///////////////////////////////////////////////////
								//console.log("PATH DATA "+pathData);
								
								//console.log("FORMA X "+formax+" FORMA Y "+formay)
								//console.log("MASCARA "+mascaraSiNo+" CONTADOR MÁSCARA "+contadorMascara)
								if(mascaraSiNo==1)
										{
											eval("var deformado_"+contadorMascara+"=new lib.Deformado()");
											eval("deformado_"+contadorMascara+".name=deformado_"+contadorMascara);
											eval("_stage.addChild(deformado_"+contadorMascara+")");
											eval("deformado_"+contadorMascara+".alpha=1");
											eval("deformado_"+contadorMascara+".x=0");
											eval("deformado_"+contadorMascara+".y=0");
											eval("forma"+contadorMascara+"=new createjs.Shape()");
										if(tipo==3)
										{
											var formax=pathData[0]
											var formay=pathData[1]
											eval("forma"+contadorMascara+".graphics.drawCircle("+formax+","+formay+",80).endFill()");
											eval("forma"+contadorMascara+".regX="+formax);
											eval("forma"+contadorMascara+".regY="+formay);
										}
										else
										{
											//console.log("CIRCULO x "+circulox+" CIRCULO Y "+circuloy)
											eval("forma"+contadorMascara+".graphics.drawCircle("+circulox+","+circuloy+",80).endFill()");
											eval("forma"+contadorMascara+".regX="+circulox)
											eval("forma"+contadorMascara+".regY="+circuloy)
										}
										eval("_stage.addChild(forma"+contadorMascara+")");		
										eval("deformado_"+contadorMascara+".mask=forma"+contadorMascara);
										eval("mascaraAPoner=forma"+contadorMascara);
										eval("texto_deformado=deformado_"+contadorMascara);
								}
									/////////////////////////////////////
									// NUBE DE BURBUJAS
									//////////////////////////////////////
									
									eval("var clip = new lib.Burbuja"+tipoBurbuja+"()");
									_stage.addChild(clip);
									clip.name = "cosa_"+orden+"_"+f
									orden++;
									reduccionEscala=aleatorio(1,variacionEscala)
									clip.x=px;
									clip.y=py;
									velocidadInicial=aleatorio(velocidadInicial-variacionVInicial,velocidadInicial+variacionVInicial)
									velocidadFinal=aleatorio(velocidadFinal-variacionVFinal,velocidadFinal+variacionVFinal)
								////https://www.createjs.com/demos/tweenjs/tween_sparktable
								
						
								if(tipo==1)
								{
									//SE GENERA BURBUJA EN UN CUADRANTE A TAMAÑO INICIAL, y SUBEN HASTA LIMITE, A TAMAÑO FINAL
									clip.scaleX=clip.scaleY=escalaInicial/reduccionEscala;
									clip.alpha=alphaInicial;
									var escalaFinal=escalaFinal/reduccionEscala
									clip.x=circulox
									clip.y=circuloy
									var destinoxFinal=aleatorio(limiteFinIzda,limiteFinDcha)
									//console.log("WAIT "+wait+" escala final "+escalaFinal+" VariacionvFinal "+variacionVFinal);
									createjs.Tween.get(clip)
									.wait(wait)
									.to({scaleX:escalaFinal, scaleY:escalaFinal, alpha:alphaFinal,x:destinoxFinal, y:limiteFinY}, velocidadInicial,eval("createjs.Ease."+tween)).call(completar, [clip, 0], this)
									if(mascaraSiNo==1)
									{
										mascaraAPoner.scaleX=(escalaInicial/reduccionEscala)/2
										mascaraAPoner.scaleY=(escalaInicial/reduccionEscala)/2;
										mascaraAPoner.alpha=alphaInicial;
										mascaraAPoner.x=circulox;
										mascaraAPoner.y=circuloy
										createjs.Tween.get(mascaraAPoner)
											.wait(wait)
											.to({scaleX:escalaFinal/2, scaleY:escalaFinal/2, alpha:alphaFinal,x:destinoxFinal, y:limiteFinY}, velocidadInicial,eval("createjs.Ease."+tween)).call(completarMascara, [mascaraAPoner,texto_deformado, 0], this);
										}
								}
								else if(tipo==2)						
								{
									//SE GENERA BURBUJA EN UN CUADRANTE, TAMAÑO 0, ESCALAN. SE MUEVEN EN EXPANSION RADIAL HACIA AFUERA Y SUBEN 
									clip.scaleX=clip.scaleY=0
									clip.alpha=alphaInicial;
									var escalaFinal=escalaFinal/reduccionEscala
									var destinoxFinal=aleatorio(limiteFinIzda,limiteFinDcha)
									createjs.Tween.get(clip)
									.wait(wait)
									.to({scaleX:escalaInicial/reduccionEscala, scaleY:escalaInicial/reduccionEscala, x:px+incrementox, y:py+incrementoy}, velocidadInicial,eval("createjs.Ease."+tween))
									.to({scaleX:escalaFinal, scaleY:escalaFinal,alpha:alphaFinal, x:destinoxFinal, y:limiteFinY}, velocidadFinal,eval("createjs.Ease."+tween)).call(completar, [clip, 0], this)
									if(mascaraSiNo==1)
									{
										mascaraAPoner.scaleX=0
										mascaraAPoner.scaleY=0
										mascaraAPoner.alpha=alphaInicial;
										mascaraAPoner.x=circulox;
										mascaraAPoner.y=circuloy
										createjs.Tween.get(mascaraAPoner)
											.wait(wait)
											.to({scaleX:(escalaInicial/reduccionEscala)/2, scaleY:(escalaInicial/reduccionEscala)/2, x:px+incrementox, y:py+incrementoy}, velocidadInicial,eval("createjs.Ease."+tween))
											.to({scaleX:escalaFinal/2, scaleY:escalaFinal/2,alpha:alphaFinal, x:destinoxFinal, y:limiteFinY}, velocidadFinal,eval("createjs.Ease."+tween)).call(completarMascara, [mascaraAPoner,texto_deformado, 0], this);
										}
								}
								else if(tipo==3)
								{
									//UNA TRAYECTORIA EN ESPIRAL ESCALANDO RAPIDO DESDE CERO. PARA EFECTO GROUP.
									//.to({guide: {path: [px1,py1, 100, 600, 150, 400, 140, 300,100,100]}}, 6000).call(completar, [forma1, 0], this)
									clip.scaleX=clip.scaleY=0
									clip.alpha=alphaInicial;
									px=circulox
									py=circuloy
									//console.log("PX "+circulox)
									//console.log("PY "+circuloy)
									clip.x=px
									clip.y=py
									velocidadFinal=aleatorio(velocidadFinal-variacionVFinal, velocidadFinal+variacionVFinal);
									//console.log("ESCALA FINAL en 6 "+escalaFinal);
									createjs.Tween.get(clip)
									.wait(wait)
									.to({x:pathData[0], y:pathData[1], scaleX:escalaInicial, scaleY:escalaInicial}, velocidadInicial, eval("createjs.Ease."+tween))
									.to({guide: {path:pathData},scaleX:escalaFinal, scaleY:escalaFinal, alpha:alphaFinal}, velocidadFinal).call(completar, [clip, 0], this)
									if(mascaraSiNo==1)
									{
										//console.log("ESCALA iNICIAL "+escalaInicial+" escala final "+escalaFinal)
										//eval("forma"+contadorMascara+".x=px")
										//eval("forma"+contadorMascara+".y=py")
										//eval("forma"+contadorMascara+".scaleX=0")
										//eval("forma"+contadorMascara+".scaleY=0")
										mascaraAPoner.scaleX=0
										mascaraAPoner.scaleY=0;
										mascaraAPoner.x=px;
										mascaraAPoner.y=py
										eval("var mascaraAPoner=forma"+contadorMascara)
										createjs.Tween.get(mascaraAPoner)
										.wait(wait)
										.to({x:pathData[0], y:pathData[1], scaleX:escalaInicial/2, scaleY:escalaInicial/2}, velocidadInicial, eval("createjs.Ease."+tween))
										.to({guide: {path:pathData},scaleX:escalaFinal/2, scaleY:escalaFinal/2, alpha:alphaFinal}, velocidadFinal).call(completarMascara, [mascaraAPoner,texto_deformado, 0], this);
									}
								}
								
								if(mascaraSiNo==1)
									{
										contadorMascara++;
									}
						
						
						/////////////////////////////////////////////////////
						// FIN DE EVALUACION DE MASCARAS
						///////////////////////////////////////////////////
								
				}
		
			}
			
		
		}
		
		function completar(clip)
		{
			//console.log("BORRO UNA BURBUJA "+contadorBurbujas+" TOTAL BURBUJAS "+totalBurbujas);
			var actualFrame=_stage.currentFrame;
			contadorBurbujas++
			if(contadorBurbujas>=totalBurbujas)
				{
					//console.log("FIN TOTAL");
					quitarBase()
					_stage.gotoAndPlay(actualFrame+1);
				}
			_stage.removeChild(clip)
		}
		function completarMascara(mascara, textoDeformado)
		{
			//console.log("BORRO UNA Mascara");
			
			_stage.removeChild(mascara)
			_stage.removeChild(textoDeformado)
		}
		this.stop();
		
		/// PARA EL CLICTAG
		/*
		_stage=this;
		var boton = new lib.Boton();
		_stage.addChild(boton);
		boton.x=0;
		boton.y=0;
		boton.cursor="pointer"
		boton.addEventListener("click", fl_MouseClickHandler.bind(this));
		//la variable clickTag la coge del index.html
		function fl_MouseClickHandler()
		{
			_stage.removeAllChildren();
			//_stage.gotoAndPlay("fin");
			console.log("CLICKTAG II");
			
			javascript:window.open(clickTag)
			
		}
		*/
	}
	this.frame_30 = function() {
		var morena=this.morena;
		morena.gotoAndPlay("out")
	}
	this.frame_137 = function() {
		this.veces++
		if(this.veces>=2)
			{
				this.stop()
			}else
			{
				this.gotoAndPlay(2)
			}
		
		/*this.stop();
		_stage=this;
		var boton = new lib.Boton();
		_stage.addChild(boton);
		boton.x=0;
		boton.y=0;
		boton.cursor="pointer"
		boton.addEventListener("click", fl_MouseClickHandler.bind(this));
		//la variable clickTag la coge del index.html
		function fl_MouseClickHandler()
		{
				//_stage.removeAllChildren();
			//_stage.gotoAndPlay("fin");
			console.log("CLICKTAG III");
			
			javascript:window.open(clickTag)
			
		}
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(27).call(this.frame_29).wait(1).call(this.frame_30).wait(107).call(this.frame_137).wait(1));

	// texto_01
	this.instance = new lib.texto_01();
	this.instance.parent = this;
	this.instance.setTransform(152.2,243.5,1,1,0,0,0,126.4,30.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({alpha:1},7).wait(12).to({regX:126,regY:34.8,x:151.8,y:327.5},0).wait(1).to({y:386.6},0).wait(1).to({y:435.4},0).wait(1).to({y:477.1},0).wait(1).to({y:513.3},0).wait(1).to({y:545},0).wait(1).to({y:572.6},0).wait(1).to({y:596.7},0).wait(1).to({y:617.6},0).wait(1).to({y:635.3},0).wait(1).to({y:650.3},0).wait(1).to({y:662.6},0).wait(1).to({y:673.7},0).wait(1).to({y:683.8},0).wait(1).to({y:693.1},0).wait(1).to({y:701.6},0).wait(1).to({y:709.5},0).wait(1).to({y:716.8},0).wait(1).to({y:723.6},0).wait(1).to({y:729.9},0).wait(1).to({y:735.8},0).wait(1).to({y:741.2},0).wait(1).to({y:746.3},0).wait(1).to({y:751},0).wait(1).to({y:755.4},0).wait(1).to({y:759.5},0).wait(1).to({y:763.3},0).wait(1).to({y:766.8},0).wait(1).to({y:770.1},0).wait(1).to({y:773.1},0).wait(1).to({y:775.8},0).wait(1).to({y:778.4},0).wait(1).to({y:780.7},0).wait(1).to({y:782.8},0).wait(1).to({y:784.7},0).wait(1).to({y:786.4},0).wait(1).to({y:787.9},0).wait(1).to({y:789.2},0).wait(1).to({y:790.4},0).wait(1).to({y:791.3},0).wait(1).to({y:792.1},0).wait(1).to({y:792.7},0).wait(1).to({y:793.2},0).wait(1).to({y:793.4},0).wait(1).to({regX:126.4,regY:30.8,x:152.2,y:789.5},0).to({_off:true},1).wait(55));

	// logo 02
	this.instance_1 = new lib.o2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(236.4,46.5,0.7,0.7,0,0,0,34.5,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(138));

	// tarifa
	this.instance_2 = new lib.tarifa_final();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150.8,331,1,1,0,0,0,77.3,195.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60).to({_off:false},0).to({alpha:1},8).wait(70));

	// morena
	this.morena = new lib.morena();
	this.morena.name = "morena";
	this.morena.parent = this;
	this.morena.setTransform(-116,522,1,1,0,0,0,95,61);

	this.timeline.addTween(cjs.Tween.get(this.morena).wait(2).to({regY:61.1,rotation:-17,x:-99.9,y:546.5},0).to({x:48.1,y:491.9},7).wait(21).to({x:-99.9,y:546.5},5).to({_off:true},1).wait(102));

	// BRILLOS
	this.instance_3 = new lib.BRILLOS_ANIMADOS();
	this.instance_3.parent = this;
	this.instance_3.setTransform(193.7,216,1,1,0,0,0,390.9,247.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(38).to({regX:413.8,regY:424.9,x:216.6,y:558.5},0).wait(1).to({y:626.2},0).wait(1).to({y:676.8},0).wait(1).to({y:718.2},0).wait(1).to({y:753.3},0).wait(1).to({y:783.8},0).wait(1).to({y:810.5},0).wait(1).to({y:834.1},0).wait(1).to({y:854.9},0).wait(1).to({y:873.2},0).wait(1).to({y:889.3},0).wait(1).to({y:903.3},0).wait(1).to({y:915.6},0).wait(1).to({y:926.5},0).wait(1).to({y:936.2},0).wait(1).to({y:944.9},0).wait(1).to({y:952.8},0).wait(1).to({y:960},0).wait(1).to({y:966.5},0).wait(1).to({y:972.4},0).wait(1).to({y:977.8},0).wait(1).to({y:982.7},0).wait(1).to({y:987.2},0).wait(1).to({y:991.3},0).wait(1).to({y:995.1},0).wait(1).to({y:998.5},0).wait(1).to({y:1001.6},0).wait(1).to({y:1004.4},0).wait(1).to({y:1006.9},0).wait(1).to({y:1009.2},0).wait(1).to({y:1011.3},0).wait(1).to({y:1013.1},0).wait(1).to({y:1014.7},0).wait(1).to({y:1016.2},0).wait(1).to({y:1017.4},0).wait(1).to({y:1018.5},0).wait(1).to({y:1019.5},0).wait(1).to({y:1020.3},0).wait(1).to({y:1020.9},0).wait(1).to({y:1021.4},0).wait(1).to({y:1021.8},0).wait(1).to({y:1022.1},0).wait(1).to({y:1022.3},0).wait(1).to({y:1022.4},0).wait(1).to({regX:390.9,regY:247.8,x:193.7,y:845.4},0).wait(56));

	// BRILLOS
	this.instance_4 = new lib.LUZ_MAR();
	this.instance_4.parent = this;
	this.instance_4.setTransform(184.4,258,1,1,0,0,0,355.4,262.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(38).to({regY:260.3,y:415.4},0).wait(1).to({y:480.7},0).wait(1).to({y:529.5},0).wait(1).to({y:569.4},0).wait(1).to({y:603.3},0).wait(1).to({y:632.7},0).wait(1).to({y:658.4},0).wait(1).to({y:681.1},0).wait(1).to({y:701.2},0).wait(1).to({y:718.9},0).wait(1).to({y:734.4},0).wait(1).to({y:747.9},0).wait(1).to({y:759.7},0).wait(1).to({y:770.2},0).wait(1).to({y:779.6},0).wait(1).to({y:788},0).wait(1).to({y:795.6},0).wait(1).to({y:802.5},0).wait(1).to({y:808.8},0).wait(1).to({y:814.5},0).wait(1).to({y:819.7},0).wait(1).to({y:824.4},0).wait(1).to({y:828.8},0).wait(1).to({y:832.7},0).wait(1).to({y:836.3},0).wait(1).to({y:839.6},0).wait(1).to({y:842.6},0).wait(1).to({y:845.3},0).wait(1).to({y:847.8},0).wait(1).to({y:850},0).wait(1).to({y:852},0).wait(1).to({y:853.7},0).wait(1).to({y:855.3},0).wait(1).to({y:856.7},0).wait(1).to({y:857.9},0).wait(1).to({y:859},0).wait(1).to({y:859.9},0).wait(1).to({y:860.6},0).wait(1).to({y:861.3},0).wait(1).to({y:861.8},0).wait(1).to({y:862.2},0).wait(1).to({y:862.4},0).wait(1).to({y:862.6},0).wait(1).to({y:862.7},0).wait(1).to({regY:262.3,y:864.8},0).wait(56));

	// mar_cielo
	this.instance_5 = new lib.fondo_mar_cielo();
	this.instance_5.parent = this;
	this.instance_5.setTransform(150,650,1,1,0,0,0,150,650);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(82).to({_off:false},0).wait(56));

	// mar_cielo
	this.instance_6 = new lib.fondo_mar_cielo();
	this.instance_6.parent = this;
	this.instance_6.setTransform(150,-50,1,1,0,0,0,150,650);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(38).to({y:134},0).wait(1).to({y:209.3},0).wait(1).to({y:265.6},0).wait(1).to({y:311.6},0).wait(1).to({y:350.7},0).wait(1).to({y:384.6},0).wait(1).to({y:414.3},0).wait(1).to({y:440.5},0).wait(1).to({y:463.7},0).wait(1).to({y:484.1},0).wait(1).to({y:502},0).wait(1).to({y:517.5},0).wait(1).to({y:531.2},0).wait(1).to({y:543.3},0).wait(1).to({y:554.1},0).wait(1).to({y:563.8},0).wait(1).to({y:572.6},0).wait(1).to({y:580.6},0).wait(1).to({y:587.8},0).wait(1).to({y:594.4},0).wait(1).to({y:600.4},0).wait(1).to({y:605.9},0).wait(1).to({y:610.9},0).wait(1).to({y:615.4},0).wait(1).to({y:619.6},0).wait(1).to({y:623.4},0).wait(1).to({y:626.8},0).wait(1).to({y:629.9},0).wait(1).to({y:632.8},0).wait(1).to({y:635.3},0).wait(1).to({y:637.6},0).wait(1).to({y:639.7},0).wait(1).to({y:641.5},0).wait(1).to({y:643.1},0).wait(1).to({y:644.5},0).wait(1).to({y:645.7},0).wait(1).to({y:646.7},0).wait(1).to({y:647.6},0).wait(1).to({y:648.3},0).wait(1).to({y:648.9},0).wait(1).to({y:649.4},0).wait(1).to({y:649.7},0).wait(1).to({y:649.9},0).wait(1).to({y:650},0).wait(1).to({_off:true},1).wait(55));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.8,-400,889,1516.7);
// library properties:
lib.properties = {
	id: 'AD200FE5358D3144BE849FF116F0782D',
	width: 300,
	height: 600,
	fps: 24,
	color: "#003980",
	opacity: 1.00,
	manifest: [
		{src:"images/boca.png", id:"boca"},
		{src:"images/bubble_grande_01.png", id:"bubble_grande_01"},
		{src:"images/fondo_cielo_mar.jpg", id:"fondo_cielo_mar"},
		{src:"images/morena_final.png", id:"morena_final"}
	],
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
an.compositions['AD200FE5358D3144BE849FF116F0782D'] = {
	getStage: function() { return exportRoot.getStage(); },
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;