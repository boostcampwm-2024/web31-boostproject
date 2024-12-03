import { ReactNode } from 'react';

type CoachMarkStep = {
  title: string;
  content: ReactNode;
};

export const coachMarkContent: CoachMarkStep[] = [
  {
    title: 'HTML 태그 블록 조립하기',
    content: (
      <>
        오른쪽 <span className="coachMarkHighlightText">HTML 태그 탭</span>에서 블록을 가져와 <br />
        작업 공간에서 조립할 수 있어요
      </>
    ),
  },
  {
    title: 'CSS 클래스 블록 생성 후 조립하기',
    content: (
      <>
        원하는 <span className="coachMarkHighlightText">CSS 클래스 블록</span>을 생성할 수 있어요.
        <br />
        생성된 블록은 HTML 블록에 조립할 수 있어요
      </>
    ),
  },
  {
    title: '스타일 속성 추가하기',
    content: (
      <>
        생성한 <span className="coachMarkHighlightText">CSS 클래스 블록</span>을 선택해 <br />
        원하는
        <span className="coachMarkHighlightText">스타일 속성</span>을 추가할 수 있어요
      </>
    ),
  },
  {
    title: '미리보기와 코드 확인하기',
    content: (
      <>
        <span className="coachMarkHighlightText">미리보기</span> 탭에서는 블록 코딩으로 만든 화면을,
        <br />
        <span className="coachMarkHighlightText">HTML/CSS</span> 탭에서는 코드를 확인할 수 있어요.
      </>
    ),
  },
  {
    title: '저장하고 불러오기',
    content: (
      <>
        <span className="coachMarkHighlightText">저장</span>하지 않고 나가면 블록이 사라져요. <br />
        변경 사항은 <span className="coachMarkHighlightText">되돌리거나 다시 적용</span>할 수
        있어요.
      </>
    ),
  },
];
