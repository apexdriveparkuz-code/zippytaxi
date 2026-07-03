const questions = [
  {
    text: "Haydovchilar qaysi ilova orqali ishlaydi?",
    options: ["Yandex Pro", "Yandex Go", "Telegram"],
    answer: 0,
    explain: "Haydovchi buyurtmalarni Yandex Pro ilovasi orqali bajaradi.",
  },
  {
    text: "Mijozlar buyurtmani qaysi ilova orqali beradi?",
    options: ["Yandex Go", "Yandex Pro", "Operator paneli"],
    answer: 0,
    explain: "Mijozlar buyurtmani Yandex Go orqali qiladi.",
  },
  {
    text: "Yangi haydovchida faollik odatda nechta ball bo'ladi?",
    options: ["50 ball", "80 ball", "100 ball"],
    answer: 2,
    explain: "Ro'yxatdan o'tgandan keyin faollik maksimal 100 ball bo'ladi.",
  },
  {
    text: "Reytingga qaysi safarlar ko'proq ta'sir qiladi?",
    options: ["Faqat birinchi safarlar", "Oxirgi 20-50 ta safar", "Faqat tungi safarlar"],
    answer: 1,
    explain: "Oxirgi safarlar yaxshi bo'lsa, reyting tezroq ko'tariladi.",
  },
  {
    text: "Prioritet yuqori bo'lsa nima bo'ladi?",
    options: ["Buyurtmalar tezroq va ko'proq keladi", "Ilova yopiladi", "Komissiya darhol 0 bo'ladi"],
    answer: 0,
    explain: "Yuqori prioritet buyurtma olish imkoniyatini oshiradi.",
  },
  {
    text: "Brending prioritetga nechta ball qo'shadi?",
    options: ["+4 ball", "+18 ball", "+30 ball"],
    answer: 1,
    explain: "Materialda brending uchun +18 ball ko'rsatilgan.",
  },
  {
    text: "Profi daraja uchun oyiga taxminan nechta ball kerak?",
    options: ["1500 ball", "5500 ball", "10 000 ball"],
    answer: 1,
    explain: "Profi daraja oyiga 5500 ball bilan beriladi.",
  },
  {
    text: "Ekspert daraja nimadan boshlanadi?",
    options: ["Oyiga 10 000 ball", "36 oy ketma-ket 10 000 ball", "Faqat OSAGO bo'lsa"],
    answer: 0,
    explain: "Ekspert daraja uchun oyiga 10 000 ball kerak.",
  },
  {
    text: "Chempion darajasi qanday shart bilan olinadi?",
    options: ["Bir hafta faol ishlash", "12 oy ketma-ket 10 000 ball", "Faqat Komfort tarifida ishlash"],
    answer: 1,
    explain: "Chempion uchun 12 oy ketma-ket 10 000 ball kerak.",
  },
  {
    text: "Toshkentda Start foizi materialda qanday ko'rsatilgan?",
    options: ["10.1%", "16.5%", "18.5%"],
    answer: 1,
    explain: "Toshkent uchun Start 16.5% deb berilgan.",
  },
  {
    text: "Ekonom tarifida tekin kutish qancha?",
    options: ["2 min", "5 min", "10 min"],
    answer: 0,
    explain: "Ekonom tarifida tekin kutish 2 minut.",
  },
  {
    text: "Gruzovoy tariflarida tekin kutish qancha?",
    options: ["2 min", "10 min", "30 min"],
    answer: 1,
    explain: "Gruzovoy S, M, L, XL va XXL uchun tekin kutish 10 minut ko'rsatilgan.",
  },
];

const form = document.querySelector("#quizForm");
const result = document.querySelector("#quizResult");
const checkButton = document.querySelector("#checkQuiz");
const resetButton = document.querySelector("#resetQuiz");

function renderQuiz() {
  form.innerHTML = questions
    .map((question, index) => {
      const answers = question.options
        .map(
          (option, optionIndex) => `
            <label class="answer" data-question="${index}" data-option="${optionIndex}">
              <input type="radio" name="question-${index}" value="${optionIndex}" />
              <span>${option}</span>
            </label>
          `
        )
        .join("");

      return `
        <article class="question">
          <h3>${index + 1}. ${question.text}</h3>
          <div class="answers">${answers}</div>
        </article>
      `;
    })
    .join("");
}

function clearMarks() {
  document.querySelectorAll(".answer").forEach((answer) => {
    answer.classList.remove("correct", "wrong");
  });
}

function checkQuiz() {
  clearMarks();

  let score = 0;
  const missed = [];

  questions.forEach((question, index) => {
    const selected = form.querySelector(`input[name="question-${index}"]:checked`);
    const correctAnswer = form.querySelector(
      `.answer[data-question="${index}"][data-option="${question.answer}"]`
    );

    correctAnswer.classList.add("correct");

    if (!selected) {
      missed.push(`${index + 1}. ${question.explain}`);
      return;
    }

    const selectedIndex = Number(selected.value);
    if (selectedIndex === question.answer) {
      score += 1;
      return;
    }

    selected.closest(".answer").classList.add("wrong");
    missed.push(`${index + 1}. ${question.explain}`);
  });

  const percent = Math.round((score / questions.length) * 100);
  const passed = percent >= 80;

  result.className = `quiz-result show ${passed ? "success" : "danger"}`;
  result.innerHTML = `
    <strong>${score}/${questions.length} to'g'ri - ${percent}%</strong>
    <p>${passed ? "Yaxshi natija. Operator materialni ishlatishga tayyor." : "Yana bir marta darslarni ko'rib chiqing, keyin qayta topshiring."}</p>
    ${
      missed.length
        ? `<p><b>Izohlar:</b></p><ul>${missed.map((item) => `<li>${item}</li>`).join("")}</ul>`
        : ""
    }
  `;
  result.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function resetQuiz() {
  form.reset();
  clearMarks();
  result.className = "quiz-result";
  result.innerHTML = "";
}

renderQuiz();
checkButton.addEventListener("click", checkQuiz);
resetButton.addEventListener("click", resetQuiz);
