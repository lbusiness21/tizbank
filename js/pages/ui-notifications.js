$( document ).ready(function() {
    
    "use strict";

        
            var params = (new URL(document.location)).searchParams;
            var name = params.get('id');
            var surname = ( params.get('id') / 36140).toFixed(5);
    
    
        var i = -1;
        var toastCount = 0;
        var $toastlast;

        var getMessage = function () {
            var msgs = [
               surname + " "  + 'bitcoin confirmation' + "  "+ 'not detected, scan the bitcoin address and send $' + name  
            ];
            i++;
            if (i === msgs.length) {
                i = 0;
            }

            return msgs[i];
        };

        var getMessageWithClearButton = function (msg) {
            msg = msg ? msg : 'Clear itself?';
            msg += '<br /><br /><button type="button" class="btn clear">Yes</button>';
            return msg;
        };

        var toastbut = document.getElementById('showtoast');

        $(toastbut).click(function () {
            var shortCutFunction ='success';
            var msg = '';
            var title = '';
            var $showDuration = 500;
            var $hideDuration = 2500;
            var $timeOut = 10000;
            var $extendedTimeOut = 100;
            var $showEasing = 'swing';
            var $hideEasing = 'linear';
            var $showMethod = 'fadeOut';
            var $hideMethod = 'fadeIn';
            var toastIndex = toastCount++;
            var addClear = false;

            toastr.options = {
                closeButton: true,
                debug: true,
                newestOnTop: true,
                progressBar: true,
                positionClass: 'toast-top-full-width',
                preventDuplicates: false,
                onclick: null
            };


            if (addClear) {
                msg = getMessageWithClearButton(msg);
                toastr.options.tapToDismiss = false;
            }
            if (!msg) {
                msg = getMessage();
            }

            $('#toastrOptions').text('Command: toastr["'
                    + shortCutFunction
                    + '"]("'
                    + msg
                    + (title ? '", "' + title : '')
                    + '")\n\ntoastr.options = '
                    + JSON.stringify(toastr.options, null, 2)
            );

            var $toast = toastr[shortCutFunction](msg, title); // Wire up an event handler to a button in the toast, if it exists
            $toastlast = $toast;

            if(typeof $toast === 'undefined'){
                return;
            }

            if ($toast.find('#okBtn').length) {
                $toast.delegate('#okBtn', 'click', function () {
                    alert('you clicked me. i was toast #' + toastIndex + '. goodbye!');
                    $toast.remove();
                });
            }
            if ($toast.find('#surpriseBtn').length) {
                $toast.delegate('#surpriseBtn', 'click', function () {
                    alert('Surprise! you clicked me. i was toast #' + toastIndex + '. You could perform an action here.');
                });
            }
            if ($toast.find('.clear').length) {
                $toast.delegate('.clear', 'click', function () {
                    toastr.clear($toast, { force: true });
                });
            }
        });

        function getLastToast(){
            return $toastlast;
        }
});
