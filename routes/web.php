<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;



Route::get('/', function () {
  return Inertia::render('home', [
    'canRegister' => Features::enabled(Features::registration()),
  ]);
})->name('home');

Route::get('/learn-more', function () {
  return Inertia::render('learn-more');
})->name('learn-more');

Route::get('/solutions', function () {
  return Inertia::render('solutions');
})->name('solutions');

Route::get('/management', function () {
  return Inertia::render('management');
})->name('management');

Route::get('/homestead', function () {
  return Inertia::render('homestead');
})->name('homestead');

Route::get('/team-building', function () {
  return Inertia::render('team-building');
})->name('team-building');

Route::get('/science-tech', function () {
  return Inertia::render('science-tech');
})->name('science-tech');

Route::get('/art-gallery', function () {
  return Inertia::render('art-gallery');
})->name('art-gallery');

Route::get('/about', function () {
  return Inertia::render('about');
})->name('about');

Route::get('/social-impact', function () {
  return Inertia::render('social-impact');
})->name('social-impact');

Route::get('/contact', function () {
  return Inertia::render('contact');
})->name('contact');

Route::get('/blog', function () {
  return Inertia::render('blog/index');
})->name('blog.index');

Route::get('/blog/{slug}', function ($slug) {
  return Inertia::render('blog/show', [
    'slug' => $slug,
  ]);
})->name('blog.show');

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
