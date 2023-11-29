import { ApexOptions } from "apexcharts";

type ApexGeneric = ApexOptions & any;

// Total Spent Default

export const lineChartDataTotalSpent = [
  {
    name: "Revenue",
    data: [50, 64, 48, 66, 49, 68, 50, 64, 48, 66, 49, 68],
  },
  {
    name: "Profit",
    data: [30, 40, 24, 46, 20, 46],
  },
];

export const barChartOptionsHisto: ApexGeneric = {
  chart: {
    type: 'bar',
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
    },
    onDatasetHover: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
    },
    theme: "dark",
  },
  xaxis: {
    show: true,
    labels: {
      show: true,
    },
    axisBorder: {
      show: true,
    },
    axisTicks: {
      show: true,
    },
    tickAmount: 13,
    title: {
      text: "Values (Between Value - 0.005)",
      style: {
        fontSize: '18px',
      }
    },
  },
  yaxis: {
    show: true,
    color: "black",
    labels: {
      show: true,
    },
    title: {
      text: "Total Periods in Range",
      style: {
        fontSize: '15px',
      }
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "12px",
    },
  },
};

export const lineChartOptionsTotalSpent: ApexOptions = {
  chart: {
    toolbar: {
      show: true,
    },
  },
  // color: ["#7551FF", "#39B8FF"],
};

export const lineChartOptionsMonthRev: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  xaxis: {
    title: {
      text: "Date",
      style: {
        fontSize: '18px',
      }
    },
  },
  yaxis: {
    title: {
      text: "Cumulative Returns",
      style: {
        fontSize: '18px',
      }
    },
  },
  // color: ["#7551FF", "#39B8FF"],
};

export const lineChartOptionsYearRev: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  xaxis: {
    title: {
      text: "Date",
      style: {
        fontSize: '18px',
      }
    },
  },
  yaxis: {
    title: {
      text: "Cumulative Returns",
      style: {
        fontSize: '18px',
      }
    },
  },
  // color: ["#7551FF", "#39B8FF"],
};

export const lineChartOptionsAdjRev: ApexOptions = {
  chart: {
    toolbar: {
      show: true,
    },
  },
  xaxis: {
    type: 'datetime',
    title: {
      text: "Date",
      style: {
        fontSize: '18px'
      }
    },
    tickAmount: 13,
    labels: {
      format: 'MM/yyyy'
    }
  },
  yaxis: {
    title: {
      text: "Adjusted Returns",
      style: {
        fontSize: '18px',
      }
    },
  }
  // color: ["#7551FF", "#39B8FF"],
};

export const SampleCandleOptions: ApexOptions = {
  chart: {
    type: 'candlestick',
    toolbar: {
      show: true,
    },
  },
  xaxis: {
    type: 'datetime',
    title: {
      text: "Date",
      style: {
        fontSize: '18px',
      }
    },
    tickAmount: 13,
    labels: {
      format: 'MM/yyyy'
    },
  },
  yaxis: {
    title: {
      text: "Stock",
      style: {
        fontSize: '18px',
      }
    },
  },
  // color: ["#7551FF", "#39B8FF"],
};

