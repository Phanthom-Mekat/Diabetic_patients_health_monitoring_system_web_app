$(document).ready(function() {
    // Populate age options dynamically
    for (let i = 9; i < 99; i++) {
        const ageOption = `<option value="${i + 1}">${i + 1}</option>`;
        $('#age').append(ageOption);
    }

    $('button').click(function(evt) {
        evt.preventDefault();
        post();
    });

    function post() {
        const datas = $('form').serializeArray();
        datas.find(obj => obj.name == 'json').value = 'true'; // Change json value in serialized object (not the form!)

        $('.result').css('display', 'block');
        console.log(datas);

        let gender = datas.find(obj => obj.name == 'gender').value;
        let age = datas.find(obj => obj.name == 'age').value;
        let height = datas.find(obj => obj.name == 'height').value;
        let weight = datas.find(obj => obj.name == 'weight').value;
        let bmi = weight / ((height * height) * 0.0001);
        console.log(bmi);

        const arr = ['Greek yogurt', 'pasta', 'stinky tofu', 'potato soup', 'chicken wings', 'a piece of bread'];
        const randomFood1 = arr[Math.floor(Math.random() * arr.length)];
        const randomFood2 = arr[Math.floor(Math.random() * arr.length)];
        const randomFood3 = arr[Math.floor(Math.random() * arr.length)];
        $('.print-result').html(`Your special meal for today is <br> 
        breakfast : <span>${randomFood1}</span> and <br> lunch : <span>${randomFood2}</span> and <br> dinner: <span>${randomFood3}</span> <br> Your BMI is ${bmi} <br>`);
        
        
        
        if (bmi < 18.5) {
            $('.print-result2').text('Have more! Your BMI is too low.');
        } else if (bmi >= 18.5 && bmi < 24) {
            $('.print-result2').text('Your BMI is normal');
        } else {
            $('.print-result2').text('Eat less and exercise more to keep fit. Your BMI is too high.');
        }
    }
});
