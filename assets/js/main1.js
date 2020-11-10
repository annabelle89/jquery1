$(document).ready(function() {
    var randomNumber = math.floor(math.random() * 100) + 1;
    console.log(randomNumber);
    var i = 0;
    $('#start').click(function() {
        i++;
        var inputNumber = $('#number').val();

        if (isNaN(inputNumber) == false) {
            if (inputNumber > randomNumber) {
                alert('C\'est moins !');
            } else if (inputNumber < randomNumber) {
                alert('C\'est plus !');
            } else {
                alert('Correct ! Le chiffre a été trouvé après ' + i + ' tentative');
            }
        } else {
            alert('Entrez un nombre !');
        }
    })
})