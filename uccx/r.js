setTimeout(() => {
	try{
		let t=document.body.querySelector(".cuesLoginVersionInfo > table:nth-child(3)"); 
		t.remove();
	}
	catch {
		setTimeout(() => {
		t=document.body.querySelector(".cuesLoginVersionInfo > table:nth-child(3)"); 
		t.remove();
		}, 4000)
	}
}, 2000)
