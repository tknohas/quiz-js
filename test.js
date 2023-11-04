const quiz = [
  {
    question: 'ルフィの兄弟は次のうち誰？',
    answers: [
      'ゾロ', 
      'エース', 
      'パティ', 
      'フランキー'
    ],
    correct: 'エース'
  }, 
  {
    question: '死の直前、イタチがサスケにかけた言葉、「許せサスケ、○○」の○○に当てはまる言葉は次のうちどれ？',
    answers: [
      '愛してくれてありがとう', 
      'これで最後だ', 
      '俺はお前と共にあり続ける', 
      '風邪ひくなよ'
    ],
    correct: 'これで最後だ'
  }, 
  {
    question: 'フリンライダーの本名は、「ユージーン」の後に続く名前は次のうちどれ？',
    answers: [
      'エリック', 
      'マーシュコート', 
      'フィッツハーバート', 
      'タランティーノ'
    ],
    correct: 'フィッツハーバート'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert('正解');
    score++;
  } else {
    alert('不正解')
  }

  quizIndex++;

  if(quizIndex < quizLength){
    setupQuiz();
  } else {
    window.alert('終了! あなたの正解数は' + score + '/' + quizLength + 'です！');
  } 
};

let handleIndex = 0;
while (handleIndex < buttonLength) {
  $button[handleIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handleIndex++;
};
