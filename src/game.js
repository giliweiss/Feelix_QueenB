function startGame() {
  const container = document.getElementById("game");

  container.innerHTML = `
  <div style="direction: rtl; text-align: right;">
      <h2>שאלה 1</h2>
      <img src="./image1_game.jpg" alt="תמונה לדוגמה" width="300">
      <p>מה אתם חושבים על הדמות שבתמונה?</p>
      <button onclick="handleChoice('הומלס')">הומלס</button>
      <button onclick="handleChoice('מנכל סטארטאפ מצליח')">מנכ"ל סטארטאפ מצליח</button>
      <button onclick="handleChoice('טכנאי')">טכנאי</button>
  </div>
  `;
}

function handleChoice(choice) {
  const correctAnswer = "מנכל סטארטאפ מצליח";

  const container = document.getElementById("game");

  if (choice === correctAnswer) {
    container.innerHTML = `
        <h2>מעולה!</h2>
        <p>נכון מאוד – לפעמים המראה יכול להטעות 😉</p>
        <button onclick="question2()">שאלה הבאה</button>
      `;
  } else {
    container.innerHTML = `
        <h2>לא נכון 😅</h2>
        <p>סטיגמה התנפצה! לא כל מי שנראה מוזנח הוא הומלס, ולא כל טכנאי נראה "טכני".</p>
        <p>תנסי/תנסה להסתכל מעבר למראה החיצוני 😊</p>
        <button onclick="startGame()">נסה שוב</button>
      `;
  }
}

function question2() {
  const container = document.getElementById("game");

  container.innerHTML = `
    <h2>שאלה 2</h2>
    <img src="./image2_game.jpg" alt="תמונה לדוגמה" width="300">
    <p>	מי הבחורה בתמונה?</p>
    <button onclick="handleChoice2('דוגמנית באינסטגרם')">דוגמנית באינסטגרם</button>
    <button onclick="handleChoice2('פרופסורית למדעי המחשב')">פרופסורית למדעי המחשב</button>
    <button onclick="handleChoice2('סטודנטית לקולנוע')">סטודנטית לקולנוע</button>
  `;
}

function handleChoice2(choice) {
  const correctAnswer = "פרופסורית למדעי המחשב";
  const container = document.getElementById("game");

  if (choice === correctAnswer) {
    container.innerHTML = `
      <h2>כל הכבוד!</h2>
      <p>נכון! לפעמים אנחנו שופטים על פי לבוש או מבט – וזה לא תמיד משקף את המציאות 😊</p>
      <button onclick="question3()">שאלה הבאה</button>
    `;
  } else {
    container.innerHTML = `
      <h2>סטיגמה נוספת התנפצה 💥</h2>
      <p>מראה חיצוני הוא לא מדד לידע או מקצועיות</p>
      <button onclick="question2()">נסה שוב</button>
    `;
  }
}

function question3() {
  const container = document.getElementById("game");

  container.innerHTML = `
    <h2>שאלה 3</h2>
    <img src="./image3_game.jpg" alt="תמונה לדוגמה" width="300">
    <p>מי האיש עם הקעקועים והעגילים?</p>
    <button onclick="handleChoice3('אסיר משוחרר')">אסיר משוחרר</button>
    <button onclick="handleChoice3('מורה לחינוך גופני')">מורה לחינוך גופני</button>
    <button onclick="handleChoice3('רופא מנתח')">רופא מנתח</button>
    <button onclick="handleChoice3('ברמן')">ברמן</button>
  `;
}

function handleChoice3(choice) {
  const correctAnswer = "רופא מנתח";
  const container = document.getElementById("game");

  if (choice === correctAnswer) {
    container.innerHTML = `
      <h2>נכון מאוד!</h2>
      <p>לא כל אדם עם קעקועים ועגילים הוא בעייתי – לפעמים הוא פשוט מנתח בחדר ניתוח!</p>
      <button onclick="question4()">שאלה הבאה</button>
    `;
  } else {
    container.innerHTML = `
      <h2>לא הפעם</h2>
      <p>הופעה חיצונית לא תמיד משקפת את המקצוע או האישיות. ננסה שוב?</p>
      <button onclick="question3()">נסה שוב</button>
    `;
  }
}

