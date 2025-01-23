// Function to display chapters based on selected subject
function showChapters(subject) {
    const chapterList = document.getElementById('chapter-list');
    let chapters = [];
    let questions = [];
    let timeLimit = 0;

    switch (subject) {
        case 'Physics':
            chapters = [
                "প্রথম অধ্যায় (ভৌত জগত ও পরিমাপ)",
                "দ্বিতীয় অধ্যায় (গতি)",
                "তৃতীয় অধ্যায় (বল)",
                "চতুর্থ অধ্যায় (কাজ, ক্ষমতা ও শক্তি)",
                "পঞ্চম অধ্যায় (পদার্থের অবস্থা ও চাপ)",
                "ষষ্ঠ অধ্যায় (বস্তুর উপর তাপের প্রভাব)",
                "সপ্তম অধ্যায় (তরঙ্গ ও শব্দ)",
                "অষ্টম অধ্যায় (আলোর প্রতিফলন)",
                "নবম অধ্যায় (আলোর প্রতিসরণ)",
                "দশম অধ্যায় (স্থির তড়িৎ)",
                "একাদশ অধ্যায় (চল তড়িৎ)",
                "দ্বাদশ অধ্যায় (বিদ্যুতের চৌম্বক ক্রিয়া)"
            ];
            questions = [
                "What is the formula for velocity?",
                "Define acceleration.",
                "What is Newton's first law?"
            ];
            timeLimit = 30;  // Time limit in minutes
            break;
        case 'Chemistry':
            chapters = [
                "প্রথম অধ্যায় (রসায়নের ধারণা)",
                "দ্বিতীয় অধ্যায় (পদার্থের অবস্থা)",
                "তৃতীয় অধ্যায় (পদার্থের গঠন)"
            ];
            questions = [
                "What is the atomic number of Carbon?",
                "Explain the law of constant proportions."
            ];
            timeLimit = 25;
            break;
        case 'Biology':
            chapters = [
                "প্রথম অধ্যায় (জীবন পাঠ)",
                "দ্বিতীয় অধ্যায় (জীব কোষ ও টিস্যু)"
            ];
            questions = [
                "What is cell theory?",
                "Describe the process of photosynthesis."
            ];
            timeLimit = 20;
            break;
        default:
            chapters = [];
            questions = [];
            timeLimit = 0;
    }

    // Display chapters for the selected subject
    chapterList.innerHTML = `<h3>${subject} - অধ্যায়সমূহ</h3>`;
    const ul = document.createElement('ul');
    chapters.forEach(chapter => {
        const li = document.createElement('li');
        li.textContent = chapter;
        li.onclick = () => startTest(questions, timeLimit);
        ul.appendChild(li);
    });
    chapterList.appendChild(ul);
}

// Function to start the test for the selected chapter
function startTest(questions, timeLimit) {
    const questionnaire = document.getElementById('questionnaire');
    const timer = document.getElementById('timer');

    questionnaire.innerHTML = '<h3>Test Started</h3>';
    let questionHTML = '<ul>';
    questions.forEach((q, index) => {
        questionHTML += `<li>${index + 1}. ${q}</li>`;
    });
    questionHTML += '</ul>';
    questionnaire.innerHTML += questionHTML;

    let minutes = timeLimit;
    let seconds = 0;

    const timerInterval = setInterval(() => {
        if (minutes === 0 && seconds === 0) {
            clearInterval(timerInterval);
            timer.innerHTML = "Time's up!";
            alert("Test Over");
        } else {
            if (seconds === 0) {
                seconds = 59;
                minutes--;
            } else {
                seconds--;
            }
            timer.innerHTML = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
        }
    }, 1000);
}