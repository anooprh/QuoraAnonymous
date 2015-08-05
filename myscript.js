// Get rid of the signup popup box
var dialog_wrappers = document.getElementsByClassName("dialog_wrapper");
var dialog_wrapper = dialog_wrappers[0];
dialog_wrapper.style.display='none';

//  Take care of the background colour. i.e make it white again
var modal_signup_dialogs = document.getElementsByClassName("modal_signup_dialog");
var modal_signup_dialog = modal_signup_dialogs[0];
modal_signup_dialog.previousSibling.style.display='none';
modal_signup_dialog.style.display='none';
