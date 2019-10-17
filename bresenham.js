	function Line(ctx, x0, y0, x1, y1) {
		var dy = Math.abs(y1-y0);
		var dx = Math.abs(x1-x0);
		var dmax = Math.max(dx, dy);
		var dmin = Math.min(dx, dy);
		var xdir = 1;
		if (x1<x0) xdir = -1;	
		var ydir = 1;
		if (y1<y0) ydir = -1;
		var eps = 0;
		var s = 1;
		var k=2*dmin;
		if (dy<=dx) {
			var y = y0;
			for (var x=x0; x*xdir<=x1*xdir; x+=xdir) {
				ctx.fillRect(x*s, y*s, 1*s, 1*s);
				eps = eps+k;
				if (eps>dmax) {
					y+=ydir;
					eps = eps - 2*dmax;
				}	
			} 
		} else {
			var x = x0;
			for (var y=y0; y*ydir<=y1*ydir; y+=ydir) {
				ctx.fillRect(x*s, y*s, 1*s, 1*s);
				eps = eps+k;
				if (eps>dmax) {
					x+=xdir;
					eps = eps - 2*dmax;
				}	
			} 
		}		
	}
