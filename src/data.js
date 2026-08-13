export const letters=[{"letter": "A", "sound": "/æ/", "word": "Apple", "khmer": "ផ្លែប៉ោម", "emoji": "🍎"}, {"letter": "B", "sound": "/b/", "word": "Ball", "khmer": "បាល់", "emoji": "⚽"}, {"letter": "C", "sound": "/k/", "word": "Cat", "khmer": "ឆ្មា", "emoji": "🐱"}, {"letter": "D", "sound": "/d/", "word": "Dog", "khmer": "ឆ្កែ", "emoji": "🐶"}, {"letter": "E", "sound": "/ɛ/", "word": "Egg", "khmer": "ស៊ុត", "emoji": "🥚"}, {"letter": "F", "sound": "/f/", "word": "Fish", "khmer": "ត្រី", "emoji": "🐟"}, {"letter": "G", "sound": "/ɡ/", "word": "Goat", "khmer": "ពពែ", "emoji": "🐐"}, {"letter": "H", "sound": "/h/", "word": "Hat", "khmer": "មួក", "emoji": "🧢"}, {"letter": "I", "sound": "/ɪ/", "word": "Igloo", "khmer": "ផ្ទះទឹកកក", "emoji": "🧊"}, {"letter": "J", "sound": "/dʒ/", "word": "Juice", "khmer": "ទឹកផ្លែឈើ", "emoji": "🧃"}, {"letter": "K", "sound": "/k/", "word": "Key", "khmer": "សោ", "emoji": "🔑"}, {"letter": "L", "sound": "/l/", "word": "Lion", "khmer": "តោ", "emoji": "🦁"}, {"letter": "M", "sound": "/m/", "word": "Monkey", "khmer": "ស្វា", "emoji": "🐒"}, {"letter": "N", "sound": "/n/", "word": "Nest", "khmer": "សំបុក", "emoji": "🪺"}, {"letter": "O", "sound": "/ɒ/", "word": "Orange", "khmer": "ក្រូច", "emoji": "🍊"}, {"letter": "P", "sound": "/p/", "word": "Panda", "khmer": "ខ្លាឃ្មុំផេនដា", "emoji": "🐼"}, {"letter": "Q", "sound": "/kw/", "word": "Queen", "khmer": "ព្រះមហាក្សត្រី", "emoji": "👑"}, {"letter": "R", "sound": "/r/", "word": "Rabbit", "khmer": "ទន្សាយ", "emoji": "🐰"}, {"letter": "S", "sound": "/s/", "word": "Sun", "khmer": "ព្រះអាទិត្យ", "emoji": "☀️"}, {"letter": "T", "sound": "/t/", "word": "Tiger", "khmer": "ខ្លា", "emoji": "🐯"}, {"letter": "U", "sound": "/ʌ/", "word": "Umbrella", "khmer": "ឆ័ត្រ", "emoji": "☂️"}, {"letter": "V", "sound": "/v/", "word": "Van", "khmer": "ឡានវ៉ាន់", "emoji": "🚐"}, {"letter": "W", "sound": "/w/", "word": "Whale", "khmer": "ត្រីបាឡែន", "emoji": "🐋"}, {"letter": "X", "sound": "/ks/", "word": "Box", "khmer": "ប្រអប់", "emoji": "📦"}, {"letter": "Y", "sound": "/j/", "word": "Yo-yo", "khmer": "យ៉ូយ៉ូ", "emoji": "🪀"}, {"letter": "Z", "sound": "/z/", "word": "Zebra", "khmer": "សេះបង្កង់", "emoji": "🦓"}];
export const categories=[
{name:'Animals',icon:'🐾',words:['cat','dog','fish','lion','monkey','rabbit','tiger','whale','zebra']},
{name:'Food',icon:'🍎',words:['apple','egg','orange','juice']},
{name:'School',icon:'🎒',words:['book','pen','pencil','bag']},
{name:'Colors',icon:'🎨',words:['red','blue','green','yellow']},
{name:'Family',icon:'👨‍👩‍👧',words:['mother','father','sister','brother']},
{name:'Home',icon:'🏠',words:['house','door','chair','table']}];
export const quiz=[
{q:'Which word starts with /b/?',options:['Ball','Cat','Dog'],answer:'Ball'},
{q:'Which letter makes the /m/ sound?',options:['M','T','S'],answer:'M'},
{q:'What is 🦁?',options:['Lion','Tiger','Rabbit'],answer:'Lion'},
{q:'Which word starts with H?',options:['Hat','Apple','Dog'],answer:'Hat'},
{q:'What is 🍊?',options:['Orange','Egg','Apple'],answer:'Orange'},
{q:'Which letter is for Zebra?',options:['Z','X','Y'],answer:'Z'}];
// ============================================================
// PRONUNCIATION DATA
// VOWELS + DIPHTHONGS + CONSONANTS
// ============================================================

