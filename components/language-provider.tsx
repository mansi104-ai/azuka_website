'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'en' | 'hi' | 'pa' | 'mr' | 'kn'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.products': 'Products',
    'nav.applications': 'Applications',
    'nav.mission': 'Mission',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'header.tagline': 'Built to Bind, Engineered to Last',
    'header.exportQuality': 'Export Quality Products',
    'header.getQuote': 'Get Quote',
    'hero.clickBait': 'Stop Your Hay Bales From Self-Burning!',
    'hero.title1': 'Clean Fields,',
    'hero.title2': 'Clean Skies',
    'hero.subtitle': 'We dream of a future where no field is burned, no air is choked, and every farmer earns more by doing the right thing. Azuka Baler Twine supports that dream.',
    'hero.freeSample': 'Get Free Sample',
    'hero.calculateTwine': 'Calculate Twine Needed',
    'authority.title': 'Trusted by Farmers Worldwide',
    'authority.subtitle': 'Leading manufacturer with proven expertise in agricultural solutions',
    'authority.customers': 'Happy Customers',
    'authority.countries': 'Export Countries',
    'authority.experience': 'Years Experience',
    'authority.products': 'Product Range',
    'products.title': 'Our Product Range',
    'products.subtitle': 'Complete agricultural solutions for modern farming',
    'mission.title': 'Our Environmental Mission',
    'mission.subtitle': 'Every roll of Azuka Baler Twine helps convert crop waste into fuel – saving trees, replacing coal, and protecting clean air.',
    'mission.impact1': 'Tons of CO₂ Prevented',
    'mission.impact2': 'Trees Saved Equivalent',
    'mission.impact3': 'Fields Protected',
    'testimonials.title': 'What Farmers Say',
    'testimonials.subtitle': 'Real feedback from our satisfied customers',
    'cta.title': 'Ready to Switch to Azuka?',
    'cta.subtitle': 'Join thousands of farmers who trust Azuka for their baling needs',
    'cta.freeSample': 'Get Free Sample Spool',
    'cta.contact': 'Contact Sales Team',
    'footer.tagline': 'Building a sustainable future for agriculture',
    'footer.quickLinks': 'Quick Links',
    'footer.products': 'Products',
    'footer.support': 'Support',
    'footer.followUs': 'Follow Us',
    'footer.rights': 'All rights reserved.',
  },
  hi: {
    'nav.home': 'होम',
    'nav.about': 'हमारे बारे में',
    'nav.products': 'उत्पाद',
    'nav.applications': 'अनुप्रयोग',
    'nav.mission': 'मिशन',
    'nav.blog': 'ब्लॉग',
    'nav.contact': 'संपर्क',
    'header.tagline': 'बांधने के लिए बनाया, टिकने के लिए इंजीनियर किया',
    'header.exportQuality': 'निर्यात गुणवत्ता उत्पाद',
    'header.getQuote': 'कोटेशन पाएं',
    'hero.clickBait': 'अपने घास के गट्ठों को जलने से रोकें!',
    'hero.title1': 'साफ खेत,',
    'hero.title2': 'साफ आसमान',
    'hero.subtitle': 'हम एक ऐसे भविष्य का सपना देखते हैं जहां कोई खेत नहीं जलाया जाता, कोई हवा दम नहीं घुटती, और हर किसान सही काम करके अधिक कमाता है।',
    'hero.freeSample': 'मुफ्त नमूना पाएं',
    'hero.calculateTwine': 'सुतली की गणना करें',
    'authority.title': 'दुनिया भर के किसानों का भरोसा',
    'authority.subtitle': 'कृषि समाधानों में सिद्ध विशेषज्ञता के साथ अग्रणी निर्माता',
    'authority.customers': 'खुश ग्राहक',
    'authority.countries': 'निर्यात देश',
    'authority.experience': 'साल का अनुभव',
    'authority.products': 'उत्पाद श्रृंखला',
    'products.title': 'हमारी उत्पाद श्रृंखला',
    'products.subtitle': 'आधुनिक खेती के लिए संपूर्ण कृषि समाधान',
    'mission.title': 'हमारा पर्यावरणीय मिशन',
    'mission.subtitle': 'अजुका बेलर ट्वाइन का हर रोल फसल अपशिष्ट को ईंधन में बदलने में मदद करता है - पेड़ों को बचाता है, कोयले की जगह लेता है, और स्वच्छ हवा की रक्षा करता है।',
    'mission.impact1': 'टन CO₂ रोका गया',
    'mission.impact2': 'पेड़ों के बराबर बचाया',
    'mission.impact3': 'खेत संरक्षित',
    'testimonials.title': 'किसान क्या कहते हैं',
    'testimonials.subtitle': 'हमारे संतुष्ट ग्राहकों की वास्तविक प्रतिक्रिया',
    'cta.title': 'अजुका पर स्विच करने के लिए तैयार हैं?',
    'cta.subtitle': 'हजारों किसानों के साथ जुड़ें जो अपनी बेलिंग जरूरतों के लिए अजुका पर भरोसा करते हैं',
    'cta.freeSample': 'मुफ्त नमूना स्पूल पाएं',
    'cta.contact': 'सेल्स टीम से संपर्क करें',
    'footer.tagline': 'कृषि के लिए एक टिकाऊ भविष्य का निर्माण',
    'footer.quickLinks': 'त्वरित लिंक',
    'footer.products': 'उत्पाद',
    'footer.support': 'सहायता',
    'footer.followUs': 'हमें फॉलो करें',
    'footer.rights': 'सभी अधिकार सुरक्षित।',
  },
  pa: {
    'nav.home': 'ਘਰ',
    'nav.about': 'ਸਾਡੇ ਬਾਰੇ',
    'nav.products': 'ਉਤਪਾਦ',
    'nav.applications': 'ਵਰਤੋਂ',
    'nav.mission': 'ਮਿਸ਼ਨ',
    'nav.blog': 'ਬਲਾਗ',
    'nav.contact': 'ਸੰਪਰਕ',
    'header.tagline': 'ਬੰਨ੍ਹਣ ਲਈ ਬਣਾਇਆ, ਟਿਕਣ ਲਈ ਇੰਜੀਨੀਅਰ ਕੀਤਾ',
    'header.exportQuality': 'ਨਿਰਯਾਤ ਗੁਣਵੱਤਾ ਉਤਪਾਦ',
    'header.getQuote': 'ਕੋਟੇਸ਼ਨ ਲਓ',
    'hero.clickBait': 'ਆਪਣੇ ਘਾਹ ਦੇ ਗੱਠਿਆਂ ਨੂੰ ਜਲਣ ਤੋਂ ਰੋਕੋ!',
    'hero.title1': 'ਸਾਫ਼ ਖੇਤ,',
    'hero.title2': 'ਸਾਫ਼ ਅਸਮਾਨ',
    'hero.subtitle': 'ਅਸੀਂ ਇੱਕ ਅਜਿਹੇ ਭਵਿੱਖ ਦਾ ਸੁਪਨਾ ਦੇਖਦੇ ਹਾਂ ਜਿੱਥੇ ਕੋਈ ਖੇਤ ਨਹੀਂ ਸਾੜਿਆ ਜਾਂਦਾ, ਕੋਈ ਹਵਾ ਦਮ ਨਹੀਂ ਘੁੱਟਦੀ, ਅਤੇ ਹਰ ਕਿਸਾਨ ਸਹੀ ਕੰਮ ਕਰਕੇ ਜ਼ਿਆਦਾ ਕਮਾਉਂਦਾ ਹੈ।',
    'hero.freeSample': 'ਮੁਫ਼ਤ ਨਮੂਨਾ ਲਓ',
    'hero.calculateTwine': 'ਸੂਤ ਦੀ ਗਿਣਤੀ ਕਰੋ',
    'authority.title': 'ਦੁਨੀਆ ਭਰ ਦੇ ਕਿਸਾਨਾਂ ਦਾ ਭਰੋਸਾ',
    'authority.subtitle': 'ਖੇਤੀਬਾੜੀ ਹੱਲਾਂ ਵਿੱਚ ਸਿੱਧ ਮਹਾਰਤ ਵਾਲਾ ਮੋਹਰੀ ਨਿਰਮਾਤਾ',
    'authority.customers': 'ਖੁਸ਼ ਗਾਹਕ',
    'authority.countries': 'ਨਿਰਯਾਤ ਦੇਸ਼',
    'authority.experience': 'ਸਾਲ ਦਾ ਤਜਰਬਾ',
    'authority.products': 'ਉਤਪਾਦ ਸ਼੍ਰੇਣੀ',
    'products.title': 'ਸਾਡੀ ਉਤਪਾਦ ਸ਼੍ਰੇਣੀ',
    'products.subtitle': 'ਆਧੁਨਿਕ ਖੇਤੀ ਲਈ ਸੰਪੂਰਨ ਖੇਤੀਬਾੜੀ ਹੱਲ',
    'mission.title': 'ਸਾਡਾ ਵਾਤਾਵਰਣੀ ਮਿਸ਼ਨ',
    'mission.subtitle': 'ਅਜ਼ੁਕਾ ਬੇਲਰ ਟਵਾਈਨ ਦਾ ਹਰ ਰੋਲ ਫਸਲ ਦੇ ਰਿਸ਼ਟੇ ਨੂੰ ਬਾਲਣ ਵਿੱਚ ਬਦਲਣ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ - ਰੁੱਖਾਂ ਨੂੰ ਬਚਾਉਂਦਾ ਹੈ, ਕੋਲੇ ਦੀ ਥਾਂ ਲੈਂਦਾ ਹੈ, ਅਤੇ ਸਾਫ਼ ਹਵਾ ਦੀ ਰੱਖਿਆ ਕਰਦਾ ਹੈ।',
    'mission.impact1': 'ਟਨ CO₂ ਰੋਕਿਆ ਗਿਆ',
    'mission.impact2': 'ਰੁੱਖਾਂ ਦੇ ਬਰਾਬਰ ਬਚਾਇਆ',
    'mission.impact3': 'ਖੇਤ ਸੁਰੱਖਿਅਤ',
    'testimonials.title': 'ਕਿਸਾਨ ਕੀ ਕਹਿੰਦੇ ਹਨ',
    'testimonials.subtitle': 'ਸਾਡੇ ਸੰਤੁਸ਼ਟ ਗਾਹਕਾਂ ਦੀ ਅਸਲ ਪ੍ਰਤੀਕਿਰਿਆ',
    'cta.title': 'ਅਜ਼ੁਕਾ ਤੇ ਸਵਿੱਚ ਕਰਨ ਲਈ ਤਿਆਰ ਹੋ?',
    'cta.subtitle': 'ਹਜ਼ਾਰਾਂ ਕਿਸਾਨਾਂ ਨਾਲ ਜੁੜੋ ਜੋ ਆਪਣੀ ਬੇਲਿੰਗ ਲੋੜਾਂ ਲਈ ਅਜ਼ੁਕਾ ਤੇ ਭਰੋਸਾ ਕਰਦੇ ਹਨ',
    'cta.freeSample': 'ਮੁਫ਼ਤ ਨਮੂਨਾ ਸਪੂਲ ਲਓ',
    'cta.contact': 'ਸੇਲਜ਼ ਟੀਮ ਨਾਲ ਸੰਪਰਕ ਕਰੋ',
    'footer.tagline': 'ਖੇਤੀਬਾੜੀ ਲਈ ਇੱਕ ਟਿਕਾਊ ਭਵਿੱਖ ਦਾ ਨਿਰਮਾਣ',
    'footer.quickLinks': 'ਤੇਜ਼ ਲਿੰਕ',
    'footer.products': 'ਉਤਪਾਦ',
    'footer.support': 'ਸਹਾਇਤਾ',
    'footer.followUs': 'ਸਾਨੂੰ ਫਾਲੋ ਕਰੋ',
    'footer.rights': 'ਸਾਰੇ ਅਧਿਕਾਰ ਸੁਰੱਖਿਅਤ।',
  },
  mr: {
    'nav.home': 'मुख्यपृष्ठ',
    'nav.about': 'आमच्याबद्दल',
    'nav.products': 'उत्पादने',
    'nav.applications': 'अनुप्रयोग',
    'nav.mission': 'मिशन',
    'nav.blog': 'ब्लॉग',
    'nav.contact': 'संपर्क',
    'header.tagline': 'बांधण्यासाठी बनवले, टिकण्यासाठी अभियंत्रित',
    'header.exportQuality': 'निर्यात गुणवत्ता उत्पादने',
    'header.getQuote': 'कोटेशन मिळवा',
    'hero.clickBait': 'तुमच्या गवताच्या गाठी जळण्यापासून थांबवा!',
    'hero.title1': 'स्वच्छ शेत,',
    'hero.title2': 'स्वच्छ आकाश',
    'hero.subtitle': 'आम्ही अशा भविष्याचे स्वप्न पाहतो जिथे कोणतेही शेत जाळले जात नाही, कोणतीही हवा गुदमरत नाही, आणि प्रत्येक शेतकरी योग्य काम करून अधिक कमावतो.',
    'hero.freeSample': 'मोफत नमुना मिळवा',
    'hero.calculateTwine': 'सुतळीची गणना करा',
    'authority.title': 'जगभरातील शेतकऱ्यांचा विश्वास',
    'authority.subtitle': 'कृषी समाधानांमध्ये सिद्ध कौशल्य असलेले आघाडीचे निर्माते',
    'authority.customers': 'आनंदी ग्राहक',
    'authority.countries': 'निर्यात देश',
    'authority.experience': 'वर्षांचा अनुभव',
    'authority.products': 'उत्पादन श्रेणी',
    'products.title': 'आमची उत्पादन श्रेणी',
    'products.subtitle': 'आधुनिक शेतीसाठी संपूर्ण कृषी समाधाने',
    'mission.title': 'आमचे पर्यावरणीय मिशन',
    'mission.subtitle': 'अझुका बेलर ट्वाइनचा प्रत्येक रोल पिकांचा कचरा इंधनात रूपांतरित करण्यास मदत करतो - झाडे वाचवतो, कोळशाची जागा घेतो आणि स्वच्छ हवेचे संरक्षण करतो.',
    'mission.impact1': 'टन CO₂ रोखले',
    'mission.impact2': 'झाडांच्या बरोबरीने वाचवले',
    'mission.impact3': 'शेत संरक्षित',
    'testimonials.title': 'शेतकरी काय म्हणतात',
    'testimonials.subtitle': 'आमच्या समाधानी ग्राहकांचा खरा अभिप्राय',
    'cta.title': 'अझुकावर स्विच करण्यास तयार आहात?',
    'cta.subtitle': 'हजारो शेतकऱ्यांसोबत सामील व्हा जे त्यांच्या बेलिंग गरजांसाठी अझुकावर विश्वास ठेवतात',
    'cta.freeSample': 'मोफत नमुना स्पूल मिळवा',
    'cta.contact': 'विक्री संघाशी संपर्क साधा',
    'footer.tagline': 'शेतीसाठी शाश्वत भविष्य निर्माण करणे',
    'footer.quickLinks': 'द्रुत दुवे',
    'footer.products': 'उत्पादने',
    'footer.support': 'सहाय्य',
    'footer.followUs': 'आम्हाला फॉलो करा',
    'footer.rights': 'सर्व हक्क राखीव.',
  },
  kn: {
    'nav.home': 'ಮುಖ್ಯಪುಟ',
    'nav.about': 'ನಮ್ಮ ಬಗ್ಗೆ',
    'nav.products': 'ಉತ್ಪಾದನೆಗಳು',
    'nav.applications': 'ಅನ್ವಯಗಳು',
    'nav.mission': 'ಮಿಷನ್',
    'nav.blog': 'ಬ್ಲಾಗ್',
    'nav.contact': 'ಸಂಪರ್ಕ',
    'header.tagline': 'ಬಂಧಿಸಲು ನಿರ್ಮಿಸಲಾಗಿದೆ, ಬಾಳಿಕೆ ಬರಲು ಇಂಜಿನಿಯರ್ ಮಾಡಲಾಗಿದೆ',
    'header.exportQuality': 'ರಫ್ತು ಗುಣಮಟ್ಟದ ಉತ್ಪಾದನೆಗಳು',
    'header.getQuote': 'ಕೋಟ್ ಪಡೆಯಿರಿ',
    'hero.clickBait': 'ನಿಮ್ಮ ಹುಲ್ಲಿನ ಗಂಟುಗಳು ಸುಡುವುದನ್ನು ನಿಲ್ಲಿಸಿ!',
    'hero.title1': 'ಸ್ವಚ್ಛ ಹೊಲಗಳು,',
    'hero.title2': 'ಸ್ವಚ್ಛ ಆಕಾಶ',
    'hero.subtitle': 'ಯಾವುದೇ ಹೊಲವನ್ನು ಸುಡದ, ಯಾವುದೇ ಗಾಳಿಯು ಉಸಿರುಗಟ್ಟದ, ಮತ್ತು ಪ್ರತಿ ರೈತನು ಸರಿಯಾದ ಕೆಲಸ ಮಾಡುವ ಮೂಲಕ ಹೆಚ್ಚು ಗಳಿಸುವ ಭವಿಷ್ಯದ ಕನಸು ನಾವು ಕಾಣುತ್ತೇವೆ.',
    'hero.freeSample': 'ಉಚಿತ ಮಾದರಿ ಪಡೆಯಿರಿ',
    'hero.calculateTwine': 'ಹುರಿ ಲೆಕ್ಕಾಚಾರ ಮಾಡಿ',
    'authority.title': 'ವಿಶ್ವದಾದ್ಯಂತ ರೈತರ ನಂಬಿಕೆ',
    'authority.subtitle': 'ಕೃಷಿ ಪರಿಹಾರಗಳಲ್ಲಿ ಸಾಬೀತಾದ ಪರಿಣತಿಯೊಂದಿಗೆ ಪ್ರಮುಖ ತಯಾರಕ',
    'authority.customers': 'ಸಂತೋಷದ ಗ್ರಾಹಕರು',
    'authority.countries': 'ರಫ್ತು ದೇಶಗಳು',
    'authority.experience': 'ವರ್ಷಗಳ ಅನುಭವ',
    'authority.products': 'ಉತ್ಪಾದನಾ ಶ್ರೇಣಿ',
    'products.title': 'ನಮ್ಮ ಉತ್ಪಾದನಾ ಶ್ರೇಣಿ',
    'products.subtitle': 'ಆಧುನಿಕ ಕೃಷಿಗಾಗಿ ಸಂಪೂರ್ಣ ಕೃಷಿ ಪರಿಹಾರಗಳು',
    'mission.title': 'ನಮ್ಮ ಪರಿಸರ ಮಿಷನ್',
    'mission.subtitle': 'ಅಜುಕಾ ಬೇಲರ್ ಟ್ವೈನ್‌ನ ಪ್ರತಿ ರೋಲ್ ಬೆಳೆ ತ್ಯಾಜ್ಯವನ್ನು ಇಂಧನವಾಗಿ ಪರಿವರ್ತಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ - ಮರಗಳನ್ನು ಉಳಿಸುತ್ತದೆ, ಕಲ್ಲಿದ್ದಲನ್ನು ಬದಲಾಯಿಸುತ್ತದೆ ಮತ್ತು ಶುದ್ಧ ಗಾಳಿಯನ್ನು ರಕ್ಷಿಸುತ್ತದೆ.',
    'mission.impact1': 'ಟನ್ CO₂ ತಡೆಯಲಾಗಿದೆ',
    'mission.impact2': 'ಮರಗಳಿಗೆ ಸಮಾನವಾಗಿ ಉಳಿಸಲಾಗಿದೆ',
    'mission.impact3': 'ಹೊಲಗಳು ಸಂರಕ್ಷಿತ',
    'testimonials.title': 'ರೈತರು ಏನು ಹೇಳುತ್ತಾರೆ',
    'testimonials.subtitle': 'ನಮ್ಮ ತೃಪ್ತ ಗ್ರಾಹಕರ ನಿಜವಾದ ಪ್ರತಿಕ್ರಿಯೆ',
    'cta.title': 'ಅಜುಕಾಗೆ ಬದಲಾಯಿಸಲು ಸಿದ್ಧರಿದ್ದೀರಾ?',
    'cta.subtitle': 'ತಮ್ಮ ಬೇಲಿಂಗ್ ಅಗತ್ಯಗಳಿಗಾಗಿ ಅಜುಕಾವನ್ನು ನಂಬುವ ಸಾವಿರಾರು ರೈತರೊಂದಿಗೆ ಸೇರಿಕೊಳ್ಳಿ',
    'cta.freeSample': 'ಉಚಿತ ಮಾದರಿ ಸ್ಪೂಲ್ ಪಡೆಯಿರಿ',
    'cta.contact': 'ಮಾರಾಟ ತಂಡವನ್ನು ಸಂಪರ್ಕಿಸಿ',
    'footer.tagline': 'ಕೃಷಿಗಾಗಿ ಸುಸ್ಥಿರ ಭವಿಷ್ಯವನ್ನು ನಿರ್ಮಿಸುವುದು',
    'footer.quickLinks': 'ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು',
    'footer.products': 'ಉತ್ಪಾದನೆಗಳು',
    'footer.support': 'ಬೆಂಬಲ',
    'footer.followUs': 'ನಮ್ಮನ್ನು ಅನುಸರಿಸಿ',
    'footer.rights': 'ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.',
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    // Auto-detect language based on location/browser
    const detectLanguage = () => {
      const browserLang = navigator.language.toLowerCase()
      const userLang = localStorage.getItem('preferred-language') as Language
      
      if (userLang && translations[userLang]) {
        setLanguage(userLang)
        return
      }

      // Map browser languages to our supported languages
      if (browserLang.includes('hi')) setLanguage('hi')
      else if (browserLang.includes('pa')) setLanguage('pa')
      else if (browserLang.includes('mr')) setLanguage('mr')
      else if (browserLang.includes('kn')) setLanguage('kn')
      else setLanguage('en')
    }

    detectLanguage()
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('preferred-language', lang)
  }

  const t = (key: string): string => {
    return translations[language]?.[key] || translations.en[key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
