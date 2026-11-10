// All page copy lives here, in English and Korean.
// Facts come from the CVs (Resume_Chinguun.pdf / 이력서_친궁.pdf). Keep them in sync.

export type Lang = 'en' | 'ko'
export type CaseSlug = 'tomyo' | 'capstone'

export const contact = {
  email: 'cchek542@gmail.com',
  github: 'https://github.com/cchek541',
  linkedin: 'https://www.linkedin.com/in/chinguun-chuluungerel/',
} as const

// CV PDFs in /public, one per language.
export const cvFiles: Record<Lang, { href: string; filename: string }> = {
  en: { href: '/cv.pdf', filename: 'Resume_Chinguun.pdf' },
  ko: { href: '/cv-ko.pdf', filename: '이력서_친궁.pdf' },
}

export interface Stat {
  value: string
  label: string
}

export interface CaseStudy {
  slug: CaseSlug
  kicker: string
  title: string
  period: string
  role: string
  summary: string
  stack: string[]
  url?: string
  metrics: Stat[]
  sections: { heading: string; points: string[] }[]
}

export interface Entry {
  title: string
  org: string
  period: string
  points: string[]
}

export interface Content {
  nav: Record<'overview' | 'tomyo' | 'capstone' | 'demo' | 'evidence', string>
  langSwitch: string
  hero: {
    eyebrow: string
    name: string
    fullName: string
    summary: string
    status: string
    ctaWork: string
    ctaEmail: string
  }
  stats: Stat[]
  labels: {
    selectedWork: string
    skills: string
    experience: string
    education: string
    languages: string
    volunteer: string
    contact: string
    viewCase: string
    stack: string
    role: string
    period: string
    liveSite: string
    back: string
    downloadCv: string
    evidenceTitle: string
    evidenceIntro: string
  }
  skills: { group: string; items: string[] }[]
  experience: Entry[]
  education: Entry[]
  languages: { name: string; detail: string }[]
  volunteer: Entry[]
  cases: Record<CaseSlug, CaseStudy>
  demo: { kicker: string; title: string; body: string; planned: string[] }
}

const skillItems = {
  languages: ['JavaScript', 'Python', 'Java', 'C++', 'HTML', 'CSS'],
  frontend: ['React', 'Next.js', 'React Native', 'React-admin'],
  backend: ['Node.js', 'Express', 'FastAPI', 'REST API', 'Swagger', 'Sequelize'],
  data: ['PostgreSQL', 'MySQL'],
  devops: ['Docker', 'AWS', 'Git', 'GitHub'],
  workflow: ['Jira', 'Slack'],
}

