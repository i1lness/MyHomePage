const quotes = [
  {
    quote: "당장 한 게임 이기는 것이 중요한 게 아니다. 정말 중요한 순간에 이길 수 있도록 준비하는 것, 바로 그것이 더 중요하다.",
    author: "- 임요한 -",
  },
  {
    quote: '그간 우리에게 가장 큰 피해를 끼친 말은 바로 "지금껏 항상 그렇게 해왔어" 라는 말이다.',
    author: "- 그레이스 호퍼 -",
  },
  {
    quote: "네가 헛되이 보낸 오늘은 어제 죽은 이가 그토록 갈망하던 내일이다.",
    author: "- 소포클레스 -",
  },
  {
    quote: "가끔 아름다움에 대한 그리움은 나를 생각하게 만든다.",
    author: "- 개발자 본인 -",
  },
  {
    quote: "다른 누구도 아닌, 스스로를 등불 삼으라",
    author: "- 석가모니 -",
  },
  {
    quote: "모두가 세상을 변화시키려고 생각하지만, 정작 스스로 변하겠다고 생각하는 사람은 없다.",
    author: "- 레프 톨스토이 -",
  },
  {
    quote: "목표는 당연히 우승이죠 저는 준우승을 모릅니다.",
    author: "- 문호준 -",
  },
  {
    quote: "배는 항구에 있을때 가장 안전하지만 그것이 존재의 이유는 아니다",
    author: "- 존 A. 쉐드 -",
  },
  {
    quote: "연습은 하지 않는다. 나는 연주만 한다.",
    author: "- 잉베이 말름스틴 -",
  },
  {
    quote: "자신의 소망, 꿈, 이상이 진정한 챔피언을 만든다.",
    author: "- 무함마드 알리 -",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

let quotesRandomIndex = Math.floor(Math.random() * quotes.length);

const todaysQuote = quotes[quotesRandomIndex];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
