function undisable(){document.getElementById("qlmz").removeAttribute("disabled")}setInterval(()=>{parseInt(localStorage.getItem("c"))<new Date().getDate()&&(console.log("day is over"),undisable())},500);function updateshlok(){document.getElementById("changephrase").innerHTML="Finished",document.getElementById("removequestion").innerHTML="",document.getElementById("qlmz").disabled="true";const a=new Date;var b=a.getDate();localStorage.setItem("c",b+""),localStorage.setItem("timesfinished",parseInt(localStorage.getItem("timesfinished"))+1+""),document.getElementById("current").innerHTML=parseInt(document.getElementById("current").innerHTML)+1+"",console.log("Finished shlokas for today");var c=["0","47","72","43","42","29","47","30","28","34","42","55","20","35","27","20","24","28","78"],d=[localStorage.getItem("shlok").split(".")[0],localStorage.getItem("shlok").split(".")[1]];document.getElementById("shlokasdone").value=parseInt(document.getElementById("shlokasdone").value)+parseInt(localStorage.getItem("journey"))+"",localStorage.getItem("shlok").split(".")[1]==c[localStorage.getItem("shlok").split(".")[0]]?localStorage.setItem("shlok",parseInt(localStorage.getItem("shlok").split(".")[0])+1+""+".1"):parseInt(localStorage.getItem("shlok").split(".")[1])+parseInt(localStorage.getItem("journey"))>parseInt(c[localStorage.getItem("shlok").split(".")[0]])?localStorage.setItem("shlok",parseInt(localStorage.getItem("shlok").split(".")[0])+1+""+"."+(parseInt(localStorage.getItem("shlok").split(".")[1])+parseInt(localStorage.getItem("journey"))-parseInt(c[localStorage.getItem("shlok").split(".")[0]])+"")):localStorage.setItem("shlok",localStorage.getItem("shlok").split(".")[0]+"."+(parseInt(localStorage.getItem("shlok").split(".")[1])+parseInt(localStorage.getItem("journey"))+"")),"19"==localStorage.getItem("shlok").split(".")[0]&&(document.getElementById("donetoday").innerHTML="You are done with the full journey. Congrats, you read the full Bhagavad Gita! Next read the Gita Mahatmyam.",document.getElementById("firstassignedbutton").disabled="true",document.getElementById("qwerty").style="display: block;"),localStorage.setItem("progress",document.getElementById("shlokasdone").value)}function gotoshlok(){document.getElementById("dashboard").style="display: none;",document.getElementById("chapter").value=localStorage.getItem("shlok").split(".")[0],getchapter(),document.getElementById("shloka").value=localStorage.getItem("shlok").split(".")[1],getshloka(),document.getElementById("read").style="display: block;"}function startjourney(){document.getElementById("startjourneybutton").style="display: none;",document.getElementById("journeyinprogress").style="display: block;",document.getElementById("shlokasdone").value="0",localStorage.setItem("timesfinished","0"),localStorage.setItem("journeystarted","true")}function startjourney28(){startjourney(),localStorage.setItem("journey","26"),localStorage.setItem("journey1","28"),localStorage.setItem("shlok","1.1"),document.getElementById("end").innerHTML="28",document.getElementById("shlokasfortoday").innerHTML="26"}function startjourney366(){startjourney(),localStorage.setItem("journey","2"),localStorage.setItem("journey1","365"),localStorage.setItem("shlok","1.1"),document.getElementById("end").innerHTML="365",document.getElementById("shlokasfortoday").innerHTML="2"}function restartjourney(){Swal.fire({title:"Erase journey?",text:"You won't be able to revert this",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:`<span style="font-family: 'Roboto';">Erase</span>`,cancelButtonText:`<span style="font-family: 'Roboto';">Cancel</span>`}).then(a=>{a.value&&(localStorage.clear(),window.location.reload())})}if("true"==localStorage.getItem("journeystarted")){console.log("journey has started"),document.getElementById("startjourneybutton").style="display: none;",document.getElementById("journeyinprogress").style="display: block;";var times=localStorage.getItem("timesfinished");localStorage.setItem("shlok","1.1"),localStorage.setItem("timesfinished","0");for(var i=0;i<parseInt(times);i++)updateshlok();document.getElementById("end").innerHTML=localStorage.getItem("journey1")}else console.log("no journey\ndetected by using journeystarted in storage");var showbackpage="";function fullaudio(){document.getElementById("invisible-audio").innerHTML=`
	<audio controls>
	<source src="https://bhagavdgita.github.io/audio/full.${document.getElementById("chapter").value}.m4a" type="audio/x-m4a">
  <code> Your phone doesn't support audio tags</code>
</audio>
    `}function readbhagavadgita(){showbackpage="options",document.getElementById("options").style="display: none;",document.getElementById("read").style="display: block;"}var e=document.getElementById("chapter");function onChange(){var a=e.value,b=e.options[e.selectedIndex].text;console.log(a),getchapter()}e.onchange=onChange;var chapter="";function getchapter(){if(extras=["dhyana","aarati","saaram","maha"],extras.includes(document.getElementById("chapter").value))console.log("viewing one of the following:"),console.log(extras),showbackpage="nooptions",document.getElementById("chapterstest").style="display: none;",document.getElementById("extrasshow").style="display: block;",document.getElementById("chapteradd3").innerHTML=function(a){return a.options[a.selectedIndex].text}(document.getElementById("chapter")),fetch("https://bhagavdgita.github.io/text/"+document.getElementById("chapter").value+".txt").then(a=>a.text()).then(a=>{document.getElementById("theshlokas1").innerHTML=a.replaceAll("\n","<br>"),document.getElementById("theaudio3").innerHTML=`
	<audio controls>
	<source src="https://bhagavdgita.github.io/audio/full.${document.getElementById("chapter").value}.m4a" type="audio/x-m4a">
  <code> Your phone doesn't support audio tags</code>
</audio>
    `});else{var a=document.getElementById("chapter").value,b=["0","47","72","43","42","29","47","30","28","34","42","55","20","35","27","20","24","28","78"];document.getElementById("chapterstest").style="display: block;",document.getElementById("shlokasting").style="display: block;",document.getElementById("shloka").innerHTML=`<option value="" selected disabled hidden>Choose</option>`;for(var c=1;c<parseInt(b[a])+1;c++)createnewoption=document.createElement("option"),createnewoption.innerHTML=c.toString(),createnewoption.value=c.toString(),test=document.getElementById("shloka"),test.appendChild(createnewoption);var d=document.getElementById("shloka");d.onchange=function(){var a=d.value,b=d.options[d.selectedIndex].text;console.log(a),getshloka()}}}function getall(){showbackpage="nooptions";document.getElementById("shloka").value;document.getElementById("shlokasting").style="display: none;",document.getElementById("chapterstest").style="display: none;",document.getElementById("fullchapter").style="display: block;",document.getElementById("chapteradd2").innerHTML=document.getElementById("chapter").value;fetch("https://bhagavad-gita3.p.rapidapi.com/v2/chapters/"+document.getElementById("chapter").value+"/verses/",{method:"GET",headers:{"X-RapidAPI-Key":"72ddb23f61mshd7034341804bcedp12906djsned505dec18e5","X-RapidAPI-Host":"bhagavad-gita3.p.rapidapi.com"}}).then(a=>a.json()).then(a=>{function b(a,b,c){var d=a.split(b);return 1===d.length?a:d.slice(0,-1).join(c)+b+d.slice(-1)}var c=1,d="";a.forEach(a=>{d+=b(a.transliteration,"\n","<br>"),d+=`||${document.getElementById("chapter").value}.${c+""}||<br><br>`,c++}),document.getElementById("theshlokas").innerHTML=d}).catch(a=>console.error(a))}function getshloka(){showbackpage="nooptions";var a=document.getElementById("shloka").value;if("all"==a)getall();else{document.getElementById("shlokasting").style="display: none;",document.getElementById("chapterstest").style="display: none;",document.getElementById("finalshloka").style="display: block;",document.getElementById("chapteradd1").innerHTML=document.getElementById("chapter").value,document.getElementById("shlokadd").innerHTML=a;fetch("https://bhagavad-gita3.p.rapidapi.com/v2/chapters/"+document.getElementById("chapter").value+"/verses/"+a+"/",{method:"GET",headers:{"X-RapidAPI-Key":"72ddb23f61mshd7034341804bcedp12906djsned505dec18e5","X-RapidAPI-Host":"bhagavad-gita3.p.rapidapi.com"}}).then(a=>a.json()).then(b=>{document.getElementById("theshloka").innerHTML=b.transliteration.replaceAll("\n","<br>"),document.getElementById("themeaning").innerHTML="<br><br>"+b.translations[0].description.replaceAll("\n","<br>")+`<br>
<audio controls>
	<source src="https://bhagavdgita.github.io/audio/${document.getElementById("chapter").value}.${a}.m4a" type="audio/x-m4a">
  <code> Your phone doesn't support audio tags</code>
</audio>`}).catch(a=>console.error(a))}}function gotoback(){var a=document.getElementById("shloka").value,b=document.getElementById("chapter").value;document.getElementById("theshloka").innerHTML="Loading... Please wait",document.getElementById("themeaning").innerHTML="",1==a?(document.getElementById("shloka").value=["0","47","72","43","42","29","47","30","28","34","42","55","20","35","27","20","24","28","78"][parseInt(b)-1],document.getElementById("chapter").value=parseInt(b)-1,console.log(document.getElementById("chapter").value),console.log(document.getElementById("shloka").value),getshloka()):(document.getElementById("shloka").value=parseInt(a)-1,getshloka())}function gottofront(){var a=document.getElementById("shloka").value,b=document.getElementById("chapter").value;document.getElementById("theshloka").innerHTML="Loading... Please wait",document.getElementById("themeaning").innerHTML="",a==parseInt(["0","47","72","43","42","29","47","30","28","34","42","55","20","35","27","20","24","28","78"][b])?(document.getElementById("shloka").value=1,document.getElementById("chapter").value=parseInt(b)+1,console.log(document.getElementById("chapter").value),console.log(document.getElementById("shloka").value),getshloka()):(document.getElementById("shloka").value=parseInt(a)+1,getshloka())}function gohome1(){"options"==showbackpage?(document.getElementById("finalshloka").style="display: none;",document.getElementById("shlokasting").style="display: none;",document.getElementById("chapterstest").style="display: block;",document.getElementById("extrasshow").style="display: none;",document.getElementById("fullchapter").style="display: none;",document.getElementById("read").style="display: none;",document.getElementById("options").style="display: block;"):(document.getElementById("finalshloka").style="display: none;",document.getElementById("shlokasting").style="display: none;",document.getElementById("chapterstest").style="display: block;",document.getElementById("extrasshow").style="display: none;",document.getElementById("fullchapter").style="display: none;",document.getElementById("read").style="display: block;",document.getElementById("options").style="display: none;",document.getElementById("chapter").value="",showbackpage="options")}function dashboard(){document.getElementById("options").style="display: none;",document.getElementById("dashboard").style="display: block;",fetch("https://gitaapprandomshlokagen.arjunjakkipally.repl.co").then(a=>a.json()).then(a=>{fetch("https://bhagavad-gita3.p.rapidapi.com/v2/chapters/"+a[0]+"/verses/"+a[1]+"/",{method:"GET",headers:{"X-RapidAPI-Key":"72ddb23f61mshd7034341804bcedp12906djsned505dec18e5","X-RapidAPI-Host":"bhagavad-gita3.p.rapidapi.com"}}).then(a=>a.json()).then(a=>{document.getElementById("verseofday").innerHTML=a.transliteration.replaceAll("\n","<br>"),document.getElementById("meaning").innerHTML="<br><br>"+a.translations[0].description.replaceAll("\n","<br>")}).catch(a=>console.error(a))})}function shareverse(){navigator.share?navigator.share({title:"Verse of the day",text:document.getElementById("verseofday").innerText+document.getElementById("meaning").innerText}).then(()=>{console.log("Thanks for sharing!")}).catch(console.error):alert("Cannot share file - try again on a different device")}text=0,document.querySelectorAll("button").forEach(()=>{mdc.ripple.MDCRipple.attachTo(document.querySelectorAll("button")[text]),text++});function gohome2(){document.getElementById("dashboard").style="display: none;",document.getElementById("options").style="display: block;"}function mainta(){document.getElementById("mainta").style.display="block",document.getElementById("finalshloka").style="display: none;",document.getElementById("shlokasting").style="display: none;",document.getElementById("chapterstest").style="display: none;",document.getElementById("extrasshow").style="display: none;",document.getElementById("fullchapter").style="display: none;",document.getElementById("read").style="display: none;",document.getElementById("options").style="display: none;",document.getElementById("finalshloka").style="display: none;",document.getElementById("shlokasting").style="display: none;",document.getElementById("chapterstest").style="display: none;",document.getElementById("extrasshow").style="display: none;",document.getElementById("fullchapter").style="display: none;",document.getElementById("read").style="display: none;",document.getElementById("options").style="display: none;",document.getElementById("chapter").value=""}function unmainta(){document.getElementById("mainta").style.display="none",document.getElementById("finalshloka").style="display: none;",document.getElementById("shlokasting").style="display: none;",document.getElementById("chapterstest").style="display: block;",document.getElementById("extrasshow").style="display: none;",document.getElementById("fullchapter").style="display: none;",document.getElementById("read").style="display: none;",document.getElementById("options").style="display: block;"}window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag("js",new Date),gtag("config","G-E6LF33ZH9Q");