const en: Content = {
  nav: {
    overview: 'Overview',
    tomyo: 'TomYo',
    capstone: 'Capstone',
    demo: 'Live demo',
    evidence: 'Evidence',
  },
  langSwitch: '한국어',
  hero: {
    eyebrow: 'Full-stack developer · Seoul',
    name: 'Chinguun',
    fullName: 'Chuluungerel Chinguun',
    summary:
      'Full-stack developer with over a year of production work across backend, web, and mobile. At TomYo EdTech I shipped 90+ merged PRs across Node.js/PostgreSQL APIs, Next.js web, and React Native.',
    status:
      'Inha University CS graduate (Dec 2025). Looking for a full-time developer role in South Korea.',
    ctaWork: 'See the work',
    ctaEmail: 'Email me',
  },
  stats: [
    { value: '90+', label: 'merged PRs at TomYo' },
    { value: '8', label: 'repos: backend, web, mobile' },
    { value: '0.64 → 0.76', label: 'React Native upgrade' },
    { value: 'TOPIK 5', label: 'Korean · IELTS 7.5 English' },
  ],
  labels: {
    selectedWork: 'Selected work',
    skills: 'Skills',
    experience: 'Experience',
    education: 'Education',
    languages: 'Languages',
    volunteer: 'Volunteer',
    contact: 'Contact',
    viewCase: 'Read case study',
    stack: 'Stack',
    role: 'Role',
    period: 'Period',
    liveSite: 'Live site',
    back: 'Back to overview',
    downloadCv: 'Download CV',
    evidenceTitle: 'Evidence',
    evidenceIntro:
      'Experience, education, and test scores in one place, the same facts as my CV.',
  },
  skills: [
    { group: 'Languages', items: skillItems.languages },
    { group: 'Frontend', items: skillItems.frontend },
    { group: 'Backend', items: skillItems.backend },
    { group: 'Databases', items: skillItems.data },
    { group: 'DevOps', items: skillItems.devops },
    { group: 'Workflow', items: skillItems.workflow },
  ],
  experience: [
    {
      title: 'Software Developer · Remote',
      org: 'TomYo EdTech',
      period: 'Mar 2025 – Dec 2025',
      points: [
        'Built REST APIs with Node.js, Express, and PostgreSQL (Sequelize)',
        'Shipped 90+ merged PRs across 8 repos: backend, web, and mobile',
        'Found and fixed a payment security flaw in the checkout flow',
        'Built a subscription system with telecom carrier billing integration',
        'Refactored services with Docker and resolved production incidents',
        'Helped upgrade React Native from 0.64 to 0.76',
        'Built internal admin tools with React-admin',
        'Worked through code review and wrote tests',
      ],
    },
    {
      title: 'Tech Intern',
      org: 'TomYo EdTech',
      period: 'Dec 2024 – Feb 2025',
      points: [
        'Contributed to 3+ projects built on REST APIs and PostgreSQL',
        'Resolved 3+ support tickets a week on Node.js performance and service issues',
        'Improved the Yarn-based dev workflow and code management',
      ],
    },
  ],
  education: [
    {
      title: 'BSc Computer Science',
      org: 'Inha University',
      period: 'Mar 2022 – Dec 2025',
      points: [
        'Global Scholarship Program recipient',
        'Coursework: Internet Programming, Computer Networks, Algorithms, Operating Systems, Data Structures, Databases',
        'Football team captain',
      ],
    },
  ],
  languages: [
    { name: 'English', detail: 'IELTS Academic 7.5 · TOEIC 920' },
    { name: 'Korean', detail: 'TOPIK Level 5' },
  ],
  volunteer: [
    {
      title: 'Talent Manager',
      org: 'AIESEC in NUM',
      period: 'Sep 2019 – Dec 2021',
      points: [
        'As Local Committee Manager, planned and ran events in line with AIESEC’s global strategy',
        'Handled recruiting, training, and onboarding programs',
      ],
    },
  ],
  cases: {
    tomyo: {
      slug: 'tomyo',
      kicker: 'Industry · TomYo EdTech',
      title: 'Backend, payments, and mobile at an EdTech company',
      period: 'Dec 2024 – Dec 2025',
      role: 'Tech Intern → Software Developer (remote)',
      summary:
        'Thirteen months at TomYo EdTech, starting as a tech intern and continuing as a remote software developer. I worked across the backend, web, and mobile codebases, from REST APIs and billing to a major React Native upgrade.',
      stack: [
        'Node.js',
        'Express',
        'PostgreSQL',
        'Sequelize',
        'Next.js',
        'React Native',
        'React-admin',
        'Docker',
      ],
      metrics: [
        { value: '90+', label: 'merged PRs' },
        { value: '8', label: 'repositories' },
        { value: '0.64 → 0.76', label: 'React Native' },
        { value: '13 mo', label: 'intern + developer' },
      ],
      sections: [
        {
          heading: 'APIs and data',
          points: [
            'Built REST APIs with Node.js, Express, and PostgreSQL through Sequelize.',
            'Worked through code review and wrote tests alongside features.',
          ],
        },
        {
          heading: 'Payments and subscriptions',
          points: [
            'Built a subscription system with telecom carrier billing integration.',
            'Found and fixed a security flaw in the checkout flow.',
          ],
        },
        {
          heading: 'Mobile',
          points: [
            'Helped upgrade the React Native app from 0.64 to 0.76, a large multi-version migration.',
          ],
        },
        {
          heading: 'Operations and tooling',
          points: [
            'Refactored services with Docker and resolved production incidents.',
            'As an intern, handled 3+ support tickets a week on Node.js performance and service issues.',
            'Built internal admin tools with React-admin.',
          ],
        },
      ],
    },
    capstone: {
      slug: 'capstone',
      kicker: 'Capstone · Inha University',
      title: 'AI health risk prediction platform',
      period: 'Sep 2025 – Feb 2026',
      role: 'Backend design and development',
      summary:
        'A platform that predicts health risk with a machine learning model. I designed and built the backend: the APIs, the data pipeline, and the connection to the prediction model.',
      stack: ['Node.js', 'React', 'XGBoost', 'Blockchain', 'Render'],
      url: 'https://capstone-project-nf9e.onrender.com',
      metrics: [
        { value: 'XGBoost', label: 'prediction model' },
        { value: 'Real-time', label: 'analysis via the API' },
        { value: 'Live', label: 'deployed on Render' },
      ],
      sections: [
        {
          heading: 'Backend',
          points: [
            'Designed and built the backend for the platform.',
            'Built the REST APIs, the data pipeline, and secure handling for health data.',
          ],
        },
        {
          heading: 'Model integration',
          points: [
            'Connected the XGBoost prediction model to the backend server for real-time analysis.',
          ],
        },
        {
          heading: 'Deployment',
          points: [
            'Structured the services with scaling in mind and deployed the platform.',
          ],
        },
      ],
    },
  },
  demo: {
    kicker: 'In progress',
    title: 'Job-matching API demo',
    body: 'A small Node.js API you can try from this page: send a profile, get ranked job matches back. It is being built in a separate change.',
    planned: [
      'Node.js API with typed request and response schemas',
      'Matching and ranking you can try live',
      'Tests and CI, like the rest of this repo',
    ],
  },
}

