<script setup>
import { ref, computed } from 'vue'
import {
    letters,
    categories,
    quiz,
    pronunciationLessons
} from './data'
const page = ref('login'), selected = ref(letters[0]), search = ref('')
const qi = ref(0), score = ref(0), answered = ref(false), answer = ref('')
const progress = ref(Number(localStorage.getItem('happyEnglishProgress') || 0))
const filtered = computed(() => letters.filter(x => x.letter.toLowerCase().includes(search.value.toLowerCase()) || x.word.toLowerCase().includes(search.value.toLowerCase())))
// function go(p) { page.value = p; scrollTo({ top: 0, behavior: 'smooth' }) }
const go = (newPage) => {

    if (!isLoggedIn.value) {

        page.value = 'login'

        return
    }

    page.value = newPage

    // Close sidebar on mobile
    sidebarOpen.value = false

}
const speak = (text) => {
    if (!text) return

    window.speechSynthesis.cancel()

    const utterance = new SpeechSynthesisUtterance(text)

    utterance.lang = 'en-US'
    utterance.rate = 0.75
    utterance.pitch = 1.05
    utterance.volume = 1

    window.speechSynthesis.speak(utterance)
}
const playSound = (sound) => {

    if (!sound) return

    const audio = new Audio(
        `/sounds/consonants/${sound}.mp3`
    )

    audio.currentTime = 0

    audio.play().catch(error => {
        console.error('Cannot play sound:', error)
    })
}
function openLetter(x) { selected.value = x; page.value = 'alphabet'; progress.value = Math.max(progress.value, Math.round((x.letter.charCodeAt(0) - 64) / 26 * 100)); localStorage.setItem('happyEnglishProgress', progress.value) }
function choose(x) { if (answered.value) return; answer.value = x; answered.value = true; if (x === quiz[qi.value].answer) score.value++ }
function next() { qi.value = qi.value < quiz.length - 1 ? qi.value + 1 : 0; answered.value = false; answer.value = '' }

const username = ref('ADMIN')
const password = ref('ADMIN')

const showPassword = ref(false)
const rememberMe = ref(false)

const isLoggedIn = ref(false)

const loginError = ref('')


const login = () => {

    loginError.value = ''

    if (
        username.value === 'ADMIN' &&
        password.value === 'ADMIN'
    ) {

        isLoggedIn.value = true

        if (rememberMe.value) {
            localStorage.setItem(
                'happyEnglishAdmin',
                'true'
            )
        } else {
            sessionStorage.setItem(
                'happyEnglishAdmin',
                'true'
            )
        }

        page.value = 'home'

    } else {

        loginError.value =
            'Invalid username or password.'

    }
}


const forgotPassword = () => {

    alert(
        'Please contact the system administrator.'
    )

}
const sidebarOpen = ref(false)
const confirmLogout = () => {

    // Remove login session
    localStorage.removeItem(
        'happyEnglishAdmin'
    )

    sessionStorage.removeItem(
        'happyEnglishAdmin'
    )

    // Update login state
    isLoggedIn.value = false

    // Go to login page
    page.value = 'login'

    // Clear login form
    username.value = 'ADMIN'
    password.value = 'ADMIN'

    // Reset password visibility
    showPassword.value = false

    // Reset remember me
    rememberMe.value = false

}

