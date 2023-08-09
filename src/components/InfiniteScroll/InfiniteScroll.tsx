import React, { CSSProperties, useCallback, useEffect, useRef } from "react";

export interface InfiniteScrollProps {
  children: React.ReactNode;
  loadNextItems: Function;
  hasMore: boolean;
  loader: React.ReactNode;
  endMessage?: React.ReactNode;
  style?: CSSProperties;
}

const InfiniteScroll = ({
  children,
  loadNextItems,
  hasMore,
  loader,
  endMessage,
  style,
}: InfiniteScrollProps) => {
  const targetContainer = useRef(null);

  const handleObserver = useCallback(
    (entries: any[]) => {
      const target = entries[0];
      if (target.isIntersecting && hasMore) {
        loadNextItems();
      }
    },
    [hasMore, loadNextItems]
  );

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleObserver, option);

    if (targetContainer.current) {
      observer.observe(targetContainer.current);
    }

    return () => {
      if (targetContainer.current) observer.unobserve(targetContainer.current);
    };
  }, [handleObserver]);

  return (
    <div>
      {children}
      {hasMore && (
        <div style={style}>
          {loader} <div ref={targetContainer} />
        </div>
      )}
      {!hasMore && endMessage && <div>{endMessage}</div>}
    </div>
  );
};

export default InfiniteScroll;
