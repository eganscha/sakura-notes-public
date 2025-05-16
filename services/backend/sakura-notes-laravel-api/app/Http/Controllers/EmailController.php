<?php

namespace App\Http\Controllers;

use App\Models\EmailModel;
use App\Models\NoteModel;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\ValidationException;
use JsonException;

class EmailController extends Controller
{
    public function index(Request $request) : JsonResponse {
        $validatedRequest = null;
        try {
            $validatedRequest = $request->validate([
                'email' => 'required|email',
            ]);
        } catch (ValidationException $e) {
            Log::error("Exception inside of EmailController index() during validation. Exception:\n".$e->getMessage());
            return response()->json([
                'error' => 'Invalid json_request.',
            ], 422);
        }

        $notes = null;
        try {
            $notes = EmailModel::findAllNotes($validatedRequest['email']);
        } catch (JsonException $e) {
            Log::error("Exception inside of EmailController index() during EmailModel::findAllNotes(). Exception:\n".$e->getMessage());
            return response()->json([
                'error' => 'Internal server error.',
            ], 500);
        }

        return response()->json([
            'notes' => $notes,
        ], 200);
    }
}