</script>
<template>
    <div class="app">
    <!-- ========================================== SIDE MENU========================================== -->
        <!-- LEFT SIDEBAR -->
         <!-- Mobile menu button -->
        <button
            v-if="isLoggedIn"
            class="mobile-menu-button"
            @click="sidebarOpen = !sidebarOpen"
        >
            {{ sidebarOpen ? '✕' : '☰' }}
        </button>
        
        
        <!-- Overlay -->
        <div
            v-if="sidebarOpen"
            class="sidebar-overlay"
            @click="sidebarOpen = false"
        ></div>
        
        
        <!-- Sidebar -->
        <aside
            class="left-sidebar"
            :class="{ 'sidebar-open': sidebarOpen }"
        >
            <!-- Logo -->
            <div class="sidebar-logo">
                🌈
                <span>Happy English Kids</span>
            </div>
        
            <!-- Menu -->
            <ul class="menu-list">
        
                <li @click="go('home')">
                    🏠
                    <span>Home</span>
                </li>
        
                <li @click="go('alphabet')">
                    🔤
                    <span>A–Z</span>
                </li>
        
                <li @click="go('vowels')">
                    🔡
                    <span>Vowels</span>
                </li>
        
                <li @click="go('diphthongs')">
                    🔊
                    <span>Diphthongs</span>
                </li>
        
                <li @click="go('consonants')">
                    🔤
                    <span>Consonants</span>
                </li>
        
                <li @click="go('phonics')">
                    🔊
                    <span>Phonics</span>
                </li>
        
                <li @click="go('vocab')">
                    📚
                    <span>Vocabulary</span>
                </li>
        
                <li @click="go('games')">
                    🎮
                    <span>Games</span>
                </li>
        
            </ul>
        
            <!-- Logout -->
            <div class="sidebar-footer">
        
                <button @click="go('logout')">
                    🚪 Logout
                </button>
        
            </div>
        
        </aside>
        <main>
            <!-- ================================ HAPPY ENGLISH KIDS LOGIN ================================ -->
            <section v-if="page === 'login'" class="login-page">

                <!-- Background decorations -->
                <div class="cloud cloud-1">☁️</div>
                <div class="cloud cloud-2">☁️</div>

                <div class="star star-1">⭐</div>
                <div class="star star-2">⭐</div>
                <div class="star star-3">✨</div>

                <div class="abc-block block-a">A</div>
                <div class="abc-block block-b">B</div>
                <div class="abc-block block-c">C</div>

                <!-- Rainbow -->
                <div class="login-rainbow">
                    🌈
                </div>


                <!-- Main Login Container -->
                <div class="login-wrapper">

                    <!-- Logo -->
                    <div class="login-brand">

                        <div class="brand-rainbow">
                            🌈
                        </div>

                        <div class="brand-name">
                            <span class="happy">Happy</span>
                            <span class="english">English</span>
                            <span class="kids">Kids</span>
                        </div>

                        <div class="brand-tagline">
                            ✨ Learn • Play • Grow ✨
                        </div>

                    </div>


                    <!-- Login Card -->
                    <div class="login-card">

                        <!-- Lock -->
                        <div class="login-icon">
                            🔐
                        </div>


                        <h1>Admin Login</h1>

                        <p class="login-welcome">
                            Welcome back! Please login to continue <strong>Happy English Kids</strong>.
                        </p>


                        <!-- Login Form -->
                        <form @submit.prevent="login">

                            <!-- Username -->
                            <div class="login-input-group">

                                <label>
                                    Username
                                </label>

                                <div class="input-wrapper">

                                    <span class="input-icon">
                                        👤
                                    </span>

                                    <input v-model="username" type="text" placeholder="Enter username"
                                        autocomplete="username" required />

                                </div>

                            </div>


                            <!-- Password -->
                            <div class="login-input-group">

                                <label>
                                    Password
                                </label>

                                <div class="input-wrapper">

                                    <span class="input-icon">
                                        🔒
                                    </span>

                                    <input v-model="password" :type="showPassword ? 'text' : 'password'"
                                        placeholder="Enter password" autocomplete="current-password" required />

                                    <button type="button" class="show-password" @click="showPassword = !showPassword">
                                        {{ showPassword ? '🙈' : '👁️' }}
                                    </button>

                                </div>

                            </div>


                            <!-- Remember / Forgot -->
                            <div class="login-options">

                                <label class="remember">

                                    <input v-model="rememberMe" type="checkbox" />

                                    <span>Remember me</span>

                                </label>

                                <button type="button" class="forgot-password" @click="forgotPassword">
                                    Forgot password?
                                </button>

                            </div>


                            <!-- Error -->
                            <div v-if="loginError" class="login-error">
                                ⚠️ {{ loginError }}
                            </div>


                            <!-- Login Button -->
                            <button type="submit" class="login-button">
                                <span>🔐</span>
                                Login
                            </button>

                        </form>


                        <!-- Admin Access -->
                        <div class="admin-access">

                            <span></span>

                            <div>
                                🛡️ Admin access only
                            </div>

                            <span></span>

                        </div>


                        <!-- Children -->
                        <div class="children">

                            <div class="child child-girl">
                                👧
                            </div>

                            <div class="child child-boy">
                                👦
                            </div>

                            <div class="child child-glasses">
                                🧑‍🏫
                            </div>

                        </div>

                    </div>

                </div>


                <!-- Bottom decorations -->
                <div class="bottom-books">
                    📚
                </div>

                <div class="bottom-apple">
                    🍎
                </div>

            </section>
            
            <section v-if="page === 'logout'" class="logout-page">

                <div class="logout-card">

                    <!-- Icon -->
                    <div class="logout-icon">
                        👋
                    </div>


                    <h1>
                        See You Soon!
                    </h1>


                    <p>
                        Are you sure you want to logout
                        from <strong>Happy English Kids</strong>?
                    </p>


                    <!-- Buttons -->
                    <div class="logout-actions">

                        <!-- Cancel -->
                        <button class="cancel-logout" @click="go('home')">
                            ← Cancel
                        </button>


                        <!-- Confirm -->
                        <button class="confirm-logout" @click="confirmLogout">
                            🚪 Logout
                        </button>

                    </div>


                    <div class="logout-message">
                        🌈 Keep learning and have fun!
                    </div>

                </div>

            </section>
            
            <section v-if="page === 'home'" class="hero">
                <div><label>✨ LEARN • PLAY • SPEAK • READ</label>
                    <h1>English learning<br><span>made fun!</span></h1>
                    <p>Learn ABC, phonics, vocabulary and simple sentences through colorful activities.</p><button
                        class="primary" @click="go('alphabet')">Start A–Z 🚀</button><button class="secondary"
                        @click="go('games')">Play Game 🎮</button>
                    <div class="stats">
                        <b>26<small>Letters</small></b><b>🔊<small>Sounds</small></b><b>🎮<small>Games</small></b>
                    </div>
                </div>
                <div class="art">☀️<div>📖</div><span>👧</span><span>👦</span><em>A</em><em>B</em></div>
            </section>
            
            <section v-if="page === 'home'" class="section">
                <h2>What do you want to learn?</h2>
                <p class="muted">Choose an activity and start learning.</p>
                <div class="cards">
                    <article @click="go('alphabet')">🔤<h3>Alphabet A–Z</h3>
                        <p>Learn letters, sounds and example words.</p><b>Learn letters →</b>
                    </article>
                    <article @click="go('phonics')">🔊<h3>Phonics</h3>
                        <p>Hear sounds and practice pronunciation.</p><b>Practice sounds →</b>
                    </article>
                    <article @click="go('vocab')">📚<h3>Vocabulary</h3>
                        <p>English words with Khmer meaning.</p><b>Learn words →</b>
                    </article>
                    <article @click="go('games')">🎮<h3>Quiz & Games</h3>
                        <p>Test your knowledge and score points.</p><b>Play now →</b>
                    </article>
                    <article @click="go('vowels')">
                        🔤
                        <h3>Vowels</h3>
                        <p>Learn short and long vowel sounds.</p>
                        <b>Learn now →</b>
                    </article>
                    <article @click="go('diphthongs')">
                        🌈
                        <h3>Diphthongs</h3>
                        <p>Learn two vowel sounds together.</p>
                        <b>Learn now →</b>
                    </article>

                    <article @click="go('consonants')">
                        🅱️
                        <h3>Consonants</h3>
                        <p>Learn English consonant sounds.</p>
                        <b>Learn now →</b>
                    </article>
                </div>
            </section>
            
            <section v-if="page === 'home'" class="progress"><span>🏆</span>
                <div><b>Your learning progress</b><small>Keep learning every day!</small></div><i><u
                        :style="{ width: progress + '%' }"></u></i><strong>{{ progress }}%</strong>
            </section>
            
            <section v-if="page === 'alphabet'" class="section">
                <div class="title">
                    <div><label>ENGLISH PHONICS</label>
                        <h1>Letter <span>A–Z</span></h1>
                        <p>Tap a letter to learn its sound and word.</p>
                    </div><input v-model="search" placeholder="Search letter or word...">
                </div>
                <div class="lesson">
                    <div class="letters"><button v-for="x in filtered" :key="x.letter"
                            :class="{ sel: selected.letter === x.letter }" @click="openLetter(x)"><b>{{ x.letter
                                }}</b><small>{{ x.letter.toLowerCase() }} ·
                                {{ x.sound }}</small></button></div>
                    <article class="lesson-card">
                        <div class="top"><strong>{{ selected.letter }}</strong>
                            <div><label>LETTER {{ selected.letter }}</label>
                                <h2>{{ selected.letter }} {{ selected.letter.toLowerCase() }}</h2>
                                <p>Sound: <b>{{ selected.sound }}</b></p>
                            </div><button @click="speak(selected.letter + ' ' + selected.word)">🔊</button>
                        </div>
                        <div class="picture"><span>{{ selected.emoji }}</span>
                            <div>
                                <h2>{{ selected.word }}</h2>
                                <p>{{ selected.khmer }}</p>
                            </div>
                        </div>
                        <div class="example"><b>{{ selected.letter }} is for {{ selected.word }}.</b><span>I like
                                {{ selected.word.toLowerCase() }}.</span><small>សូមអាន និងនិយាយតាម។</small></div><button
                            class="primary wide" @click="speak(selected.word)">🔊 Hear “{{ selected.word }}”</button>
                    </article>
                </div>
            </section>
            
            <section v-if="page === 'phonics'" class="section">
                <div class="title">
                    <div><label>SOUND PRACTICE</label>
                        <h1>Phonics <span>Fun 🔊</span></h1>
                        <p>Listen, repeat and connect letters to sounds.</p>
                    </div>
                </div>
                <article class="phonics"><strong>{{ selected.letter }}</strong>
                    <h2>{{ selected.sound }}</h2>
                    <p>Say the sound, then say the word:</p>
                    <div>{{ selected.emoji }} <b>{{ selected.word }}</b></div><button class="primary"
                        @click="speak(selected.word)">🔊 Play sound</button>
                    <aside><button
                            @click="openLetter(letters[(letters.findIndex(x => x.letter === selected.letter) + 25) % 26])">←
                            Previous</button><button
                            @click="openLetter(letters[(letters.findIndex(x => x.letter === selected.letter) + 1) % 26])">Next
                            →</button></aside>
                </article>
                <div class="tip">💡 <b>Parent tip:</b> Ask your child to say the sound three times, then say the word.
                </div>
            </section>

            <section v-if="page === 'vocab'" class="section">
                <div class="title">
                    <div><label>WORD POWER</label>
                        <h1>Vocabulary <span>World</span></h1>
                        <p>Everyday English with Khmer meanings.</p>
                    </div>
                </div>
                <div class="categories">
                    <article v-for="c in categories" :key="c.name">
                        <div>{{ c.icon }}</div>
                        <h2>{{ c.name }}</h2><button v-for="w in c.words" :key="w" @click="speak(w)">🔊 {{ w }}</button>
                    </article>
                </div>
            </section>

            <section v-if="page === 'games'" class="section">
                <div class="title">
                    <div><label>PLAY & LEARN</label>
                        <h1>Mini <span>Quiz 🎮</span></h1>
                        <p>Question {{ qi + 1 }} of {{ quiz.length }} · Score: {{ score }}</p>
                    </div>
                </div>
                <article class="quiz"><label>QUESTION {{ qi + 1 }}</label>
                    <h2>{{ quiz[qi].q }}</h2>
                    <div class="answers"><button v-for="o in quiz[qi].options" :key="o"
                            :class="{ correct: answered && o === quiz[qi].answer, wrong: answered && o === answer && o !== quiz[qi].answer }"
                            @click="choose(o)">{{ o }}</button></div>
                    <p v-if="answered">{{ answer === quiz[qi].answer ? '🎉 Great job!' : '💪 Good try! Keep learning!'
                        }}</p>
                    <button v-if="answered" class="primary" @click="next">Next Question →</button>
                </article>
            </section>
            <!-- ==================== VOWEL PAGE ==================== -->
            <section v-if="page === 'vowels'" class="section">

                <div class="title">
                    <div>
                        <label>PRONUNCIATION</label>

                        <h1>
                            Learn <span>Vowels</span> 🔤
                        </h1>

                        <p>
                            Learn English vowel sounds with simple words and pronunciation.
                        </p>
                    </div>
                </div>


                <!-- Vowel Category -->
                <div class="feature-grid">

                    <!-- Short Vowels -->
                    <article v-for="group in pronunciationLessons.vowels" :key="group.category" class="vowel-section">

                        <div class="vowel-section-header">

                            <div class="vowel-big-icon">
                                🔤
                            </div>

                            <div>
                                <h2>{{ group.category }}</h2>

                                <p>
                                    {{ group.description }}
                                </p>
                            </div>

                        </div>


                        <!-- Vowel Sounds -->
                        <div class="vowel-list">

                            <div v-for="vowel in group.sounds" :key="vowel.sound" class="vowel-item">

                                <!-- Sound -->
                                <div class="vowel-sound">
                                    {{ vowel.sound }}
                                </div>


                                <!-- Information -->
                                <div class="vowel-info">

                                    <h3>
                                        {{ vowel.name }}
                                    </h3>

                                    <span>
                                        {{ vowel.spelling }}
                                    </span>


                                    <!-- Example Words -->
                                    <div class="vowel-words">

                                        <button v-for="example in vowel.examples" :key="example.word"
                                            @click="speak(example.word)">
                                            🔊
                                            <strong>{{ example.word }}</strong>

                                            <small>
                                                {{ example.meaning }}
                                            </small>
                                        </button>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </article>

                </div>


                <!-- Learning Tip -->
                <div class="vowel-tip">

                    <div class="tip-icon">
                        💡
                    </div>

                    <div>

                        <h3>Vowel Learning Tip</h3>

                        <p>
                            Listen to the sound and repeat the word three times.
                        </p>

                        <p class="khmer">
                            ស្តាប់សំឡេង ហើយនិយាយតាមពាក្យនីមួយៗ ៣ ដង។
                        </p>

                    </div>

                </div>

            </section>
            
            <!-- ==================== DIPHTHONGS PAGE ==================== -->
            <section v-if="page === 'diphthongs'" class="section">

                <div class="title">
                    <div>
                        <label>ENGLISH PRONUNCIATION</label>

                        <h1>
                            Learn <span>Diphthongs</span> 🌈
                        </h1>

                        <p>
                            Learn two vowel sounds that glide together in one syllable.
                        </p>
                    </div>
                </div>


                <!-- Diphthong Introduction -->
                <div class="diphthong-intro">

                    <div class="diphthong-icon">
                        🌈
                    </div>

                    <div>
                        <h2>What is a Diphthong?</h2>

                        <p>
                            A diphthong is a sound that starts with one vowel sound
                            and smoothly moves to another vowel sound.
                        </p>

                        <p class="khmer">
                            Diphthong គឺជាសំឡេងស្រៈពីរ ដែលបញ្ចូលគ្នា
                            និងផ្លាស់ទីពីសំឡេងមួយទៅសំឡេងមួយទៀត។
                        </p>
                    </div>

                </div>


                <!-- Diphthong Cards -->
                <div class="diphthong-grid">

                    <article v-for="diphthong in pronunciationLessons.diphthongs" :key="diphthong.sound"
                        class="diphthong-card">

                        <!-- Sound -->
                        <div class="diphthong-sound">
                            {{ diphthong.sound }}
                        </div>


                        <!-- Name -->
                        <h2>
                            {{ diphthong.name }}
                        </h2>


                        <!-- Spelling -->
                        <div class="diphthong-spelling">
                            <span>Spelling:</span>
                            <strong>
                                {{ diphthong.spelling }}
                            </strong>
                        </div>


                        <!-- Examples -->
                        <div class="diphthong-examples">

                            <button v-for="example in diphthong.examples" :key="example.word"
                                @click="speak(example.word)">

                                🔊
                                <strong>
                                    {{ example.word }}
                                </strong>

                                <small>
                                    {{ example.meaning }}
                                </small>

                            </button>

                        </div>


                        <!-- Hear All -->
                        <button class="diphthong-hear" @click="
                            speak(
                                diphthong.examples
                                    .map(x => x.word)
                                    .join(', ')
                            )
                            ">
                            🔊 Hear Examples
                        </button>

                    </article>

                </div>


                <!-- Learning Tip -->
                <div class="diphthong-tip">

                    <div class="tip-icon">
                        💡
                    </div>

                    <div>

                        <h3>Learning Tip</h3>

                        <p>
                            Move your mouth smoothly from the first sound
                            to the second sound.
                        </p>

                        <p class="khmer">
                            បញ្ចេញសំឡេងពីស្រៈទីមួយទៅស្រៈទីពីរ
                            ដោយរលូនក្នុងមួយព្យាង្គ។
                        </p>

                    </div>

                </div>

            </section>
            
            <!-- ==================== CONSONANTS SECTION ===================== -->
            <section v-if="page === 'consonants'" class="section">

                <!-- Section Header -->
                <div class="title">
                    <div>
                        <label>PRONUNCIATION</label>

                        <h1>
                            Learn <span>Consonants</span> 🔡
                        </h1>

                        <p>
                            Learn English consonant sounds with
                            simple words and examples.
                        </p>
                    </div>
                </div>


                <!-- Consonant Groups -->
                <div v-for="group in pronunciationLessons.consonants" :key="group.category" class="consonant-section">

                    <!-- Group Title -->
                    <div class="consonant-section-title">

                        <div class="consonant-icon">
                            🔡
                        </div>

                        <div>
                            <h2>
                                {{ group.category }}
                            </h2>

                            <p v-if="group.description">
                                {{ group.description }}
                            </p>
                        </div>

                    </div>


                    <!-- Consonant List -->
                    <div class="consonant-grid">

                        <article v-for="consonant in group.sounds" :key="consonant.sound" class="consonant-card">

                            <!-- IPA Sound -->
                            <button class="consonant-sound" @click="playSound(consonant.audio)"
                                :title="'Hear ' + consonant.name">
                                {{ consonant.sound }}
                            </button>
                            <!-- <button
                                class="consonant-sound"
                                @click="playSound(consonant.audio)">
                                {{ consonant.sound }}
                                🔊
                            </button> -->

                            <!-- Sound Name -->
                            <h3>
                                {{ consonant.name }}
                            </h3>


                            <!-- Letter / Spelling -->
                            <div class="consonant-spelling">
                                <span>Letters:</span>

                                <strong>
                                    {{ consonant.spelling }}
                                </strong>
                            </div>


                            <!-- Example Words -->
                            <div class="consonant-examples">

                                <button v-for="example in consonant.examples" :key="example.word"
                                    @click="speak(example.word)">
                                    🔊
                                    <strong>
                                        {{ example.word }}
                                    </strong>

                                    <small>
                                        {{ example.meaning }}
                                    </small>
                                </button>

                            </div>


                            <!-- Hear All Examples -->
                            <button class="consonant-hear" @click="
                                speak(
                                    consonant.examples
                                        .map(example => example.word)
                                        .join(', ')
                                )
                                ">
                                🔊 Hear Examples
                            </button>

                        </article>

                    </div>

                </div>


                <!-- Learning Tip -->
                <div class="consonant-tip">

                    <div class="tip-icon">
                        💡
                    </div>

                    <div>
                        <h3>
                            Consonant Learning Tip
                        </h3>

                        <p>
                            Listen to the sound and repeat
                            each word slowly.
                        </p>

                        <p class="khmer">
                            ស្តាប់សំឡេង ហើយនិយាយតាមពាក្យ
                            នីមួយៗយឺតៗ។
                        </p>
                    </div>

                </div>

            </section>
        </main>
        <footer>🌈 <b>Happy English Kids</b> — Learn English together! 💛</footer>
    </div>
</template>