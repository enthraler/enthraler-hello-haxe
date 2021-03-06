// Generated by Haxe 3.4.0
(function ($global) { "use strict";
var enthraler_HaxeTemplate = function() { };
enthraler_HaxeTemplate.__name__ = true;
var Hello = function(environment) {
	this.header = js_jquery_JQuery("<h1>").appendTo(environment.container);
	this.environment = environment;
};
Hello.__name__ = true;
Hello.__interfaces__ = [enthraler_HaxeTemplate];
Hello.prototype = {
	render: function(props) {
		this.header.text("Hello " + props.name + ", I am rendered using Haxe!");
		this.environment.requestHeightChange();
	}
};
Math.__name__ = true;
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
var enthraler_Environment = function() { };
enthraler_Environment.__name__ = true;
enthraler_Environment.prototype = {
	requestHeightChange: function(requestedHeight) {
		if(window.parent == null) {
			return;
		}
		if(requestedHeight == null) {
			requestedHeight = window.document.documentElement.scrollHeight + 1;
		}
		window.parent.postMessage(JSON.stringify({ src : "" + Std.string(window.location), context : "iframe.resize", height : requestedHeight}),"*");
	}
};
var js_Boot = function() { };
js_Boot.__name__ = true;
js_Boot.__string_rec = function(o,s) {
	if(o == null) {
		return "null";
	}
	if(s.length >= 5) {
		return "<...>";
	}
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) {
		t = "object";
	}
	switch(t) {
	case "function":
		return "<function>";
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) {
					return o[0];
				}
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) {
						str += "," + js_Boot.__string_rec(o[i],s);
					} else {
						str += js_Boot.__string_rec(o[i],s);
					}
				}
				return str + ")";
			}
			var l = o.length;
			var i1;
			var str1 = "[";
			s += "\t";
			var _g11 = 0;
			var _g2 = l;
			while(_g11 < _g2) {
				var i2 = _g11++;
				str1 += (i2 > 0 ? "," : "") + js_Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				return s2;
			}
		}
		var k = null;
		var str2 = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str2.length != 2) {
			str2 += ", \n";
		}
		str2 += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str2 += "\n" + s + "}";
		return str2;
	case "string":
		return o;
	default:
		return String(o);
	}
};
$global.define(["jquery","css!hello"],function(js_jquery_JQuery,_) {
	$global.js_jquery_JQuery = js_jquery_JQuery;
	return Hello;
});
String.__name__ = true;
Array.__name__ = true;
})(typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);
