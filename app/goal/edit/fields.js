define(function() {
    return function() {
        return {
			'title': {
				'type': 'text',
				'attr': {
					'placeholder': 'Title',
					'value': '',
					'class': 'form-control ',
					'id': 'title',
					'name': 'title',
				},
				'validation': {
					'required': true,
					'trim': true,
				},
			},
			
			'description': {
				'type': 'textarea',
				'attr': {
					'placeholder': 'Description',
					'class': 'form-control ',
					'id': 'description',
					'name': 'description',
					'rows': "5",
				}
			}
		}
    }
});