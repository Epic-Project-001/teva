import { sectionIds } from "./sectionId";

export const paths = {
  // In-app navigation
  faqs: "/faqs",
  signUp: "/sign-up",
  registrationSuccesful: "/registration-successful",

  // External navigation
  stayConnected: "/",
  termsOfUse: "https://www.tevausa.com/general-pages/legal-notice/",
  privacyPolicy: "https://www.tevausa.com/general-pages/policy3/",
  tevaClinicalTrials: "https://www.tevapharm.com/teva-clinical-trials/",
  govClinicalTrails: "https://clinicaltrials.gov",
  cookiePolicy: "https://www.tevapharm.com/our-company/corporate-governance/data-privacy/",

  // Section #IDs
  diversityImportance: `/#${sectionIds.diversityImportance}`,
  questionsAndAnswers: `#${sectionIds.questionsAndAnswers}`,
  learnMoreAboutResearchStudies: `/#${sectionIds.learnMoreAboutResearchStudies}`,
};
