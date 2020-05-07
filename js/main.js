const $inputField = $('input');
// const $removeSkill = $('.remove-skill');
// let $li;

// $('#add-skill').click(function(evt) {
//     let currentInput;
//     let $li = $("<li>");
//     console.log(evt);
//     currentInput = $inputField.val();
//     console.log(`Current input: ${currentInput}`);
//     $inputField.val(null);
//     $li.html(`<span class="remove-skill">X</span>${currentInput}`);
//     $('ul').append($li);
// });

$('#add-skill').click(addSkill);

$inputField.keypress(function(evt) {
    if (evt.keyCode === 13) {
        addSkill(evt);
    }
});


// console.log($inputField);

function addSkill(evt) {
    let currentInput;
    let $li = $("<li>");
    let idCurrent = `${Date.now()}`    //generates a unique id, since we can't enter more than one skill per millisecond
    console.log(evt);
    currentInput = $inputField.val();
    console.log(`Current input: ${currentInput}`);
    $inputField.val(null);
    $li.html(`<span class='remove-skill'>X</span>${currentInput}`);
    $li.find('.remove-skill').attr('id', idCurrent);
    $('ul').append($li);
    $(`#${idCurrent}`).click(function(evt) {
        // console.log('clicked on the X');
        // console.log(`id = ${idCurrent}`);
        // console.log(evt.target);
        // console.log($(`#${idCurrent}`).parent());
       $(`#${idCurrent}`).parent().remove();
    });
}