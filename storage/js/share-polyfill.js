(()=>{function b(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function j(d){for(var f,e=1;e<arguments.length;e++)f=null==arguments[e]?{}:arguments[e],e%2?b(Object(f),!0).forEach(function(a){c(d,a,f[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(d,Object.getOwnPropertyDescriptors(f)):b(Object(f)).forEach(function(a){Object.defineProperty(d,a,Object.getOwnPropertyDescriptor(f,a))});return d}function c(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}navigator.share=navigator.share||function(){function n(a){var b=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css",c.appendChild(document.createTextNode(a)),c.id="shareAPIPolyfill-style",b.appendChild(c)}var l={default:{sms:"SMS",messenger:"Messenger",whatsapp:"WhatsApp",twitter:"Twitter",linkedin:"Linkedin",telegram:"Telegram",facebook:"Facebook",skype:"Skype",pinterest:"Pinterest"},cs:{shareTitle:"Sd\xEDlet",cancel:"Zru\u0161it",copy:"Kop\xEDrovat",print:"Tisk",email:"E-mail",selectSms:"Vyberte kontakt"},sk:{shareTitle:"Zdie\u013Ea\u0165",cancel:"Zru\u0161i\u0165",copy:"Kop\xEDrovat",print:"Tla\u010D",email:"E-mail",selectSms:"Vyberte kontakt"},ja:{shareTitle:"\u5171\u6709\u3059\u308B",cancel:"\u30AD\u30E3\u30F3\u30BB\u30EB",copy:"\u30B3\u30D4\u30FC\u3059\u308B",print:"\u5370\u5237\u3059\u308B",email:"E-mail",selectSms:"\u9023\u7D61\u5148\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044"},zh:{shareTitle:"\u5206\u4EAB",cancel:"\u53D6\u6D88",copy:"\u8907\u88FD\u9023\u7D50",print:"\u5217\u5370",email:"E-mail",selectSms:"\u9078\u64C7\u806F\u7D61\u4EBA"},pt:{shareTitle:"Compartilhar",cancel:"Cancelar",copy:"Copiar",print:"Imprimir",email:"E-mail",selectSms:"Selecione um contato"},en:{shareTitle:"Share",cancel:"Cancel",copy:"Copy",print:"Print",email:"E-mail",selectSms:"Pick a contact"},es:{shareTitle:"Compartir",cancel:"Cancelar",copy:"Copiar",print:"Imprimir",email:"Correo",selectSms:"Seleccionar un contacto"},fr:{shareTitle:"Partager",cancel:"Annuler",copy:"Copier",print:"Imprimer",email:"E-mail",selectSms:"Veuillez choisir un contact"},de:{shareTitle:"Teilen",cancel:"Abbrechen",copy:"Kopieren",print:"Drucken",email:"E-mail",selectSms:"W\xE4hlen Sie einen Kontakt aus"},it:{shareTitle:"Condividi",cancel:"Annulla",copy:"Copia",print:"Stampa",email:"Email",selectSms:"Seleziona un contatto"},nl:{shareTitle:"Delen",cancel:"Annuleren",copy:"Kopi\xEBren",print:"Printen",email:"E-mail",selectSms:"Selecteer een contact"},sv:{shareTitle:"Dela",cancel:"Avbryt",copy:"Kopiera",print:"Skriv ut",email:"E-mail",selectSms:"V\xE4lj en kontakt"},da:{shareTitle:"Del",cancel:"Luk",copy:"Kopi\xE9r",print:"Udskriv",email:"E-mail",selectSms:"V\xE6lg en kontaktperson"},dk:{shareTitle:"Del",cancel:"Luk",copy:"Kopi\xE9r",print:"Udskriv",email:"E-mail",selectSms:"V\xE6lg en kontaktperson"},ru:{shareTitle:"\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F",cancel:"\u041E\u0442\u043C\u0435\u043D\u0430",copy:"\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C",print:"\u041F\u0435\u0447\u0430\u0442\u044C",email:"\u042D-\u043C\u0430\u0439\u043B",selectSms:"\u0412\u044B\u0431\u0435\u0440\u0438 \u043A\u043E\u043D\u0442\u0430\u043A\u0442"},tr:{shareTitle:"Payla\u015F",cancel:"Vazge\xE7",copy:"Kopyala",print:"Yazd\u0131r",email:"E-posta",selectSms:"Bir ki\u015Fi se\xE7"},ko:{shareTitle:"\uACF5\uC720",cancel:"\uCDE8\uC18C",copy:"\uB9C1\uD06C \uBCF5\uC0AC",print:"\uC778\uC1C4",email:"E-mail",selectSms:"\uC5F0\uB77D\uCC98\uB97C \uC120\uD0DD\uD558\uC138\uC694"},ta:{shareTitle:"\u0BAA\u0B95\u0BBF\u0BB0\u0BCD",cancel:"\u0B87\u0BB0\u0BA4\u0BCD\u0BA4\u0BC1",copy:"\u0BA8\u0B95\u0BB2\u0BC6\u0B9F\u0BC1",print:"\u0B85\u0B9A\u0BCD\u0B9A\u0BBF\u0B9F\u0BC1",email:"\u0BAE\u0BBF\u0BA9\u0BCD\u0BA9\u0B9E\u0BCD\u0B9A\u0BB2\u0BCD",selectSms:"\u0B92\u0BB0\u0BC1 \u0BA4\u0BCA\u0B9F\u0BB0\u0BCD\u0BAA\u0BC8\u0BA4\u0BCD \u0BA4\u0BC7\u0BB0\u0BCD\u0BB5\u0BC1\u0B9A\u0BC6\u0BAF\u0BCD\u0B95"},pl:{shareTitle:"Dzieli\u0107",cancel:"Anuluj",copy:"Kopiuj",print:"Wydrukowa\u0107",email:"E-mail",selectSms:"Wybierz kontakt"},is:{shareTitle:"Deila",cancel:"H\xE6tta vi\xF0",copy:"Afrita",print:"Prenta",email:"P\xF3stur",selectSms:"Veldu tengili\xF0"},hu:{shareTitle:"Megoszt\xE1s",cancel:"Bez\xE1r\xE1s",copy:"M\xE1sol\xE1s",print:"Nyomtat\xE1s",email:"E-mail",selectSms:"V\xE1lasszon egy kontaktot"}},b=navigator.userAgent.match(/Android/i),d=navigator.userAgent.match(/iPhone|iPad|iPod/i),e=navigator.userAgent.match(/iPhone|iPad|iPod|Macintosh/i),k=!(d||b),a={share:e?"<svg class=\"the-icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 1000\"><g><path fill=\"#424242\" d=\"M381.9,181l95.8-95.8v525.9c0,13.4,8.9,22.3,22.3,22.3c13.4,0,22.3-8.9,22.3-22.3V85.2l95.8,95.8c4.5,4.5,8.9,6.7,15.6,6.7c6.7,0,11.1-2.2,15.6-6.7c8.9-8.9,8.9-22.3,0-31.2L515.6,16.1c-2.2-2.2-4.5-4.5-6.7-4.5c-4.5-2.2-11.1-2.2-17.8,0c-2.2,2.2-4.5,2.2-6.7,4.5L350.7,149.8c-8.9,8.9-8.9,22.3,0,31.2C359.6,190,373,190,381.9,181z M812,276.9H633.7v44.6H812v624H188v-624h178.3v-44.6H188c-24.5,0-44.6,20.1-44.6,44.6v624c0,24.5,20.1,44.6,44.6,44.6h624c24.5,0,44.6-20.1,44.6-44.6v-624C856.6,296.9,836.5,276.9,812,276.9z\"/></g></svg>":"<svg class=\"the-icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path fill=\"#424242\" d=\"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z\"/></svg>",email:"<svg class=\"the-icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"none\" d=\"M0 0h24v24H0z\"/><path fill=\"#424242\" d=\"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z\"/></svg>",copy:"<svg class=\"the-icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><path fill=\"#424242\" d=\"M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z\"></path></svg>",print:"<svg class=\"the-icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"#424242\" d=\"M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg>",sms:"<svg class=\"the-icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"#424242\" d=\"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg>",messenger:"<svg class=\"the-icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><path fill=\"#0084ff\" d=\"M224 32C15.9 32-77.5 278 84.6 400.6V480l75.7-42c142.2 39.8 285.4-59.9 285.4-198.7C445.8 124.8 346.5 32 224 32zm23.4 278.1L190 250.5 79.6 311.6l121.1-128.5 57.4 59.6 110.4-61.1-121.1 128.5z\"></path></svg>",facebook:"<svg class=\"the-icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><path fill=\"#3b5998\" d=\"M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7 0 24.8 11.1 24.8 24.7z\"></path></svg>",whatsapp:"<svg class=\"the-icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><path fill=\"#075e54\" d=\"M224 122.8c-72.7 0-131.8 59.1-131.9 131.8 0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6 49.9-13.1 4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8 0-35.2-15.2-68.3-40.1-93.2-25-25-58-38.7-93.2-38.7zm77.5 188.4c-3.3 9.3-19.1 17.7-26.7 18.8-12.6 1.9-22.4.9-47.5-9.9-39.7-17.2-65.7-57.2-67.7-59.8-2-2.6-16.2-21.5-16.2-41s10.2-29.1 13.9-33.1c3.6-4 7.9-5 10.6-5 2.6 0 5.3 0 7.6.1 2.4.1 5.7-.9 8.9 6.8 3.3 7.9 11.2 27.4 12.2 29.4s1.7 4.3.3 6.9c-7.6 15.2-15.7 14.6-11.6 21.6 15.3 26.3 30.6 35.4 53.9 47.1 4 2 6.3 1.7 8.6-1 2.3-2.6 9.9-11.6 12.5-15.5 2.6-4 5.3-3.3 8.9-2 3.6 1.3 23.1 10.9 27.1 12.9s6.6 3 7.6 4.6c.9 1.9.9 9.9-2.4 19.1zM400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM223.9 413.2c-26.6 0-52.7-6.7-75.8-19.3L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5 29.9 30 47.9 69.8 47.9 112.2 0 87.4-72.7 158.5-160.1 158.5z\"></path></svg>",twitter:"<svg class=\"the-icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path fill=\"#1da1f2\" d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"></path></svg>",linkedin:"<svg class=\"the-icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><path fill=\"#0077b5\" d=\"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z\"></path></svg>",telegram:"<svg class=\"the-icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 496 512\"><path fill=\"#0088cc\" d=\"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z\"></path></svg>",skype:"<svg class=\"the-icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><path fill=\"#00aff0\" d=\"M424.7 299.8c2.9-14 4.7-28.9 4.7-43.8 0-113.5-91.9-205.3-205.3-205.3-14.9 0-29.7 1.7-43.8 4.7C161.3 40.7 137.7 32 112 32 50.2 32 0 82.2 0 144c0 25.7 8.7 49.3 23.3 68.2-2.9 14-4.7 28.9-4.7 43.8 0 113.5 91.9 205.3 205.3 205.3 14.9 0 29.7-1.7 43.8-4.7 19 14.6 42.6 23.3 68.2 23.3 61.8 0 112-50.2 112-112 .1-25.6-8.6-49.2-23.2-68.1zm-194.6 91.5c-65.6 0-120.5-29.2-120.5-65 0-16 9-30.6 29.5-30.6 31.2 0 34.1 44.9 88.1 44.9 25.7 0 42.3-11.4 42.3-26.3 0-18.7-16-21.6-42-28-62.5-15.4-117.8-22-117.8-87.2 0-59.2 58.6-81.1 109.1-81.1 55.1 0 110.8 21.9 110.8 55.4 0 16.9-11.4 31.8-30.3 31.8-28.3 0-29.2-33.5-75-33.5-25.7 0-42 7-42 22.5 0 19.8 20.8 21.8 69.1 33 41.4 9.3 90.7 26.8 90.7 77.6 0 59.1-57.1 86.5-112 86.5z\"></path></svg>",pinterest:"<svg class=\"the-icon\" width=\"256px\" height=\"256px\" viewBox=\"0 0 256 256\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" preserveAspectRatio=\"xMidYMid\"><path d=\"M0,128.002 C0,180.416 31.518,225.444 76.619,245.241 C76.259,236.303 76.555,225.573 78.847,215.848 C81.308,205.457 95.317,146.1 95.317,146.1 C95.317,146.1 91.228,137.927 91.228,125.848 C91.228,106.879 102.222,92.712 115.914,92.712 C127.557,92.712 133.182,101.457 133.182,111.929 C133.182,123.633 125.717,141.14 121.878,157.355 C118.671,170.933 128.686,182.008 142.081,182.008 C166.333,182.008 182.667,150.859 182.667,113.953 C182.667,85.899 163.772,64.901 129.405,64.901 C90.577,64.901 66.388,93.857 66.388,126.201 C66.388,137.353 69.676,145.217 74.826,151.307 C77.194,154.104 77.523,155.229 76.666,158.441 C76.052,160.796 74.642,166.466 74.058,168.713 C73.206,171.955 70.579,173.114 67.649,171.917 C49.765,164.616 41.436,145.031 41.436,123.015 C41.436,86.654 72.102,43.054 132.918,43.054 C181.788,43.054 213.953,78.418 213.953,116.379 C213.953,166.592 186.037,204.105 144.887,204.105 C131.068,204.105 118.069,196.635 113.616,188.15 C113.616,188.15 106.185,217.642 104.611,223.337 C101.897,233.206 96.585,243.07 91.728,250.758 C103.24,254.156 115.401,256.007 128.005,256.007 C198.689,256.007 256.001,198.698 256.001,128.002 C256.001,57.309 198.689,0 128.005,0 C57.314,0 0,57.309 0,128.002 Z\" fill=\"#CB1F27\"></path></svg>"};return function(){var i=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return new Promise(function(q,o){function r(){f.classList.remove("visible"),x.classList.remove("visible"),f.addEventListener("transitionend",function a(){f.removeEventListener("transitionend",a),document.body.removeChild(f)}),x.addEventListener("transitionend",function a(){x.removeEventListener("transitionend",a),document.body.removeChild(x),document.head.removeChild(document.querySelector("#shareAPIPolyfill-style")),document.removeEventListener("keyup",b)})}function b(a){27===a.keyCode&&r()}i.title&&"string"==typeof i.title&&i.text&&"string"==typeof i.text||o("Invalid Params");var s=i.title,p=i.url,d=i.fbId,h=i.hashtags,m=i.via,g=i.hashtag,t=j(j({},{copy:!0,print:!0,email:!0,sms:!0,messenger:!0,facebook:!0,whatsapp:!0,twitter:!0,linkedin:!0,telegram:!0,skype:!0,pinterest:!0,language:"en"}),c),v=j(j({},l.default),l[t.language]?l[t.language]:l[navigator.language]||l[navigator.language.substr(0,2).toLowerCase()]||l.en),w=i.text||s,u=encodeURIComponent(i.image);n("\n#shareAPIPolyfill-backdrop,\n#shareAPIPolyfill-container {\n  opacity: 0;\n  pointer-events: none;\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  margin: auto;\n  width: 100%;\n  height: 100%;\n  will-change: opacity;\n  z-index: 99999999;\n}\n#shareAPIPolyfill-backdrop {\n  transition: opacity linear 250ms;\n  background-color: rgba(0, 0, 0, 0.6);\n}\n#shareAPIPolyfill-container {\n  color: #424242;\n  background-color: #f9f9f9;\n  top: auto;\n  max-width: 400px;\n  height: auto;\n  transition-property: transform,opacity;\n  transition-timing-function: linear;\n  transition-duration: 250ms;\n  transition-delay: 150ms;\n  transform: translateY(100%);\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", arial, sans-serif, \"Microsoft JhengHei\";\n}\n#shareAPIPolyfill-backdrop.visible,\n#shareAPIPolyfill-container.visible {\n  opacity: 1;\n  pointer-events: all;\n}\n#shareAPIPolyfill-container.visible {\n  transform: translateY(0);\n}\n#shareAPIPolyfill-container .shareAPIPolyfill-header {\n  background: #EEE;\n}\n#shareAPIPolyfill-container .shareAPIPolyfill-header .shareAPIPolyfill-icons-container {\n  display: flex;\n}\n#shareAPIPolyfill-container .shareAPIPolyfill-header-title {\n  background-color: #E0E0E0;\n  padding: 10px 18px;\n  color: #424242;\n  font-weight: 600;\n}\n#shareAPIPolyfill-container .shareAPIPolyfill-body {\n  border-top: solid 1px #EEE;\n}\n#shareAPIPolyfill-container .shareAPIPolyfill-footer {\n width: 100%;\n display: block;\n border: none;\n transition: opacity ease-in 250ms;\n border-top: solid 1px #EEE;\n background-color: #EEE;\n text-align: center;\n padding: 10px;\n font-size:13px;\n cursor: pointer;\n opacity: .5;\n}\n#shareAPIPolyfill-container .shareAPIPolyfill-footer:hover {\n  opacity: 1;\n}\n#shareAPIPolyfill-container .shareAPIPolyfill-icons-container {\n  display: flex;\n  flex-wrap: wrap;\n}\n#shareAPIPolyfill-container .tool-icon {\n border: none;\n display: inline-block;\n width: 25%;\n box-sizing: border-box;\n font-weight: 400;\n font-size: 12px;\n -webkit-font-smoothing: antialiased;\n -moz-osx-font-smoothing: grayscale;\n text-align: center;\n cursor: pointer;\n background-color: transparent;\n padding: 20px 0;\n}\n#shareAPIPolyfill-container .tool-icon:hover {\n  box-shadow: inset 0 0 20px rgba(0,0,0, .125);\n}\n#shareAPIPolyfill-container .the-icon-title {\n padding-top: 10px;\n display: block;\n}\n.shareAPIPolyfill-header-title .the-icon {\n\tdisplay: inline-block;\n\theight: 20px;\n\twidth: 20px;\n\tpadding-right: 5px;\n\tvertical-align:".concat(e?"-2px":"-4px",";\n}\n.shareAPIPolyfill-icons-container.title .tool-icon .the-icon,\n.shareAPIPolyfill-icons-container.body .tool-icon .the-icon {\n  display: block;\n  margin: auto;\n  width: 42px;\n  height: 36px;\n}\n.shareAPIPolyfill-icons-container.title .tool-icon .the-icon {\n  height: 24px;\n}\n.shareAPIPolyfill-icons-container .hidden {\n  display: none !important;\n}\n"));var f=document.createElement("div"),x=document.createElement("div");f.id="shareAPIPolyfill-backdrop",x.id="shareAPIPolyfill-container",x.setAttribute("tabindex","0"),x.innerHTML="\n<div class=\"shareAPIPolyfill-header\">\n <div class=\"shareAPIPolyfill-header-title\" tabindex=\"0\">".concat(a.share," ").concat(v.shareTitle,"</div>\n <div class=\"shareAPIPolyfill-icons-container title\">\n  <button class=\"").concat(t.copy?"":"hidden"," tool-icon copy\" data-tool=\"copy\">\n   ").concat(a.copy,"\n   <span class=\"the-icon-title\">").concat(v.copy,"</span>\n  </button>\n  <button class=\"").concat(t.print?"":"hidden"," tool-icon print\" data-tool=\"print\">\n   ").concat(a.print,"\n   <span class=\"the-icon-title\">").concat(v.print,"</span>\n  </button>\n  <button class=\"").concat(t.email?"":"hidden"," tool-icon email\" data-tool=\"email\">\n   ").concat(a.email,"\n   <span class=\"the-icon-title\">").concat(v.email,"</span>\n  </button>\n  <button class=\"").concat(t.sms?"":"hidden"," tool-icon sms\" data-tool=\"sms\">\n   ").concat(a.sms,"\n   <span class=\"the-icon-title\">").concat(v.sms,"</span>\n  </button>\n </div>\n</div>\n<div class=\"shareAPIPolyfill-body\">\n <div class=\"shareAPIPolyfill-icons-container body\">\n  ").concat(d?"\n   <button class=\"tool-icon messenger ".concat(t.messenger?"":"hidden","\" data-tool=\"messenger\">\n    ").concat(a.messenger,"\n    <span class=\"the-icon-title\">").concat(v.messenger,"</span>\n   </button>\n  "):"","\n  <button class=\"").concat(t.facebook?"":"hidden"," tool-icon facebook\" data-tool=\"facebook\">\n   ").concat(a.facebook,"\n   <span class=\"the-icon-title\">").concat(v.facebook,"</span>\n  </button>\n  <button class=\"").concat(t.whatsapp?"":"hidden"," tool-icon whatsapp\" data-tool=\"whatsapp\">\n   ").concat(a.whatsapp,"\n   <span class=\"the-icon-title\">").concat(v.whatsapp,"</span>\n  </button>\n  <button class=\"").concat(t.twitter?"":"hidden"," tool-icon twitter\" data-tool=\"twitter\">\n   ").concat(a.twitter,"\n   <span class=\"the-icon-title\">").concat(v.twitter,"</span>\n  </button>\n  <button class=\"").concat(t.linkedin?"":"hidden"," tool-icon linkedin\" data-tool=\"linkedin\">\n   ").concat(a.linkedin,"\n   <span class=\"the-icon-title\">").concat(v.linkedin,"</span>\n  </button>\n  <button class=\"").concat(t.telegram?"":"hidden"," tool-icon telegram\" data-tool=\"telegram\">\n   ").concat(a.telegram,"\n   <span class=\"the-icon-title\">").concat(v.telegram,"</span>\n  </button>\n  <button class=\"").concat(t.skype?"":"hidden"," tool-icon skype skype-share\" data-tool=\"skype\" data-href=\"").concat(p,"\" data-text=\"").concat(s+": "+p,"\">\n   ").concat(a.skype,"\n   <span class=\"the-icon-title\">").concat(v.skype,"</span>\n  </button>\n  <button class=\"").concat(t.pinterest?"":"hidden"," tool-icon pinterest\" data-tool=\"pinterest\">\n   ").concat(a.pinterest,"\n   <span class=\"the-icon-title\">").concat(v.pinterest,"</span>\n  </button>\n </div>\n <button class=\"shareAPIPolyfill-footer\">\n  ").concat(v.cancel,"\n </button>\n</div>\n"),f.addEventListener("click",function(){r()}),!1!==t.skype&&function(a,b,c){a.loadSkypeWebSdkAsync=a.loadSkypeWebSdkAsync||function(d){var e,f=b.getElementsByTagName(c)[0];b.getElementById(d.id)||((e=b.createElement(c)).id=d.id,e.src=d.scriptToLoad,e.onload=d.callback,f.parentNode.insertBefore(e,f))},a.loadSkypeWebSdkAsync({scriptToLoad:"https://swx.cdn.skype.com/shared/v/latest/skypewebsdk.js",id:"skype_web_sdk"})}(window,document,"script"),requestAnimationFrame(function(){document.body.appendChild(f),document.body.appendChild(x),document.addEventListener("keyup",b),Array.from(x.querySelectorAll(".tool-icon")).forEach(function(b){b.addEventListener("click",function(){var e=encodeURIComponent(w+": "+p);switch(b.dataset.tool){case"copy":navigator.clipboard.writeText("".concat(s,"\n").concat(i.text||"","\n").concat(p));break;case"print":setTimeout(function(){self.print()},500);break;case"email":var f="".concat(encodeURIComponent(w),"%0D%0A"),a="mailto:?subject=".concat(s,"&body=").concat(f).concat(encodeURIComponent(p));window.open(a);break;case"sms":location.href="sms:".concat(v.selectSms,"?&body=").concat(encodeURIComponent(s),": ").concat(encodeURIComponent(i.text||"")," ").concat(p);break;case"messenger":window.open("http://www.facebook.com/dialog/send?app_id="+d+"&display=popup&href="+encodeURIComponent(p)+"&link="+encodeURIComponent(p)+"&redirect_uri="+encodeURIComponent(p)+"&quote="+encodeURIComponent(w));break;case"facebook":window.open("https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(p)+"&quote="+encodeURIComponent(w)+"&hashtag="+(g||h||""));break;case"whatsapp":window.open((k?"https://api.whatsapp.com/send?text=":"whatsapp://send?text=")+encodeURIComponent(w+"\n"+p));break;case"twitter":window.open("https://twitter.com/intent/tweet?text=".concat(encodeURIComponent(w),"&url=").concat(encodeURIComponent(p),"&hashtags=").concat(h||"","&via=").concat(m?encodeURIComponent(m):""));break;case"linkedin":window.open("https://www.linkedin.com/shareArticle?mini=true&url=".concat(encodeURIComponent(p),"&title=").concat(s,"&summary=").concat(w,"&source=LinkedIn"));break;case"telegram":window.open(k?"https://telegram.me/share/msg?url="+encodeURIComponent(p)+"&text="+encodeURIComponent(w):"tg://msg?text="+e);break;case"pinterest":window.open("https://pinterest.com/pin/create/button/?url="+encodeURIComponent(p)+"&description="+encodeURIComponent(w)+"&media="+u);}q(),r()})}),x.querySelector(".shareAPIPolyfill-footer").addEventListener("click",r),requestAnimationFrame(function(){f.classList.add("visible"),x.classList.add("visible")}),document.getElementById("shareAPIPolyfill-container").focus()})})}}()})();