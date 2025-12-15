<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;



Route::get('/', function () {
  return Inertia::render('home', [
    'canRegister' => Features::enabled(Features::registration()),
  ]);
})->name('home');

Route::get('/landing', function () {
  return Inertia::render('landing');
})->name('landing');

Route::get('/solutions', function () {
  return Inertia::render('solutions');
})->name('solutions');

Route::get('/management', function () {
  return Inertia::render('management');
})->name('management');

Route::get('/start', function () {
  return Inertia::render('start');
})->name('start');

Route::get('/laravel', function () {
  return Inertia::render('welcome', [
    'canRegister' => Features::enabled(Features::registration()),
  ]);
})->name('laravel');

Route::middleware(['auth', 'verified'])->group(function () {
  Route::get('dashboard', function () {
    return Inertia::render('dashboard');
  })->name('dashboard');
});

require __DIR__ . '/settings.php';
