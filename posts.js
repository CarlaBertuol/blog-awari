const posts = [
  {
      title: 'Onde surgiu o café?',
      content: "Não existe uma data específica sobre a origem do café. Porém algumas lendas ressaltam o seu surgimento na região da Etiópia. Segundo este conto, havia um pastor chamado Kaldi que notou a planta do cafezal e resolveu alimentar suas cabras com os frutos. Com isso, Kaldi percebeu uma grande agitação por parte de suas cabras que sentiam-se ativas e mais dispostas. Curioso devido a performance de seus animais, ele ficou abismado e julgou o fruto então como algo ruim e “demoníaco”. Porém ao ser jogado em uma fogueira, Kaldi e os outros monges tiveram a experiência de sentir um cheiro bom vindo do fruto torrado. O que os levou então a experimentar o café. Feito isso, notou-se então uma maior agitação, que lhe dava maior disposição para as rezas. Os primeiros registros foram dados por volta de 575 d.C, mas nessa época o consumo dos etíopes era feito através da popla do fruto durantes as refeições ou para criação de bebidas alcoólicas."
  },
  {
      title: 'Início do cultivo do café',
      content: "Apesar de sua descoberta na Etiópia, o café passou e ser cultivado mesmo na Arábia, especificamente no Lêmen. Lá a bebida produzida pelo fruto passou a ser conhecida como Kahwah ou Cahue, que para os arábicos significa: força. Neste período então o café passou a ganhar força e passou a ser muito utilizado por monges em seus rituais, com o objetivo de dar mais disposição durante o eventos noturnos realizados por eles.Foi na Arábia também que o café passou a ser enxergado como um produto comercial, que poderia então ganhar força para movimentar a economia."
  },
  {
      title: 'Surgimento do café na Europa',
      content: "Sua chegada na Europa deu-se em meados de 1615 na cidade de Veneza – Itália. Lá, a bebida ganhou seu espaço através da Botteghe del Caffè. Um lugar que teve como intuito criar e popularizar o preparo do café através da sua torra e moagem. Com o tempo, o café tornou-se um grande símbolo de encontros, festas e músicas, o que acabou desagradando aos religiosos. Eles, por sua vez, sentiram-se desagradados com essa movimentação e com isso, até cogitaram transformar a bebida em algo cristão. Além disso, o café também acabou sofrendo restrições com relação o mercado de consumo. Isso porque, os produtores de vinho, queijo e outros produtos a serem degustados o viram como um grande concorrente. Após todos essas reviravoltas, o café finalmente passou a ser visto como algo inovador e passou a ganhar seu espaço no mundo inteiro. Com isso, as cafeterias foram ganhando forma em meados do século XVII. Desta maneira foram surgindo então os métodos e formas diferenciadas da criação do mesmo."
  }
];

const wrapper = document.getElementById('posts');

for (var i=0; i<posts.length; i++) {
  const postData = posts[i];
  console.log(postData);

  const article = document.createElement('article');
  article.classList.add('article');

  const title = document.createElement('h2');
  title.classList.add('article-title');
  const titleText = document.createTextNode(postData.title);
  title.appendChild(titleText);
  article.appendChild(title);
  
  const content = document.createElement('p');
  const contentText = document.createTextNode(postData.content);
  content.appendChild(contentText);
  article.appendChild(content);
  
  wrapper.appendChild(article);
}