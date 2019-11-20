$(function(){

    //добавляем функционал на кнопку Send
    $('.sendBtn').on('click', function(){
        
        let value = $('.userText').val();
        if(value === '' || value === ' '){
            alert('Вы попытались добавить пустую заметку')
        } else {
            //console.log(value);
            //добавляю в div с классом .wrap новый div.comment в которой так же есть чекбокс и кнопка
            $('.wrap').append('<div class="comment"><input class= "flags" type="checkbox">'+value+'<input class = "delBtn" type="button" value = "Delete"></div>')
            //console.log($('.delBtn'))
            $('.userText').val('');
        }
    });

    //добавляем функционал на кнопку Delete
    $('.wrap').on('click','.delBtn', function(){
        $(this).parent().remove()
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