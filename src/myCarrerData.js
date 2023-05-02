const myData = {
    works: [
        {
            id: 'dev',
            company: 'Devlock',
            task: 'Frontend Developer',
            period: '2022.02-2023.03',
            details: [
                {
                    projectName: 'BAC 블랙야크 알파인클럽 ',
                    period: '2022.02-2023.03',
                    release: '2020-1-2',
                    description:
                        'BAC 산행에 대한 지식과 활동을 공유하는 블랙야크의 어플리케이션 기반 소셜 액티비티 플랫폼 입니다.',
                    myJob: '관리자 페이지 유지/보수',
                    techStack: 'Javascript, Jquery',
                },
                {
                    projectName: '마인드그라프',
                    period: '2022.02-2022.05',
                    release: '2022-6-6',
                    description:
                        '마인드 그라프는 사람들의 마음을 분석하고, 사람들에게 필요한 마음 건강 콘텐츠를 제공하는 콘텐츠 결합형 AI 마음성장 플랫폼 입니다.',
                    myJob: '관리자 페이지 유지/보수',
                    techStack: 'Javascript, Jquery',
                },
                {
                    projectName: 'Wappener 와프너 ',
                    period: '2022.02-2022.10',
                    release: '2021-6-14',
                    description: '와인의 취향과 즐거움을 공유하고 기록하는 SNS 플랫폼 입니다. ',
                    myJob: '관리자 페이지 유지/보수',
                    techStack: 'Javascript, Jquery',
                },
                {
                    projectName: '엄마의 지도 ',
                    period: '2022.04-2022.10',
                    release: '2022-6-6',
                    description:
                        'SNS 20만 팔로워 엄마의 지도의 장소들을 사용자의 연령, 위치, 관심사에 따라 콘텐츠를 제공하며, 아이를 위한 시설 정보를 공유하는 커뮤니티 플랫폼입니다.',
                    myJob: '관리자 페이지 개발 , 유지/보수',
                    techStack: 'Javascript, Jquery',
                },
                {
                    projectName: '후다닥케어',
                    period: '2022.07-2022.10',
                    description:
                        '진료 예약부터 비대면 진료, 안전한 약수령, 맞춤 정보까지 제공하는 비대면 진료 플랫폼 입니다.',
                    myJob: '어드민 페이지 개발',
                    techStack: 'Vue.js',
                },
                {
                    projectName: '메디코슨',
                    period: '2022.11-2022.11',
                    description:
                        '전용 의료기기 리쥬리프트 사용자를 위한 관리/기록/사용 가이드를 확인 할 수 있는 플랫폼 입니다.',
                    myJob: '어드민 페이지 개발',
                    techStack: 'Javascript, Jquery',
                },
                {
                    projectName: '데블록 자사홈페이지 리뉴얼',
                    period: '2022.12-2022.12',
                    description:
                        'javascript로 되어있던 기존 홈페이지를 React.js를 사용해서 변경하는 작업을 하였고, 추가 페이지와 변경 된 페이지 작업 또한 진행 하였습니다.',
                    myJob: '프로젝트 생성 후 베이스코드 작성, 기본 레이아웃 작업, 컴포넌트 생성, 각 페이지 뷰작업/ 애니메이션 작업,',
                    techStack: 'React.js',
                },
                {
                    projectName: '온누리약국',
                    period: '2023.01-2023.03 (프로젝트중 퇴사)',
                    description:
                        '약국에서 처방받은 처방전 토대로 약성분 설명/환자 별 맞춤 정보까지 제공하는 플랫폼 입니다. ',
                    myJob: '관리자 페이지 개발',
                    techStack: 'React.js',
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
    skills: ['HTML5', 'CSS', 'SCSS', 'Javascript', 'Jquery', 'React.js', 'Vue.js'],
    contact: [
        { method: 'E-mail', url: 'rnjswltn1020@naver.com' },
        { method: 'Git', url: 'https://github.com/rnjswltn1020/' },
    ],
};

export default myData;
