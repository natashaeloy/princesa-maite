let etapa = 0;

let historia = [

{
img: "1.jpg",
texto: `👑 Era uma vez a Princesa Maitê, uma menina de sorriso brilhante que vivia no Reino das Flores Eternas. O seu castelo não era feito apenas de pedras, mas de pétalas que nunca murchavam e janelas que refletiam as cores do arco-íris. Lá, tudo era perfeitinho: o sol brilhava com suavidade e o vento soprava com cheiro de baunilha. ✨`,
fala: `Era uma vez a Princesa Maitê, uma menina de sorriso brilhante que vivia no Reino das Flores Eternas. O seu castelo não era feito apenas de pedras, mas de pétalas que nunca murchavam e janelas que refletiam as cores do arco-íris. Lá, tudo era perfeitinho: o sol brilhava com suavidade e o vento soprava com cheiro de baunilha.`
},

{
img: "2.jpg",
texto: `💖 Mas o que tornava a vida de Maitê realmente mágica não eram as coroas ou os vestidos, mas as suas melhores amigas: Duda e Malu. Onde estava a Maitê, estavam a Duda e a Malu. Elas eram como três flores de um mesmo jardim. Juntas, elas estudavam mapas de tesouros escondidos, riam até a barriga doer e inventavam brincadeiras que faziam as nuvens pararem para observar.`,
fala: `Mas o que tornava a vida de Maitê realmente mágica não eram as coroas ou os vestidos, mas as suas melhores amigas: Duda e Malu. Onde estava a Maitê, estavam a Duda e a Malu. Elas eram como três flores de um mesmo jardim. Juntas, elas estudavam mapas de tesouros escondidos, riam até a barriga doer e inventavam brincadeiras que faziam as nuvens pararem para observar.`
},

{
img: "3.jpg",
texto: `📚 O reino era seguro porque tinha guardiões muito especiais. A fada Livia e os duendes Heitor e Bernardo voavam alto, deixando um rastro de pó mágico por onde passavam. Com suas varinhas de luz, eles protegiam o castelo com alegria.`,
fala: `O reino era seguro porque tinha guardiões muito especiais. A fada Livia e os duendes Heitor e Bernardo voavam alto, deixando um rastro de pó mágico por onde passavam. Com suas varinhas de luz, eles protegiam o castelo com alegria.`
},

{
img: "4.jpg",
texto: `🧚‍♀️ Um dia, Maitê sentiu que precisava conhecer o que havia além das montanhas de açúcar. Ela se despediu das amigas e partiu em uma viagem para descobrir o mundo. Conheceu mares, florestas e aprendeu muitas coisas novas.`,
fala: `Um dia, Maitê sentiu que precisava conhecer o que havia além das montanhas de açúcar. Ela se despediu das amigas e partiu em uma viagem para descobrir o mundo. Conheceu mares, florestas e aprendeu muitas coisas novas.`
},

{
img: "5.jpg",
texto: `🌍 Quando voltou, Maitê já tinha dezoito anos. Não era mais uma criança, mas seu coração continuava cheio de amor. Suas amigas estavam lá esperando por ela com o mesmo carinho de sempre.`,
fala: `Quando voltou, Maitê já tinha dezoito anos. Não era mais uma criança, mas seu coração continuava cheio de amor. Suas amigas estavam lá esperando por ela com o mesmo carinho de sempre.`
},

{
img: "6.jpg",
texto: `🌈 Maitê descobriu o maior segredo da magia: o tempo passa, mas o amor e a amizade verdadeira nunca acabam. FIM 💖`,
fala: `Maitê descobriu o maior segredo da magia: o tempo passa, mas o amor e a amizade verdadeira nunca acabam. Fim`
}

];

function proximo() {
  etapa++;
  if (etapa >= historia.length) etapa = 0;

  document.getElementById("imagem").src = historia[etapa].img;
  document.getElementById("texto").innerHTML = historia[etapa].texto;
}

function falar() {
  let msg = new SpeechSynthesisUtterance(historia[etapa].fala);
  msg.lang = "pt-BR";
  msg.rate = 0.9;
  msg.pitch = 1.1; // voz mais infantilzinha
  speechSynthesis.speak(msg);
}

document.getElementById("texto").innerHTML = historia[0].texto;


// ⭐ ESTRELAS
let canvas = document.getElementById("estrelas");
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let estrelas = [];
let mouseEstrelas = [];

let mouse = { x: canvas.width / 2, y: canvas.height / 2 };

// ⭐ estrelas caindo (as antigas)
for (let i = 0; i < 100; i++) {
  estrelas.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 3,
    speed: Math.random() * 2 + 1
  });
}

// ⭐ estrelas do mouse
window.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;

  for (let i = 0; i < 5; i++) {
    mouseEstrelas.push({
      x: mouse.x,
      y: mouse.y,
      size: Math.random() * 3,
      speedX: (Math.random() - 0.5) * 2,
      speedY: (Math.random() - 0.5) * 2,
      life: 100
    });
  }
});

function animar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // ⭐ estrelas caindo
  ctx.fillStyle = "white";
  estrelas.forEach(e => {
    ctx.beginPath();
    ctx.arc(e.x, e.y, e.size, 0, Math.PI * 2);
    ctx.fill();

    e.y += e.speed;

    if (e.y > canvas.height) {
      e.y = 0;
      e.x = Math.random() * canvas.width;
    }
  });

  // ⭐ estrelas do mouse
  mouseEstrelas.forEach((e, i) => {
    ctx.beginPath();
    ctx.arc(e.x, e.y, e.size, 0, Math.PI * 2);
    ctx.fill();

    e.x += e.speedX;
    e.y += e.speedY;
    e.life--;

    if (e.life <= 0) {
      mouseEstrelas.splice(i, 1);
    }
  });

  requestAnimationFrame(animar);
}

animar();