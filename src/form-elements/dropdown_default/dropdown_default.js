$(window).on('load', function () {
	
    $('<div class="quantity-button quantity-down">-</div>').insertBefore('.quantity input');
    $('<div class="quantity-button quantity-up">+</div>').insertAfter('.quantity input');
    
    var listInput = {};
    countPerson = 0;
    $('.quantity').each(function() {
        var spinner = $(this),
        
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');
        listInput[input.attr('id')] = parseFloat(input.val());
    
    // функция opacity для button
        function opacity() {
            if ($(input).val() == 0) {
                $('.quantity-down').css({
                'opacity': '.5',
                'cursor': 'context-menu'
                })
            } else {
                $('.quantity-down').css({
                'opacity': '1',
                'cursor': 'pointer'
                });
            }
        };
    // Функция placeholder (НЕ РАБОТАЕТ!)
        function countValue() {
    
            countPerson = 0;
            for (var j in listInput) {
              countPerson += listInput[j];
            };
            if (countPerson = 0) {
              $('.field-guests').text('Сколько гостей');
            } else {
              $('.field-guests').text(countPerson + ' гость');
            };
        }
      
    // Кнопка +
        btnUp.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
              var newVal = oldValue;
            } else {
              var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
            
            opacity();
            countValue();
        });
    // Кнопка -
        btnDown.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
              var newVal = oldValue;
            } else {
              var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
            
            opacity();
            countValue();
        });
              
    });
    
    // Добавление/Удаление кнопки "Очистить" если val >0(=0)
    $('input[value]').change(function() {
        var count = 0;
        
        $(this).closest('.guests').find('input[type="number"]').each(function() {	
        
            count += parseInt($(this).val());
            
            if (count > 0){
                $(this).closest('.guests').find('.clear-quantity-invisible').addClass('clear-quantity');
                
            } else {
                $(this).closest('.guests').find('.clear-quantity-invisible').removeClass('clear-quantity');
                
            };
        });
        
    });
    
    //Очистить значения при нажатии на кнопку "Очистить"
    $('.clear-quantity-invisible').click(function() {
        
        $(this).closest('.guests').find('input[type="number"]').val(0);
        $(this).closest('.guests').find('.clear-quantity-invisible').removeClass('clear-quantity');
        
    });
    
    //dropdown-slider Down
    $('.field-guests, .field-guests > i').on('click',function(){
        
        $(this).closest('.guests').find('.dropdown-guests').stop(true, false).slideDown(300);
        $(this).closest('.guests').find('i').css('cursor', 'context-menu').text('expand_less');
        $(this).closest('.guests').find('.field-guests').css({'border-color':'rgba(31, 32, 65, 0.5)','border-radius':'4px 4px 0 0','cursor':'context-menu'});
        $(this).closest('.guests').find('.dropdown-guests').css('border-color','rgba(31, 32, 65, 0.5)');
    });
    
    //dropdown-slider Up
    $('.apply-quantity').click(function(){
    
        $(this).closest('.guests').find('.dropdown-guests').stop(true, false).slideUp(300);
        $(this).closest('.guests').find('i').css('cursor', 'pointer').text('expand_more');
        $(this).closest('.guests').find('.field-guests').css({'border-color':'rgba(31, 32, 65, 0.25)','border-radius':'4px','cursor':'pointer'});
    });
    
    });
    