let p=0;
let pmax=0;
let pstep=0;
let direction;
let running=false;
let mint;
let xstept;
let ystept;

function startanimation() {
	if(!running){
		p=document.getElementById('p0_id').value;
		pmax=document.getElementById('pmax_id').value;
		pstep=document.getElementById('pstep_id').value;
        xmint=document.getElementById('xmin_id').value;
        ymint=document.getElementById('ymin_id').value;
        xstept=(document.getElementById('xmax_id').value-xmint)/10;
        ystept=(document.getElementById('ymax_id').value-ymint)/10;



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
	let xprimeString = document.getElementById('xprime_custom_id').value;
	let yprimeString = document.getElementById('yprime_custom_id').value;
	xprimeString = xprimeString.replaceAll("p", p);
	yprimeString = yprimeString.replaceAll("p", p);
	document.getElementById('xprime_id').value = xprimeString;
	document.getElementById('yprime_id').value = yprimeString;

    draw();

	document.getElementById("yO_id").value=0;
	for(let i=0;i<=10;i++){
		document.getElementById("xO_id").value=parseFloat(xmint)+parseFloat(xstept*i);
		traceFromNumbers();
	}
	document.getElementById("xO_id").value=0;
	for(let i=0;i<=10;i++){
		if(i!=0){
			document.getElementById("yO_id").value=parseFloat(ymint)+parseFloat(ystept*i);
			traceFromNumbers();
		}
	}

	p=parseFloat(p)+parseFloat(pstep)*direction;	
	p=p.toFixed(8);

	if(p*direction <= parseFloat(pmax)*direction) {
		requestAnimationFrame(animation);
	}else{
		running=false;
	}
}