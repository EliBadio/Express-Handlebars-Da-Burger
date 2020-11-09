$(function () {
  $('.create-form').on('submit', function (event) {
    event.preventDefault();

    const newBurger = {
      name: $('#new-burger').val().trim(),
    };

    if (newBurger.name !== '') {
      // API Call to create burger
      $.ajax('/api/burgers', {
        type: 'POST',
        data: newBurger,
      }).then(() => {
        console.log('New Burger Ordered !!!');

        location.reload();
      });
    }
  });

  $('.eatBtn').on('click', function () {
    //console.log(this.id);

    let devouredState = {
      devoured: 'true',
    };

    $.ajax(`/api/burgers/${this.id}`, {
      type: 'PUT',
      data: devouredState,
    }).then(() => {
      console.log('Devoured!!!');

      location.reload();
    });
  });
});
