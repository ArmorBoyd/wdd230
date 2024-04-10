/*---Rentals---*/
const rentalsSection = document.querySelector('.rentals');

fetch('data/scoots.json') 
  .then(response => response.json())
  .then(data => {
    data.forEach(rental => {
      const rentalItem = document.createElement('div');
      rentalItem.classList.add('rental-item');

      rentalItem.innerHTML = `
        <img src="images/${rental.image}" alt="${rental.rentalType}">
        <h3>${rental.rentalType}</h3>
        <table>
          <tr>
            <th>Rate</th>
            <th>Half Day</th>
            <th>Full Day</th>
          </tr>
          <tr>
            <th>Reservation</th>
            <td>$${rental.reservation.halfDay}</td>
            <td>$${rental.reservation.fullDay}</td>
          </tr>
          <tr>
            <th>Walk-In</th>
            <td>$${rental.walkIn.halfDay}</td>
            <td>$${rental.walkIn.fullDay}</td>
          </tr>
        </table>
      `;

      rentalsSection.appendChild(rentalItem);
    });
  });
