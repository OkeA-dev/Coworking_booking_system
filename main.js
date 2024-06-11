// Define the desks and their availability
const desks = [
  { id: 1, type: 'individual', available: true },
  { id: 2, type: 'individual', available: true },
  { id: 3, type: 'individual', available: true },
  { id: 4, type: 'individual', available: true },
  { id: 5, type: 'individual', available: true },
  { id: 6, type: 'individual', available: true },
  { id: 7, type: 'individual', available: true },
  { id: 8, type: 'individual', available: true },
  { id: 9, type: 'individual', available: true },
  { id: 10, type: 'individual', available: true },
  { id: 11, type: 'individual', available: true },
  { id: 12, type: 'individual', available: true },
  { id: 13, type: 'individual', available: true },
  { id: 14, type: 'individual', available: true },
  { id: 15, type: 'individual', available: true },
  
];

// Create the booking form
const bookingForm = document.createElement('form');
bookingForm.innerHTML = `
  <h2>Book a Desk</h2>
  <div>
    <label for="deskType">Desk Type:</label>
    <select id="deskType">
      <option value="individual">Individual</option>
      <option value="team">Team</option>
    </select>
  </div>
  <div>
    <label for="date">Date:</label>
    <input type="date" id="date">
  </div>
  <div>
    <label for="timeSlot">Time Slot:</label>
    <select id="timeSlot">
      <option value="9am-12pm">9 AM - 12 PM</option>
      <option value="1pm-5pm">1 PM - 5 PM</option>
    </select>
  </div>
  <div id="membershipTier" style="display: none;">
    <label for="tier">Membership Tier:</label>
    <select id="tier">
      <option value="basic">Basic</option>
      <option value="premium">Premium</option>
      <option value="executive">Executive</option>
    </select>
  </div>
  <button type="submit">Book Now</button>
`;

// Render the booking form to the #app element
const appDiv = document.getElementById('app');
appDiv.appendChild(bookingForm);

// Get references to the form fields
const deskTypeSelect = document.getElementById('deskType');
const membershipTierDiv = document.getElementById('membershipTier');

// Show/hide membership tier field based on desk type
deskTypeSelect.addEventListener('change', () => {
  if (deskTypeSelect.value === 'individual') {
    membershipTierDiv.style.display = 'block';
  } else {
    membershipTierDiv.style.display = 'none';
  }
});

// Handle form submission
bookingForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const deskType = deskTypeSelect.value;
  const date = document.getElementById('date').value;
  const timeSlot = document.getElementById('timeSlot').value;
  const membershipTier = document.getElementById('tier').value;

  // Call the booking function with the form data
  bookDesk(deskType, date, timeSlot, membershipTier);
});

function bookDesk(deskType, date, timeSlot, membershipTier) {
  // Find an available desk of the selected type
  const availableDesk = desks.find(
    (desk) => desk.type === deskType && desk.available
  );

  if (!availableDesk) {
    alert('No desks available for the selected options.');
    return;
  }

  // Calculate the price based on the desk type and membership tier
  let price;
  if (deskType === 'individual') {
    const membershipPrices = {
      basic: 10,
      premium: 15,
      executive: 20,
    };
    price = membershipPrices[membershipTier];
  } else {
    price = 25; // Fixed price for team desks
  }

  // Apply discount for bookings longer than 3 hours
  const duration = calculateDuration(timeSlot);
  if (duration > 3) {
    price = price * 0.9; // 10% discount
  }

  // Mark the desk as booked
  availableDesk.available = false;

  // Display the booking confirmation
  const confirmation = `
    You have booked a ${deskType} desk for ${date} (${timeSlot}).
    Total charged: $${price.toFixed(2)}
  `;
  alert(confirmation);
}

function calculateDuration(timeSlot) {
  // For simplicity, we'll assume 3 hours for each time slot
  return 3;
}
