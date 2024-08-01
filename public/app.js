const ctx = document.getElementById('chart').getContext('2d');
const socket = io();

const data = {
  labels: ['Imran', 'John', 'Jane', 'Doe', 'Smith'],
  datasets: [{
    label: 'Kills',
    data: [500, 300, 200, 150, 100],
    backgroundColor: [
      'rgba(75, 192, 192, 0.2)',
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)'
    ],
    borderColor: [
      'rgba(75, 192, 192, 1)',
      'rgba(255, 99, 132, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(153, 102, 255, 1)'
    ],
    borderWidth: 1
  }]
};

const config = {
  type: 'bar',
  data: data,
  options: {
    indexAxis: 'y',
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const label = context.dataset.label || '';
            const value = context.raw;
            return `${label}: ${value} Kills`;
          }
        }
      }
    },
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Kills'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Players'
        }
      }
    }
  }
};

const myChart = new Chart(ctx, config);

function updateChart() {
  data.datasets[0].data = data.datasets[0].data.map(val => val + Math.floor(Math.random() * 50));
  myChart.update();
}

setInterval(updateChart, 1000);
