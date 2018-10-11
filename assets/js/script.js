$(function() {
    var cardNumber = $('#card-add-payment1');
    var cardNumberField = $('#card-number-field');
    var CVV = $("#cvv");
    var mastercard = $("#mastercard");
    var confirmButton = $('#confirm-purchase');
    var visa = $("#visa");
    var amex = $("#amex");
    var maestro = $("#maestro");
    var jcb = $("#jcb");
    var discover = $("#discover");
    var deaf = $("#default");

    // Use the payform library to format and validate
    // the payment fields.

    cardNumber.payform('formatCardNumber');
    CVV.payform('formatCardCVC');


    cardNumber.keyup(function() {

        amex.removeClass('transparent');
        visa.removeClass('transparent');
        mastercard.removeClass('transparent');

        if ($.payform.validateCardNumber(cardNumber.val()) == false) {
            cardNumberField.addClass('has-error');
        } else {
            cardNumberField.removeClass('has-error');
            cardNumberField.addClass('has-success');
        }

        if ($.payform.parseCardType(cardNumber.val()) == 'visa') {
            moveClass();
            visa.addClass('transparent');
        } else if ($.payform.parseCardType(cardNumber.val()) == 'amex') {
            moveClass();
            amex.addClass('transparent');
        } else if ($.payform.parseCardType(cardNumber.val()) == 'mastercard') {
            moveClass();
            mastercard.addClass('transparent');
        } else if ($.payform.parseCardType(cardNumber.val()) == 'maestro') {
            moveClass();
            maestro.addClass('transparent');
        } else if ($.payform.parseCardType(cardNumber.val()) == 'jcb') {
            moveClass();
            jcb.addClass('transparent');
        } else if ($.payform.parseCardType(cardNumber.val()) == 'discover') {
            moveClass();
            discover.addClass('transparent');
        } else {
            moveClass();
            deaf.addClass('transparent');
        }
    });

    function moveClass() {
        deaf.removeClass('transparent');
        visa.removeClass('transparent');
        amex.removeClass('transparent');
        mastercard.removeClass('transparent');
        maestro.removeClass('transparent');
        jcb.removeClass('transparent');
        discover.removeClass('transparent');
    }

    confirmButton.click(function(e) {

        e.preventDefault();

        var isCardValid = $.payform.validateCardNumber(cardNumber.val());
        var isCvvValid = $.payform.validateCardCVC(CVV.val());

        if (owner.val().length < 5) {
            alert("Wrong owner name");
        } else if (!isCardValid) {
            alert("Wrong card number");
        } else if (!isCvvValid) {
            alert("Wrong CVV");
        } else {
            // Everything is correct. Add your form submission code here.
            alert("Everything is correct");
        }
    });
});