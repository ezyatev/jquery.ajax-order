# jquery.ajax-order 

A simple, lightweight jQuery plugin for sending order/contact forms via AJAX.

## Installation

Include script *after* the jQuery library (unless you are packaging scripts somehow else):

```html
<script src="/path/to/jquery.ajax-order.js"></script>
```

## Usage

Use the code below:

```javascript
$('#form-id').ajaxOrder();
```

Set fields for clear:

```javascript
$('#form-id').ajaxOrder({fields_clear: 'input[type="text"], textarea'});
```

## Authors

[Eugene Zyatev](mailto:eu@ibits.co)
