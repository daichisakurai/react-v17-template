import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fir", "Sat"],
  datasets: [
    {
      label: "Demo Line Plot",
      backgroundColor: "#008080",
      borderColor: "#7fffd4",
      pointBorderWidth: 10,
      data: [5, 6, 9, 15, 30, 40, 80]
    }
  ]
}

export const LinePlot: React.VFC = () => {
  return <div>
    <Line data={data} />
  </div>
}