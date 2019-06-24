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
        
        $('input[type="number"]').each(function() {	
        
            count += parseInt($(this).val());
            
            if (count > 0){
                $('.clear-quantity-invisible').addClass('clear-quantity');
                
            } else {
                $('.clear-quantity-invisible').removeClass('clear-quantity');
                
            };
        });
        
        console.log(count);
    });
    
    //Очистить значения при нажатии на кнопку "Очистить"
    $('.clear-quantity-invisible').click(function() {
        
        $('input[type="number"]').val(0);
        $('.clear-quantity-invisible').removeClass('clear-quantity');
        
    });
    
    //dropdown-slider Down
    $('.field-guests, i').click(function(){
        
        $('.dropdown-guests').stop(true, false).slideDown(300);
        $('i').text('expand_less');
        $('.field-guests, i').css('cursor', 'context-menu');
        
    });
    
    //dropdown-slider Up
    $('.apply-quantity').click(function(){
    
        $('.dropdown-guests').stop(true, false).slideUp(300);
        $('i.material-icons').text('expand_more')
        $('.field-guests, i').css('cursor', 'pointer');
        
    });
    
    });
    