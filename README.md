# דף נחיתה להצעת מחיר - 2Create

דף נחיתה מודרני ומקצועי להצגת הצעת מחיר מחברת 2Create, כולל טופס יצירת קשר עם שליחת אימיילים.

## תכונות

- ✅ עיצוב מודרני ומינימליסטי
- ✅ תמיכה בעברית ו-RTL
- ✅ רספונסיבי למחשב ונייד
- ✅ טופס יצירת קשר עם אימות
- ✅ שליחת אימיילים עם Nodemailer
- ✅ הודעות הצלחה ושגיאה
- ✅ גלילה חלקה
- ✅ אנימציות CSS

## התקנה

1. **שכפול הפרויקט**
```bash
git clone [repository-url]
cd bulla
```

2. **התקנת חבילות**
```bash
npm install
```

3. **הגדרת משתני סביבה**
צרו קובץ `.env` בתיקיית הפרויקט:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
PORT=3000
```

**הערה חשובה**: לשליחת אימיילים דרך Gmail, עליכם:
- להפעיל "App Passwords" ב-Google Account
- להשתמש ב-App Password במקום הסיסמה הרגילה

## הרצה

### מצב פיתוח
```bash
npm run dev
```

### מצב הפקה
```bash
npm start
```

הדף יהיה זמין בכתובת: `http://localhost:3000`

## מבנה הפרויקט

```
bulla/
├── public/           # קבצים סטטיים
│   ├── index.html   # דף הנחיתה הראשי
│   ├── style.css    # עיצוב CSS
│   └── script.js    # JavaScript
├── server.js        # שרת Express
├── package.json     # תלויות והגדרות
└── README.md        # מסמך זה
```

## טכנולוגיות

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Node.js, Express
- **Email**: Nodemailer
- **Fonts**: Heebo (Google Fonts)

## פונקציונליות

### טופס יצירת קשר
- שדות: שם, אימייל, טלפון (אופציונלי), הודעה
- אימות בזמן אמת
- הודעות שגיאה והצלחה
- מצב טעינה

### עיצוב
- צבעים: כחול כהה (#040240), ירוק-צהוב (#BFF205, #D7F205), ירוק זית (#7D8C0B), שחור (#0D0D0D)
- פונט: Heebo
- כרטיסים עם צללים רכים ואלמנטים צבעוניים
- רקע gradient עם הדגשות צבעוניות
- אנימציות hover מתקדמות

### רספונסיביות
- נייד: עד 480px
- טאבלט: 481px - 768px
- מחשב: 769px ומעלה

## הגדרות אימייל

1. **Gmail Setup**:
   - עברו ל: [Google Account Security](https://myaccount.google.com/security)
   - הפעילו "2-Step Verification"
   - יצרו "App Password" חדש
   - השתמשו בסיסמת האפליקציה ב-`.env`

2. **משתני סביבה**:
```env
EMAIL_USER=yourname@gmail.com
EMAIL_PASS=your-16-character-app-password
```

## פריסה (Deployment)

### Vercel
```bash
npm i -g vercel
vercel
```

### Heroku
```bash
heroku create your-app-name
heroku config:set EMAIL_USER=your-email@gmail.com
heroku config:set EMAIL_PASS=your-app-password
git push heroku main
```

## תמיכה

לשאלות או בעיות, צרו קשר עם 2Create:
- 📧 hello@2create.co.il
- 📱 גיא: 050-3504937
- 📱 עידו: 054-7667775

## רישיון

© 2025 2Create. כל הזכויות שמורות. 