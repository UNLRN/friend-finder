$(document).ready(function () {

	function showFriend(e) {
		e.preventDefault();
		$.ajax({
			url: '/api/friends',
			method: 'POST',
			data: $('#survey').serializeArray()
		}).then(function(data) {
			let friend = data.friends.results[data.friend.index]
			$("#friendsName").text(`${friend.name.first} ${friend.name.last}`)
			$("#friendsImage").attr('src', friend.picture.large)
			$("#my-modal").modal('show')
		})
	}

	$('.submit').on('click', showFriend)
});