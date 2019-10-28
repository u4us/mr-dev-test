$(function(){

    // mobile/desktop cart view
    // comment: requires refresh when viewport is changed to update method used
    if (window.matchMedia("(max-width: 640px)").matches) {
        $('.cart').on('click', function(){
            if($('.cart-expanded').hasClass('visible')){
                $('.cart-expanded').removeClass('visible');
            } else{
                $('.cart-expanded').addClass('visible');
            }
        });
    } 
    if (window.matchMedia("(min-width: 641px)").matches){
        $('.cart').on('mouseenter', function(){
            $('.cart-expanded').addClass('visible');
        }).on('mouseleave', function(){
            $('.cart-expanded').removeClass('visible');
        });
    }

    //size select function
    var selectedSize = '';
    var selectedCost;
    $('.size-button').on('click', function(){
        if($(this).hasClass('selected')){
            $(this).removeClass('selected');
            selectedSize = null;
            $('#display-size').text(selectedSize);
        } else{
            $('.size-button').removeClass('selected');
            $(this).addClass('selected');
            selectedSize = $(this).data('size');
            selectedCost = $(this).data('cost');
            $('#display-size').text(selectedSize);
            console.log(selectedSize);
        };
    });

    // add to cart functions
    // comment: unfortunately, i understand that this isn't scaleable in a larger database context
    var totalSmall = 0;
    var totalMedium = 0;
    var totalLarge = 0;

    if(selectedSize != null){
        $('#add-to-cart').on('click', function(){
            switch (selectedSize) {
                case 'S':
                    totalSmall++;
                    break;
                case 'M':
                    totalMedium++;
                    break;
                case 'L':
                    totalLarge++;
                    break;
                default:
                    break;
            }

            if(totalSmall != 0){
                $('.small-shirt').addClass('show-item');
                $('#small-amount').text(totalSmall);
            }

            if(totalMedium != 0){
                $('.medium-shirt').addClass('show-item');
                $('#medium-amount').text(totalMedium);
            }

            if(totalLarge != 0){
                $('.large-shirt').addClass('show-item');
                $('#large-amount').text(totalLarge);
            }

            //update cart amount
            var totalItems = totalSmall + totalMedium + totalLarge;
            $('#item-amount').text(totalItems);
        });
    } else{
        $('#add-to-cart').preventDefault();
    }
});