import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources
const resources = {
    en: {
        translation: {
            // Common
            'app.name': 'AFL Digital Learning',
            'app.tagline': 'AI Fluency for Viksit Bharat 2047',

            // Navigation
            'nav.home': 'Home',
            'nav.courses': 'Courses',
            'nav.assessments': 'Assessments',
            'nav.profile': 'Profile',
            'nav.logout': 'Logout',

            // Auth
            'auth.login': 'Login',
            'auth.register': 'Register',
            'auth.phone': 'Phone Number',
            'auth.otp': 'Enter OTP',
            'auth.name': 'Full Name',
            'auth.submit': 'Submit',

            // Home
            'home.welcome': 'Welcome to AFL',
            'home.continue': 'Continue Learning',
            'home.explore': 'Explore Courses',

            // Courses
            'courses.title': 'Available Courses',
            'courses.enrolled': 'My Courses',
            'courses.enroll': 'Enroll Now',
            'courses.continue': 'Continue',
            'courses.completed': 'Completed',

            // Assessment
            'assessment.start': 'Start Assessment',
            'assessment.submit': 'Submit',
            'assessment.next': 'Next Question',
            'assessment.previous': 'Previous',
            'assessment.results': 'Your Results',
            'assessment.passed': 'Congratulations! You passed!',
            'assessment.failed': 'Keep trying! You can retake the assessment.',

            // Profile
            'profile.title': 'My Profile',
            'profile.progress': 'Learning Progress',
            'profile.certificates': 'My Certificates',
            'profile.settings': 'Settings',

            // AFL Levels
            'afl.level0': 'AFL-0: AI Awareness',
            'afl.level1': 'AFL-1: AI Interaction',
            'afl.level2': 'AFL-2: AI Integration',
            'afl.level3': 'AFL-3: AI Orchestration',
            'afl.level4': 'AFL-4: AI Policy',
            'afl.level5': 'AFL-5: AI Research',
        },
    },
    hi: {
        translation: {
            // Common
            'app.name': 'AFL डिजिटल शिक्षा',
            'app.tagline': 'विकसित भारत 2047 के लिए AI साक्षरता',

            // Navigation
            'nav.home': 'होम',
            'nav.courses': 'पाठ्यक्रम',
            'nav.assessments': 'मूल्यांकन',
            'nav.profile': 'प्रोफ़ाइल',
            'nav.logout': 'लॉग आउट',

            // Auth
            'auth.login': 'लॉगिन',
            'auth.register': 'पंजीकरण',
            'auth.phone': 'फ़ोन नंबर',
            'auth.otp': 'OTP दर्ज करें',
            'auth.name': 'पूरा नाम',
            'auth.submit': 'जमा करें',

            // Home
            'home.welcome': 'AFL में आपका स्वागत है',
            'home.continue': 'सीखना जारी रखें',
            'home.explore': 'पाठ्यक्रम देखें',

            // Courses
            'courses.title': 'उपलब्ध पाठ्यक्रम',
            'courses.enrolled': 'मेरे पाठ्यक्रम',
            'courses.enroll': 'अभी नामांकन करें',
            'courses.continue': 'जारी रखें',
            'courses.completed': 'पूर्ण',

            // Assessment
            'assessment.start': 'मूल्यांकन शुरू करें',
            'assessment.submit': 'जमा करें',
            'assessment.next': 'अगला प्रश्न',
            'assessment.previous': 'पिछला',
            'assessment.results': 'आपके परिणाम',
            'assessment.passed': 'बधाई हो! आप पास हो गए!',
            'assessment.failed': 'कोशिश करते रहें! आप फिर से मूल्यांकन ले सकते हैं।',

            // Profile
            'profile.title': 'मेरी प्रोफ़ाइल',
            'profile.progress': 'सीखने की प्रगति',
            'profile.certificates': 'मेरे प्रमाणपत्र',
            'profile.settings': 'सेटिंग्स',

            // AFL Levels
            'afl.level0': 'AFL-0: AI जागरूकता',
            'afl.level1': 'AFL-1: AI इंटरैक्शन',
            'afl.level2': 'AFL-2: AI एकीकरण',
            'afl.level3': 'AFL-3: AI ऑर्केस्ट्रेशन',
            'afl.level4': 'AFL-4: AI नीति',
            'afl.level5': 'AFL-5: AI अनुसंधान',
        },
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en', // Default language
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
