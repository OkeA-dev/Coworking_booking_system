# Co-working Space Booking System

This is a web application that allows users to book desks in a co-working space. The co-working space has 15 desks, with 10 desks suitable for individual work and the remaining 5 desks suitable for team collaboration.

## Features

- **Desk Booking**: Users can book individual or team desks for a specified date and time slot.
- **Membership Tiers**: For individual desks, there are three membership tiers: Basic, Premium, and Executive, with different hourly rates.
- **Pricing and Discounts**: The application calculates the total charged amount based on the membership tier and applies a 10% discount for bookings longer than 3 hours.
- **Availability Checking**: The system prevents double bookings by checking the availability of desks before confirming a booking.
- **Confirmation Message**: After a successful booking, the user receives a confirmation message displaying the booking details and the total charged amount.

## Technologies Used

- HTML
- CSS
- JavaScript

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository:
2. Open the `index.html` file in a web browser.

## Usage

1. Select the desired desk type (individual or team) from the dropdown menu.
2. Choose the date and time slot for the booking.
3. If booking an individual desk, select the appropriate membership tier (Basic, Premium, or Executive).
4. Click the "Book Now" button.
5. If an available desk is found, a confirmation message will be displayed with the booking details and the total charged amount.

## Code Structure

- `index.html`: The main HTML file that provides the structure for the application.
- `styles.css`: Contains the CSS styles for the user interface.
- `main.js`: The JavaScript file that handles the desk booking logic, pricing calculations, and user interactions.

## Customization

You can customize the application by modifying the following:

- **Desk Availability**: Update the `desks` array in `main.js` to reflect the desired number and types of desks.
- **Membership Tiers and Pricing**: Modify the `membershipPrices` object in `main.js` to adjust the hourly rates for different membership tiers.
- **Time Slots**: Update the `timeSlots` object in `main.js` to add or remove available time slots and their corresponding durations.
- **User Interface**: Customize the HTML and CSS files to change the layout and styling of the application.

