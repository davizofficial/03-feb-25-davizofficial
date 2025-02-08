document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('bmi-form');
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const bmiResult = document.getElementById('bmi-result');
    const bmiComment = document.getElementById('bmi-comment');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const height = parseFloat(heightInput.value);
        const weight = parseFloat(weightInput.value);

        // Validate inputs
        if (isNaN(height) || height <= 0) {
            alert('Tinggi harus berupa angka dan lebih dari nol.');
            heightInput.focus();
            return;
        }

        if (isNaN(weight) || weight <= 0) {
            alert('Berat harus berupa angka dan lebih dari nol.');
            weightInput.focus();
            return;
        }

        // Calculate BMI
        const heightInMeters = height / 100;
        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

        // Determine BMI status
        let status = '';
        if (bmi < 18.5) {
            status = "Underweight";
        } else if (bmi >= 18.5 && bmi < 25) {
            status = "Ideal";
        } else if (bmi >= 25 && bmi < 30) {
            status = "Overweight";
        } else {
            status = "Obesitas";
        }

        // Display results
        bmiResult.textContent = bmi;
        bmiComment.textContent = `Hasil: ${status}`;
    });
});
