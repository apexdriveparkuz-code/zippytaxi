const questions = [
  {
    text: "Haydovchilar qaysi ilova orqali ishlaydi?",
    options: ["Yandex Pro", "Yandex Go", "Telegram"],
    answer: 0,
    explain:
      "To'g'ri javob: Yandex Pro. Haydovchi buyurtmani qabul qilish, safarni boshlash, yakunlash va profil ko'rsatkichlarini ko'rish uchun Yandex Pro ilovasidan foydalanadi.",
  },
  {
    text: "Mijozlar buyurtmani qaysi ilova orqali beradi?",
    options: ["Yandex Go", "Yandex Pro", "Operator paneli"],
    answer: 0,
    explain:
      "To'g'ri javob: Yandex Go. Mijoz manzil, tarif va buyurtma holatini Yandex Go ilovasida ko'radi.",
  },
  {
    text: "Yangi haydovchida faollik odatda nechta ball bo'ladi?",
    options: ["50 ball", "80 ball", "100 ball"],
    answer: 2,
    explain:
      "To'g'ri javob: 100 ball. Ro'yxatdan o'tgandan keyin faollik maksimal qiymatdan boshlanadi, keyin buyurtmani qabul qilish va bekor qilishga qarab o'zgaradi.",
  },
  {
    text: "Reytingga qaysi safarlar ko'proq ta'sir qiladi?",
    options: ["Faqat birinchi safarlar", "Oxirgi 20-50 ta safar", "Faqat tungi safarlar"],
    answer: 1,
    explain:
      "To'g'ri javob: oxirgi 20-50 ta safar. Yaqinda bajarilgan safarlar sifati reytingga kuchliroq ta'sir qiladi, shuning uchun haydovchi har safarda xizmat sifatini ushlashi kerak.",
  },
  {
    text: "Prioritet yuqori bo'lsa nima bo'ladi?",
    options: ["Buyurtmalar tezroq va ko'proq keladi", "Ilova yopiladi", "Komissiya darhol 0 bo'ladi"],
    answer: 0,
    explain:
      "To'g'ri javob: buyurtmalar tezroq va ko'proq keladi. Prioritet haydovchining buyurtma olish navbatidagi ustunligini oshiradi.",
  },
  {
    text: "Brending prioritetga nechta ball qo'shadi?",
    options: ["+4 ball", "+18 ball", "+30 ball"],
    answer: 1,
    explain:
      "To'g'ri javob: +18 ball. Mashina brending qilingan bo'lsa, prioritetga qo'shimcha ustunlik ballari qo'shiladi.",
  },
  {
    text: "Profi daraja uchun oyiga taxminan nechta ball kerak?",
    options: ["1500 ball", "5500 ball", "10 000 ball"],
    answer: 1,
    explain:
      "To'g'ri javob: 5500 ball. Profi daraja Masterdan keyingi bosqich bo'lib, buyurtmaning oxirgi manzilini ko'rish kabi qulayliklar beradi.",
  },
  {
    text: "Ekspert daraja nimadan boshlanadi?",
    options: ["Oyiga 10 000 ball", "36 oy ketma-ket 10 000 ball", "Faqat OSAGO bo'lsa"],
    answer: 0,
    explain:
      "To'g'ri javob: oyiga 10 000 ball. Ekspert darajasida 30 kunlik Yandex Plus va qo'shimcha prioritet ballari kabi imtiyozlar bo'lishi mumkin.",
  },
  {
    text: "Chempion darajasi qanday shart bilan olinadi?",
    options: ["Bir hafta faol ishlash", "12 oy ketma-ket 10 000 ball", "Faqat Komfort tarifida ishlash"],
    answer: 1,
    explain:
      "To'g'ri javob: 12 oy ketma-ket 10 000 ball. Chempion doimiy yuqori natija ko'rsatgan haydovchilarga beriladigan daraja.",
  },
  {
    text: "Toshkentda Start foizi materialda qanday ko'rsatilgan?",
    options: ["10.1%", "16.5%", "18.5%"],
    answer: 1,
    explain:
      "To'g'ri javob: 16.5%. Toshkentda Start foizi materialda 16.5% deb ko'rsatilgan, yakuniy hisobda taksopark foizi ham qo'shiladi.",
  },
  {
    text: "Ekonom tarifida tekin kutish qancha?",
    options: ["2 min", "5 min", "10 min"],
    answer: 0,
    explain:
      "To'g'ri javob: 2 minut. Ekonom tarifida mijoz uchun tekin kutish vaqti 2 minut qilib berilgan.",
  },
  {
    text: "Gruzovoy tariflarida tekin kutish qancha?",
    options: ["2 min", "10 min", "30 min"],
    answer: 1,
    explain:
      "To'g'ri javob: 10 minut. Gruzovoy S, M, L, XL va XXL tariflarida tekin kutish 10 minut deb ko'rsatilgan.",
  },
  {
    text: "Faollikni Yandex Pro ilovasida qayerdan ko'rish mumkin?",
    options: ["Profil bo'limidan", "Faqat mijoz ilovasidan", "Faqat SMS orqali"],
    answer: 0,
    explain:
      "To'g'ri javob: profil bo'limidan. Asosiy ekranda yuqori o'ng burchakdagi profil tugmasi orqali faollik va uning tarixi ko'riladi.",
  },
  {
    text: "Reyting 4.5 dan past bo'lsa operator nimani tushuntirishi kerak?",
    options: ["Muammo bor deb qabul qilinishi mumkin", "Bu eng yaxshi natija", "Reyting ishlamaydi"],
    answer: 0,
    explain:
      "To'g'ri javob: muammo bor deb qabul qilinishi mumkin. Past reyting buyurtma va mijoz ishonchiga ta'sir qilishi mumkin, shuning uchun xizmat sifatini yaxshilash kerak.",
  },
  {
    text: "Prioritetni oshirish uchun eng to'g'ri harakat qaysi?",
    options: ["Buyurtmani ko'proq qabul qilish", "Ko'p bekor qilish", "Ilovani kamroq ochish"],
    answer: 0,
    explain:
      "To'g'ri javob: buyurtmani ko'proq qabul qilish. Qabul foizi, kam bekor qilish, yuqori reyting va ko'proq onlayn bo'lish prioritetga ijobiy ta'sir qiladi.",
  },
  {
    text: "OSAGO sug'urtasi prioritetga nechta ball qo'shadi?",
    options: ["+4 ball", "+6 ball", "+18 ball"],
    answer: 0,
    explain:
      "To'g'ri javob: +4 ball. Materialda polis OSAGO sug'urtasi uchun +4 prioritet ball ko'rsatilgan.",
  },
  {
    text: "Yandex Pro orqali yoqilg'i quyish qancha prioritet ball beradi?",
    options: ["+6 ball", "+9 ball", "+30 ball"],
    answer: 0,
    explain:
      "To'g'ri javob: +6 ball. Yandex Pro orqali yoqilg'i quyish prioritetga qo'shimcha ball beradigan omillardan biri.",
  },
  {
    text: "Afsona darajasi qanday shart bilan olinadi?",
    options: ["36 oy ketma-ket 10 000 ball", "Bir oyda 1500 ball", "Faqat yangi haydovchilarga beriladi"],
    answer: 0,
    explain:
      "To'g'ri javob: 36 oy ketma-ket 10 000 ball. Afsona - eng yuqori statuslardan biri bo'lib, doimiy yuqori natijani talab qiladi.",
  },
  {
    text: "Toshkentda Yetkazish foizi materialda qanday berilgan?",
    options: ["14.5%", "16.5%", "18.5%"],
    answer: 0,
    explain:
      "To'g'ri javob: 14.5%. Toshkent uchun Yetkazish foizi materialda 14.5% deb ko'rsatilgan.",
  },
  {
    text: "Komfort tarifida hayvon tashish narxi qancha?",
    options: ["4 000 so'm", "5 000 so'm", "8 000 so'm"],
    answer: 0,
    explain:
      "To'g'ri javob: 4 000 so'm. Komfort tarifida uy hayvonini tashish qo'shimcha xizmati 4 000 so'm deb berilgan.",
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
  let unanswered = 0;
  const wrongItems = [];

  questions.forEach((question, index) => {
    const selected = form.querySelector(`input[name="question-${index}"]:checked`);
    const correctAnswer = form.querySelector(
      `.answer[data-question="${index}"][data-option="${question.answer}"]`
    );

    correctAnswer.classList.add("correct");

    if (!selected) {
      unanswered += 1;
      wrongItems.push({
        number: index + 1,
        text: question.text,
        selected: "Javob belgilanmagan",
        correct: question.options[question.answer],
        explain: question.explain,
      });
      return;
    }

    const selectedIndex = Number(selected.value);
    if (selectedIndex === question.answer) {
      score += 1;
      return;
    }

    selected.closest(".answer").classList.add("wrong");
    wrongItems.push({
      number: index + 1,
      text: question.text,
      selected: question.options[selectedIndex],
      correct: question.options[question.answer],
      explain: question.explain,
    });
  });

  const percent = Math.round((score / questions.length) * 100);
  const passed = percent >= 80;
  const wrongCount = questions.length - score - unanswered;

  result.className = `quiz-result show ${passed ? "success" : "danger"}`;
  result.innerHTML = `
    <strong>${score}/${questions.length} to'g'ri - ${percent}%</strong>
    <p>${
      passed
        ? "Yaxshi natija. Operator materialni ishlatishga tayyor."
        : "Yana bir marta darslarni ko'rib chiqing, keyin qayta topshiring."
    }</p>
    <div class="result-grid">
      <div class="result-metric"><b>${score}</b><span>To'g'ri javob</span></div>
      <div class="result-metric"><b>${wrongCount}</b><span>Noto'g'ri javob</span></div>
      <div class="result-metric"><b>${unanswered}</b><span>Belgilanmagan</span></div>
      <div class="result-metric"><b>${percent}%</b><span>Umumiy natija</span></div>
    </div>
    ${
      wrongItems.length
        ? `<p><b>Xato qilingan savollar bo'yicha to'liq javob:</b></p>
          <div class="review-list">
            ${wrongItems
              .map(
                (item) => `
                  <article class="review-item">
                    <h4>${item.number}. ${item.text}</h4>
                    <p>Sizning javobingiz: <b>${item.selected}</b></p>
                    <p class="right-answer">To'g'ri javob: ${item.correct}</p>
                    <p>${item.explain}</p>
                  </article>
                `
              )
              .join("")}
          </div>`
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
