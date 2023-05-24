const myData = {
    works: [
        {
            id: 'dev',
            company: 'Devlock',
            task: 'Frontend Developer',
            period: '2022.02-2023.03 [퇴사]',
            details: [
                {
                    id: 'onnuri',
                    projectName: '온누리약국',
                    period: '2023.01-2023.03 [프로젝트중 퇴사]',
                    description:
                        '약국에서 처방받은 처방전 토대로 약성분 설명/환자 별 맞춤 정보까지 제공하는 플랫폼 입니다. ',
                    whatdiddo: `프로젝트 생성부터 전체적인 어드민 레이아웃을 잡기위해 base code를 짜면서 EsLint/Prettier 설정과 라우팅 개념에 대해 한번 더 숙지 할 수 있었습니다. </br> 또한, 상태관리는 <strong>Redux</strong>를 사용하였고, 그 과정안에서 createSlice(redux-toolkit)를 처음으로 실무에 적용해가며 학습할 수 있었습니다 <br/> <strong>Rest API</strong> 호출 시 bearer 토큰을 포함해서 서버로 보내질 수 있게 공통으로 사용 할 baseRequest 함수를 만들어서 사용하였고, rest API를 붙이는 과정에서 CORS 이슈가 생겨서 Package.json 파일에 Proxy 옵션을 설정하여 해결 할 수 있었습니다.   <br/>
                    로그인 페이지를 만들어서 <strong>로그인기능</strong>도 구현하였습니다. 전체적으로 Material UI를 사용하여 각 컴포넌트 별로 다양한 UI 구현을 빠르게 할 수 있었습니다.
                     `,
                    myJob: '관리자 페이지 개발을 위한 프로젝트 생성, 베이스코드 작성, 기본 레이아웃 작업, 컴포넌트 생성, Rest Api 작업',
                    techStack: 'React.js',
                    thumbImage: false,
                    detailImage: false,
                },
                {
                    id: 'dev',
                    projectName: '데블록 자사홈페이지 리뉴얼',
                    period: '2022.12-2022.12',
                    link: 'https://devlock.co.kr/',
                    description:
                        '자바스크립트 기반의 기존 자사 홈페이지를 리액트로 변환하고, 새로운 페이지를 구축하는 내부 프로젝트입니다.',
                    myJob: '관리자 페이지 개발을 위한 프로젝트 생성 후 베이스코드 작성, 기본 레이아웃 작업, 컴포넌트 생성, 각 페이지 뷰작업/ 애니메이션 작업,ux 개선을 위한 디테일 추가',
                    whatdiddo: `
                     사이트 내 포트폴리오 페이지에서 이미지 <strong>Lazy Load시 생기는 빈공간을 색 채우기</strong>효과를 주어서 이미지 로드전에도 영역이 찌그러지지않고 이미지가 로딩중임을 알 수 있게 구현하였습니다. 폰트 또한 최적화 작업을 통해 웹폰트에 대한 기본 개념을 확실하게 숙지할 수 있게 되었습니다. 이미지 크기가 작고 공통으로 사용되는 컴포넌트의 경우 <strong>base64인코딩 방식</strong>을 사용해서 서버에 요청하지 않고도 이미지를 사용 할 수 있게 하였고, 포트폴리오 상세보기에서 <strong>로딩 인디케이터인 스피너</strong>를 사용해 1초 이상의 로딩이 걸리면 스피너가 뜨게하여 UX 향상을 위한 작은 디테일의 중요성을 배워갈 수 있었습니다.
                     `,
                    techStack: 'React.js',
                    thumbImage: true,
                    detailImage: true,
                },
                {
                    id: 'medicoson',
                    projectName: '메디코슨',
                    period: '2022.11-2022.11',
                    description:
                        '전용 의료기기 리쥬리프트 사용자를 위한 관리/기록/사용 가이드를 확인 할 수 있는 플랫폼 입니다.',
                    myJob: '관리자 페이지 개발',
                    techStack: 'Javascript, Jquery',
                    thumbImage: false,
                    detailImage: true,
                },
                {
                    id: 'wdd',
                    projectName: '후다닥케어',
                    period: '2022.07-2022.10',
                    description:
                        '진료 예약부터 비대면 진료, 안전한 약수령, 맞춤 정보까지 제공하는 비대면 진료 플랫폼 입니다.',
                    whatdiddo: `Data Table부터 Alert, modal 등등을 라이브러리없이 <strong>직접 구현해나가면서</strong> 부족했던 기본 개념들에 대해 좀 더 학습할 수 있었습니다. 상태관리는 <strong>Vuex</strong>를 사용하였고, state, mutations, action에 대한 개념도 배워 갈 수 있었습니다. slot을 활용해서 컴포넌트의 재사용성을 높일 수 있게 하였고, 상수들은 모두 constant.js 파일에서 관리함으로써 <strong> 유지보수가 쉽고 가독성도 높아질 수 있게 노력 하였습니다. </strong> <br/>또한, Kakao map APi를 사용해서 유저가 설정한 주소지의 위도, 경도값을 가지고 지도 바로가기 기능을 구현하였습니다. <br/>프로젝트를 진행하면서 가장 기억에남는 이슈는 <strong>타이밍 이슈</strong>입니다. rest Api로 데이터를 요청해서 해당 스토어에 전달받은 데이터를 셋팅하는데 상세 페이지에서는 해당 스토어 데이터에 의존해서 정보를 뿌려주게 되어있었기 때문에 데이터 셋팅전에 페이지가 로드되면서 오류가 뜨는 이슈였습니다. <br/>결국 찾아낸 해결법은 <strong>data 초기값으로 show=false를 선언하고 api 콜이 성공하면 true로 바꾼다. 그리고 template 내 가장 부모 DOM에 조건문 v-if를 써서 show가 true일때 페이지 내용이 보여지게한다</strong>라는 정말 단순한 방법으로 해결 할 수 있었습니다.
                     `,
                    myJob: '관리자 페이지 개발을 위한 모든 컴포넌트 생성,전체 페이지 뷰작업, Rest Api 작업',
                    techStack: 'Vue.js',
                    thumbImage: false,
                    detailImage: true,
                },
                {
                    id: 'msm',
                    projectName: '엄마의 지도 ',
                    period: '2022.04-2022.10',
                    release: '2022-6-6',
                    description:
                        'SNS 20만 팔로워 엄마의 지도의 장소들을 사용자의 연령, 위치, 관심사에 따라 콘텐츠를 제공하며, 아이를 위한 시설 정보를 공유하는 커뮤니티 플랫폼입니다.',
                    myJob: '관리자 페이지 개발 , 유지/보수',
                    whatdiddo: `<strong>ajax로 비동기 처리를 하면서 promise, async에 대한 개념</strong>에 대해 한번 더 숙지 할 수 있었습니다. 또한, 상세 페이지에서 각각의 조건에 맞게 기입한 컨텐츠들을 전송하기 전에 <strong>데이터의 유효성을 검사</strong>하기 위한 validate의 구현방법에 대해 학습할 수 있엇습니다. 
                     `,
                    techStack: 'Javascript, Jquery',
                    thumbImage: true,
                    detailImage: true,
                },

                {
                    id: 'wap',
                    projectName: 'Wappener 와프너 ',
                    period: '2022.02-2022.10',
                    release: '2021-6-14',
                    description: '와인의 취향과 즐거움을 공유하고 기록하는 SNS 플랫폼 입니다. ',
                    myJob: '관리자 페이지 유지/보수',
                    whatdiddo: `기존에 개발되어있던 프로젝트의 추가 요청건에 대한 유지/보수를 진행하면서, 클라이언트 기획서상의 기재되어있는 기획자가 바라는 바와 기능에 대해 개발자로써 정확하게 캐치하고 개발해내는것. 즉,<strong> 커뮤니케이션의 중요성에 대해 배울 수 있었습니다.</strong>
                     `,
                    techStack: 'Javascript, Jquery',
                    thumbImage: true,
                    detailImage: true,
                },
                {
                    id: 'bac',
                    projectName: 'BAC 블랙야크 알파인클럽 ',
                    period: '2022.02-2023.03',
                    release: '2020-1-2',
                    description:
                        'BAC 산행에 대한 지식과 활동을 공유하는 블랙야크의 어플리케이션 기반 소셜 액티비티 플랫폼 입니다.',
                    myJob: '관리자 페이지 유지/보수',
                    techStack: 'Javascript, Jquery',
                    thumbImage: true,
                    detailImage: true,
                },
                {
                    id: 'mag',
                    projectName: '마인드그라프',
                    period: '2022.02-2022.05',
                    release: '2022-6-6',
                    description:
                        '마인드 그라프는 사람들의 마음을 분석하고, 사람들에게 필요한 마음 건강 콘텐츠를 제공하는 콘텐츠 결합형 AI 마음성장 플랫폼 입니다.',
                    whatdiddo: `제가 입사했을땐 이미 프로젝트 개발의 막바지를 바라보는 시점이었기 때문에, 기존에 짜여져있던 전체 코드들을 리뷰 하면서 어떤식으로 코드를 짜왔었고 ajax를 사용해서 비동기처리를 어떤식으로 처리해왔는지 개념에 대해 학습할 수 있었던 프로젝트입니다.
                     `,
                    myJob: '관리자 페이지 유지/보수',
                    techStack: 'Javascript, Jquery',
                    thumbImage: true,
                    detailImage: true,
                },
            ],
        },
    ],
    sideProjects: [
        {
            id: 'ordinaryCloset',
            projectName: '보통의 클로젯 쇼핑몰',
            period: '2023.2-2023.3',
            link: 'https://ordinarycloset.netlify.app/',
            description:
                'Ordinary Closet 이라는 이름을 가진 쇼핑몰 웹사이트로 firebase와 cloudinary를 사용하여 기능구현하는것에 중점을 둔 프로젝트 입니다. ',
            whatdiddo: `파이어베이스를 이용해 OAuth 로그인과 실시간 데이터베이스를 사용하는 방법에 대해 배워갈 수 있었습니다. 또한, Cloudinary 서비스를 이용해서 이미지를 업로드하는 기능도 처음 사용해보았고, 제품관련 CRUD 통신 방법을 React로 구현하는 방식에 대해 명확하게 익힐 수 있었습니다.
                     `,
            myJob: 'Firebase 기반 realtime database, auth Login 기능구현, Cloudinary를 이용해 이미지 업로드',
            techStack: ['React.js', 'styled-components'],
            thumbImage: true,
            detailImage: false,
        },
        {
            id: 'todolist',
            projectName: 'To Do List',
            period: '2022.12-2022.12',
            link: 'https://rnjswltn1020.github.io/todoListReact/',
            description: 'React 기반 CRUD 구현 투두 리스트 프로젝트 입니다. ',
            whatdiddo: `
            기본중에 기본인 CRUD를 React로 구현해가면서 처음으로 Styled component를 사용해보았고, 사용법에 대해 익힐 수 있었습니다. 또한, 데이터의localStorage의 적용하면서 SessionStorage와의 차이점에 대해 명확하게 배워 갈 수 있었습니다.
                     `,
            myJob: 'localStorage 사용해서 CRUD 구현, 다크모드, 필터링[전체,한일, 할일]',
            techStack: ['React.js', 'styled-components'],
            thumbImage: true,
            detailImage: false,
        },
        {
            id: 'jeju',
            projectName: '제주 섭지코지 소개 웹사이트',
            period: '2021.12-2022.1',
            link: 'http://jisookwon.dothome.co.kr/jeju/index.html',
            description:
                '스크롤이벤트를 이용해서 제주도 섭지코지를 소개하는 웹사이트개발 프로젝트 입니다..',
            whatdiddo: `스크롤이벤트를 이용해서 여러개의 이미지를 마치 비디오처럼 부드럽게 보여지게하는 고급 인터랙션 효과에 대해 배워 갈 수 있었고, 인터랙티브 웹 개발에 대한 기본적인 기초 지식을 쌓아갈 수 있었습니다. 또한, 능숙치 않았던 ES6 스크립트 문법을 이전보다 디테일하게 배워 갈 수 있었습니다. `,
            myJob: '스크롤이벤트를 이용한 비디오 인터랙션 구현',
            techStack: ['javascript'],
            thumbImage: true,
            detailImage: true,
        },
    ],
    trainings: [
        {
            id: 1,
            period: '2023.02-2023.03',
            title: '리액트 개념정리-클론코딩',
            when: 'Dream cording',
            what: [
                'Props, state, Render',
                ' 리액트 훅, 상태관리, useReducer, Immer 라이브러리',
                ' 커스텀 훅 만들어보기',
                'context API 등.',
            ],
        },
        {
            id: 2,
            period: '2022.05-2022.08',
            title: '리액트 프론트엔드 개발실무(React JS)',
            when: '디코드 컴퓨터학원',
            what: [
                'react component',
                'react로 웹사이트 만들기',
                'redux- toolkit',
                'useMemo_useCallback',
                'recoil',
            ],
        },
        {
            id: 3,
            period: '2022.02-2022.05',
            title: '프론트엔드 개발을 위한 자바스크립트 객체지향',
            when: '디코드 컴퓨터학원',
            what: [
                '자바스크립트 객체지향(ES6) 수업',
                'cookie popup',
                'svg ui',
                'mask_slider',
                'crud',
            ],
        },
        {
            id: 4,
            period: '2021.12-2022.01',
            title: '애플 웹사이트 인터랙션 클론',
            when: '인프런',
            what: [
                '애플 웹사이트에 자주 등장하는 고급 인터랙션 효과에 대해 공부',
                '고해상도 비디오 인터랙션',
                '스크롤을 이용한 키프레임과 요소 컨트롤',
                '고해상도 이미지 처리를 위한 캔버스 활용법',
            ],
        },
        {
            id: 5,
            period: '2020. 12-2021. 06',
            title: 'UI/UX 웹퍼블리셔&프론트엔드 실무전문과정 ',
            when: '그린컴퓨터 아트학원',
            what: [
                '웹표준 및 모바일 UI/UX 디자인',
                'HTML5, CSS3를 활용한 웹코딩',
                'jQuery, JavaScript를 활용한 웹페이지 구현',
                '웹접근성, 웹표준을 준수한 크로스브라우징',
            ],
        },
    ],
    skills: ['javascript', 'React.js', 'vue.js', 'Jquery', 'HTML/CSS'],
    contact: [
        { method: 'Phone', url: '010-3679-7876' },
        { method: 'E-mail', url: 'rnjswltn1020@naver.com' },
        { method: 'Git', url: 'https://github.com/rnjswltn1020/' },
    ],
};

export default myData;
