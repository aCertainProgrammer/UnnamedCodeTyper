import defaultData from "./default_data";

const textBox = document.querySelector("#code-typer");
const text = defaultData;

let lineCounter = 0;
for (let i = 0; i < text.length - 1; ) {
	const p = document.createElement("p");
	if (lineCounter < 10) p.innerHTML += "&nbsp&nbsp&nbsp&nbsp";
	else if (lineCounter < 100) p.innerHTML += "&nbsp&nbsp";
	p.innerHTML += lineCounter + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";
	lineCounter++;
	while (text[i] != "\n") {
		if (text[i] == "\t")
			p.innerHTML += "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";
		else p.innerHTML += text[i];
		i++;
	}
	i++;
	textBox.appendChild(p);
}
