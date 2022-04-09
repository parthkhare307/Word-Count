const textField = document.getElementById("text");
const wordCount = document.getElementById("wordCount");
const clearBtn = document.getElementById("clearBtn");
function countWord(){
	let text=textField.value;
	text=text.trim();
	const words=text.split(" ");
	if(text.length == 0)
	{
		wordCount.innerText = 0;
	}
	else
	{
		wordCount.innerText = words.length;
	}
}

clearBtn.onclick = ()=>{
	textField.value="";
	countWord();
}