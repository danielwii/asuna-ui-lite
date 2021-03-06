import _ from 'lodash';
import React, { CSSProperties, ReactChild, ReactNode, useState } from 'react';
import { Carousel as RsCarousel } from 'react-responsive-carousel';

export interface CarouselConfigProps {
  showArrows?: boolean; // 左右两侧箭头
  showThumbs?: boolean; // 缩略图
  showStatus?: boolean; // 右上角播放状态指示
  showIndicators?: boolean; // 底部中间小圆点
  infiniteLoop?: boolean;
  useKeyboardArrows?: boolean; // 启用键盘左右键切换
  autoPlay?: boolean;
  stopOnHover?: boolean;
  swipeable?: boolean;
  dynamicHeight?: boolean;
  emulateTouch?: boolean;
  autoFocus?: boolean;
  thumbWidth?: number;
  selectedItem?: number;
  interval?: number; // second
  transitionTime?: number; // millisecond
  swipeScrollTolerance?: number;
  centerMode?: boolean;
}

export interface Image {
  src: string;
  alt?: string;
}

export interface CarouselProps {
  config?: CarouselConfigProps;
  carouselLeftArrow?: ReactNode;
  carouselRightArrow?: ReactNode;
  selectedDotColor?: string;
  arrowStyles?: CSSProperties;
  indicatorStyles?: CSSProperties;
  height?: string;
  isMobile?: boolean;
  onChange?: (idx: number) => void;
  items: Image[];
  renderItem?: (item: Image, idx: number) => ReactChild;
}

export const Carousel: React.FC<CarouselProps> = ({
  config,
  carouselLeftArrow,
  carouselRightArrow,
  selectedDotColor,
  onChange,
  arrowStyles,
  indicatorStyles,
  items,
  renderItem,
}) => {
  const [selectedIdx, setSelectIdx] = useState<number>(0);
  return (
    <RsCarousel
      {...config}
      onChange={(current) => {
        setSelectIdx(current);
        onChange && onChange(current);
      }}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: 30 }}>
            {carouselLeftArrow}
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, right: 30 }}>
            {carouselRightArrow}
          </button>
        )
      }
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        if (isSelected) {
          return (
            <li
              style={{ ...indicatorStyles, background: selectedDotColor }}
              aria-label={`Selected: ${label} ${index + 1}`}
              title={`Selected: ${label} ${index + 1}`}
            />
          );
        }
        return (
          <li
            style={indicatorStyles}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            title={`${label} ${index + 1}`}
            aria-label={`${label} ${index + 1}`}
          />
        );
      }}
    >
      {_.map(items, (item, idx) => {
        if (renderItem) {
          return renderItem(item, idx);
        }
        return <img alt={item.alt} src={item.src} key={idx} className={`${selectedIdx !== idx ? 'opacity-60' : ''}`} />;
      })}
    </RsCarousel>
  );
};
