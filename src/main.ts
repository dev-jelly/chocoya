import "./style.css";
import { setupCounter } from "./counter.ts";

type Project = {
  title: string;
  description: string;
  link: string;
};

const chocoyaProjects: Project[] = [
  {
    title: "초코야! 이것 좀 해라!",
    description: "로컬 기반 투두앱으로, 런칭 속도가 매우 빠른게 특징입니다.",
    link: "https://github.com/dev-jelly/tauri-ww-todo",
  },
  {
    title: "초코야! 스플랫 플레이트",
    description:
      "스플래툰의 요소 중 하나인 플레이트를 편집 및 제작하기 쉽게 만들어주는 사이트입니다. 원본은 <a href='https://seymourschlong.github.io/splashtags/'>seymourschlong의 splashtag</a>이며, 한번 <a href='https://dev-jelly.github.io/splashtags/'>포크해서 인쇄용으로 만든 프로젝트</a>를 다시 사용성을 개선해 만든 프로젝트입니다.",
    link: "https://plate.octol.ing",
  },
  {
    title: "초코야! 연어한판?!",
    description:
      "스플래툰 연어런 공략을 위해 만든 사이트이며, 연어런 로테이션을 확인하고 로테이션별 무기 공략을 확인할 수 있습니다.",
    link: "https://dev-jelly.github.io/today-salmonrun/",
  },
  {
    title: "초코야! 스플랫 사전",
    description:
      "스플래툰 용어 중 번역하기 어려운 단어들을 게임내 데이터를 검색해서 보여주는 사이트 입니다. 사전을 서빙하는 코드는 보안을 위해 비공개로 해두었습니다.",
    link: "https://sd.octol.ing",
  },
  {
    title: "초코야! 스플랫 번역",
    description:
      "Gen AI 기반의 스플래툰 번역기 입니다. 스플래툰 관련 문장을 입력하면 한국어로 번역할 수 있게 끔 하는 게 목표입니다.(개발중)",
    link: "#",
  },
  {
    title: "초코야! 주기 관리",
    description:
      "일상적으로 갈아줘야할 부품이나 주기에 맞춰 해야하는 것들을 관리하기 위한 프로젝트입니다. (기획단계)",
    link: "#",
  },
];

const projectList = chocoyaProjects.map((project) => {
  if (project.link === "#")
    return `
  <li class="flex flex-col gap-x-3">
  <span class="font-semibold text-lg text-gray-500">${project.title}</span>
    <span> ${project.description}</span>
  </li>
  `;
  return `
  <li class="flex flex-col gap-x-3">    
  <a class="font-semibold text-lg text-stone-700" href="${project.link}" target="_blank">${project.title}</a>
    <span> ${project.description}</span>
  </li>
  `;
});

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="bg-white px-4 sm:px-6 py-32 lg:px-8">
  <div class="mx-auto max-w-3xl text-base leading-7 text-gray-700">
    <p class="text-base font-semibold leading-7 text-indigo-600">Introducing</p>
    <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl break-keep">초코야 프로젝트에 오신 걸 환영합니다.</h1>
   
    <p class="mt-6 text-xl leading-8 sm:mx-24 break-keep">
        초코야 프로젝트는 젤리와 초코를 중심으로 매번 본인들 필요한 거 만들어서 사용하는 프로젝트입니다.    
    </p>

<!--  Profiles  -->    
    <div class="flex flex-col md:flex-row justify-center items-center">
      <div class="mt-10 sm:w-1/2">
        <div class="flex my-2 w-full justify-center items-center">
          <div class="w-24 h-24 rounded-full">
            <img src="/jelly.png" alt="젤리" class="w-24 h-24 rounded-full">
          </div>
        </div>
        <a href="https://github.com/dev-jelly" class="text-xl font-semibold text-yellow-600">젤리</a>
        <p class="mt-2 text-base leading-7 text-gray-600">
          젤리는 개발자로 기술에 관심이 많습니다.
        </p>
      </div>
      <div class="mt-10 sm:w-1/2">
        <div class="flex my-2 w-full justify-center items-center">
          <div class="w-24 h-24 rounded-full">
            <img src="/choco.png" alt="초코" class="w-24 h-24 rounded-full">
          </div>
        </div>
        <a href="https://twitter.com/octoling_choco" class="text-xl font-semibold text-purple-600">초코</a>
        <p class="mt-2 text-base leading-7 text-gray-600">
          초코는 기획자로 여러가지 잔소리가 많습니다!
        </p>
      </div>
    </div>
    
    <div class="mt-10 flex flex-col justify-center items-center w-full">
      <h3 class="text-xl">
        초코야 프로젝트에서 진행한 프로젝트들
      </h3>
      <ul role="list" class="mt-8 max-w-xl space-y-8 text-gray-600 break-keep">
        ${projectList.join("")}
      </ul>  
    </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
