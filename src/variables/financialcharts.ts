import { ApexOptions } from "apexcharts";

type ApexGeneric = ApexOptions & any;

export const barChartOptionsHisto: ApexOptions = {
  chart: {
    type: 'bar',
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    tickAmount: 13,
    title: {
      text: "Values (Between Value - 0.005)",
      style: {
        fontSize: '18px',
      }
    },
  },
  yaxis: {
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
};

