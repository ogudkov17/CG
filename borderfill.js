function borderFill(ctx, poly) {
	var bpoints = new Array();
	maxy = 0; miny = h;
	for (var i=0; i<poly.length; i++) {
		if (Math.round(poly[2*i+1])>maxy) maxy = Math.round(poly[2*i+1]);
		if (Math.round(poly[2*i+1])<miny) miny = Math.round(poly[2*i+1]);
	}
	console.log("maxmin "+maxy+" "+miny);
	var idata = ctx.getImageData(0,0,w,h);
			
	var x0 = poly[2*n-2], y0 = poly[2*n-1];
	var x1 = poly[0], y1 = poly[1];
	console.log(x0+","+y0+"; "+x1+","+y1);
	var k = (y1-y0)/(x1-x0);
	var b = y0 - k*x0;
	var up = y0, down = y1;
	if (y1<y0) { up = y1; down = y0; }
	var sign = (y1-y0)/Math.abs(y1-y0);
	for (var j=Math.round(up); j<=Math.round(down); j+=1) {
	//for (var j=Math.round(y0); sign*j<=sign*y1; j+=sign) {
		if (! Array.isArray(bpoints[j]) ) {
			bpoints[j] = new Array();
		}
		bpoints[j].push( Math.round((j-b)/k) );
			console.log(bpoints[j]);
	}
	var min = Math.min(y0, y1);
	if (! Array.isArray(bpoints[min]) ) {
		bpoints[min] = new Array();
	}
	bpoints[min].push( Math.round( (min-b)/k ) );

	for (var i = 1; i<n; i++) {
		x0 = poly[2*i], y0 = poly[2*i+1];
		x1 = poly[2*i-2], y1 = poly[2*i-1];
		k = (y1-y0)/(x1-x0);
		b = y0 - k*x0;
		sign = (y1-y0)/Math.abs(y1-y0);
		//for (var j=Math.round(y0); sign*j<=sign*(y1); j+=sign) {
		up = y0; down = y1;
		if (y1<y0) { up = y1; down = y0; }
		for (var j=Math.round(up); j<=Math.round(down); j+=1) {
			if (! Array.isArray(bpoints[j]) ) {
				bpoints[j] = new Array();
			}
			bpoints[j].push( Math.round((j-b)/k) );
			console.log(bpoints[j]);
		}
		min = Math.min(y0, y1);
		if (! Array.isArray(bpoints[min]) ) {
			bpoints[min] = new Array();
		}
		bpoints[min].push( Math.round( (min-b)/k ) );
	}

	console.log(bpoints)
	console.log("maxmin1 "+maxy+" "+miny);
	for (var ti=miny; ti<=maxy; ti++) {
		console.log("final "+bpoints[ti])
		if (! Array.isArray(bpoints[ti]) ) {
			continue;
		}
		var xarray = bpoints[ti].sort(function(a, b){return a-b;});
		var size = xarray.length;
		for (var k=0; k<size/2; k++) {
			console.log("line");
			for (var tj=xarray[k*2]+1; tj<xarray[k*2+1]; tj++) {
				idata.data[(ti*w+tj)*4] = 255;
				idata.data[(ti*w+tj)*4+3] = 255;
			}
		}
	}
	ctx.putImageData(idata, 0, 0);
}

function borderFillColor(ctx, poly, color) {
	console.log("borderFillColor:"+ poly);
	var bpoints = new Array();
	maxy = 0; miny = h;
	var n = poly.length/2;
	console.log("n="+n);
	for (var i=0; i<poly.length; i++) {
		if (Math.round(poly[2*i+1])>maxy) maxy = Math.round(poly[2*i+1]);
		if (Math.round(poly[2*i+1])<miny) miny = Math.round(poly[2*i+1]);
	}
	console.log("maxmin "+maxy+" "+miny);
	var idata = ctx.getImageData(0,0,w,h);
			
	var x0 = poly[2*n-2], y0 = poly[2*n-1];
	var x1 = poly[0], y1 = poly[1];
	console.log(x0+","+y0+"; "+x1+","+y1);
	var k = (y1-y0)/(x1-x0);
	var b = y0 - k*x0;
	var up = y0, down = y1;
	if (y1<y0) { up = y1; down = y0; }
	var sign = (y1-y0)/Math.abs(y1-y0);
	for (var j=Math.round(up); j<=Math.round(down); j+=1) {
	//for (var j=Math.round(y0); sign*j<=sign*y1; j+=sign) {
		if (! Array.isArray(bpoints[j]) ) {
			bpoints[j] = new Array();
		}
		bpoints[j].push( Math.round((j-b)/k) );
			console.log(bpoints[j]);
	}
	var min = Math.min(y0, y1);
	if (! Array.isArray(bpoints[min]) ) {
		bpoints[min] = new Array();
	}
	bpoints[min].push( Math.round( (min-b)/k ) );

	for (var i = 1; i<n; i++) {
		x0 = poly[2*i], y0 = poly[2*i+1];
		x1 = poly[2*i-2], y1 = poly[2*i-1];
		k = (y1-y0)/(x1-x0);
		b = y0 - k*x0;
		sign = (y1-y0)/Math.abs(y1-y0);
		//for (var j=Math.round(y0); sign*j<=sign*(y1); j+=sign) {
		up = y0; down = y1;
		if (y1<y0) { up = y1; down = y0; }
		for (var j=Math.round(up); j<=Math.round(down); j+=1) {
			if (! Array.isArray(bpoints[j]) ) {
				bpoints[j] = new Array();
			}
			bpoints[j].push( Math.round((j-b)/k) );
			console.log(bpoints[j]);
		}
		min = Math.min(y0, y1);
		if (! Array.isArray(bpoints[min]) ) {
			bpoints[min] = new Array();
		}
		bpoints[min].push( Math.round( (min-b)/k ) );
	}

	console.log(bpoints)
	console.log("maxmin1 "+maxy+" "+miny);
	for (var ti=miny; ti<=maxy; ti++) {
		console.log("final "+bpoints[ti])
		if (! Array.isArray(bpoints[ti]) ) {
			continue;
		}
		var xarray = bpoints[ti].sort(function(a, b){return a-b;});
		var size = xarray.length;
		for (var k=0; k<size/2; k++) {
			console.log("line");
			for (var tj=xarray[k*2]+1; tj<=xarray[k*2+1]; tj++) {
				idata.data[(ti*w+tj)*4] = (color&0xff0000)>>16;
				idata.data[(ti*w+tj)*4+1] = (color&0x00ff00)>>8;
				idata.data[(ti*w+tj)*4+2] = color&0x0000ff;
				idata.data[(ti*w+tj)*4+3] = 255;
			}
		}
	}
	console.log(color&0x0000ff);
	ctx.putImageData(idata, 0, 0);
}
