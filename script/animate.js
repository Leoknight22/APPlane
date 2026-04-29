let p;
let pmax=0;
let pstep=0;
let direction;
let running=false;
let mint;
let xstept;
let ystept;

function render(){
	if(p!=parseFloat(pmax)){
		p=document.getElementById('p0_id').value;
	}
	draw();
}

function startanimation() {
	if(!running){
		p=document.getElementById('p0_id').value;
		pmax=document.getElementById('pmax_id').value;
		pstep=document.getElementById('pstep_id').value;
        xmint=document.getElementById('xmin_id').value;
        ymint=document.getElementById('ymin_id').value;
		xmaxt=document.getElementById('xmax_id').value;
		ymaxt=document.getElementById('ymax_id').value;
		xcenter=(parseFloat(xmaxt)+parseFloat(xmint))/2.0;
		ycenter=(parseFloat(ymaxt)+parseFloat(ymint))/2.0;
        xstept=(xmaxt-xmint)/10;
        ystept=(ymaxt-ymint)/10;



		if(document.getElementById("reverseAnimation").checked) {
			direction = -1;
		}else {
			direction = 1;
		}

		if(p*direction > pmax*direction) {
			alert("Please make sure that the initial value of p is below (or higher if reverse) the maximum value of p.");
			return;
		}else {
			requestAnimationFrame(animation);
			running=true;
		}
	}
		
}

function animation() {
    draw();

	document.getElementById("yO_id").value=ycenter;
	for(let i=0;i<=10;i++){
		document.getElementById("xO_id").value=parseFloat(xmint)+parseFloat(xstept*i);
		traceFromNumbers();
	}
	document.getElementById("xO_id").value=xcenter;
	for(let i=0;i<=10;i++){
		if(i!=0){
			document.getElementById("yO_id").value=parseFloat(ymint)+parseFloat(ystept*i);
			traceFromNumbers();
		}
	}
	document.getElementById("xO_id").value=parseFloat(xmint)+parseFloat(xstept);
	document.getElementById("yO_id").value=parseFloat(ymint)+parseFloat(ystept);
	traceFromNumbers();
	document.getElementById("xO_id").value=parseFloat(xmint)+parseFloat(xstept)*1.5;
	document.getElementById("yO_id").value=parseFloat(ymint)+parseFloat(ystept)/2;
	traceFromNumbers();
	document.getElementById("xO_id").value=parseFloat(xmint)+parseFloat(xstept)/2;
	document.getElementById("yO_id").value=parseFloat(ymint)+parseFloat(ystept)*1.5;
	traceFromNumbers();

	if(p*direction < parseFloat(pmax)*direction) {
		p=parseFloat(p)+parseFloat(pstep)*direction;	
		p=p.toFixed(8);
		requestAnimationFrame(animation);
	}else{
		running=false;
	}
}
