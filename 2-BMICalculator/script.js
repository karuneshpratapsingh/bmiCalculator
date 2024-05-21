document.addEventListener('DOMContentLoaded', () => {
  // Select the form, height input, weight input, and results div
  const form = document.querySelector('form');
  const heightInput = document.getElementById('height');
  const weightInput = document.getElementById('weight');
  const resultsDiv = document.getElementById('results');

  // Add an event listener to the form to handle the submit event
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the values from the input fields
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

    // Check if the inputs are valid numbers
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
      resultsDiv.textContent = 'Please enter valid height and weight values.';
      resultsDiv.style.color = 'red'; // Display error message in red
      return;
    }

    // Calculate the BMI
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);

    // Display the result
    resultsDiv.textContent = `Your BMI is ${bmi.toFixed(2)}`;
    resultsDiv.style.color = 'rgb(241, 241, 241)'; // Reset text color to default

    // Optionally, you could add a message about the BMI category
    let category = '';
    if (bmi < 18.6) {
      category = 'Under Weight';
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      category = 'Normal Range';
    } else {
      category = 'Overweight';
    }
    resultsDiv.textContent += ` (${category})`;
  });
});
