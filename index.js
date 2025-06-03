(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[570,241,390,107],[312,350,399,72],[810,138,48,48],[312,424,475,45],[810,0,180,136],[570,0,238,239],[0,0,310,432],[312,0,256,257]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
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



(lib.CachedBmp_19 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_18 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.car1 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.kama_weel = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.light = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.quad_sph = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();
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


(lib.wheel = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.kama_weel();
	this.instance.setTransform(-119,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.wheel, new cjs.Rectangle(-119,-120,238,239), null);


(lib.tx = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_19();
	this.instance.setTransform(0,0,0.4628,0.4628);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tx, new cjs.Rectangle(0,0,180.5,49.5), null);


(lib.sph = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.quad_sph();
	this.instance.setTransform(-128,-129);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sph, new cjs.Rectangle(-128,-129,256,257), null);


(lib.logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_18();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(0,0,199.5,36), null);


(lib.ligal = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_17();
	this.instance.setTransform(209.25,0.25,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_16();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ligal, new cjs.Rectangle(0,0,237.5,24.3), null);


(lib.grad = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.light();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.grad, new cjs.Rectangle(0,0,310,432), null);


(lib.details_t = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#323954").s().p("AjVA1IAFgXIhLAAIgFAXIgZAAIAKgsIAQAAQAFgIAEgLIAQgoIBPAAIgOA7IATAAIgKAsgAj7gIQgEAJgFAIIAlAAIAJgmIgeAAgAgkAZQgMgHAAgQQAAgGACgHQADgQAHgJQAIgJAMgEQANgDAVAAQAaAAANAHQAMAHAAAQQAAAGgCAIQgEAPgHAJQgHAJgMAEQgNADgWAAQgZAAgNgHgAgVAIIA2AAIAJgkIg2AAgAmcAZQgNgHAAgQQAAgGACgHQAEgQAHgJQAHgJANgEQANgDAVAAQAbAAAMAHQANAHAAAQQAAAGgCAIQgEAPgHAJQgHAJgNAEQgNADgWAAQgaAAgMgHgAmNAIIA2AAIAJgkIg3AAgAG4AeIAThQIBeAAIgFAVIhDAAIgCALIAwAAIgEARIgwAAIgDAKIBFAAIgFAVgAFEAeIAThQIBeAAIgFAVIhDAAIgCALIAwAAIgEARIgwAAIgDAKIBFAAIgFAVgAEPAeIAHgeIgvAAIgHAeIgcAAIAThQIAcAAIgHAcIAvAAIAHgcIAbAAIgTBQgABOAeIAThQIBdAAIgFAVIhCAAIgCAJIAkAAQAQAAAIAGQAHAFAAAJIAAAGQgDAMgJAGQgJAGgSAAgABuAJIAtAAIADgMIgtAAgAioAeIAThQIBAAAQAQAAAHAFQAIAGAAALIgBAJQgDAOgKAGQgJAGgSAAIgoAAIgGAXgAiCgNIAsAAIAEgQIgtAAgAngAeIAOg6IgsAAIgOA6IgcAAIAThQIBkAAIgTBQg");
	this.shape.setTransform(55.275,5.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.details_t, new cjs.Rectangle(0,0,110.6,10.7), null);


(lib.car = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.car1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.car, new cjs.Rectangle(0,0,180,136), null);


(lib.blue_and_white = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhYCPIgwAAQgzAAAAgyIAAi5QAAgyAzAAIEUAAQAwABAAAxIAAC5QAAAygzAAg");
	this.shape.setTransform(18.75,14.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.blue_and_white, new cjs.Rectangle(0,0,37.5,28.7), null);


(lib.bg_blue = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00AEEA").s().p("EgXbAnEMAAAhOHMAu3AAAMAAABOHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg_blue, new cjs.Rectangle(-150,-250,300,500), null);


(lib.arr = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#323954").s().p("AgiAlIAAgUIAogRIgogRIAAgTIAAAAIBFAfIAAALIhFAfg");
	this.shape.setTransform(3.525,3.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.arr, new cjs.Rectangle(0,0,7.1,7.5), null);


(lib.flash = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.grad();
	this.instance.setTransform(116.1,80.65,0.375,0.3752,0,0,0,309.6,431);
	this.instance.alpha = 0.6289;
	this.instance.compositeOperation = "lighter";

	this.instance_1 = new lib.grad();
	this.instance_1.setTransform(199.65,138.7,0.6451,0.6454,0,0,0,309.5,430.9);
	this.instance_1.alpha = 0.6289;
	this.instance_1.compositeOperation = "lighter";

	this.instance_2 = new lib.grad();
	this.instance_2.setTransform(150.9,104.9,0.4876,0.4877,0,0,0,309.5,431.1);
	this.instance_2.alpha = 0.6289;
	this.instance_2.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.flash, new cjs.Rectangle(0,-139.4,200,278.8), null);


(lib.but_arr = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.s2 = new lib.arr();
	this.s2.name = "s2";
	this.s2.setTransform(17.8,14.3,1,1,0,0,0,3.5,3.7);

	this.s1 = new lib.arr();
	this.s1.name = "s1";
	this.s1.setTransform(26.45,14.3,1,1,0,0,0,3.5,3.7);

	this.s3 = new lib.arr();
	this.s3.name = "s3";
	this.s3.setTransform(9.15,14.3,1,1,0,0,0,3.5,3.7);

	this.instance = new lib.blue_and_white();
	this.instance.setTransform(37.5,14.3,1,1,0,0,0,37.5,14.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.s3},{t:this.s1},{t:this.s2}]}).wait(1));

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00AEEA").s().p("As6C+IAAl7IZ1AAIAAF7g");
	this.shape.setTransform(87.95,14.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.but_arr, new cjs.Rectangle(0,-4.2,170.7,38), null);


(lib.but = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_3
	this.but_arr = new lib.but_arr();
	this.but_arr.name = "but_arr";
	this.but_arr.setTransform(7.55,0.1,1,1,0,0,0,91.8,14.4);

	this.timeline.addTween(cjs.Tween.get(this.but_arr).wait(1));

	// Слой_2
	this.instance = new lib.details_t();
	this.instance.setTransform(-14.5,1.15,1,1,0,0,0,55.2,5.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ArvCPQgyAAAAgyIAAi5QAAgyAyAAIXfAAQAyAAAAAyIAAC5QAAAygyAAg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.but, new cjs.Rectangle(-84.2,-18.5,170.60000000000002,38), null);


// stage content:
(lib.kama_300x500_flame_mt = function(mode,startPosition,loop,reversed) {
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
		var root = this;
		
		var tl = gsap.timeline({repeat:-1});
			StagS1 = [root.but.but_arr.s3, root.but.but_arr.s2, root.but.but_arr.s1]
		;
		
		
		tl
			.to(root.bg_blue, 0.3, {alpha:0.0, ease:"Power2.easeOut"}, "0")
			.from(root.s1, 0.3, {alpha:0.0, ease:"Power3.easeOut"}, "0")
			.from(root.s1, 1.8, {x:"-=500", rotation:-360, ease:"Power3.easeOut"}, "0")
			.from(root.s2, 0.3, {alpha:0.0, ease:"Power3.easeOut"}, "0")
			.from(root.s2, 1.8, {x:"+=500", rotation:360, ease:"Power3.easeOut"}, "0")
		
			.from(root.tx, 1, {alpha:0.0, ease:"Power3.easeOut"}, "1")
			.from(root.logo, 1, {alpha:0.0, ease:"Power3.easeOut"}, "1")
			.from(root.ligal, 1, {alpha:0.0, ease:"Power3.easeOut"}, "1")
		
			.from(root.car, 1, {alpha:0.0, x:"+=50", ease:"Power3.easeOut"}, "0.9")
			.from(root.fl_l, 1, {alpha:0.0, x:"-=10", ease:"Bounce.easeOut"}, "0.9")
			.from(root.fl_r, 1, {alpha:0.0, x:"+=10", ease:"Bounce.easeOut"}, "0.9")
		
			.staggerFrom(StagS1, 0.2, {alpha:0,ease:"Power3.easeOut"}, 0.2, "1.1")
			.staggerFrom(StagS1, 0.7, {x:"-=35", ease:"Power3.easeOut"}, 0.2, "1.1")
			.from(root.but, 0.3, {scaleX:0.0, scaleY:1, ease:"Power3.easeOut"}, "0.9")
			.to(root.but.but_arr, 1, {x:"+=130", ease:"Power3.easeOut"}, "1.2")
			.staggerTo(StagS1, 0.3, {scaleX:1.5, scaleY:1.5, ease:"none"}, 0.2, "2.1")
			.staggerTo(StagS1, 0.3, {scaleX:1, scaleY:1, ease:"none"}, 0.2, "2.4")
		
			.staggerTo(StagS1, 0.3, {scaleX:1.5, scaleY:1.5, ease:"none"}, 0.2, "4.1")
			.staggerTo(StagS1, 0.3, {scaleX:1, scaleY:1, ease:"none"}, 0.2, "4.4")
			.from(root.bg_blue2, 0.3, {alpha:0.0, ease:"Power2.easeOut"}, "8")
		
		;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// bg_blue___копия
	this.bg_blue2 = new lib.bg_blue();
	this.bg_blue2.name = "bg_blue2";
	this.bg_blue2.setTransform(150,250,0.9999,1);

	this.timeline.addTween(cjs.Tween.get(this.bg_blue2).wait(1));

	// bg_blue
	this.bg_blue = new lib.bg_blue();
	this.bg_blue.name = "bg_blue";
	this.bg_blue.setTransform(150,250,0.9999,1);

	this.timeline.addTween(cjs.Tween.get(this.bg_blue).wait(1));

	// ligal
	this.ligal = new lib.ligal();
	this.ligal.name = "ligal";
	this.ligal.setTransform(163.4,475.75,0.9999,1,0,0,0,129.6,12.3);

	this.timeline.addTween(cjs.Tween.get(this.ligal).wait(1));

	// Слой_13
	this.car = new lib.car();
	this.car.name = "car";
	this.car.setTransform(150,192.2,1,1,0,0,0,90,68);

	this.timeline.addTween(cjs.Tween.get(this.car).wait(1));

	// logo
	this.logo = new lib.logo();
	this.logo.name = "logo";
	this.logo.setTransform(150.05,45.05,0.8275,0.8093,0,0,0,99.9,18.1);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// tx
	this.tx = new lib.tx();
	this.tx.name = "tx";
	this.tx.setTransform(150.1,110.4,1.0805,1.0796,0,0,0,90.3,24.8);

	this.timeline.addTween(cjs.Tween.get(this.tx).wait(1));

	// fl_l
	this.fl_l = new lib.flash();
	this.fl_l.name = "fl_l";
	this.fl_l.setTransform(-171.45,606.15,2.0549,1.2876,0,0,180,154.2,215.1);

	this.timeline.addTween(cjs.Tween.get(this.fl_l).wait(1));

	// fl_r
	this.fl_r = new lib.flash();
	this.fl_r.name = "fl_r";
	this.fl_r.setTransform(463.15,606.15,2.0549,1.2876,0,0,0,154.5,215.1);

	this.timeline.addTween(cjs.Tween.get(this.fl_r).wait(1));

	// s2
	this.s2 = new lib.wheel();
	this.s2.name = "s2";
	this.s2.setTransform(260.65,333.75,1.0186,1.0186,0,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.s2).wait(1));

	// s1
	this.s1 = new lib.sph();
	this.s1.name = "s1";
	this.s1.setTransform(35.35,330.15,0.9698,0.9697,0,0,0,0,0.2);

	this.timeline.addTween(cjs.Tween.get(this.s1).wait(1));

	// but
	this.but = new lib.but();
	this.but.name = "but";
	this.but.setTransform(149.2,445.4,0.8374,0.8377,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.but).wait(1));

	// bg_blue___копия
	this.instance = new lib.bg_blue();
	this.instance.setTransform(150,250,0.9999,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// stageBackground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("EgY/gonMAx/AAAMAAABRPMgx/AAAg");
	this.shape.setTransform(150,250);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00AEEA").s().p("EgY/AooMAAAhRPMAx/AAAMAAABRPg");
	this.shape_1.setTransform(150,250);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-115.5,239,672.1,272);
// library properties:
lib.properties = {
	id: '6EC6ECD38CECE54190AADF7A37F9D0D9',
	width: 300,
	height: 500,
	fps: 30,
	color: "#00AEEA",
	opacity: 1.00,
	manifest: [
		{src:"index_atlas_1.png", id:"index_atlas_1"}
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
an.compositions['6EC6ECD38CECE54190AADF7A37F9D0D9'] = {
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
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;