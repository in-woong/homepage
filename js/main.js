(() => {
  let yOffset = 0; // window.pageYOffset 대신 쓸 변수
  let prevScrollHeight = 0; // 현재 스크롤 위치(yOffset)보다 이전에 위치한 스크롤 섹션들의 스크롤 높이값의 합
  let currentScene = 0; // 현재 활성화된(눈 앞에 보고있는) 씬(scroll-section)
  let enterNewScene = false; // 새로운 scene이 시작된 순간 true
  let acc = 0.2;
  let delayedYOffset = 0;
  let rafId;
  let rafState;

  const sceneInfo = [
    {
      //0
      type: 'sticy',
      heightNum: 5,
      scrollHeight: 0,
      objs: {},
      values: {},
    },
    {
      //1
      type: 'normal',
      scrollHeight: 0,
      objs: {},
    },
    {
      //2
      type: 'sticky',
      heightNum: 5,
      scrollHeight: 0,
      objs: {},
      values: {},
    },
  ];

  window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('before-load');
  });
})();
