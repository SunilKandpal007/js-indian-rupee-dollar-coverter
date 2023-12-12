function convertUsd(){
	
    let inputAmt = parseFloat(document.getElementById('rsValue').value);

    if(isNaN(inputAmt)){
        document.getElementById('rsAmount').style.color = 'Navy';
        document.getElementById('rsAmount').innerHTML = `Please enter amount first.`;
    }
    else{
	var netAmt = inputAmt * 0.0119860454;
	
        document.getElementById('rsAmount').style.color = 'Green';
        document.getElementById('rsAmount').innerHTML = `Amount <u>${inputAmt}</u> &#8377; = ${netAmt.toFixed(2)} US &#36;`;
    }
    document.getElementById('rsAmount').value = "";
}