function question4() {
  const container = document.getElementById("game");

  container.innerHTML = `
    <h2>שאלה 4</h2>
    <img src="./image4_game.jpg" alt="תמונה לדוגמה" width="300">
    <p>מה התפקיד של האיש עם החליפה והחיוך?</p>
    <button onclick="handleChoice4('פוליטיקאי')">פוליטיקאי</button>
    <button onclick="handleChoice4('עורך דין מפורסם')">עורך דין מפורסם</button>
    <button onclick="handleChoice4('סוכן נדל”ן')">סוכן נדל”ן</button>
    <button onclick="handleChoice4('גנב שנעצר על הונאה')">גנב שנעצר על הונאה</button>
  `;
}

function handleChoice4(choice) {
  const correctAnswer = "גנב שנעצר על הונאה";
  const container = document.getElementById("game");

  if (choice === correctAnswer) {
    container.innerHTML = `
      <h2>נכון!</h2>
      <p>לא כל מי שמחייך ולובש חליפה הוא אדם ישר 😅</p>
      <button onclick="question5()">שאלה הבאה</button>
    `;
  } else {
    container.innerHTML = `
      <h2>לא נכון</h2>
      <p>גם מראה ייצוגי יכול להטעות. ננסה שוב?</p>
      <button onclick="question4()">נסה שוב</button>
    `;
  }
}

function question5() {
  const container = document.getElementById("game");

  container.innerHTML = `
    <h2>שאלה 5</h2>
    <img src="./image5_game.jpg" alt="תמונה לדוגמה" width="300">
    <p>מי הבחורה עם החיג'אב?</p>
    <button onclick="handleChoice5('מדריכת דת')">מדריכת דת</button>
    <button onclick="handleChoice5('סטודנטית לרפואה')">סטודנטית לרפואה</button>
    <button onclick="handleChoice5('מתכנתת ב־Google')">מתכנתת ב־Google</button>
    <button onclick="handleChoice5('מורה לערבית')">מורה לערבית</button>
  `;
}

function handleChoice5(choice) {
  const correctAnswer = "מתכנתת ב־Google";
  const container = document.getElementById("game");

  if (choice === correctAnswer) {
    container.innerHTML = `
      <h2>בדיוק!</h2>
      <p>המראה החיצוני לא קובע מה אדם יודע או עושה 😊</p>
      <button onclick="question6()">שאלה הבאה</button>
    `;
  } else {
    container.innerHTML = `
      <h2>ניסיון טוב!</h2>
      <p>החיג'אב לא אומר שהיא לא בתחום ההייטק – להפך!</p>
      <button onclick="question5()">נסה שוב</button>
    `;
  }
}

function question6() {
  const container = document.getElementById("game");

  container.innerHTML = `
    <h2>שאלה 6</h2>
    <img src="./image6_game.jpg" alt="תמונה לדוגמה" width="300">
    <p>הנער עם המשקפיים והפנים הביישניות הוא…</p>
    <button onclick="handleChoice6('גיימר שלא יוצא מהבית')">גיימר שלא יוצא מהבית</button>
    <button onclick="handleChoice6('שחקן כדורסל בנוער מכבי ת״א')">שחקן כדורסל בנוער מכבי ת״א</button>
    <button onclick="handleChoice6('תלמיד מצטיין בלבד')">תלמיד מצטיין בלבד</button>
    <button onclick="handleChoice6('גאון מתמטי ולא ספורטיבי')">גאון מתמטי ולא ספורטיבי</button>
  `;
}

function handleChoice6(choice) {
  const correctAnswer = "שחקן כדורסל בנוער מכבי ת״א";
  const container = document.getElementById("game");

  if (choice === correctAnswer) {
    container.innerHTML = `
    <h2>כל הכבוד!</h2>
      <p>גם ביישנות יכולה להסתיר כישרון פיזי מרשים!</p>
      <hr>
      <h3 style="color: purple;">💜 זכרי – את יכולה להיות כל מה שתרצי! 👑</h3>
      <p>לא משנה איך את נראית, מה את לובשת, או מאיפה באת – העולם מחכה לכישרון שלך.</p>
      <button onclick="startGame()">שחקי שוב</button>
    `;
  } else {
    container.innerHTML = `
      <h2>לא נכון</h2>
      <p>לפעמים אנחנו טועים בהנחות שלנו. ננסה שוב?</p>
      <button onclick="question6()">נסה שוב</button>
    `;
  }
}
