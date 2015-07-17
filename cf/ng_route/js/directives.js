app.directive('bgImage', function(){
	return function (scope, element, attrs) {
		attrs.$observe('bgImage', function (value) {
			element.css({
				"background" 		: "url(" + value + ")",
				"background-size"	: "cover",
				"background-position" : "center"
			});
		});
	};
});
/*<div class="circular" style="background: url({{ repo.owner.avatar_url }}); background-size: cover; background-position: center;">
			</div>*/

app.directive('myAutocomplete', function(){
	function link ($scope, element, attrs) {
		$(element).autocomplete({
			source: $scope[attrs.myAutocomplete],
			select: function (e, ui) {
				e.preventDefault();
				if (ui.item) {
					$scope.optionSelected(ui.item.value);
				};
			},
			focus: function (e, ui) {
				e.preventDefault();
				$(this).val(ui.item.label);
			}
		});
	};

	return {
		link: link
	};
});