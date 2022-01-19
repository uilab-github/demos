import DemoCard from './DemoCard';
import pageMap from '../data/pageMap';
import classes from './DemoCardListView.module.css';

const DemoCardListView = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.title}>Uilab Demos</div>
      <div className={classes.list}>
        {Object.values(pageMap).map(
          ({
            pageUrl,
            summaryImgPath,
            summaryTitle,
            summaryShort,
            summaryLong,
          }) => {
            return (
              <>
                <div key={summaryTitle} className={classes.listElem}>
                  <DemoCard
                    pageUrl={pageUrl}
                    summaryImgPath={summaryImgPath}
                    summaryTitle={summaryTitle}
                    summaryShort={summaryShort}
                    summaryLong={summaryLong}
                  />
                </div>
              </>
            );
          }
        )}
      </div>
    </div>
  );
};

export default DemoCardListView;