export const pronunciationLessons = {

  // ----------------------------------------------------------
  // VOWELS
  // ----------------------------------------------------------
  vowels: [

    {
      category: "Short Vowels",
      description: "Short vowel sounds",
      sounds: [
        {
          sound: "/æ/",
          name: "Short A",
          spelling: "A",
          examples: [
            { word: "cat", meaning: "ឆ្មា" },
            { word: "apple", meaning: "ផ្លែប៉ោម" },
            { word: "map", meaning: "ផែនទី" },
            { word: "bag", meaning: "កាបូប" }
          ]
        },
        {
          sound: "/e/",
          name: "Short E",
          spelling: "E",
          examples: [
            { word: "bed", meaning: "គ្រែ" },
            { word: "pen", meaning: "ប៊ិច" },
            { word: "red", meaning: "ក្រហម" },
            { word: "egg", meaning: "ស៊ុត" }
          ]
        },
        {
          sound: "/ɪ/",
          name: "Short I",
          spelling: "I",
          examples: [
            { word: "sit", meaning: "អង្គុយ" },
            { word: "fish", meaning: "ត្រី" },
            { word: "milk", meaning: "ទឹកដោះគោ" },
            { word: "pig", meaning: "ជ្រូក" }
          ]
        },
        {
          sound: "/ɒ/",
          name: "Short O",
          spelling: "O",
          examples: [
            { word: "hot", meaning: "ក្តៅ" },
            { word: "dog", meaning: "ឆ្កែ" },
            { word: "box", meaning: "ប្រអប់" },
            { word: "fox", meaning: "កញ្ជ្រោង" }
          ]
        },
        {
          sound: "/ʌ/",
          name: "Short U",
          spelling: "U",
          examples: [
            { word: "sun", meaning: "ព្រះអាទិត្យ" },
            { word: "cup", meaning: "ពែង" },
            { word: "bus", meaning: "ឡានក្រុង" },
            { word: "duck", meaning: "ទា" }
          ]
        }
      ]
    },

    {
      category: "Long Vowels",
      description: "Long vowel sounds",
      sounds: [
        {
          sound: "/iː/",
          name: "Long E",
          spelling: "EE / EA / E",
          examples: [
            { word: "see", meaning: "មើល" },
            { word: "tree", meaning: "ដើមឈើ" },
            { word: "green", meaning: "ពណ៌បៃតង" },
            { word: "eat", meaning: "ញ៉ាំ" }
          ]
        },
        {
          sound: "/ɑː/",
          name: "Long A",
          spelling: "AR / A",
          examples: [
            { word: "car", meaning: "ឡាន" },
            { word: "star", meaning: "ផ្កាយ" },
            { word: "park", meaning: "សួន" },
            { word: "father", meaning: "ឪពុក" }
          ]
        },
        {
          sound: "/ɔː/",
          name: "Long O",
          spelling: "OR / AW / AU",
          examples: [
            { word: "door", meaning: "ទ្វារ" },
            { word: "horse", meaning: "សេះ" },
            { word: "short", meaning: "ខ្លី" },
            { word: "saw", meaning: "ឃើញ" }
          ]
        },
        {
          sound: "/uː/",
          name: "Long U",
          spelling: "OO / U / EW",
          examples: [
            { word: "moon", meaning: "ព្រះចន្ទ" },
            { word: "food", meaning: "អាហារ" },
            { word: "school", meaning: "សាលារៀន" },
            { word: "blue", meaning: "ពណ៌ខៀវ" }
          ]
        },
        {
          sound: "/ɜː/",
          name: "Long ER",
          spelling: "ER / IR / UR",
          examples: [
            { word: "bird", meaning: "បក្សី" },
            { word: "girl", meaning: "ក្មេងស្រី" },
            { word: "nurse", meaning: "គិលានុបដ្ឋាយិកា" },
            { word: "bird", meaning: "បក្សី" }
          ]
        }
      ]
    }
  ],

  // ----------------------------------------------------------
  // DIPHTHONGS
  // ----------------------------------------------------------
  diphthongs: [

    {
      sound: "/eɪ/",
      name: "Long A",
      spelling: "A / AI / AY",
      examples: [
        { word: "cake", meaning: "នំខេក" },
        { word: "rain", meaning: "ភ្លៀង" },
        { word: "train", meaning: "រថភ្លើង" },
        { word: "play", meaning: "លេង" }
      ]
    },

    {
      sound: "/aɪ/",
      name: "Long I",
      spelling: "I / IGH / Y",
      examples: [
        { word: "bike", meaning: "កង់" },
        { word: "light", meaning: "ពន្លឺ" },
        { word: "night", meaning: "យប់" },
        { word: "my", meaning: "របស់ខ្ញុំ" }
      ]
    },

    {
      sound: "/ɔɪ/",
      name: "OY Sound",
      spelling: "OI / OY",
      examples: [
        { word: "coin", meaning: "កាក់" },
        { word: "boy", meaning: "ក្មេងប្រុស" },
        { word: "toy", meaning: "ប្រដាប់ក្មេងលេង" },
        { word: "point", meaning: "ចំណុច" }
      ]
    },

    {
      sound: "/aʊ/",
      name: "OW Sound",
      spelling: "OU / OW",
      examples: [
        { word: "house", meaning: "ផ្ទះ" },
        { word: "cloud", meaning: "ពពក" },
        { word: "mouse", meaning: "កណ្ដុរ" },
        { word: "cow", meaning: "គោ" }
      ]
    },

    {
      sound: "/əʊ/",
      name: "Long O",
      spelling: "O / OA / OW",
      examples: [
        { word: "go", meaning: "ទៅ" },
        { word: "boat", meaning: "ទូក" },
        { word: "road", meaning: "ផ្លូវ" },
        { word: "snow", meaning: "ព្រិល" }
      ]
    },

    {
      sound: "/ɪə/",
      name: "EAR Sound",
      spelling: "EAR / EER",
      examples: [
        { word: "ear", meaning: "ត្រចៀក" },
        { word: "near", meaning: "ជិត" },
        { word: "dear", meaning: "ជាទីស្រឡាញ់" },
        { word: "cheer", meaning: "អបអរ" }
      ]
    },

    {
      sound: "/eə/",
      name: "AIR Sound",
      spelling: "AIR / ARE",
      examples: [
        { word: "hair", meaning: "សក់" },
        { word: "care", meaning: "យកចិត្តទុកដាក់" },
        { word: "chair", meaning: "កៅអី" },
        { word: "fair", meaning: "យុត្តិធម៌" }
      ]
    },

    {
      sound: "/ʊə/",
      name: "URE Sound",
      spelling: "URE",
      examples: [
        { word: "pure", meaning: "បរិសុទ្ធ" },
        { word: "cure", meaning: "ព្យាបាល" },
        { word: "secure", meaning: "មានសុវត្ថិភាព" }
      ]
    }
  ],

  // ----------------------------------------------------------
  // CONSONANTS
  // ----------------------------------------------------------
  consonants: [
      {
          category: "Stops",
          description: "Sounds made by stopping the airflow and then releasing it.",
          sounds: [
              {
                  sound: "/p/",
                  name: "P sound",
                  spelling: "P",
                  audio: "p",
                  examples: [
                      { word: "pen", meaning: "ប៊ិច" },
                      { word: "pig", meaning: "ជ្រូក" },
                      { word: "pizza", meaning: "ភីហ្សា" }
                  ]
              },
              {
                  sound: "/b/",
                  name: "B sound",
                  spelling: "B",
                  audio: "b",
                  examples: [
                      { word: "ball", meaning: "បាល់" },
                      { word: "baby", meaning: "ទារក" },
                      { word: "book", meaning: "សៀវភៅ" }
                  ]
              },
              {
                  sound: "/t/",
                  name: "T sound",
                  spelling: "T",
                  audio: "t",
                  examples: [
                      { word: "ten", meaning: "ដប់" },
                      { word: "top", meaning: "កំពូល" },
                      { word: "table", meaning: "តុ" }
                  ]
              },
              {
                  sound: "/d/",
                  name: "D sound",
                  spelling: "D",
                  audio: "d",
                  examples: [
                      { word: "dog", meaning: "ឆ្កែ" },
                      { word: "door", meaning: "ទ្វារ" },
                      { word: "duck", meaning: "ទា" }
                  ]
              },
              {
                  sound: "/k/",
                  name: "K sound",
                  spelling: "K, C",
                  audio: "k",
                  examples: [
                      { word: "kite", meaning: "ខ្លែង" },
                      { word: "cat", meaning: "ឆ្មា" },
                      { word: "key", meaning: "កូនសោ" }
                  ]
              },
              {
                  sound: "/ɡ/",
                  name: "G sound",
                  spelling: "G",
                  audio: "g",
                  examples: [
                      { word: "go", meaning: "ទៅ" },
                      { word: "goat", meaning: "ពពែ" },
                      { word: "girl", meaning: "ក្មេងស្រី" }
                  ]
              }
          ]
      },

      {
          category: "Fricatives",
          description: "Sounds made by pushing air through a narrow opening.",
          sounds: [
              {
                  sound: "/f/",
                  name: "F sound",
                  spelling: "F, PH",
                  audio: "f",
                  examples: [
                      { word: "fish", meaning: "ត្រី" },
                      { word: "fan", meaning: "កង្ហារ" },
                      { word: "phone", meaning: "ទូរស័ព្ទ" }
                  ]
              },
              {
                  sound: "/v/",
                  name: "V sound",
                  spelling: "V",
                  audio: "v",
                  examples: [
                      { word: "van", meaning: "ឡានវ៉ែន" },
                      { word: "vase", meaning: "ថូ" },
                      { word: "voice", meaning: "សំឡេង" }
                  ]
              },
              {
                  sound: "/θ/",
                  name: "TH sound",
                  spelling: "TH",
                  audio: "th-voiceless",
                  examples: [
                      { word: "think", meaning: "គិត" },
                      { word: "three", meaning: "បី" },
                      { word: "thumb", meaning: "មេដៃ" }
                  ]
              },
              {
                  sound: "/ð/",
                  name: "Voiced TH sound",
                  spelling: "TH",
                  audio: "th-voiced",
                  examples: [
                      { word: "this", meaning: "នេះ" },
                      { word: "that", meaning: "នោះ" },
                      { word: "they", meaning: "ពួកគេ" }
                  ]
              },
              {
                  sound: "/s/",
                  name: "S sound",
                  spelling: "S, C",
                  audio: "s",
                  examples: [
                      { word: "sun", meaning: "ព្រះអាទិត្យ" },
                      { word: "snake", meaning: "ពស់" },
                      { word: "city", meaning: "ទីក្រុង" }
                  ]
              },
              {
                  sound: "/z/",
                  name: "Z sound",
                  spelling: "Z, S",
                  audio: "z",
                  examples: [
                      { word: "zoo", meaning: "សួនសត្វ" },
                      { word: "zebra", meaning: "សេះបង្កង់" },
                      { word: "nose", meaning: "ច្រមុះ" }
                  ]
              },
              {
                  sound: "/ʃ/",
                  name: "SH sound",
                  spelling: "SH",
                  audio: "sh",
                  examples: [
                      { word: "ship", meaning: "កប៉ាល់" },
                      { word: "shoe", meaning: "ស្បែកជើង" },
                      { word: "fish", meaning: "ត្រី" }
                  ]
              },
              {
                  sound: "/ʒ/",
                  name: "ZH sound",
                  spelling: "S, G",
                  audio: "zh",
                  examples: [
                      { word: "vision", meaning: "ចក្ខុវិស័យ" },
                      { word: "measure", meaning: "វាស់វែង" },
                      { word: "television", meaning: "ទូរទស្សន៍" }
                  ]
              },
              {
                  sound: "/h/",
                  name: "H sound",
                  spelling: "H",
                  audio: "h",
                  examples: [
                      { word: "hat", meaning: "មួក" },
                      { word: "house", meaning: "ផ្ទះ" },
                      { word: "horse", meaning: "សេះ" }
                  ]
              }
          ]
      },

      {
          category: "Affricates",
          description: "Sounds that begin like a stop and finish like a fricative.",
          sounds: [
              {
                  sound: "/tʃ/",
                  name: "CH sound",
                  spelling: "CH, TCH",
                  audio: "ch",
                  examples: [
                      { word: "chair", meaning: "កៅអី" },
                      { word: "chicken", meaning: "មាន់" },
                      { word: "watch", meaning: "នាឡិកា" }
                  ]
              },
              {
                  sound: "/dʒ/",
                  name: "J sound",
                  spelling: "J, G, DG",
                  audio: "j",
                  examples: [
                      { word: "jam", meaning: "យៈសាពូនមី" },
                      { word: "juice", meaning: "ទឹកផ្លែឈើ" },
                      { word: "bridge", meaning: "ស្ពាន" }
                  ]
              }
          ]
      },

      {
          category: "Nasals",
          description: "Sounds made by allowing air to flow through the nose.",
          sounds: [
              {
                  sound: "/m/",
                  name: "M sound",
                  spelling: "M, MM",
                  audio: "m",
                  examples: [
                      { word: "moon", meaning: "ព្រះចន្ទ" },
                      { word: "milk", meaning: "ទឹកដោះគោ" },
                      { word: "mouse", meaning: "កណ្ដុរ" }
                  ]
              },
              {
                  sound: "/n/",
                  name: "N sound",
                  spelling: "N, NN",
                  audio: "n",
                  examples: [
                      { word: "nose", meaning: "ច្រមុះ" },
                      { word: "nine", meaning: "ប្រាំបួន" },
                      { word: "night", meaning: "យប់" }
                  ]
              },
              {
                  sound: "/ŋ/",
                  name: "NG sound",
                  spelling: "NG",
                  audio: "ng",
                  examples: [
                      { word: "sing", meaning: "ច្រៀង" },
                      { word: "king", meaning: "ស្តេច" },
                      { word: "ring", meaning: "ចិញ្ចៀន" }
                  ]
              }
          ]
      },

      {
          category: "Approximants",
          description: "Sounds made with a smooth flow of air and little obstruction.",
          sounds: [
              {
                  sound: "/r/",
                  name: "R sound",
                  spelling: "R, RR",
                  audio: "r",
                  examples: [
                      { word: "red", meaning: "ក្រហម" },
                      { word: "rabbit", meaning: "ទន្សាយ" },
                      { word: "rain", meaning: "ភ្លៀង" }
                  ]
              },
              {
                  sound: "/j/",
                  name: "Y sound",
                  spelling: "Y",
                  audio: "y",
                  examples: [
                      { word: "yes", meaning: "បាទ/ចាស" },
                      { word: "yellow", meaning: "ពណ៌លឿង" },
                      { word: "yoyo", meaning: "ប្រដាប់លេងយ៉ូយ៉ូ" }
                  ]
              },
              {
                  sound: "/w/",
                  name: "W sound",
                  spelling: "W",
                  audio: "w",
                  examples: [
                      { word: "water", meaning: "ទឹក" },
                      { word: "window", meaning: "បង្អួច" },
                      { word: "wolf", meaning: "ចចក" }
                  ]
              }
          ]
      },

      {
          category: "Lateral",
          description: "Sounds made by allowing air to flow around the sides of the tongue.",
          sounds: [
              {
                  sound: "/l/",
                  name: "L sound",
                  spelling: "L, LL",
                  audio: "l",
                  examples: [
                      { word: "lion", meaning: "តោ" },
                      { word: "lamp", meaning: "ចង្កៀង" },
                      { word: "lemon", meaning: "ក្រូចឆ្មា" }
                  ]
              }
          ]
      }
  ]
};