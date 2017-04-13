angular.module('app', ['gm.datepickerMultiSelect'])
	.controller('AppCtrl', function($scope) {
		this.activeDate = null;
		this.activeDate2 = null;
		this.selectedDates = [new Date().setHours(0, 0, 0, 0)];
		this.selectedDates2 = [new Date().setHours(0, 0, 0, 0)];
		this.type = 'individual';

		this.show2pickers = false;

		this.removeFromSelected = function(dt) {
			this.selectedDates.splice(this.selectedDates.indexOf(dt), 1);
		}

		this.removeFromSelected2 = function(dt) {
			this.selectedDates2.splice(this.selectedDates2.indexOf(dt), 1);
		}

		$scope.showMe = true;

		$scope.showCanlender = function () { $scope.showMe  ? $scope.showMe = false : $scope.showMe = true; }

	});
