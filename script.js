const container = document.getElementById('dashboard');

distributors.forEach(distributor => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <h2>${distributor.name}</h2>
    <p><strong>YTD Average:</strong> ${distributor.ytdAvg} units</p>
    <p><strong>Last Month:</strong> ${distributor.lastMonth} units</p>
    <p><strong>Forecast:</strong> ${distributor.forecast} units</p>
  `;
  container.appendChild(card);
});