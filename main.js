$(function(){
    //работа с JSON
    $('#get1').click(function(){
        $.ajax({
            type: 'GET',
            url: 'http://localhost:4000/user/1',

            //запускаем прелоадер
            beforeSend: function(){
                $('span').show(500);
            },
            success: function(data){
                console.log(data);
                $('.wrap').append('<div class="comment"><input class= "flags" type="checkbox">'+data.content+' id = "'+data.id+'"<input class = "delBtn" type="button" value = "Delete"></div>')
                $('.comment').slideDown(800)    
            },
            error: function(err){
                alert(err.statusText)
            },

            //убираем прелоадер (complete отрабатывает всегда)
            complete: function(){
                setTimeout(function(){
                    $('span').hide(500);
                }, 1200)
                
            }
        }); 
    });

    $('#get2').click(function(){
        $.ajax({
            type: 'GET',
            url: 'http://localhost:4000/user/2',

            success: function(data){
                console.log(data);
                $('.wrap').append('<div class="comment"><input class= "flags" type="checkbox">'+data.content+' id = "'+data.id+'"<input class = "delBtn" type="button" value = "Delete"></div>')
                $('.comment').slideDown(800)
            },
        }); 
    });
    
    // $('#put').click(function(){
    //     const body = {"name": "Kate", "age": 24, "role": "manager"};

    //     $.ajax({
    //         type: 'PUT',
    //         data: body,
    //         url: 'http://localhost:4000/user/2'
    //     })
    // })
    
    // $('#post').click(function(){
    //     const body = {"name": "Igor", "age": 24, "role": "user"};

    //     $.ajax({
    //         type: 'POST',
    //         data: body,
    //         url: 'http://localhost:4000/user'
    //     })
    // })
    


    //добавляем функционал на кнопку Send
    $('.sendBtn').on('click', function(){
        
        let value = $('.userText').val();
        if(value === '' || value === ' '){
            alert('Вы попытались добавить пустую заметку')
        } else {
            //console.log(value);
            //добавляю в div с классом .wrap новый div.comment в которой так же есть чекбокс и кнопка
            $('.wrap').append('<div class="comment"><input class= "flags" type="checkbox">'+value+'<input class = "delBtn" type="button" value = "Delete"></div>')
            $('.comment').slideDown(800)
            //console.log($('.delBtn'))
            $('.userText').val('');
        }
    });

    //добавляем функционал на кнопку Delete
    $('.wrap').on('click','.delBtn', function(){
        $(this).parent().slideUp(800, function(){
            //тут контекст this поменялся
            $(this).remove();
        })
    });

    //добавляем функционал на флажок который зачеркивает содержимое записи
    $('.wrap').on('click', '.flags', function(){
       // console.log($(this).parent().css('text-decoration'));
        if($(this).parent().css('text-decoration') === "line-through solid rgb(255, 255, 255)"){
            $(this).parent().css('text-decoration', 'none')
            $(this).parent().css('background', '#3465a7');
        } else {
            $(this).parent().css('text-decoration', 'line-through');
            $(this).parent().css('background', 'grey');
        };
    });
    //console.log($('input[type="chebox"]'));

    //добавляем функционал на главный флажок который зачеркивает содержимое всех записей
    let count =0;
    $('.mainFlag').on('click', function(){
        $('.comment').css('text-decoration', 'line-through');
        $('.comment').css('background', 'grey');
        $('.flags').prop('checked', true);
        count++
        //на каждый четный клик снимает выделение с элементов
        if(count%2===0){
            $('.comment').css('text-decoration', 'none');
            $('.comment').css('background', '#3465a7');
            $('.flags').prop('checked', false);
        }
        
            
        
    })
    

});