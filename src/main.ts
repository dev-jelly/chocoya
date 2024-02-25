import "./style.css";
import { setupCounter } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="bg-white px-6 py-32 lg:px-8">
  <div class="mx-auto max-w-3xl text-base leading-7 text-gray-700">
    <p class="text-base font-semibold leading-7 text-indigo-600">Introducing</p>
    <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">초코야 프로젝트에 오신 걸 환영합니다.</h1>
    <p class="mt-6 text-xl leading-8">
        초코야 프로젝트는 젤리와 초코를 중심으로 매번 본인 필요한 거 만들어서 사용하는 프로젝트입니다.    
    </p>
    <div class="mt-10 max-w-2xl">
      <p>
      초코야 프로젝트에서 진행한 프로젝트들
        </p>
      <ul role="list" class="mt-8 max-w-xl space-y-8 text-gray-600">
        <li class="flex gap-x-3">    
          <span><a class="font-semibold text-gray-900" href="https://github.com/dev-jelly/tauri-ww-todo">초코야! 이것 좀 해라!</a>로컬 기반 투두앱으로, 기본적인 투두리스트 기능들을 가지고 있고, 데이터는 전부 로컬스토리지에 저장하고 있습니다. Svelte와 tauri 를 이용하여 작성되었고 런칭 시 시간이 매우 짧은 게 특징입니다.</span>
        </li>
        <li class="flex gap-x-3">
      
          <span>
          <strong class="font-semibold text-gray-900">
          초코야! 연어한판?
          </strong> Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.</span>
        </li>
        <li class="flex gap-x-3">
          <span><strong class="font-semibold text-gray-900">초코야! 스플랫 플레이트!</strong> Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</span>
        </li>
      </ul>
      <p class="mt-8">Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.</p>
      <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">From beginner to expert in 3 hours</h2>
      <p class="mt-6">Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis ipsum eu a sed convallis diam.</p>
      <figure class="mt-10 border-l border-indigo-600 pl-9">
        <blockquote class="font-semibold text-gray-900">
          <p>“Vel ultricies morbi odio facilisi ultrices accumsan donec lacus purus. Lectus nibh ullamcorper ac dictum justo in euismod. Risus aenean ut elit massa. In amet aliquet eget cras. Sem volutpat enim tristique.”</p>
        </blockquote>
        <figcaption class="mt-6 flex gap-x-4">
          <img class="h-6 w-6 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
          <div class="text-sm leading-6"><strong class="font-semibold text-gray-900">Maria Hill</strong> – Marketing Manager</div>
        </figcaption>
      </figure>
      <p class="mt-10">Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.</p>
    </div>
    <figure class="mt-16">
      <img class="aspect-video rounded-xl bg-gray-50 object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3" alt="">
      <figcaption class="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
        <svg class="mt-0.5 h-5 w-5 flex-none text-gray-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd" />
        </svg>
        Faucibus commodo massa rhoncus, volutpat.
      </figcaption>
    </figure>
    <div class="mt-16 max-w-2xl">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">Everything you need to get up and running</h2>
      <p class="mt-6">Purus morbi dignissim senectus mattis adipiscing. Amet, massa quam varius orci dapibus volutpat cras. In amet eu ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut viverra ridiculus non molestie. Gravida quis fringilla amet eget dui tempor dignissim. Facilisis auctor venenatis varius nunc, congue erat ac. Cras fermentum convallis quam.</p>
      <p class="mt-8">Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.</p>
    </div>
  </div>
</div>

`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
