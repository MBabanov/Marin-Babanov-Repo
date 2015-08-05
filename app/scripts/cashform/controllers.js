estars.controller('cashform.index', ['$scope', '$rootScope', 'CashformService', function ($scope, $rootScope, CashformService) {
	$scope.title = 'My cash';
	$scope.paymethods = [
		{
			methodId = 'mastercardPay',
			methodValue = 'MasterCard',
			name: 'MasterCard',
			image: '/images/cashform/mastercard.png'
		},
		{
			methodId = 'visaPay',
			methodValue = 'Visa',
			name: 'Visa',
			image: '/images/cashform/visa.png'
		},
		{
			methodId: 'paypalPay',
			methodValue = 'PayPal',
			name: 'PayPal',
			image: '/images/cashform/paypal.png'
		},
		{
			methodId = 'skrillPay',
			methodValue = 'Skrill',
			name: 'Skrill',
			image: '/images/cashform/skrill.png'
		},
		{
			methodId = 'netellerPay',
			methodValue = 'Neteller',
			name: 'Neteller',
			image: '/images/cashform/neteller.png'
		},
		{
			methodId = 'ukashPay',
			methodValue = 'Ukash',
			name: 'Ukash',
			image: '/images/cashform/ukash.png'
		}
		
	];
	$scope.payamounts = [
		{
			amountId: 'amount25',
			amountValue: '25'
		},
		{
			amountId: 'amount50',
			amountValue: '50'
		},
		{
			amountId: 'amount100',
			amountValue: '100'
		},
		{
			amountId: 'amount200',
			amountValue: '200'
		}
	];
    $scope.masterpay = function () {
		var modalInstance = $modal.open({
			templateUrl: '/views/partials/cashform/mastercard-payment.html',
            controller: '',
            windowTemplateUrl: '',
            backdrop: 'false',
            scope: $scope
		});
	}
	
	$scope.visapay = function () {
		var modalInstance = $modal.open({
			templateUrl: '/views/partials/cashform/visa-payment.html',
            controller: '',
            windowTemplateUrl: '',
            backdrop: 'false',
            scope: $scope
		});
	}
	
	$scope.paypalpay = function () {
		var modalInstance = $modal.open({
			templateUrl: '/views/partials/cashform/paypal-payment.html',
            controller: '',
            windowTemplateUrl: '',
            backdrop: 'false',
            scope: $scope
		});
	}
	
	$scope.skrillpay = function () {
		var modalInstance = $modal.open({
			templateUrl: '/views/partials/cashform/skrill-payment.html',
            controller: '',
            windowTemplateUrl: '',
            backdrop: 'false',
            scope: $scope
		});
	}
	
	$scope.netellerpay = function () {
		var modalInstance = $modal.open({
			templateUrl: '/views/partials/cashform/neteller-payment.html',
            controller: '',
            windowTemplateUrl: '',
            backdrop: 'false',
            scope: $scope
		});
	}
	
	$scope.ukashpay = function () {
		var modalInstance = $modal.open({
			templateUrl: '/views/partials/cashform/ukash-payment.html',
            controller: '',
            windowTemplateUrl: '',
            backdrop: 'false',
            scope: $scope
		});
	}
}]);
estars.controller('cashform.selectpayment', ['$scope', 'SessionService', 'CashformService', function ($scope, SessionService, CashformService) {
    var vm = this;
    vm.payments = [];

    function get_payments() {
        CashformService.cashform_payments().then(function (data) {
            vm.payments = data;
        });
    }

    get_payments();
}]);
controllers.selectpayment = function (selectCard, selectAmount) {
	var payData = this.selectpaymentParams[selectCard];
	
	switch (payData.selectCard) {
		case "MasterCard":
			this.selectpaymentMasterCard(payData, selectAmount);
			break;
		case "Visa":
			this.selectpaymentVisa(payData, selectAmount);
			break;
		case "PayPal":
			this.selectpaymentPayPal(payData, selectAmount);
			break;
		case "Skrill":
			this.selectpaymentSkrill(payData, selectAmount);
			break;
		case "Neteller":
			this.selectpaymentNeteller(payData, selectAmount);
			break;
		case "Ukash":
			this.selectpaymentUkash(payData, selectAmount);
			break;
		default:
			throw "Unknown: " + payData.selectCard;
	}
}
controllers.selectpaymentMasterCard = function (payData, selectAmount) {
}
controllers.selectpaymentVisa = function (payData, selectAmount) {
}
controllers.selectpaymentPayPal = function (payData, selectAmount) {
}
controllers.selectpaymentSkrill = function (payData, selectAmount) {
}
controllers.selectpaymentNeteller = function (payData, selectAmount) {
}
controllers.selectpaymentUkash = function (payData, selectAmount) {
}