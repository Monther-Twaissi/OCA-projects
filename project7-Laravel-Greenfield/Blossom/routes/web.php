<?php

use GuzzleHttp\Middleware;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group(['middleware' => 'auth'], function () {
     Route::resource('manageCategory', 'CategoryController');
     Route::resource('manageProduct', 'ProductsController');
     Route::resource('user', 'UsersController');
     Route::resource('checkout', 'OrdersController');
     Route::resource('account', 'ProfileController');
});

Route::resource('product', 'SingleProdcutController');
Route::resource('index', 'PublicController');
Route::resource('shop', 'ShopController');
Route::resource('category', 'CategoryProducts');

Route::view('/about', 'pages.about');
Route::view('/contact', 'pages.contact');

Route::post('userReg', 'customerController@store');
Route::post('userLog', 'customerController@login');

Route::resource('cart', 'CartController');
Route::delete('remove-from-cart', 'CartController@remove');
Route::put('update-cart', 'CartController@update');


Route::group(['middleware' => 'customAuth'], function () {
});
Route::view('userReg', 'pages.userReg');
Route::resource('checkout', 'OrdersController');
Route::view('userLog', 'pages.userLog');
Route::get('logout', 'customerController@logout');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
