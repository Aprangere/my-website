export const translations = {
  en: {
    nav: { home: "Home", research: "Research", services: "Services" },

    home: {
      name: "Arman Prangere",
      role: "M.Sc. Cognitive Science · ENS - PSL",
      tagline: "I study how cognition and culture shape one other, and what that tells us about the way we think, work, and decide together.",
      bio: "Welcome to my website! My name is Arman, I hold a Double B.A. in Social Sciences and Philosophy from Sciences Po and Sorbonne University. Now a Normalien student in Cognitive Science at École Normale Supérieure, I draw on this interdisciplinary background to revisit classical challenges of the social sciences (modernity, social cohesion, collective decision-making) and imagine real-world solutions.",
      researchCta: "Learn more about my research →",
      projectsTitle: "Projects",
      servicesCta: "Work with me →",
      cta: "Interested in working together? Feel free to reach out.",
      ctaLink: "Get in touch →",
    },

    projects: [
      {
        title: "Rethinking Nutrition Communication in Bangladesh",
        context: "World Food Programme · Ogilvy Consulting · 2025",
        description: "Strategic recommendations based on ethnographic research, creative activations with local partners, and the design of a statistical plan and impact questionnaire for monitoring and evaluation.",
        image: "wfp.png",
        alt: "WFP",
      },
      {
        title: "Encouraging 3R Behaviors Among Youth",
        context: "Citéo · Ogilvy Consulting · 2025",
        description: "Literature review and behavioural mapping to promote Reduce, Reuse and Recycle behaviours among 6–18 year-olds.",
        image: "citeo.jpg",
        alt: "Citéo",
      },
      {
        title: "Developing a Local Tea Shop",
        context: "Meadow Tea · Edinburgh · 2025",
        description: "Analysis of a tea shop in Edinburgh and identification of choice overload as a key friction point. Strategic recommendations based on behavioural economics and decision-making neuroscience.",
        image: "tea.jpg",
        alt: "Tea shop",
      },
      {
        title: "Mapping the Social Network of my Class",
        context: "Personal Project · 2025",
        description: "Data collection, analysis, and visualisation of acquaintance relationships within my M1 promotion — mapping the social structure of a cohort as a practical introduction to network analysis.",
        image: "SNA.png",
        alt: "Social network graph",
      },
    ],

    research: {
      title: "Research",
      intro: "My research sits at the intersection of social sciences and philosophy, behavioural and brain sciences, and quantitative methods. I try to understand who we are, where we come from, and what that implies for how we organise ourselves.",
      thread: "The common thread across my work is a single question: in a world where there is no univocal normative direction, where authority cannot be derived from religion, tradition, or cosmic order anymore — how can people and organisations find coherence? What forms of world-making can we imagine in the age of information?",

      areasTitle: "Research Interests",
      areas: [
        {
          title: "Culture & Cognition",
          body: "Human groups think, reason, and feel differently across space and time. If we all share the same brain, why are cultures so distinct? I explore the bidirectional relationship between cognition and the worlds humans create.",
        },
        {
          title: "Meaning in Modernity",
          body: "Weber called it disenchantment, Taylor called it the Inward Turn. The source of meaning shifted from externally imposed traditions to individually defined aspirations. I study this transition empirically, and the double edged implications for wellbeing.",
        },
        {
          title: "Political & Moral Psychology",
          body: "Why do people hold different values? Why do moral and political disagreements run so deep? Using psychology, survey research, and social sciences to map the architecture of political attitudes and moral reasoning.",
        },
        {
          title: "Collective Intelligence & Decision Systems",
          body: "From organisations to political communities, groups can make better decisions together — provided we design the right conditions. Drawing on distributed cognition, deliberative democracy, and AI tools.",
        },
      ],

      cogSciLabel: "What is cognitive science?",
      cogSciBody: "Created in the second half of the twentieth century, cognitive science is the interdisciplinary endeavour to study the mind as an information-processing system. It connects computer science, psychology, neuroscience, philosophy, linguistics, and anthropology. In my research, I use psychological theories and computational text analysis to address questions in philosophy and the social sciences — notably why meaning in modernity is increasingly derived from individual desires and aspirations rather than group norms and traditions.",

      methodsTitle: "Methods",
      methods: [
        "Computational text analysis, NLP, LLM pipelines (Python)",
        "Survey design (Qualtrics) and Data Analysis (R)",
        "Causal inference — RCT, diff-in-diff, regression discontinuity",
        "Biometrics — eye tracking, EEG, facial action coding (FACS)",
        "Literature review and systematic synthesis",
      ],

      currentTitle: "Current Work",
      current: "In my internship at Institut Jean Nicod, I track the psychological foundations of long term change in philosophical ideas. I use AI pipelines to operationalize constructs such as Inwardness or Ambiguity Tolerance in databases assembling thousands of thinkers. Building on human behavioral ecology, we hypothesize shifting material and social conditions partly explain the evolution of philosophical thought.",

      publicationsTitle: "Publications & Manuscripts",
      publications: [
        { title: "Childhood harshness and political opinions", status: "Manuscript in preparation" },
        { title: "Modeling life through ontological frameworks", status: "Submitted" },
        { title: "LLMs and narrative analysis", status: "Accepted — conference paper" },
      ],

      linksTitle: "Academic Links",
      orcidLabel: "ORCID",
      cvLabel: "Download CV",
    },

    services: {
      title: "Services",
      intro: "My applied work is at the intersection of research and strategy. I ground my recommendations on behavioural science frameworks, scientific literature, and context-sensitive experimentation.",
      helpTitle: "I can help you:",
      helpItems: [
        "Understand your users and align strategies with real human behaviour",
        "Uncover hidden friction and design evidence-based interventions",
        "Design and run experiments — A/B tests, surveys, pilots",
        "Analyse data and synthesise scientific literature",
        "Introduce your team to behavioural sciences",
        "Build NLP pipelines, AI tools and automated workflows",
      ],
      areasTitle: "Areas of practice",
      areas: [
        {
          title: "Behavioural Science & Strategy",
          body: "Applying COM-B, EAST and DECIDE frameworks to diagnose friction and design evidence-based interventions — for teams, users, or populations.",
        },
        {
          title: "Data Analysis & NLP",
          body: "Analysing behavioural datasets, building NLP pipelines, automated annotation, and turning raw data into clear, actionable findings.",
        },
        {
          title: "AI Tools & Workflow Automation",
          body: "Setting up chatbots, AI-assisted workflows, and lightweight automation that fit how your team actually works.",
        },
        {
          title: "Organisational Decision Design",
          body: "Mapping how decisions are actually made and redesigning the structures, processes, and incentives that shape collective behaviour.",
        },
      ],
      offeringsTitle: "How we can work together",
      offerings: [
        {
          label: "Free 20-min call",
          body: "A first conversation to understand your challenge and whether I can help. No commitment.",
        },
        {
          label: "Behavioural Audit",
          body: "I analyse your problem, review the relevant scientific literature, and deliver clear, immediately actionable recommendations.",
        },
        {
          label: "Experimentation & Testing",
          body: "I design and run experiments using qualitative and quantitative methods — A/B tests, interviews, pilots. I analyse the data and hand back a clear actionable summary.",
        },
      ],
      pricing: "I prioritise meaningful missions — from simplifying public services to promoting healthier behaviours. Pricing adapts to scope and deliverables. Nonprofits receive a 50% discount across all services.",
      contactTitle: "Book a call",
      contactIntro: "Use the calendar below to book a free 20-minute discovery call.",
    },

    readingsTitle: "Recent Favourites",
    readings: [
      { title: "An Inquiry into Modes of Existence", author: "Bruno Latour", type: "Book", cover: "/latour.jpg", coverBg: "", link: "https://www.modesofexistence.org" },
      { title: "Empire of AI", author: "Naomi Klein", type: "Book", cover: "/Empire_of_AI_book_cover.jpg", coverBg: "", link: "" },
      { title: "Rule Makers, Rule Breakers", author: "Michele Gelfand", type: "Book", cover: "/gelfand.png", coverBg: "", link: "" },
      { title: "An Ecological Approach to Culture", author: "Baumard & André", type: "Paper", cover: "/beaver.jpg", coverBg: "", link: "" },
    ],

    quotes: [
      { text: "Earth is the cradle of humanity, but one cannot live in a cradle forever", author: "Konstantin Tsiolkovsky" },
      { text: "If I ever saw further, it's by standing atop the shoulders of giants", author: "Isaac Newton" },
      { text: "Ethics must, one way or another, be based on an appreciation of human nature, on a sense of what a human being might want to have or to be", author: "Daniel Dennett" },
    ],

    footer: { copy: "© 2025 Arman Prangere" },
  },

  fr: {
    nav: { home: "Accueil", research: "Recherche", services: "Services" },

    home: {
      name: "Arman Prangere",
      role: "M.Sc. Sciences Cognitives · ENS - PSL",
      tagline: "Bienvenue sur mon site !",
      bio: "Bienvenue sur mon site ! Je m'appelle Arman, j'ai une double formation en Sciences Sociales et Philosophie (Sciences Po / Sorbonne). Désormais, je suis Normalien étudiant en Sciences Cognitives à l'Ecole Normale Supérieure - PSL. Je m'appuie sur ce parcours pluridisciplinaire pour revisiter des défis classiques des sciences sociales (modernité, cohesion sociale, prise de decision collective) et envisager des solutions!",
      researchCta: "Ma recherche →",
      projectsTitle: "Projets",
      servicesCta: "Travailler ensemble →",
      cta: "Envie de travailler ensemble ? N'hésitez pas à me contacter.",
      ctaLink: "Me contacter →",
    },

    projects: [
      {
        title: "Repenser la communication nutritionnelle au Bangladesh",
        context: "Programme Alimentaire Mondial · Ogilvy Consulting · 2025",
        description: "Recommandations stratégiques fondées sur la recherche ethnographique. Activations créatives avec des partenaires locaux. Conception d'un plan statistique et d'un questionnaire d'impact pour le suivi et l'évaluation.",
        image: "wfp.png",
        alt: "PAM",
      },
      {
        title: "Encourager les comportements 3R chez les jeunes",
        context: "Citéo · Ogilvy Consulting · 2025",
        description: "Revue de littérature et cartographie comportementale pour promouvoir les comportements Réduire, Réutiliser et Recycler auprès des 6-18 ans.",
        image: "citeo.jpg",
        alt: "Citéo",
      },
      {
        title: "Développer un salon de thé local",
        context: "Meadow Tea · Édimbourg · 2025",
        description: "Analyse d'un salon de thé à Édimbourg et identification de la surcharge de choix comme point de friction clé. Recommandations stratégiques fondées sur l'économie comportementale et les neurosciences de la décision.",
        image: "tea.jpg",
        alt: "Salon de thé",
      },
      {
        title: "Cartographier le réseau de ma promotion",
        context: "Projet personnel · ENS Paris · 2025",
        description: "Collecte de données, analyse et visualisation des relations de connaissance au sein de ma classe de M1. Introduction pratique à l'analyse de réseaux.",
        image: "SNA.png",
        alt: "Graphe de réseau social",
      },
    ],

    research: {
      title: "Recherche",
      question: "Comment faire monde ensemble dans une modernité désenchantée ?",
      intro: "Ma recherche croise sciences sociales, philosophie, sciences du comportement et méthodes computationnelles. Je veux comprendre qui nous sommes, d'où on vient, et ce que ça implique pour l'orchestration de notre futur.",
      thread: "La question qui relie tous mes intérêts, c'est celle de comment faire monde ensemble dans un réel où plus rien n'est évident. Ni la religion, ni la tradition, ni un ordre cosmique partagé ne peuvent fonder une direction claire à l'existence — comment les individus et les organisations peuvent-ils alors trouver de la cohérence ? Quelles formes du « faire monde » peut-on imaginer à l'ère de l'information ?",

      areasTitle: "Intérêts de recherche",
      areas: [
        {
          title: "Culture & Cognition",
          body: "Les groupes humains pensent, ressentent et raisonnent différemment selon les lieux et les époques. Si nous partageons tous le même cerveau, pourquoi les cultures divergent-elles autant ? J'explore la relation entre la cognition et le monde que les humains construisent.",
        },
        {
          title: "Sens et modernité",
          body: "Weber appelait ça le désenchantement, Taylor le tournant subjectif. Le sens ne vient plus de l'extérieur — il se définit désormais individuellement. J'étudie cette transition empiriquement, et ses implications, ambivalentes, sur le bien-être.",
        },
        {
          title: "Psychologie politique & morale",
          body: "Pourquoi les gens défendent-ils des valeurs si différentes ? Pourquoi les désaccords moraux et politiques sont-ils si tenaces ? En croisant psychologie et sciences sociales, je cherche à comprendre l'architecture des attitudes politiques et du raisonnement moral.",
        },
        {
          title: "Intelligence collective & systèmes de décision",
          body: "Des organisations aux communautés politiques, les groupes peuvent prendre de meilleures décisions ensemble, pourvu que l'on crée les bonnes conditions. En m'appuyant sur la cognition distribuée, la démocratie délibérative et les outils IA, j'essaye de rendre l'intelligence collective praticable.",
        },
      ],

      cogSciLabel: "Qu'est-ce que les sciences cognitives ?",
      cogSciBody: "Créées dans la seconde moitié du XXe siècle, les sciences cognitives constituent l'entreprise interdisciplinaire d'étudier l'esprit comme système de traitement de l'information. Elles connectent l'informatique, la psychologie, les neurosciences, la philosophie, la linguistique et l'anthropologie. Dans ma recherche, j'utilise des théories psychologiques et l'analyse textuelle computationnelle pour aborder des questions de philosophie et de sciences sociales.",

      methodsTitle: "Méthodes",
      methods: [
        "Analyse textuelle computationnelle, NLP, pipelines LLM (Python)",
        "Conception de sondages et mesure psychométrique (R)",
        "Inférence causale — conception expérimentale, diff-in-diff, régression sur discontinuité",
        "Biométrie — eye tracking, EEG, FACS (codage de l'action faciale)",
        "Revue de littérature et synthèses",
        "Management de la connaissance : Zotero x Obsidian x Claude",
      ],

      currentTitle: "Travaux en cours",
      current: "En stage à l'Institut Jean Nicod, je cherche à comprendre les fondements psychologiques des grandes évolution de la pensée philosophique. Avec des pipelines IA, j'opérationnalise des concets comme l'intériorité ou la tolérance à l'ambiguïté dans des bases de données contenant des milliers de penseurs.",

      publicationsTitle: "Publications & Manuscrits",
      publications: [
        { title: "Dureté de l'enfance et opinions politiques", status: "Manuscrit en préparation" },
        { title: "Modéliser la vie à travers des cadres ontologiques", status: "Soumis" },
        { title: "LLMs et analyse narrative", status: "Accepté — communication de conférence" },
      ],

      linksTitle: "Liens académiques",
      orcidLabel: "ORCID",
      cvLabel: "Télécharger le CV",
    },

    services: {
      title: "Services",
      intro: "Mon travail appliqué se situe à l'intersection de la recherche et de la stratégie. Mes recommandations s'appuient sur des cadres de sciences comportementales, la littérature scientifique et une expérimentation adaptée au contexte.",
      helpTitle: "Je peux vous aider à :",
      helpItems: [
        "Comprendre vos utilisateurs et construire des stratégies ancrées dans les comportements réels",
        "Repérer les frictions et concevoir des interventions",
        "Concevoir et mener des expériences — tests A/B, sondages, pilotes",
        "Analyser vos données et synthétiser la littérature scientifique",
        "Initier votre équipe aux sciences comportementales",
        "Construire des pipelines NLP, des outils IA et des workflows automatisés",
      ],
      areasTitle: "Domaines d'intervention",
      areas: [
        {
          title: "Sciences comportementales & Stratégie",
          body: "Je diagnostique les frictions, conçois des interventions et mesure l'impact — pour des équipes, des usagers ou des populations.",
        },
        {
          title: "Analyse de données",
          body: "J'analyse les données, construis des pipelines NLP et transforme l'information brute en recommandation actionnable.",
        },
        {
          title: "Outils IA & Automatisation",
          body: "Je mets en place des workflows IA et des automatisations légères qui s'intègrent vraiment dans le quotidien de votre équipe.",
        },
        {
          title: "Conception des décisions organisationnelles",
          body: "Je cartographie comment les décisions se prennent, puis repense les structures, processus et incitations.",
        },
      ],
      offeringsTitle: "Comment travailler ensemble",
      offerings: [
        {
          label: "Appel gratuit de 20 min",
          body: "Une première conversation pour comprendre votre défi et voir si je peux vous aider. Sans engagement.",
        },
        {
          label: "Audit comportemental",
          body: "J'analyse votre problème, passe en revue la littérature scientifique pertinente, et vous livre des recommandations claires et immédiatement actionnables.",
        },
        {
          label: "Expérimentation & Tests",
          body: "Je conçois et mène des expériences — tests A/B, entretiens, pilotes — j'analyse les données et vous remets une synthèse claire et actionnable.",
        },
      ],
      pricing: "Je privilégie les missions qui ont du sens — améliorer des services publics, encourager des comportements plus sains. Le tarif s'adapte à la portée du projet. Réduction de 50 % pour les organisations à but non lucratif.",
      contactTitle: "Prendre rendez-vous",
      contactIntro: "Utilisez le calendrier ci-dessous pour réserver un appel découverte gratuit de 20 minutes.",
    },

    readingsTitle: "Coups de cœur récents",
    readings: [
      { title: "Enquête sur les modes d'existence", author: "Bruno Latour", type: "Livre", cover: "/latour.jpg", coverBg: "", link: "https://www.modesofexistence.org" },
      { title: "Empire of AI", author: "Naomi Klein", type: "Livre", cover: "/Empire_of_AI_book_cover.jpg", coverBg: "", link: "" },
      { title: "Rule Makers, Rule Breakers", author: "Michele Gelfand", type: "Livre", cover: "/gelfand.png", coverBg: "", link: "" },
      { title: "Une approche écologique de la culture", author: "Baumard & André", type: "Article", cover: "/beaver.jpg", coverBg: "", link: "" },
    ],

    quotes: [
      { text: "La Terre est le berceau de l'humanité, mais on ne passe pas sa vie dans un berceau.", author: "Konstantin Tsiolkovsky" },
      { text: "Si j'ai vu plus loin, c'est en me tenant sur les épaules de géants.", author: "Isaac Newton" },
      { text: "L'éthique doit, d'une façon ou d'une autre, s'appuyer sur une appréciation de la nature humaine, sur un sens de ce qu'un être humain pourrait vouloir avoir ou vouloir être.", author: "Daniel Dennett" },
    ],

    footer: { copy: "© 2025 Arman Prangere" },
  },
} as const;

export type Lang = keyof typeof translations;
