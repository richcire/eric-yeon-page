export interface IProject {
  titleEng: string;
  titleKor: string;
  descriptionEng: string;
  descriptionKor: string;
  skillStack: string;
  pageLink?: string;
  githubLink: string;
  extraLink?: string;
  imgPath: string;
}

export const PERSONAL_COLOR: IProject = {
  titleEng: "Personal Color Self-check Program",
  titleKor: "퍼스널 컬러 자가진단 프로그램",
  descriptionEng: `Despite of increasing attention to personal color nowadays, there is a problem which people are hard to figure out one. 
  To solve this problem me and my teammates built a page where user can easily figre out their personal color through simple questions using color examples on screen. 
  Page also recommend related features such as clothes or hair styles depends on result`,
  descriptionKor:
    "퍼스널 컬러의 화제성과 중요성에 비해 일반인이 퍼스널 컬러에 접근하기 어렵다는 문제를 인식했고, 웹에서 간단하게 퍼스널 컬러를 진단할 수 있는 페이지를 만들었다.\n사용자는 몇 가지 질문을 통해 자신의 퍼스널 컬러를 찾아가게 된다.\n퍼스널 컬러의 본질은 피부색과 색상의 조화를 보는 것이기 때문에 자신의 피부를 직접 화면에 대어 색상과 어울리는 지 비교하며 질문에 응답한다.\n결과창에서는 자신의 퍼스널 컬러에 대한 설명과 화장품, 옷, 헤어 등에 대한 추천을 받을 수 있다.",
  skillStack: "HTML/CSS/JavaScript/Bootstrap",
  pageLink: "https://richcire.github.io/team17-final-project/",
  githubLink: "https://github.com/richcire/team17-final-project",
  extraLink: "https://github.com/richcire/personal-color-selfcheck",
  imgPath: "img/personal_color.png",
};
export const POWER_BUILDING: IProject = {
  titleEng: "Power Building Program",
  titleKor: "파워 빌딩 프로그램",
  descriptionEng:
    "This program is built for record daily work-out progress. User can save their work out record data through program and see total weight they've lifted in a week. User can easily see their weekly growth through this and get promoted in working out.",
  descriptionKor:
    "이 프로그램은 매일매일의 운동량을 기록하기 위해 만들어졌다. 사용자는 그 날의 운동기록 데이터를 프로그램에 저장하여 그 주에 총 자신이 들었던 무게를 확인할 수 있다. 이러한 기록을 통해 사용자는 주마다 성장하는 자신의 모습을 확인할 수 있으며 운동의 동기부여를 얻는다.",
  githubLink: "https://github.com/richcire/powerbuilding-program",
  skillStack:
    "HTML/CSS/TypeScript/React/Styled-component/Recoil/Firebase/React-router-dom",
  imgPath: "img/power_building.png",
};
export const WORKOUT_RECORD: IProject = {
  titleEng: "Simple Workout Record",
  titleKor: "심플 운동 기록",
  descriptionEng:
    "Simple workout Record is advanced and simpler version of power building program. Program mainly focuses on three main work out(Bench Press, Squat, Deadlift) which oftenly stand for one's workout status. More functions, fancier gui, and more simple design makes user feel more comfortable to record their work out progress. User can also see their improvements much more easily through graph ",
  descriptionKor:
    "심플 운동 기록은 파워빌딩 프로그램의 더 심플하고 나은 버전이다. 프로그램은 흔히 사람의 운동현황의 척도로 불리는 3대 운동(벤치프레스, 스쿼트, 데드리프트)에 초점을 맞춘다. 더 많은 기능들, 멋있는 화면, 심플한 디자인은  사용자들로 하여금 운동기록을 기록하는 것에 더 편안함을 느끼게 한다. 또한 사용자들은 프로그램이 제공하는 그래프를 통해 성장과정을 한눈에 확인할 수 있다.",
  skillStack:
    "HTMl/CSS/TypeScript/React/Styled-component/Recoil/Framer Motion/Firebase/Apexcharts",
  githubLink: "https://github.com/richcire/workout-record",
  imgPath: "img/simple_workout_record.png",
};
export const PROFILE_PAGE: IProject = {
  titleEng: "Eric Yeon Page",
  titleKor: "에릭 연의 페이지",
  descriptionEng:
    "Eric Yeon's Profile Page. Current Page You are looking at. Built to express my self and my projects",
  descriptionKor:
    "에릭 연의 프로필 페이지. 현재 사용자가 보고 있는 페이지다. 에릭 연 자신과 자신의 프로젝트를 표현하기위해 만들어 졌다.",
  skillStack: "HTML/CSS/TypeScript/React/NextJS/Styled-component/Framer Motion",
  githubLink: "https://github.com/richcire/eric-yeon-page",
  imgPath: "img/profile_page.png",
};

export const PROJECTS_LIST = [
  PERSONAL_COLOR,
  POWER_BUILDING,
  WORKOUT_RECORD,
  PROFILE_PAGE,
];
