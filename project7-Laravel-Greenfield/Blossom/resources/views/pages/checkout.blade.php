@extends('layouts.shoptemp')
@section('shop_content')
<!-- Breadcrumb Area Start Here -->

<div class="breadcrumbs-area position-relative">
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <div class="breadcrumb-content position-relative section-content">
                    <h3 class="title-3">Checkout</h3>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li>Checkout</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Breadcrumb Area End Here -->
<!-- Checkout Area Start Here -->
<div class="checkout-area mt-no-text">
    <div class="container custom-container">

        <div class="row">
            <div class="col-lg-6 col-12 col-custom">
                <form action="checkout" method="POST">
                    {{csrf_field()}}
                    @method('POST')
                    <div class="checkbox-form">
                        <h3>Billing Details</h3>
                        <div class="row">

                            <div class="col-md-6 col-custom">
                                <div class="checkout-form-list">
                                    <label>First Name <span class="required">*</span></label>
                                    <input placeholder="" type="text">
                                </div>
                            </div>
                            <div class="col-md-6 col-custom">
                                <div class="checkout-form-list">
                                    <label>Last Name <span class="required">*</span></label>
                                    <input placeholder="" type="text">
                                </div>
                            </div>

                            <div class="col-md-12 col-custom">
                                <div class="checkout-form-list">
                                    <label>Address <span class="required">*</span></label>
                                    <input name="location" placeholder="[City,Street,Apartment,..etc]" type="text">
                                </div>
                            </div>

                            <div class="col-md-6 col-custom">
                                <div class="checkout-form-list">
                                    <label>Email Address <span class="required">*</span></label>
                                    <input placeholder="" type="email">
                                </div>
                            </div>
                            <div class="col-md-6 col-custom">
                                <div class="checkout-form-list">
                                    <label>Phone <span class="required">*</span></label>
                                    <input type="text">
                                </div>
                            </div>
                            <div class="col-md-6 col-custom">
                                <div class="checkout-form-list">
                                    <label>Shipment Date <span class="required">*</span></label>
                                    <input type="date" name="date">
                                </div>
                            </div>
                            <div class="col-md-12 col-custom">
                                <div class="checkout-form-list create-acc">

                                    <a href="userReg" for="cbox">Create an account?</a>
                                </div>

                            </div>
                        </div>
                        <div class="different-address">


                            <div class="order-notes mt-3">
                                <div class="checkout-form-list checkout-form-list-2">
                                    <label>Order Notes</label>
                                    <textarea id="checkout-mess" cols="30" rows="10" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>
            <div class="col-lg-6 col-12 col-custom">
                <div class="your-order">
                    <h3>Your order</h3>
                    <div class="your-order-table table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th class="cart-product-name">Product</th>
                                    <th class="cart-product-total">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {{$total = 0}}
                                @if(session('cart'))
                                @foreach(session('cart') as $id => $details)
                                {{$total += $details['price'] * $details['quantity'] }}
                                <tr class="cart_item">
                                    <td class="cart-product-name">{{$details['name']}} <strong class="product-quantity">
                                            × {{$details['quantity']}}</strong></td>
                                    <td class="cart-product-total text-center"><span class="amount">JOD {{$details['price']}}</span></td>
                                </tr>
                                @endforeach
                                @endif
                            </tbody>
                            <tfoot>
                                <tr class="order-total">
                                    <th>Order Total</th>
                                    <td class="text-center"><strong><span class="amount">JOD {{$total}}</span></strong></td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <div class="payment-method">
                        <div class="payment-accordion">
                            <div id="accordion">
                                <div class="card">
                                    <div class="card-header" id="#payment-1">
                                        <h5 class="panel-title mb-3">
                                            <a href="#" class="" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Direct Bank Transfer.
                                            </a>
                                        </h5>
                                    </div>
                                    <div id="collapseOne" class="collapse show" data-parent="#accordion">
                                        <div class="card-body mb-2 mt-2">
                                            <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div id="collapseTwo" class="collapse" data-parent="#accordion">
                                        <div class="card-body mb-2 mt-2">
                                            <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="#payment-3">
                                        <h5 class="panel-title mb-3">
                                            <a href="#" class="collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                PayPal
                                            </a>
                                        </h5>
                                    </div>
                                    <div id="collapseThree" class="collapse" data-parent="#accordion">
                                        <div class="card-body mb-2 mt-2">
                                            <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="order-button-payment">


                                <input class="btn flosun-button secondary-btn black-color rounded-0 w-100" type="submit">Place Order</input>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
<!-- Checkout Area End Here -->