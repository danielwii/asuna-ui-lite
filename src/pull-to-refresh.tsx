import { isEmpty, last, map } from 'lodash';
import React from 'react';
import useBoolean from 'react-use/lib/useBoolean';
import useScroll from 'react-use/lib/useScroll';
import useSwipe from 'beautiful-react-hooks/useSwipe';
import useIntersection from 'react-use/lib/useIntersection';
import useAsync from 'react-use/lib/useAsync';
import useLogger from 'react-use/lib/useLogger';

const Spinner: React.VFC<{ play?: boolean }> = ({ play }) => (
  <div className="text-center">
    <svg
      role="status"
      className={`mr-2 w-8 h-8 text-gray-200 ${play ? 'animate-spin' : ''} dark:text-gray-600 fill-blue-600`}
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
      ></path>
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentFill"
      ></path>
    </svg>
  </div>
);

export type PullToRefreshProps<DataEntry> = {
  /**
   * 初始化数据
   */
  initial?: DataEntry[];
  /**
   * 刷新数据
   */
  onRefresh?: () => Promise<DataEntry[]> | DataEntry[];
  /**
   * 加载数据
   * @param page 当前页码
   * @param latestItem 最后一个 item，用于游标查询
   */
  onLoad?: (page: number, latestItem: DataEntry) => Promise<DataEntry[]> | DataEntry[];
  /**
   * 渲染条目
   * @param item 待渲染的条目
   * @param idx 当前索引
   * @param items 全部条目
   */
  render: (item: DataEntry, idx: number, items: DataEntry[]) => React.ReactNode;
};

export const PullToRefresh: React.VFC<PullToRefreshProps<any>> = ({ initial, onRefresh, onLoad, render }) => {
  const ref = React.useRef(null);
  const { y } = useScroll(ref);
  const swipeState = useSwipe(ref);

  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  });

  const [page, setPage] = React.useState(1);
  const [target, setTarget] = React.useState(0);
  const [refreshing, setRefresh] = useBoolean(false);
  const [loading, setLoading] = useBoolean(false);

  const [data, setData] = React.useState(initial);

  // --------------------------------------------------------------
  // 处理下拉刷新
  // --------------------------------------------------------------

  React.useEffect(() => {
    if (y !== 0 || refreshing || loading) return; // 最顶部且没有拉取中时才开始计算时才开始计算
    if (swipeState.swiping) {
      setTarget(-swipeState.alphaY);
    } else {
      if (-swipeState.alphaY >= 64) {
        setRefresh(true);
        setTarget(64);
      } else {
        setTarget(0);
      }
    }
  }, [swipeState.alphaY, swipeState.swiping]);

  useAsync(async () => {
    if (!refreshing) return;
    try {
      const results = await onRefresh();
      setData(results);
    } catch (e) {
      console.error(e);
    }
    setRefresh(false);
    setTarget(0);
  }, [refreshing]);

  // --------------------------------------------------------------
  // 处理上拉自动更新
  // --------------------------------------------------------------

  useAsync(async () => {
    if (!intersection?.isIntersecting) return;
    setLoading(true);
    try {
      const results = await onLoad(page + 1, last(data));
      if (!isEmpty(results)) {
        setPage(page + 1);
        setData(data.concat(results));
      }
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  }, [intersection?.isIntersecting]);

  // useLogger('', { refreshing, target }, swipeState);

  return (
    <div className="h-full overflow-y-scroll" ref={ref}>
      <div className="overflow-hidden bg-red-200 relative" style={{ height: target + 'px' }}>
        <div className="absolute w-full flex items-center justify-center" style={{ height: '64px' }}>
          <Spinner play={refreshing} />
        </div>
      </div>
      {map(data, (item, idx, items) => {
        const latest4 = items.length > 4 && idx === 4;
        const latest = items.length <= 4 && idx === items.length - 1;
        return latest4 || latest ? (
          <div ref={intersectionRef} key={idx}>
            {render(item, idx, items)}
          </div>
        ) : (
          render(item, idx, items)
        );
      })}
      {loading && (
        <div className="py-4">
          <Spinner play />
        </div>
      )}
      {/*
      <pre className="absolute right-0 bottom-0 bg-gray-200">
        {JSON.stringify(
          {
            y,
            target,
            swipeState,
            size: data.length,
            intersection: {
              isIntersecting: intersection?.isIntersecting,
            },
          },
          null,
          2,
        )}
      </pre>
*/}
    </div>
  );
};
