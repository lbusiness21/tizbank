$('#exampleModal').on('show.bs.modal', function (event) {
    
  "use strict";
  
var button = $(event.relatedTarget) 
var balance = button.data('balance')
var price = button.data('price')
var bank = button.data('bank')
var image = button.data('image')
var type = button.data('type')
var type1 = button.data('type1')
var type2 = button.data('type2')
var type3 = button.data('type3')
var type4 = button.data('type4')
var type5 = button.data('type5')
var type6 = button.data('type6')

var modal = $(this)
modal.find('.modal-title').text(type)
modal.find('.price input').val( price)
modal.find('.moneycoming').html(`
  Buy
  <i class="fas fa-cart-plus" style="margin-right: 5px;"></i>
  $${price}`)
modal.find('.bank input').val(bank)
modal.find('.image input').val(image)
modal.find('.balance input').val('Balance: $' + balance.toLocaleString())
modal.find('.type input').val(type)
modal.find('.type1 input').val(type1)
modal.find('.type2 input').val(type2)
modal.find('.type3 input').val(type3)
modal.find('.type4 input').val(type4)
modal.find('.type5 input').val(type5)
modal.find('.type6 input').val(type6)
})