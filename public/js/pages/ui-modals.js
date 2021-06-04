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
  modal.find('.moneycoming').html(`
    Buy
    <i class="fab fa-bitcoin" style="margin-right: 5px;"></i>
    $${price}`)
  
  modal.find('.price input').val( price)
  localStorage.setItem('price', price)
  
  
  modal.find('.bank input').val(bank)
  localStorage.setItem('bank',bank)
  
  modal.find('.image input').val(image)
  localStorage.setItem('image', image)
  
  
  modal.find('.balance input').val('Balance: $' + balance.toLocaleString())
  localStorage.setItem('balance',balance.toLocaleString())
  
  
  modal.find('.type input').val(type)
  localStorage.setItem('type',type)
  
  
  modal.find('.type1 input').val(type1)
  localStorage.setItem('type1',type1)
  
  
  modal.find('.type2 input').val(type2)
  localStorage.setItem('type2',type2)
  
  
  modal.find('.type3 input').val(type3)
  localStorage.setItem('type3',type3)
  
  
  modal.find('.type4 input').val(type4)
  localStorage.setItem('type4',type4)
  
  
  modal.find('.type5 input').val(type5)
  localStorage.setItem('type5',type5)
  
  
  modal.find('.type6 input').val(type6)
  localStorage.setItem('type6',type6)
  
  
  })