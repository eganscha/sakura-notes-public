<?php

use App\Http\Controllers\EmailController;
use App\Http\Controllers\NoteController;
use App\Http\Controllers\TagController;
use Illuminate\Support\Facades\Route;

// Routes defined in api.php are automatically prefixed with /api.
// So the full request path will be: GET http://localhost:8000/api/notes/abc123
// Route::{REST-Request-Type}, [Class:class, 'method']);

// notes
Route::get('notes/{id}', [NoteController::class, 'show']);
Route::post('notes', [NoteController::class, 'store']);

// emails
Route::get('emails/emails', [EmailController::class, 'index']);

// tags
Route::get('tag/tag', [TagController::class, 'index']);
