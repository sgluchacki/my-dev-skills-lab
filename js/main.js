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

$('.remove-skill').click(function(evt) {
    console.log('clicked on the X');
    console.log(evt.target);
})

// console.log($inputField);

function addSkill(evt) {
    let currentInput;
    let $li = $("<li>");
    console.log(evt);
    currentInput = $inputField.val();
    console.log(`Current input: ${currentInput}`);
    $inputField.val(null);
    $li.html(`<span class="remove-skill">X</span>${currentInput}`);
    $('ul').append($li);
}