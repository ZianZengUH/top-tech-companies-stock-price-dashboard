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
      style: {
        colors: "#A3AED0",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: true,
    },
    axisTicks: {
      show: true,
    },
  },
  yaxis: {
    show: true,
    color: "black",
    labels: {
      show: true,
      style: {
        colors: "#CBD5E0",
        fontSize: "14px",
      },
    },
  },
  grid: {
    show: true,
    strokeDashArray: 5,
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  dataLabels: {
    enabled: true,
  },
  plotOptions: {
    bar: {
      columnWidth: "20px",
    },
  },
};

export const lineChartOptionsTotalSpent: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
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
  // color: ["#7551FF", "#39B8FF"],
};

export const lineChartOptionsYearRev: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  // color: ["#7551FF", "#39B8FF"],
};

export const SampleCandleOptions: ApexOptions = {
  chart: {
    type: 'candlestick',
  }
  // color: ["#7551FF", "#39B8FF"],
};

