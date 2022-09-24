import { FunctionComponent } from "react";
import styles from "./BubbleChart.module.css";

const BubbleChart: FunctionComponent = () => {
  return (
    <div className={styles.bubbleChartDiv}>
      <b className={styles.signatureB}>Signature</b>
      <div className={styles.titleDiv}>Data visualisation</div>
      <div className={styles.titleDiv1}>Dashboard</div>
      <div className={styles.bigWidgetBubbleChart}>
        <img className={styles.bgLinesIcon} alt="" src="../bg-lines.svg" />
        <img className={styles.bgLinesIcon1} alt="" src="../bg-lines1.svg" />
        <img
          className={styles.bubbleChartIcon}
          alt=""
          src="../bubble-chart.svg"
        />
        <div className={styles.investmentsDiv}>
          <img className={styles.bubble1Icon} alt="" src="../bubble-1.svg" />
          <div className={styles.timeDiv}>3 month</div>
          <div className={styles.tittleDiv}>Investments</div>
          <b className={styles.valueB}>$76,644</b>
        </div>
        <div className={styles.designDiv}>
          <img className={styles.bubble3Icon} alt="" src="../bubble-3.svg" />
          <div className={styles.timeDiv1}>3 month</div>
          <b className={styles.valueB1}>$32,982</b>
          <div className={styles.titleDiv2}>Design</div>
        </div>
        <div className={styles.financeDiv}>
          <img className={styles.bubble3Icon} alt="" src="../bubble-5.svg" />
          <div className={styles.valueDiv}> $23,657</div>
          <div className={styles.titleDiv3}>Finance</div>
        </div>
        <div className={styles.businessDiv}>
          <img className={styles.bubble3Icon} alt="" src="../bubble-2.svg" />
          <div className={styles.valueDiv1}>$21,987</div>
          <div className={styles.titleDiv4}>Business</div>
        </div>
        <div className={styles.developmentDiv}>
          <img className={styles.bubble3Icon} alt="" src="../bubble-4.svg" />
          <div className={styles.valueDiv2}>$31,657</div>
          <div className={styles.titleDiv5}>Development</div>
        </div>
      </div>
      <div className={styles.dateRangePicker}>
        <div className={styles.timePeriodDiv}>
          <b className={styles.periodB}>1W</b>
        </div>
        <div className={styles.timePeriodDiv}>
          <b className={styles.periodB}>1M</b>
        </div>
        <div className={styles.timePeriodDiv}>
          <div className={styles.hoverDiv} />
          <b className={styles.periodB}>3M</b>
        </div>
        <div className={styles.timePeriodDiv}>
          <b className={styles.periodB}>1Y</b>
        </div>
        <div className={styles.timePeriodDiv}>
          <b className={styles.periodB}>ALL</b>
        </div>
      </div>
      <img className={styles.bubbleIcon} alt="" src="../bubble.svg" />
      <img className={styles.bubbleIcon1} alt="" src="../bubble1.svg" />
      <img className={styles.bubbleIcon2} alt="" src="../bubble2.svg" />
      <img className={styles.panelGroupIcon} alt="" src="../panel-group.svg" />
      <div className={styles.footerDiv}>
        <div className={styles.bgDiv} />
        <b className={styles.fATALISDataVisualisation}>
          FATALIS data visualisation
        </b>
        <b className={styles.uNBOUNDEDTECHNOLOGIES2022}>
          UNBOUNDED TECHNOLOGIES 2022
        </b>
      </div>
      <div className={styles.informerTrendGoods}>
        <b className={styles.valueB2}>307</b>
        <b className={styles.titleB}>Trend goods</b>
        <img className={styles.icon} alt="" src="../icon.svg" />
      </div>
      <div className={styles.informerTrendGoods1}>
        <b className={styles.valueB3}>67,348</b>
        <b className={styles.titleB1}>Shopping views</b>
        <img className={styles.icon} alt="" src="../icon1.svg" />
      </div>
      <div className={styles.informerTrendGoods2}>
        <b className={styles.valueB2}>425</b>
        <b className={styles.titleB1}>Store dymanics</b>
        <img className={styles.icon} alt="" src="../icon2.svg" />
      </div>
      <div className={styles.navigationBarDiv}>
        <div className={styles.bgDiv} />
        <div className={styles.logoDiv}>
          <div className={styles.groupDiv}>
            <img className={styles.logoIcon} alt="" src="../logo.svg" />
            <img
              className={styles.fatalis1Icon}
              alt=""
              src="../fatalis-1@2x.png"
            />
          </div>
          <div className={styles.fATALISDiv}>FATALIS</div>
        </div>
        <div className={styles.searchDiv}>
          <div className={styles.bgDiv2} />
          <img className={styles.icon3} alt="" src="../icon3.svg" />
        </div>
        <div className={styles.tabDiv} />
        <div className={styles.sectionDiv}>
          <div className={styles.labelDiv}>Statistics</div>
          <div className={styles.labelDiv1}>Overview</div>
          <div className={styles.labelDiv}>Dashboard</div>
          <div className={styles.labelDiv}>Analytics</div>
        </div>
        <img className={styles.optionIcon} alt="" src="../option-icon.svg" />
        <img className={styles.profileIcon} alt="" src="../profile-icon.svg" />
      </div>
      <div className={styles.widgetMSizeCombinedCir}>
        <div className={styles.graphDiv}>
          <img
            className={styles.chartDoubleBigCircleChar}
            alt=""
            src="../chart--double-big-circle-chart.svg"
          />
          <div className={styles.infoDiv}>
            <div className={styles.titleDiv6}>
              <div className={styles.nameDiv}>Total earning</div>
            </div>
            <div className={styles.valueDiv3}>
              <b className={styles.amountB}>$17,895</b>
              <div className={styles.indicatorDiv}>
                <img
                  className={styles.arrowUpIcon}
                  alt=""
                  src="../arrow-up.svg"
                />
                <div className={styles.percentDiv}>4%</div>
              </div>
            </div>
            <div className={styles.detailDiv}>
              Compared to $22,607 last year
            </div>
          </div>
        </div>
        <div className={styles.tableDiv}>
          <div className={styles.rowDiv}>
            <div className={styles.nameDiv1}>Presentation</div>
            <div className={styles.amountDiv}>862</div>
            <div className={styles.graphDiv1}>
              <div className={styles.columnDiv} />
              <div className={styles.columnDiv1} />
              <div className={styles.columnDiv2} />
              <div className={styles.columnDiv3} />
              <img className={styles.chartIcon} alt="" src="../chart.svg" />
            </div>
          </div>
          <div className={styles.rowDiv}>
            <div className={styles.nameDiv1}>Development</div>
            <div className={styles.amountDiv}>753</div>
            <div className={styles.graphDiv1}>
              <div className={styles.columnDiv} />
              <div className={styles.columnDiv1} />
              <div className={styles.columnDiv2} />
              <div className={styles.columnDiv3} />
              <img className={styles.chartIcon1} alt="" src="../chart1.svg" />
            </div>
          </div>
          <div className={styles.rowDiv}>
            <div className={styles.nameDiv1}>Research</div>
            <div className={styles.amountDiv}>553</div>
            <div className={styles.graphDiv1}>
              <div className={styles.columnDiv} />
              <div className={styles.columnDiv1} />
              <div className={styles.columnDiv2} />
              <div className={styles.columnDiv3} />
              <img className={styles.chartIcon2} alt="" src="../chart2.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.widgetMSizeIndex}>
        <div className={styles.titleDiv7}>
          <div className={styles.nameDiv4}>Total earning</div>
        </div>
        <div className={styles.valueDiv4}>
          <div className={styles.amountDiv3}>$17,895</div>
          <div className={styles.indicatorDiv}>
            <img className={styles.arrowUpIcon} alt="" src="../arrow-up1.svg" />
            <div className={styles.percentDiv1}>4%</div>
          </div>
        </div>
        <div className={styles.detailDiv1}>Compared to $22,607 last year</div>
      </div>
      <div className={styles.tableIndicatorTable}>
        <div className={styles.summaryDiv}>
          <div className={styles.summaryDiv}>
            <div className={styles.nameDiv1}>Travel</div>
            <div className={styles.amountDiv4}>760</div>
            <div className={styles.summaryDiv1}>2,540</div>
          </div>
          <div className={styles.statusDiv}>
            <img className={styles.arrowUpIcon} alt="" src="../arrow-up2.svg" />
            <img
              className={styles.arrowUpIcon3}
              alt=""
              src="../arrow-up3.svg"
            />
          </div>
        </div>
        <div className={styles.summaryDiv}>
          <div className={styles.summaryDiv}>
            <div className={styles.nameDiv1}>Presentation</div>
            <div className={styles.amountDiv4}>650</div>
            <div className={styles.summaryDiv1}>2,304</div>
          </div>
          <div className={styles.statusDiv}>
            <img
              className={styles.arrowUpIcon3}
              alt=""
              src="../arrow-up2.svg"
            />
            <img className={styles.arrowUpIcon} alt="" src="../arrow-up3.svg" />
          </div>
        </div>
        <div className={styles.summaryDiv}>
          <div className={styles.summaryDiv}>
            <div className={styles.nameDiv1}>Business</div>
            <div className={styles.amountDiv4}>612</div>
            <div className={styles.summaryDiv1}>2,140</div>
          </div>
          <div className={styles.statusDiv}>
            <img className={styles.arrowUpIcon} alt="" src="../arrow-up2.svg" />
            <img
              className={styles.arrowUpIcon3}
              alt=""
              src="../arrow-up3.svg"
            />
          </div>
        </div>
        <div className={styles.summaryDiv}>
          <div className={styles.summaryDiv}>
            <div className={styles.nameDiv1}>Finance</div>
            <div className={styles.amountDiv4}>598</div>
            <div className={styles.summaryDiv1}>1,976</div>
          </div>
          <div className={styles.statusDiv}>
            <img className={styles.arrowUpIcon} alt="" src="../arrow-up2.svg" />
            <img
              className={styles.arrowUpIcon3}
              alt=""
              src="../arrow-up3.svg"
            />
          </div>
        </div>
        <div className={styles.summaryDiv}>
          <div className={styles.summaryDiv}>
            <div className={styles.nameDiv1}>Travel</div>
            <div className={styles.amountDiv4}>513</div>
            <div className={styles.summaryDiv1}>1,903</div>
          </div>
          <div className={styles.statusDiv}>
            <img
              className={styles.arrowUpIcon3}
              alt=""
              src="../arrow-up2.svg"
            />
            <img className={styles.arrowUpIcon} alt="" src="../arrow-up3.svg" />
          </div>
        </div>
        <div className={styles.summaryDiv}>
          <div className={styles.summaryDiv}>
            <div className={styles.nameDiv1}>Startup</div>
            <div className={styles.amountDiv4}>498</div>
            <div className={styles.summaryDiv1}>1,320</div>
          </div>
          <div className={styles.statusDiv}>
            <img
              className={styles.arrowUpIcon3}
              alt=""
              src="../arrow-up2.svg"
            />
            <img className={styles.arrowUpIcon} alt="" src="../arrow-up3.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BubbleChart;