const ko: Content = {
  nav: {
    overview: '소개',
    tomyo: 'TomYo',
    capstone: '캡스톤',
    demo: '라이브 데모',
    evidence: '이력',
  },
  langSwitch: 'English',
  hero: {
    eyebrow: '풀스택 개발자 · 서울',
    name: '친궁',
    fullName: 'Chuluungerel Chinguun',
    summary:
      '백엔드, 웹, 모바일 실서비스 개발 경력 1년 이상의 풀스택 개발자입니다. TomYo EdTech에서 Node.js/PostgreSQL API, Next.js 웹, React Native 전반에 걸쳐 90개 이상의 PR을 머지했습니다.',
    status:
      '인하대학교 컴퓨터공학 졸업(2025년 12월). 한국에서 정규직 개발자로 일할 기회를 찾고 있습니다. 국적 몽골, D-10 비자.',
    ctaWork: '프로젝트 보기',
    ctaEmail: '이메일 보내기',
  },
  stats: [
    { value: '90+', label: 'TomYo 머지된 PR' },
    { value: '8', label: '저장소: 백엔드, 웹, 모바일' },
    { value: '0.64 → 0.76', label: 'React Native 마이그레이션' },
    { value: 'TOPIK 5급', label: '한국어 · 영어 IELTS 7.5' },
  ],
  labels: {
    selectedWork: '주요 프로젝트',
    skills: '기술 스택',
    experience: '경력',
    education: '교육',
    languages: '언어 능력',
    volunteer: '봉사활동',
    contact: '연락처',
    viewCase: '자세히 보기',
    stack: '기술',
    role: '역할',
    period: '기간',
    liveSite: '사이트 방문',
    back: '소개로 돌아가기',
    downloadCv: '이력서 다운로드',
    evidenceTitle: '이력',
    evidenceIntro: '경력, 교육, 어학 성적을 한곳에 정리했습니다. 이력서와 같은 내용입니다.',
  },
  skills: [
    { group: '프로그래밍 언어', items: skillItems.languages },
    { group: '프론트엔드', items: skillItems.frontend },
    { group: '백엔드', items: skillItems.backend },
    { group: '데이터베이스', items: skillItems.data },
    { group: 'DevOps', items: skillItems.devops },
    { group: '워크플로우', items: skillItems.workflow },
  ],
  experience: [
    {
      title: '소프트웨어 개발자 · 원격',
      org: 'TomYo EdTech',
      period: '2025년 3월 – 2025년 12월',
      points: [
        'Node.js/Express, PostgreSQL(Sequelize) 기반 REST API 개발',
        '백엔드, 웹, 모바일 8개 저장소에서 90개 이상의 PR 머지',
        '결제 페이지 보안 취약점 발견 및 수정',
        '통신사 결제 연동 구독/결제 시스템 개발',
        'Docker 기반 서비스 리팩터링 및 운영 장애 대응',
        'React Native 0.64 → 0.76 대규모 버전 마이그레이션 참여',
        'React-admin 기반 내부 관리자 도구 개발',
        '코드 리뷰 기반 협업 및 테스트 작성',
      ],
    },
    {
      title: '기술 인턴',
      org: 'TomYo EdTech',
      period: '2024년 12월 – 2025년 2월',
      points: [
        'REST API·PostgreSQL 기반 프로젝트 3개 이상 개발 참여',
        'Node.js 서비스 운영 및 성능 이슈 대응 (주 3건 이상)',
        'Yarn 기반 개발 환경 개선 및 코드 관리 진행',
      ],
    },
  ],
  education: [
    {
      title: '컴퓨터공학 학사',
      org: '인하대학교',
      period: '2022년 3월 – 2025년 12월',
      points: [
        '글로벌 장학 프로그램 대상자',
        '관련 과정: 인터넷 프로그래밍, 컴퓨터 네트워크, 알고리즘, 운영체제, 자료구조, 데이터베이스',
        '축구부 주장',
      ],
    },
  ],
  languages: [
    { name: '영어', detail: 'IELTS Academic 7.5 · TOEIC 920' },
    { name: '한국어', detail: 'TOPIK 5급' },
  ],
  volunteer: [
    {
      title: '인재 매니저',
      org: 'AIESEC in NUM',
      period: '2019년 9월 – 2021년 12월',
      points: [
        '인재 채용 및 교육, 온보딩 프로그램과 행사 운영 담당',
        '조직 운영 기준에 맞춰 프로그램을 관리하며 원활한 운영 지원',
      ],
    },
  ],
  cases: {
    tomyo: {
      slug: 'tomyo',
      kicker: '실무 · TomYo EdTech',
      title: '에듀테크 기업의 백엔드, 결제, 모바일 개발',
      period: '2024년 12월 – 2025년 12월',
      role: '기술 인턴 → 소프트웨어 개발자 (원격)',
      summary:
        'TomYo EdTech에서 기술 인턴으로 시작해 원격 소프트웨어 개발자로 13개월간 일했습니다. REST API와 결제 시스템부터 React Native 대규모 업그레이드까지 백엔드, 웹, 모바일 코드베이스 전반을 담당했습니다.',
      stack: [
        'Node.js',
        'Express',
        'PostgreSQL',
        'Sequelize',
        'Next.js',
        'React Native',
        'React-admin',
        'Docker',
      ],
      metrics: [
        { value: '90+', label: '머지된 PR' },
        { value: '8', label: '저장소' },
        { value: '0.64 → 0.76', label: 'React Native' },
        { value: '13개월', label: '인턴 + 개발자' },
      ],
      sections: [
        {
          heading: 'API와 데이터',
          points: [
            'Node.js/Express와 PostgreSQL(Sequelize) 기반 REST API를 개발했습니다.',
            '코드 리뷰 기반으로 협업하고 기능과 함께 테스트를 작성했습니다.',
          ],
        },
        {
          heading: '결제와 구독',
          points: [
            '통신사 결제를 연동한 구독 시스템을 개발했습니다.',
            '결제 페이지의 보안 취약점을 발견하고 수정했습니다.',
          ],
        },
        {
          heading: '모바일',
          points: ['React Native 0.64 → 0.76 대규모 버전 마이그레이션에 참여했습니다.'],
        },
        {
          heading: '운영과 도구',
          points: [
            'Docker로 서비스를 리팩터링하고 운영 장애에 대응했습니다.',
            '인턴 기간에는 Node.js 성능 및 서비스 이슈 티켓을 주 3건 이상 해결했습니다.',
            'React-admin 기반 내부 관리자 도구를 개발했습니다.',
          ],
        },
      ],
    },
    capstone: {
      slug: 'capstone',
      kicker: '캡스톤 · 인하대학교',
      title: 'AI 기반 건강 위험 예측 플랫폼',
      period: '2025년 9월 – 2026년 2월',
      role: '백엔드 설계 및 개발',
      summary:
        '머신러닝 모델로 건강 위험을 예측하는 플랫폼입니다. API, 데이터 파이프라인, 예측 모델 연동까지 백엔드를 설계하고 개발했습니다.',
      stack: ['Node.js', 'React', 'XGBoost', 'Blockchain', 'Render'],
      url: 'https://capstone-project-nf9e.onrender.com',
      metrics: [
        { value: 'XGBoost', label: '예측 모델' },
        { value: '실시간', label: 'API 기반 분석' },
        { value: 'Live', label: 'Render 배포' },
      ],
      sections: [
        {
          heading: '백엔드',
          points: [
            'AI 기반 건강 위험 예측 플랫폼의 백엔드를 설계하고 개발했습니다.',
            'REST API, 데이터 파이프라인 및 보안 데이터 처리 구조를 구축했습니다.',
          ],
        },
        {
          heading: '모델 연동',
          points: ['AI 예측 모델을 백엔드 서버에 연동해 실시간 분석 기능을 구현했습니다.'],
        },
        {
          heading: '배포',
          points: ['확장성을 고려한 서비스 구조를 설계하고 배포했습니다.'],
        },
      ],
    },
  },
  demo: {
    kicker: '개발 중',
    title: '채용 매칭 API 데모',
    body: '이 페이지에서 직접 사용해 볼 수 있는 Node.js API입니다. 프로필을 보내면 순위가 매겨진 채용 공고 매칭 결과를 돌려줍니다. 별도 작업으로 개발 중입니다.',
    planned: [
      '요청/응답 스키마가 정의된 Node.js API',
      '직접 실행해 볼 수 있는 매칭 및 순위 기능',
      '이 저장소와 같은 테스트 및 CI',
    ],
  },
}

export const content: Record<Lang, Content> = { en, ko }
