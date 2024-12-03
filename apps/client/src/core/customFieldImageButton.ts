import { useImageModalStore } from '@/shared/store';
import * as Blockly from 'blockly/core';

const dom = Blockly.utils.dom;
const Svg = Blockly.utils.Svg;

/**
 * CustomFieldImageButton 클래스는 Blockly Field를 확장하여 이미지 업로드 버튼을 제공하는 커스텀 필드입니다.
 *
 * @description
 * - 이 클래스는 사용자 인터페이스를 개선하기 위해 클릭 시 특정 동작(이미지 업로드 모달 표시)을 트리거합니다.
 * - 필드의 디자인, 이벤트 처리, 크기 조정을 위한 메서드가 포함되어 있습니다.
 */
export class CustomFieldImageButton extends Blockly.Field<String> {
  protected backgroundRect_!: SVGRectElement; // 필드의 배경을 나타내는 SVG 요소
  width = 0; // 필드의 너비

  /**
   * @constructor
   * @param value 초기 필드 값
   * @param validator 필드 값 유효성을 검증하는 함수
   * @param config 추가적인 필드 구성 옵션
   */
  constructor(
    value: String | typeof Blockly.Field.SKIP_SETUP,
    validator?: Blockly.FieldValidator<String> | null,
    config?: Blockly.FieldConfig
  ) {
    super(value, validator, config);
    if (this.value_ === '') {
      this.setValue('사진을 넣어주세요'); // 기본 값 설정
    }
  }

  /**
   * 텍스트 요소를 생성합니다.
   *
   * @description
   * SVG 텍스트 요소를 생성하고 필드 그룹에 추가합니다.
   * 이 텍스트는 사용자가 볼 수 있는 버튼 라벨 역할을 합니다.
   *
   * @protected
   * @override
   */
  protected override createTextElement_(): void {
    this.textElement_ = dom.createSvgElement(
      Svg.TEXT,
      {
        class: 'blocklyText',
        x: 0,
        y: 0,
        'dominant-baseline': 'central',
        fill: '#1E272E',
      },
      this.fieldGroup_
    );

    this.textElement_.style.fontSize = '10pt';
    this.textContent_ = document.createTextNode('');
    this.textElement_.appendChild(this.textContent_);
  }

  /**
   * 필드 뷰를 초기화합니다.
   *
   * @description
   * 필드가 렌더링된 후 이벤트 리스너를 추가합니다.
   * hover 효과를 위한 스타일 변경 로직도 포함됩니다.
   *
   * @override
   */
  override initView(): void {
    super.initView();

    if (this.fieldGroup_) {
      this.fieldGroup_.addEventListener('click', this.onClick_.bind(this)); // 클릭 이벤트 처리기 추가
      const fieldRect = this.fieldGroup_.querySelector('.blocklyFieldRect') as SVGRectElement;
      if (fieldRect) {
        this.fieldGroup_.onmouseenter = () => {
          fieldRect.style.fill = '#E2EDFF'; // hover 효과 적용
        };

        this.fieldGroup_.onmouseleave = () => {
          fieldRect.style.fill = '#fff'; // hover 효과 제거
        };
      }
    }
  }

  /**
   * 클릭 이벤트 핸들러
   *
   * @description
   * 이미지 업로드 모달을 표시하고, 현재 블록 ID와 이미지를 설정합니다.
   *
   * @private
   */
  private onClick_(): void {
    useImageModalStore.getState().setIsModalOpen(true); // 이미지 업로드 모달 표시
    useImageModalStore.getState().setNowId(this.getSourceBlock()?.id as string); // 현재 블록 ID 설정
    useImageModalStore
      .getState()
      .setNowImage(this.value_ === '사진을 넣어주세요' ? '' : (this.value_ as string)); // 현재 이미지 설정
  }

  /**
   * 필드의 너비를 업데이트하고 다시 렌더링합니다.
   *
   * @param width 새로운 필드 너비
   */
  updateWidth(width: number): void {
    this.width = width;
    this.render_();
  }

  /**
   * 필드의 크기를 계산하고 업데이트합니다.
   *
   * @description
   * - 텍스트와 여백을 기준으로 크기를 동적으로 계산합니다.
   * - 크기를 업데이트한 후 텍스트와 경계 사각형을 적절히 배치합니다.
   *
   * @param margin 경계 여백 (기본값: constants에서 가져옴)
   * @protected
   * @override
   */
  protected override updateSize_(margin?: number): void {
    const constants = this.getConstants();
    const xOffset =
      margin !== undefined
        ? margin
        : !this.isFullBlockField()
          ? this.getConstants()!.FIELD_BORDER_RECT_X_PADDING
          : 0;
    let totalWidth = xOffset * 2;
    let totalHeight = constants!.FIELD_TEXT_HEIGHT;

    this.width = Math.max(constants!.EMPTY_INLINE_INPUT_PADDING + 8, this.width);

    let contentWidth = 0;
    if (this.textElement_) {
      contentWidth = dom.getFastTextWidth(
        this.textElement_,
        10,
        constants!.FIELD_TEXT_FONTWEIGHT,
        constants!.FIELD_TEXT_FONTFAMILY
      );
      totalWidth += contentWidth;
    }
    if (!this.isFullBlockField()) {
      totalHeight = Math.max(totalHeight, constants!.FIELD_BORDER_RECT_HEIGHT);
    }

    this.size_.height = totalHeight;
    this.size_.width = Math.max(totalWidth, this.width);

    this.positionTextElement_(xOffset, contentWidth); // 텍스트 요소 위치 설정
    this.positionBorderRect_(); // 경계 사각형 위치 설정
  }
}
