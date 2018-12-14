'use strict'

function showModalWin() {

                var darkLayer = document.createElement('div');
                darkLayer.id = 'shadow';
                document.body.appendChild(darkLayer);

                var modalWin = document.getElementById('popupWin');
                modalWin.style.display = 'block';

                darkLayer.onclick = function () {
                    darkLayer.parentNode.removeChild(darkLayer);
                    modalWin.style.display = 'none';
                    return false;
                };

                var closeModal = document.getElementById('closeModal');

                  closeModal.onclick = function () {
                    darkLayer.parentNode.removeChild(darkLayer);
                    modalWin.style.display = 'none'; 
                    return false;
                };
            }
