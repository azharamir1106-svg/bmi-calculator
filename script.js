const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const calculateBtn = document.getElementById('calculate');
const resetBtn = document.getElementById('reset');
const resultDiv = document.getElementById('result');
const bmiValue = document.getElementById('bmiValue');
const bmiCategory = document.getElementById('bmiCategory');

calculateBtn.addEventListener('click', () => {
    const weight = parseFloat(weightInput.value);
    const heightCm = parseFloat(heightInput.value);

    if (!weight || !heightCm) {
        alert('Please enter valid numbers!');
        return;
    }

    const heightM = heightCm / 100;
    const bmi = weight / (heightM * heightM);
    const roundedBmi = bmi.toFixed(1);

    bmiValue.textContent = roundedBmi;

    let category = '';
    if (roundedBmi < 18.5) category = 'Underweight';
    else if (roundedBmi < 25) category = 'Normal';
    else if (roundedBmi < 30) category = 'Overweight';
    else category = 'Obese';

    bmiCategory.textContent = category;
    resultDiv.style.display = 'block';
});

resetBtn.addEventListener('click', () => {
    weightInput.value = '';
    heightInput.value = '';
    resultDiv.style.display = 'none';
});
