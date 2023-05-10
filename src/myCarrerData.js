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
                    whatdiddo: `프로젝트 생성부터 전체적인 어드민 레이아웃을 잡기위해 base code를 짜면서 EsLint/Prettier 설정과 라우팅 개념에 대해 한번 더 숙지 할 수 있었습니다. </br> 또한, 상태관리는 <strong>Redux</strong>를 사용하였고, 그 과정안에서 createSlice(redux-toolkit)를 처음으로 실무에서 적용해가며 학습할 수 있었습니다 <br/> <strong>rest API</strong> 호출 시 bearer 토큰을 포함해서 서버로 보내질 수 있게 공통으로 사용 할 baseRequest 함수를 만들어서 사용하였고, rest API를 붙이는 과정에서 CORS 이슈가 생겨서 Package.json 파일에 Proxy 옵션을 설정하여 해결 할 수 있었습니다.   <br/>
                    로그인 페이지를 만들어서 <strong>로그인기능</strong>도 구현하였습니다. 전체적으로 Material UI를 사용하여 각 컴포넌트 별로 다양한 UI 구현을 빠르게 할 수 있었습니다.
                     `,
                    myJob: '관리자 페이지 개발을 위한 프로젝트 생성, 베이스코드 작성, 기본 레이아웃 작업, 컴포넌트 생성, restApi 작업',
                    techStack: 'React.js',
                    thumbImage: false,
                },
                {
                    id: 'dev',
                    projectName: '데블록 자사홈페이지 리뉴얼',
                    period: '2022.12-2022.12',
                    description:
                        '자바스크립트 기반의 기존 자사 홈페이지를 리액트로 변환하고, 새로운 페이지를 구축하는 내부 프로젝트입니다.',
                    myJob: '프로젝트 생성 후 베이스코드 작성, 기본 레이아웃 작업, 컴포넌트 생성, 각 페이지 뷰작업/ 애니메이션 작업,ux 개선을 위한 디테일 추가',
                    whatdiddo: `
                     사이트 내 포트폴리오 페이지에서 이미지 <strong>Lazy Load시 생기는 빈공간을 색 채우기</strong>효과를 주어서 이미지 로드전에도 영역이 찌그러지지않고 이미지가 로딩중임을 알 수 있게 구현하였습니다. 폰트 또한 최적화 작업을 통해 웹폰트에 대한 기본 개념을 확실하게 숙지할 수 있게 되었습니다. 이미지 크기가 작고 공통으로 사용되는 컴포넌트의 경우 <strong>base64인코딩 방식</strong>을 사용해서 서버에 요청하지 않고도 이미지를 사용 할 수 있게 하였고, 포트폴리오 상세보기에서 <strong>로딩 인디케이터인 스피너</strong>를 사용해 1초 이상의 로딩이 걸리면 스피너가 뜨게하여 UX 향상을 위한 작은 디테일의 중요성을 배워갈 수 있었습니다.
                     `,
                    techStack: 'React.js',
                    thumbImage: true,
                },
                {
                    id: 'medicoson',
                    projectName: '메디코슨',
                    period: '2022.11-2022.11',
                    description:
                        '전용 의료기기 리쥬리프트 사용자를 위한 관리/기록/사용 가이드를 확인 할 수 있는 플랫폼 입니다.',
                    myJob: '어드민 페이지 개발',
                    whatdiddo: `
                  
                     `,
                    techStack: 'Javascript, Jquery',
                    thumbImage: false,
                },
                {
                    id: 'wdd',
                    projectName: '후다닥케어',
                    period: '2022.07-2022.10',
                    description:
                        '진료 예약부터 비대면 진료, 안전한 약수령, 맞춤 정보까지 제공하는 비대면 진료 플랫폼 입니다.',
                    myJob: '어드민 페이지 개발',
                    techStack: 'Vue.js',
                    thumbImage: false,
                },
                {
                    id: 'msm',
                    projectName: '엄마의 지도 ',
                    period: '2022.04-2022.10',
                    release: '2022-6-6',
                    description:
                        'SNS 20만 팔로워 엄마의 지도의 장소들을 사용자의 연령, 위치, 관심사에 따라 콘텐츠를 제공하며, 아이를 위한 시설 정보를 공유하는 커뮤니티 플랫폼입니다.',
                    myJob: '관리자 페이지 개발 , 유지/보수',
                    techStack: 'Javascript, Jquery',
                    thumbImage: true,
                },

                {
                    id: 'wap',
                    projectName: 'Wappener 와프너 ',
                    period: '2022.02-2022.10',
                    release: '2021-6-14',
                    description: '와인의 취향과 즐거움을 공유하고 기록하는 SNS 플랫폼 입니다. ',
                    myJob: '관리자 페이지 유지/보수',
                    techStack: 'Javascript, Jquery',
                    thumbImage: true,
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
                },
                {
                    id: 'mag',
                    projectName: '마인드그라프',
                    period: '2022.02-2022.05',
                    release: '2022-6-6',
                    description:
                        '마인드 그라프는 사람들의 마음을 분석하고, 사람들에게 필요한 마음 건강 콘텐츠를 제공하는 콘텐츠 결합형 AI 마음성장 플랫폼 입니다.',
                    myJob: '관리자 페이지 유지/보수',
                    techStack: 'Javascript, Jquery',
                    thumbImage: true,
                },
            ],
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
    skills: ['React.js', 'Vue.js', 'Javascript', 'Jquery', 'HTML5', 'CSS3', 'SCSS'],
    contact: [
        { method: 'Phone', url: '010-3679-7876' },
        { method: 'E-mail', url: 'rnjswltn1020@naver.com' },
        { method: 'Git', url: 'https://github.com/rnjswltn1020/' },
    ],
};

export default myData;
