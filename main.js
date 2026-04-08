document.addEventListener('DOMContentLoaded', () => {
  const appContent = document.getElementById('app-content');

  const hiragana = [
    // Monograms
    { char: "あ", romaji: "a" }, { char: "い", romaji: "i" }, { char: "う", romaji: "u" }, { char: "え", romaji: "e" }, { char: "お", romaji: "o" },
    { char: "か", romaji: "ka" }, { char: "き", romaji: "ki" }, { char: "く", romaji: "ku" }, { char: "け", romaji: "ke" }, { char: "こ", romaji: "ko" },
    { char: "さ", romaji: "sa" }, { char: "し", romaji: "shi" }, { char: "す", romaji: "su" }, { char: "せ", romaji: "se" }, { char: "そ", romaji: "so" },
    { char: "た", romaji: "ta" }, { char: "ち", romaji: "chi" }, { char: "つ", romaji: "tsu" }, { char: "て", romaji: "te" }, { char: "と", romaji: "to" },
    { char: "な", romaji: "na" }, { char: "に", romaji: "ni" }, { char: "ぬ", romaji: "nu" }, { char: "ね", romaji: "ne" }, { char: "の", romaji: "no" },
    { char: "は", romaji: "ha" }, { char: "ひ", romaji: "hi" }, { char: "ふ", romaji: "fu" }, { char: "へ", romaji: "he" }, { char: "ほ", romaji: "ho" },
    { char: "ま", romaji: "ma" }, { char: "み", romaji: "mi" }, { char: "む", romaji: "mu" }, { char: "め", romaji: "me" }, { char: "も", romaji: "mo" },
    { char: "や", romaji: "ya" }, { char: "ゆ", romaji: "yu" }, { char: "よ", romaji: "yo" },
    { char: "ら", romaji: "ra" }, { char: "り", romaji: "ri" }, { char: "る", romaji: "ru" }, { char: "ろ", romaji: "ro" },
    { char: "わ", romaji: "wa" }, { char: "を", romaji: "wo" },
    { char: "ん", romaji: "n" },

    // Dakuten and Handakuten
    { char: "が", romaji: "ga" }, { char: "ぎ", romaji: "gi" }, { char: "ぐ", romaji: "gu" }, { char: "げ", romaji: "ge" }, { char: "ご", romaji: "go" },
    { char: "ざ", romaji: "za" }, { char: "じ", romaji: "ji" }, { char: "ず", romaji: "zu" }, { char: "ぜ", romaji: "ze" }, { char: "ぞ", romaji: "zo" },
    { char: "だ", romaji: "da" }, { char: "ぢ", romaji: "ji" }, { char: "づ", romaji: "zu" }, { char: "で", romaji: "de" }, { char: "ど", romaji: "do" },
    { char: "ば", romaji: "ba" }, { char: "び", romaji: "bi" }, { char: "ぶ", romaji: "bu" }, { char: "べ", romaji: "be" }, { char: "ぼ", romaji: "bo" },
    { char: "ぱ", romaji: "pa" }, { char: "ぴ", romaji: "pi" }, { char: "ぷ", romaji: "pu" }, { char: "ぺ", romaji: "pe" }, { char: "ぽ", romaji: "po" },

    // Combination sounds (Yōon)
    { char: "きゃ", romaji: "kya" }, { char: "きゅ", romaji: "kyu" }, { char: "きょ", romaji: "kyo" },
    { char: "しゃ", romaji: "sha" }, { char: "しゅ", romaji: "shu" }, { char: "しょ", romaji: "sho" },
    { char: "ちゃ", romaji: "cha" }, { char: "ちゅ", romaji: "chu" }, { char: "ちょ", romaji: "cho" },
    { char: "にゃ", romaji: "nya" }, { char: "にゅ", romaji: "nyu" }, { char: "にょ", romaji: "nyo" },
    { char: "ひゃ", romaji: "hya" }, { char: "ひゅ", romaji: "hyu" }, { char: "ひょ", romaji: "hyo" },
    { char: "みゃ", romaji: "mya" }, { char: "みゅ", romaji: "myu" }, { char: "みょ", romaji: "myo" },
    { char: "りゃ", romaji: "rya" }, { char: "りゅ", romaji: "ryu" }, { char: "りょ", romaji: "ryo" },
    { char: "ぎゃ", romaji: "gya" }, { char: "ぎゅ", romaji: "gyu" }, { char: "ぎょ", romaji: "gyo" },
    { char: "じゃ", romaji: "ja" }, { char: "じゅ", romaji: "ju" }, { char: "じょ", romaji: "jo" },
    { char: "びゃ", romaji: "bya" }, { char: "びゅ", romaji: "byu" }, { char: "びょ", romaji: "byo" },
    { char: "ぴゃ", romaji: "pya" }, { char: "ぴゅ", romaji: "pyu" }, { char: "ぴょ", romaji: "pyo" }
  ];

  const katakana = [
    // Monograms
    { char: "ア", romaji: "a" }, { char: "イ", romaji: "i" }, { char: "ウ", romaji: "u" }, { char: "エ", romaji: "e" }, { char: "オ", romaji: "o" },
    { char: "カ", romaji: "ka" }, { char: "キ", romaji: "ki" }, { char: "ク", romaji: "ku" }, { char: "ケ", romaji: "ke" }, { char: "コ", romaji: "ko" },
    { char: "サ", romaji: "sa" }, { char: "シ", romaji: "shi" }, { char: "ス", romaji: "su" }, { char: "セ", romaji: "se" }, { char: "ソ", romaji: "so" },
    { char: "タ", romaji: "ta" }, { char: "チ", romaji: "chi" }, { char: "ツ", romaji: "tsu" }, { char: "テ", romaji: "te" }, { char: "ト", romaji: "to" },
    { char: "ナ", romaji: "na" }, { char: "ニ", romaji: "ni" }, { char: "ヌ", romaji: "nu" }, { char: "ネ", romaji: "ne" }, { char: "ノ", romaji: "no" },
    { char: "ハ", romaji: "ha" }, { char: "ヒ", romaji: "hi" }, { char: "フ", romaji: "fu" }, { char: "ヘ", romaji: "he" }, { char: "ホ", romaji: "ho" },
    { char: "マ", romaji: "ma" }, { char: "ミ", romaji: "mi" }, { char: "ム", romaji: "mu" }, { char: "メ", romaji: "me" }, { char: "モ", romaji: "mo" },
    { char: "ヤ", romaji: "ya" }, { char: "ユ", romaji: "yu" }, { char: "ヨ", romaji: "yo" },
    { char: "ラ", romaji: "ra" }, { char: "リ", romaji: "ri" }, { char: "ル", romaji: "ru" }, { char: "レ", romaji: "re" }, { char: "ロ", romaji: "ro" },
    { char: "ワ", romaji: "wa" }, { char: "ヲ", romaji: "wo" },
    { char: "ン", romaji: "n" },

    // Dakuten and Handakuten
    { char: "ガ", romaji: "ga" }, { char: "ギ", romaji: "gi" }, { char: "グ", romaji: "gu" }, { char: "ゲ", romaji: "ge" }, { char: "ゴ", romaji: "go" },
    { char: "ザ", romaji: "za" }, { char: "ジ", romaji: "ji" }, { char: "ズ", romaji: "zu" }, { char: "ゼ", romaji: "ze" }, { char: "ゾ", romaji: "zo" },
    { char: "ダ", romaji: "da" }, { char: "ヂ", romaji: "ji" }, { char: "ヅ", romaji: "zu" }, { char: "デ", romaji: "de" }, { char: "ド", romaji: "do" },
    { char: "バ", romaji: "ba" }, { char: "ビ", romaji: "bi" }, { char: "ブ", romaji: "bu" }, { char: "ベ", romaji: "be" }, { char: "ボ", romaji: "bo" },
    { char: "パ", romaji: "pa" }, { char: "ピ", romaji: "pi" }, { char: "プ", romaji: "pu" }, { char: "ペ", romaji: "pe" }, { char: "ポ", romaji: "po" },

    // Combination sounds (Yōon)
    { char: "キャ", romaji: "kya" }, { char: "キュ", romaji: "kyu" }, { char: "キョ", romaji: "kyo" },
    { char: "シャ", romaji: "sha" }, { char: "シュ", romaji: "shu" }, { char: "ショ", romaji: "sho" },
    { char: "チャ", romaji: "cha" }, { char: "チュ", romaji: "chu" }, { char: "チョ", romaji: "cho" },
    { char: "ニャ", romaji: "nya" }, { char: "ニュ", romaji: "nyu" }, { char: "ニョ", romaji: "nyo" },
    { char: "ヒャ", romaji: "hya" }, { char: "ヒュ", romaji: "hyu" }, { char: "ヒョ", romaji: "hyo" },
    { char: "ミャ", romaji: "mya" }, { char: "ミュ", romaji: "myu" }, { char: "ミョ", romaji: "myo" },
    { char: "リャ", romaji: "rya" }, { char: "リュ", romaji: "ryu" }, { char: "リョ", romaji: "ryo" },
    { char: "ギャ", romaji: "gya" }, { char: "ギュ", romaji: "gyu" }, { char: "ギョ", romaji: "gyo" },
    { char: "ジャ", romaji: "ja" }, { char: "ジュ", romaji: "ju" }, { char: "ジョ", romaji: "jo" },
    { char: "ビャ", romaji: "bya" }, { char: "ビュ", romaji: "byu" }, { char: "ビョ", romaji: "byo" },
    { char: "ピャ", romaji: "pya" }, { char: "ピュ", romaji: "pyu" }, { char: "ピョ", romaji: "pyo" }
  ];

  const jlptN5Vocab = [
    { japanese: "こんにちは", romaji: "konnichiwa", english: "Hello" },
    { japanese: "ありがとう", romaji: "arigatou", english: "Thank you" },
    { japanese: "さようなら", romaji: "sayounara", english: "Goodbye" },
    { japanese: "はい", romaji: "hai", english: "Yes" },
    { japanese: "いいえ", romaji: "iie", english: "No" },
    { japanese: "ごめんなさい", romaji: "gomennasai", english: "Sorry" },
    { japanese: "おねがいします", romaji: "onegaishimasu", english: "Please" },
    { japanese: "すみません", romaji: "sumimasen", english: "Excuse me" },
    { japanese: "お元気ですか", romaji: "ogenki desu ka", english: "How are you?" },
    { japanese: "私は元気です", romaji: "watashi wa genki desu", english: "I am fine" }
  ];

  function renderCharacterGrid(characters) {
    let html = '<div class="character-grid">';
    characters.forEach(item => {
      html += `
        <div class="character-card">
          <div class="character">${item.char}</div>
          <div class="romaji">${item.romaji}</div>
        </div>
      `;
    });
    html += '</div>';
    return html;
  }

  function renderVocabularyList(vocabulary) {
    let html = '<div class="vocabulary-list">';
    vocabulary.forEach(item => {
      html += `
        <div class="vocabulary-item">
          <div class="japanese">${item.japanese}</div>
          <div class="romaji">${item.romaji}</div>
          <div class="english">${item.english}</div>
        </div>
      `;
    });
    html += '</div>';
    return html;
  }

  window.filterVocabulary = (level) => {
    const searchInput = document.getElementById(`${level.toLowerCase().replace(' ', '')}-search`);
    const searchTerm = searchInput.value.toLowerCase();
    let filteredVocab = [];

    if (level === 'N5') {
      filteredVocab = jlptN5Vocab.filter(item =>
        item.japanese.toLowerCase().includes(searchTerm) ||
        item.romaji.toLowerCase().includes(searchTerm) ||
        item.english.toLowerCase().includes(searchTerm)
      );
    }
    // Future levels will be added here

    const vocabContainer = appContent.querySelector('.vocabulary-list');
    if (vocabContainer) {
      vocabContainer.innerHTML = renderVocabularyList(filteredVocab);
    }
  };

  function startPractice(type, data) {
    console.log(`Starting practice for: ${type}`);
    const practiceArea = document.getElementById('practice-area');
    practiceArea.innerHTML = `<h2>${type} Practice</h2><p>Practice content will appear here.</p>`;
    // Logic for flashcards will go here later
  }

  function loadContent(section) {
    let contentHtml = '';
    if (section === 'Hiragana') {
      contentHtml = `
        <h1>Hiragana Chart</h1>
        ${renderCharacterGrid(hiragana)}
        <button id="hiragana-practice-btn">Practice Hiragana</button>
        <div id="practice-area"></div>
      `;
    } else if (section === 'Katakana') {
      contentHtml = `
        <h1>Katakana Chart</h1>
        ${renderCharacterGrid(katakana)}
        <button id="katakana-practice-btn">Practice Katakana</button>
        <div id="practice-area"></div>
      `;
    } else if (section === 'JLPT N5') {
      contentHtml = `
        <h1>JLPT N5 Vocabulary</h1>
        <input type="text" id="n5-search" placeholder="Search N5 Vocabulary..." onkeyup="filterVocabulary('N5')">
        ${renderVocabularyList(jlptN5Vocab)}
        <button id="n5-practice-btn">Practice N5 Vocabulary</button>
        <div id="practice-area"></div>
      `;
    } else {
      contentHtml = `<h1>${section} Section</h1><p>Content for ${section} will go here.</p>`;
    }
    appContent.innerHTML = contentHtml;
    console.log(`Loading content for: ${section}`);

    // Add event listeners for practice buttons after content is loaded
    if (section === 'Hiragana') {
      document.getElementById('hiragana-practice-btn').addEventListener('click', () => {
        startPractice('Hiragana', hiragana);
      });
    } else if (section === 'Katakana') {
      document.getElementById('katakana-practice-btn').addEventListener('click', () => {
        startPractice('Katakana', katakana);
      });
    } else if (section === 'JLPT N5') {
      document.getElementById('n5-practice-btn').addEventListener('click', () => {
        startPractice('JLPT N5 Vocabulary', jlptN5Vocab);
      });
    }
  }

  document.getElementById('hiragana-link').addEventListener('click', (e) => {
    e.preventDefault();
    loadContent('Hiragana');
  });

  document.getElementById('katakana-link').addEventListener('click', (e) => {
    e.preventDefault();
    loadContent('Katakana');
  });

  document.getElementById('n5-link').addEventListener('click', (e) => {
    e.preventDefault();
    loadContent('JLPT N5');
  });

  document.getElementById('n4-link').addEventListener('click', (e) => {
    e.preventDefault();
    loadContent('JLPT N4');
  });

  document.getElementById('n3-link').addEventListener('click', (e) => {
    e.preventDefault();
    loadContent('JLPT N3');
  });

  document.getElementById('n2-link').addEventListener('click', (e) => {
    e.preventDefault();
    loadContent('JLPT N2');
  });

  document.getElementById('n1-link').addEventListener('click', (e) => {
    e.preventDefault();
    loadContent('JLPT N1');
  });
});